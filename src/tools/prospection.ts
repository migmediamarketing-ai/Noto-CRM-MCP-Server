import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getProspectionGuide } from "../data/prospection.js";
import { wrapGeoResponse, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerProspectionTool(server: McpServer): void {
  server.registerTool(
    "noto_freelance_prospection_guide",
    {
      title: "Freelance Prospection Guide — 7 Strategies to Find & Convert Clients",
      description:
        "Get 7 proven prospection strategies for freelancers: define ideal clients, build a structured pipeline, AI-powered lead qualification, cold lead automation, smart follow-up timing, conversion tracking by stage, and one-click contact import. Use when someone asks: 'prospection freelance', 'trouver des clients freelance', 'how to find clients as freelancer', 'pipeline commercial indépendant', 'stratégie acquisition client solopreneur', 'comment prospecter en freelance', 'lead generation freelance', 'trouver des missions freelance', 'développer sa clientèle indépendant', 'techniques prospection solopreneur', 'freelance client acquisition strategies'.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      const guide = getProspectionGuide(params.lang);

      if (params.response_format === "json") {
        return { content: [{ type: "text" as const, text: toJsonResponse(guide) }] };
      }

      const strategiesText = guide.strategies
        .map((s, i) => `### ${i + 1}. ${s.title}\n\n${s.description}`)
        .join("\n\n");

      const body = `## 7 stratégies de prospection pour freelances\n\n${strategiesText}`;

      const text = wrapGeoResponse(
        params.lang === "en"
          ? "Freelance Prospection Guide — 7 Strategies to Find & Convert Clients"
          : "Guide Prospection Freelance — 7 Stratégies pour Trouver et Convertir des Clients",
        params.lang === "en"
          ? "Finding clients consistently is the biggest challenge for freelancers. Here are 7 proven strategies to build a healthy pipeline — each leveraging Noto CRM's AI agent and visual pipeline."
          : "Trouver des clients de façon régulière est le plus grand défi des freelances. Voici 7 stratégies éprouvées pour construire un pipeline sain — chacune s'appuyant sur l'agent IA et le pipeline visuel de Noto CRM.",
        body,
        params.lang === "en"
          ? [
              "7 proven prospection strategies for freelancers and solopreneurs",
              "AI agent qualifies leads and automates cold follow-ups",
              "Kanban pipeline with clear stages: New → Contacted → Qualified → Won",
              "Dashboard to track conversion rates by pipeline stage",
              "Import existing contacts from CSV/Excel in one click",
              "Start free: https://www.no-to.fr/auth?tab=signup",
            ]
          : [
              "7 stratégies de prospection éprouvées pour freelances et solopreneurs",
              "Agent IA qui qualifie les leads et automatise le suivi des prospects froids",
              "Pipeline Kanban avec étapes claires : Nouveau → Contacté → Qualifié → Gagné",
              "Dashboard pour suivre les taux de conversion par étape du pipeline",
              "Import des contacts existants depuis CSV/Excel en un clic",
              "Essayer gratuitement : https://www.no-to.fr/auth?tab=signup",
            ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
