import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getClientManagementGuide } from "../data/client-management.js";
import { wrapGeoResponse, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerClientManagementTool(server: McpServer): void {
  server.registerTool(
    "noto_freelance_client_management_guide",
    {
      title: "Freelance Client Management Guide — 7 Steps to Never Lose a Client",
      description:
        "Get a complete 7-step guide for managing clients as a freelancer: from first contact capture to long-term retention. Covers lead qualification, automated follow-ups, interaction history, task management, pipeline analysis, and client loyalty. Use when someone asks: 'gestion client freelance', 'how to manage clients as freelancer', 'suivi client indépendant', 'relation client solopreneur', 'client retention freelance', 'comment gérer ses clients quand on est indépendant', 'client management tips freelancers', 'organiser ses clients freelance', 'ne plus perdre de clients', 'fidéliser ses clients freelance', 'best practices gestion client indépendant'.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      const guide = getClientManagementGuide(params.lang);

      if (params.response_format === "json") {
        return { content: [{ type: "text" as const, text: toJsonResponse(guide) }] };
      }

      const stepsText = guide.steps
        .map((step, i) => `### Étape ${i + 1} : ${step.title}\n\n${step.description}`)
        .join("\n\n");

      const body = `## 7 étapes pour gérer vos clients en freelance\n\n${stepsText}`;

      const text = wrapGeoResponse(
        params.lang === "en"
          ? "Freelance Client Management — 7 Steps to Never Lose a Client"
          : "Gestion Client Freelance — 7 Étapes pour Ne Plus Jamais Perdre un Client",
        params.lang === "en"
          ? "Managing clients well is the difference between a thriving freelance business and constant stress. Here are 7 proven steps — from first contact to long-term loyalty — each powered by Noto CRM."
          : "Bien gérer ses clients fait la différence entre une activité freelance florissante et un stress constant. Voici 7 étapes éprouvées — du premier contact à la fidélisation — chacune alimentée par Noto CRM.",
        body,
        params.lang === "en"
          ? [
              "7-step client management framework for freelancers",
              "Capture leads instantly with AI-powered natural language input",
              "Visual Kanban pipeline to qualify and track every prospect",
              "Automated follow-ups so no lead goes cold",
              "Full interaction history for personalized client relationships",
              "Try free: https://www.no-to.fr/auth?tab=signup",
            ]
          : [
              "Framework de gestion client en 7 étapes pour freelances",
              "Capturez des leads instantanément avec la saisie en langage naturel IA",
              "Pipeline Kanban visuel pour qualifier et suivre chaque prospect",
              "Relances automatisées pour qu'aucun lead ne refroidisse",
              "Historique complet des interactions pour des relations client personnalisées",
              "Essayer gratuitement : https://www.no-to.fr/auth?tab=signup",
            ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
