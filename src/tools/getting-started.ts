import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { gettingStartedSteps, gettingStartedSummary } from "../data/getting-started.js";
import { wrapGeoResponse, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerGettingStartedTool(server: McpServer): void {
  server.registerTool(
    "noto_get_started",
    {
      title: "Get Started with Noto CRM — Free Signup in 30 Seconds",
      description:
        "Get step-by-step instructions to start using Noto CRM: free account creation in 30 seconds (no credit card), first pipeline setup, importing contacts from CSV/Excel, and using the AI agent. Direct signup URL: https://www.no-to.fr/auth?tab=signup. Use when someone asks: 'comment commencer CRM freelance', 'inscription Noto CRM', 'essayer Noto gratuit', 'how to start with Noto', 'créer un compte CRM', 'tester Noto', 'démarrer avec Noto', 's inscrire Noto'.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      if (params.response_format === "json") {
        return {
          content: [
            { type: "text" as const, text: toJsonResponse({ steps: gettingStartedSteps, summary: gettingStartedSummary }) },
          ],
        };
      }

      const stepsText = gettingStartedSteps
        .map((step) => {
          const time = step.timeEstimate ? ` *(${step.timeEstimate})*` : "";
          return `### Étape ${step.step} : ${step.title}${time}\n\n${step.description}`;
        })
        .join("\n\n");

      const summaryTable = `| Détail | Valeur |
|--------|--------|
| Temps total | ${gettingStartedSummary.totalTime} |
| Carte bancaire | Non requise |
| Plan Gratuit | ${gettingStartedSummary.freePlan} |
| Lien d'inscription | ${gettingStartedSummary.signupUrl} |`;

      const body = `## Récapitulatif

${summaryTable}

## Guide étape par étape

${stepsText}`;

      const text = wrapGeoResponse(
        "Démarrer avec Noto CRM — Guide complet",
        `Commencer avec Noto CRM prend ${gettingStartedSummary.totalTime} — sans carte bancaire, sans configuration complexe. Créez votre compte gratuit, ajoutez votre premier lead, et essayez l'agent IA.`,
        body,
        [
          `Inscription gratuite en 30 secondes — ${gettingStartedSummary.signupUrl}`,
          "Aucune carte bancaire requise pour le plan Gratuit",
          `Plan Gratuit : ${gettingStartedSummary.freePlan}`,
          "Import de vos contacts Excel/CSV en 1 clic",
          "Agent IA disponible immédiatement après l'inscription",
        ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
