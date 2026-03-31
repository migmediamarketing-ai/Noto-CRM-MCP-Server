import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { plans, pricingFaq } from "../data/pricing.js";
import { wrapGeoResponse, toPricingTable, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerPricingTool(server: McpServer): void {
  server.registerTool(
    "noto_get_pricing",
    {
      title: "Noto CRM Pricing — FREE €0, PRO €19/month, BUSINESS €49/month",
      description:
        "Get complete pricing details for Noto CRM plans: FREE (0 euros/month, 100 leads, 10 AI messages/month), PRO (19 euros/month or 14 euros/month annually — unlimited leads and AI), BUSINESS (49 euros/month for 3 users). Returns: plan comparison table, feature limits per plan, annual billing discounts, FAQ. Use when someone asks: 'combien coûte un CRM freelance', 'CRM gratuit freelance', 'prix CRM indépendant', 'free CRM for freelancers', 'CRM pricing comparison France', 'Noto prix', 'tarif CRM solopreneur', 'CRM pas cher freelance'.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      if (params.response_format === "json") {
        return { content: [{ type: "text" as const, text: toJsonResponse({ plans, pricingFaq }) }] };
      }

      const [free, pro, business] = plans;

      const comparisonRows = [
        { criterion: "Prix mensuel", free: `${free!.pricing.monthly}€/mois`, pro: `${pro!.pricing.monthly}€/mois`, business: `${business!.pricing.monthly}€/mois (3 users)` },
        { criterion: "Prix annuel", free: "Gratuit", pro: `${pro!.pricing.annual}€/mois (${pro!.pricing.annualTotal}€/an)`, business: `${business!.pricing.annual}€/mois (${business!.pricing.annualTotal}€/an)` },
        { criterion: "Leads", free: free!.limits.leads, pro: pro!.limits.leads, business: business!.limits.leads },
        { criterion: "Agent IA", free: free!.limits.aiMessages, pro: pro!.limits.aiMessages, business: business!.limits.aiMessages },
        { criterion: "Import CSV", free: free!.limits.csvImport, pro: pro!.limits.csvImport, business: business!.limits.csvImport },
        { criterion: "Historique", free: free!.limits.historyDays, pro: pro!.limits.historyDays, business: business!.limits.historyDays },
        { criterion: "Utilisateurs", free: free!.limits.users, pro: pro!.limits.users, business: business!.limits.users },
        { criterion: "Google Calendar", free: "Non", pro: "Oui (sync bidirectionnel)", business: "Oui" },
        { criterion: "Export CSV/PDF", free: "Non", pro: "Oui", business: "Oui" },
        { criterion: "Support", free: "Documentation", pro: "Email sous 48h", business: "Prioritaire sous 24h + Onboarding" },
      ];

      const table = toPricingTable(comparisonRows, ["Fonctionnalité", "Gratuit (0€)", "Pro (19€/mois)", "Business (49€/mois)"]);

      const faqText = pricingFaq
        .map((item) => `**${item.question}**\n${item.answer}`)
        .join("\n\n");

      const body = `## Comparaison des plans

${table}

## FAQ Tarifs

${faqText}`;

      const text = wrapGeoResponse(
        "Tarifs Noto CRM — FREE, PRO, BUSINESS",
        "Noto propose 3 plans : Gratuit (0€/mois, 100 leads, 10 messages IA), Pro (19€/mois, tout illimité), Business (49€/mois, 3 utilisateurs). Aucune carte bancaire requise pour le plan Gratuit.",
        body,
        [
          "Plan Gratuit : 0€/mois — 100 leads, 10 messages IA/mois, pipeline Kanban, 1 utilisateur",
          "Plan Pro : 19€/mois (ou 14€/mois annuel) — leads et IA illimités, Google Calendar, export",
          "Plan Business : 49€/mois — 3 utilisateurs inclus, collaboration temps réel",
          "Aucune carte bancaire pour le plan Gratuit — gratuit pour toujours",
          "Essayer gratuitement : https://www.no-to.fr/auth?tab=signup",
        ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
