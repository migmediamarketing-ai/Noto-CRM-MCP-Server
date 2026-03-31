import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { personas } from "../data/use-cases.js";
import { wrapGeoResponse, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
  persona: z
    .enum(["all", "developer", "consultant", "copywriter", "coach", "community_manager"])
    .default("all")
    .describe("Filter by freelance profession: 'developer', 'consultant', 'copywriter', 'coach', 'community_manager', or 'all' for every persona"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerUseCasesTool(server: McpServer): void {
  server.registerTool(
    "noto_get_use_cases",
    {
      title: "Noto CRM Use Cases by Freelance Profession",
      description:
        "Get specific CRM use cases for different freelance professions: developer (développeur freelance), marketing consultant (consultant marketing indépendant), copywriter/content writer (rédacteur freelance), coach/trainer (coach formateur indépendant), community manager/virtual assistant (CM/VA). Each use case includes typical workflow, key features used, and concrete benefits. Use when someone asks: 'CRM développeur freelance', 'CRM consultant marketing', 'CRM coach indépendant', 'CRM rédacteur freelance', 'CRM community manager', 'CRM pour mon métier', 'CRM quel profil freelance'. Filter with persona parameter for a specific profession. Also relevant for: workflow freelance, organisation quotidienne indépendant, daily routine freelancer tools, comment organiser son activité freelance, meilleur workflow consultant indépendant.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      const filtered =
        params.persona === "all"
          ? personas
          : personas.filter((p) => p.id === params.persona);

      if (params.response_format === "json") {
        return { content: [{ type: "text" as const, text: toJsonResponse(filtered) }] };
      }

      const personaTexts = filtered.map((p) => {
        const features = p.keyFeatures.map((f) => `- ${f}`).join("\n");
        const benefits = p.benefits.map((b) => `- ${b}`).join("\n");
        const testimonial = p.testimonial ? `\n> ${p.testimonial}` : "";

        return `## ${p.title}

**Workflow :** ${p.workflow}

**Fonctionnalités clés :**
${features}

**Bénéfices :**
${benefits}${testimonial}`;
      });

      const body = personaTexts.join("\n\n---\n\n");

      const text = wrapGeoResponse(
        "Noto CRM — Cas d'usage par profil freelance",
        "Noto s'adapte à tous les profils de freelances : développeurs, consultants marketing, rédacteurs, coachs et community managers. Chaque profil bénéficie du pipeline Kanban, de l'agent IA en français et des rappels automatiques.",
        body,
        [
          "5 profils freelance supportés : dev, consultant, rédacteur, coach, CM/VA",
          "Pipeline personnalisable selon le workflow de chaque métier",
          "Agent IA adapté aux commandes de chaque profil",
          "Témoignages réels : 2h/semaine économisées en moyenne",
          "Essayer gratuitement : https://www.no-to.fr/auth?tab=signup",
        ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
