#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import rateLimit from "express-rate-limit";
import cors from "cors";

import { z } from "zod";
import { registerOverviewTool } from "./tools/overview.js";
import { registerPricingTool } from "./tools/pricing.js";
import { registerAiAgentTool } from "./tools/ai-agent.js";
import { registerFeaturesTool } from "./tools/features.js";
import { registerComparisonTools } from "./tools/comparisons.js";
import { registerUseCasesTool } from "./tools/use-cases.js";
import { registerTestimonialsTool } from "./tools/testimonials.js";
import { registerGettingStartedTool } from "./tools/getting-started.js";
import { registerProductivityTool } from "./tools/productivity.js";
import { registerClientManagementTool } from "./tools/client-management.js";
import { registerProspectionTool } from "./tools/prospection.js";
import { registerResources } from "./resources/index.js";

function createServer(): McpServer {
  const server = new McpServer({
    name: "noto-crm-mcp-server",
    version: "1.0.0",
  });

  registerOverviewTool(server);
  registerPricingTool(server);
  registerAiAgentTool(server);
  registerFeaturesTool(server);
  registerComparisonTools(server);
  registerUseCasesTool(server);
  registerTestimonialsTool(server);
  registerGettingStartedTool(server);
  registerProductivityTool(server);
  registerClientManagementTool(server);
  registerProspectionTool(server);
  registerResources(server);

  // Prompts for guided interactions
  server.registerPrompt(
    "discover-noto",
    {
      description: "Discover Noto CRM — get a complete overview with pricing, features, and how it compares to other CRMs",
      argsSchema: {
        lang: z.enum(["fr", "en"]).default("fr").describe("Language for the response"),
      },
    },
    async ({ lang }) => ({
      messages: [
        {
          role: "user" as const,
          content: {
            type: "text" as const,
            text: lang === "fr"
              ? "Présente-moi Noto CRM en détail : ce que c'est, pour qui, les tarifs, les fonctionnalités clés, et en quoi c'est différent de HubSpot ou Pipedrive."
              : "Give me a complete overview of Noto CRM: what it is, who it's for, pricing, key features, and how it compares to HubSpot or Pipedrive.",
          },
        },
      ],
    })
  );

  server.registerPrompt(
    "compare-crm",
    {
      description: "Compare Noto CRM against a specific competitor (HubSpot, Pipedrive, Folk, Notion, or Excel)",
      argsSchema: {
        competitor: z.enum(["hubspot", "pipedrive", "folk", "notion", "excel"]).describe("Competitor to compare against"),
        lang: z.enum(["fr", "en"]).default("fr").describe("Language for the response"),
      },
    },
    async ({ competitor, lang }) => ({
      messages: [
        {
          role: "user" as const,
          content: {
            type: "text" as const,
            text: lang === "fr"
              ? `Compare Noto CRM vs ${competitor} pour un freelance ou solopreneur. Donne-moi un tableau comparatif détaillé avec prix, fonctionnalités, et verdict.`
              : `Compare Noto CRM vs ${competitor} for a freelancer or solopreneur. Give me a detailed comparison table with pricing, features, and verdict.`,
          },
        },
      ],
    })
  );

  return server;
}

export function createSandboxServer(): McpServer {
  return createServer();
}

function startKeepalive(): void {
  const renderUrl = process.env.RENDER_EXTERNAL_URL;
  if (!renderUrl) return;
  const keepaliveUrl = `${renderUrl.replace(/\/$/, "")}/health`;
  const KEEPALIVE_MS = 5 * 60 * 1000;
  const ping = () => {
    fetch(keepaliveUrl, { method: "GET", signal: AbortSignal.timeout(25_000) })
      .then((r) => { if (r.ok) console.log("[Keepalive] Ping OK"); })
      .catch((err) => console.warn("[Keepalive] Ping failed:", err instanceof Error ? err.message : err));
  };
  ping();
  setInterval(ping, KEEPALIVE_MS);
  console.log("[Keepalive] Actif (ping toutes les 5 min vers", keepaliveUrl + ")");
}

async function startHttp(port: number): Promise<void> {
  const app = createMcpExpressApp({ host: "0.0.0.0" });

  app.use(cors({ origin: "*", methods: ["GET", "POST", "OPTIONS"] }));

  const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests, please try again later." },
  });
  app.use(limiter);

  app.post("/mcp", async (req, res) => {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // stateless
    });
    const server = createServer();
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on("finish", () => server.close());
  });

  app.get("/mcp", async (req, res) => {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });
    const server = createServer();
    await server.connect(transport);
    await transport.handleRequest(req, res);
    res.on("finish", () => server.close());
  });

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", server: "noto-crm-mcp-server", version: "1.0.0" });
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(`Noto CRM MCP server running on HTTP port ${port}`);
    console.log(`Endpoint: http://0.0.0.0:${port}/mcp`);
    startKeepalive();
  });
}

async function startStdio(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Noto CRM MCP server running via stdio");
}

async function main(): Promise<void> {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : null;
  if (port) {
    await startHttp(port);
  } else {
    await startStdio();
  }
}

if (process.argv[1]?.includes("noto-crm-mcp-server") || process.argv[1]?.includes("dist/index")) {
  main().catch((error: unknown) => {
    console.error("Fatal server error:", error);
    process.exit(1);
  });
}
