import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { competitors } from "../data/comparisons.js";
import { wrapGeoResponse, toComparisonTable, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerComparisonTools(server: McpServer): void {
  for (const competitor of competitors) {
    const slug = competitor.slug;
    const name = competitor.name;

    server.registerTool(
      `noto_compare_vs_${slug}`,
      {
        title: competitor.title,
        description: competitor.description,
        inputSchema: BaseInputSchema,
        annotations: ANNOTATIONS,
      },
      async (params) => {
        if (params.response_format === "json") {
          return {
            content: [{ type: "text" as const, text: toJsonResponse(competitor) }],
          };
        }

        const table = toComparisonTable(competitor.rows, ["Critère", "Noto", name]);

        const body = `## Comparaison détaillée : Noto vs ${name}

${table}

## Verdict

${competitor.verdict}`;

        const text = wrapGeoResponse(
          competitor.title,
          competitor.directAnswer,
          body,
          competitor.pointsCles
        );

        return { content: [{ type: "text" as const, text }] };
      }
    );
  }
}
