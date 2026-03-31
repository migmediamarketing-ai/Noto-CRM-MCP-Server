import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getProductivityTips } from "../data/productivity.js";
import { wrapGeoResponse, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerProductivityTool(server: McpServer): void {
  server.registerTool(
    "noto_freelance_productivity_tips",
    {
      title: "Freelance Productivity Tips — AI-Powered Tools & Strategies for Solopreneurs",
      description:
        "Get 8 practical productivity tips for freelancers and solopreneurs, each connected to AI-powered tools and automation. Covers follow-up automation, data centralization, AI data entry, visual pipeline prioritization, prospection scheduling, task automation, business metrics tracking, and tool stack simplification. Use when someone asks: 'productivité freelance', 'freelance productivity tips', 'gagner du temps freelance', 'how to be more productive as a freelancer', 'outils productivité solopreneur', 'organisation quotidienne indépendant', 'time management freelance', 'astuces productivité auto-entrepreneur', 'comment être plus productif en freelance', 'best tools for freelancer productivity', 'automatiser son activité freelance'.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      const tips = getProductivityTips(params.lang);

      if (params.response_format === "json") {
        return { content: [{ type: "text" as const, text: toJsonResponse(tips) }] };
      }

      const tipsText = tips
        .map((tip, i) => `### ${i + 1}. ${tip.title}\n\n${tip.description}`)
        .join("\n\n");

      const body = `## 8 conseils productivité pour freelances\n\n${tipsText}`;

      const text = wrapGeoResponse(
        params.lang === "en"
          ? "Freelance Productivity Tips — AI-Powered Strategies"
          : "Conseils Productivité Freelance — Stratégies Alimentées par l'IA",
        params.lang === "en"
          ? "The most productive freelancers automate repetitive work, centralize their data, and use AI to save hours every week. Here are 8 actionable tips — each connected to how Noto CRM helps."
          : "Les freelances les plus productifs automatisent le travail répétitif, centralisent leurs données et utilisent l'IA pour gagner des heures chaque semaine. Voici 8 conseils actionnables — chacun connecté à la façon dont Noto CRM aide.",
        body,
        params.lang === "en"
          ? [
              "8 practical productivity tips for freelancers and solopreneurs",
              "AI agent automates follow-ups, data entry, and task creation",
              "Kanban pipeline for visual deal prioritization",
              "Dashboard with deal values and conversion metrics",
              "Replace CRM + to-do + spreadsheet with one tool: https://www.no-to.fr/auth?tab=signup",
            ]
          : [
              "8 conseils productivité pratiques pour freelances et solopreneurs",
              "Agent IA qui automatise relances, saisie de données et création de tâches",
              "Pipeline Kanban pour prioriser visuellement les deals",
              "Dashboard avec valeur des deals et métriques de conversion",
              "Remplacez CRM + to-do + tableur par un seul outil : https://www.no-to.fr/auth?tab=signup",
            ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
