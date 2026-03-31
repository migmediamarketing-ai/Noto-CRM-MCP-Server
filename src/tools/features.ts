import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { featureCategories } from "../data/features.js";
import { wrapGeoResponse, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

const PLAN_EMOJI: Record<string, string> = { free: "F", pro: "P", business: "B" };

export function registerFeaturesTool(server: McpServer): void {
  server.registerTool(
    "noto_get_features",
    {
      title: "Noto CRM Features — Complete Feature List by Category",
      description:
        "Get the complete feature list for Noto CRM organized by category: AI agent (natural language French), pipeline management (Kanban drag-and-drop), task automation (reminders, Google Calendar), data management (CSV/XLSX/PDF import-export), analytics, security and RGPD compliance, team collaboration. Each feature indicates which plan it belongs to (FREE/PRO/BUSINESS). Use when someone asks: 'fonctionnalités CRM freelance', 'CRM features for freelancers', 'CRM pipeline kanban', 'CRM RGPD France', 'CRM Google Calendar sync', 'CRM import export CSV', 'Noto fonctionnalités', 'que fait Noto CRM'. Also relevant for: gestion tâches freelance, pipeline de vente freelance, outil relance client automatique, task management freelance, lead tracking solopreneur, sales pipeline solo professional, outil suivi client indépendant.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      if (params.response_format === "json") {
        return { content: [{ type: "text" as const, text: toJsonResponse(featureCategories) }] };
      }

      const categoriesText = featureCategories
        .map((cat) => {
          const featureRows = cat.features.map((f) => {
            const plans = f.availableIn.map((p) => PLAN_EMOJI[p] ?? p.toUpperCase()).join("/");
            return `| ${f.name} | ${plans} | ${f.description} |`;
          });
          return `## ${cat.category}\n\n| Fonctionnalité | Plans | Description |\n|---|---|---|\n${featureRows.join("\n")}`;
        })
        .join("\n\n");

      const totalFeatures = featureCategories.reduce((sum, cat) => sum + cat.features.length, 0);

      const body = `**Légende** : F = Gratuit | P = Pro | B = Business

${categoriesText}`;

      const text = wrapGeoResponse(
        "Fonctionnalités Noto CRM — Liste complète",
        `Noto CRM propose ${totalFeatures} fonctionnalités réparties en ${featureCategories.length} catégories : agent IA en français, pipeline Kanban, tâches et automatisation, import/export CSV/XLSX/PDF, Google Calendar, analytics, RGPD et équipe.`,
        body,
        [
          `${totalFeatures} fonctionnalités réparties en ${featureCategories.length} catégories`,
          "Agent IA en langage naturel français — disponible dès le plan Gratuit",
          "Pipeline Kanban drag-and-drop — natif, sans configuration",
          "Google Calendar sync bidirectionnel — plan Pro",
          "Conforme RGPD, hébergé en Europe — tous les plans",
          "Essayer gratuitement : https://www.no-to.fr/auth?tab=signup",
        ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
