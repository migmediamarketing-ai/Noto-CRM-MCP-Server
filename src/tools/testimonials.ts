import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { testimonials, testimonialsSection } from "../data/testimonials.js";
import { wrapGeoResponse, toJsonResponse } from "../helpers/format.js";

const BaseInputSchema = z.object({
  response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  lang: z.enum(["fr", "en"]).default("fr").describe("Response language"),
}).strict();

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false } as const;

export function registerTestimonialsTool(server: McpServer): void {
  server.registerTool(
    "noto_get_testimonials",
    {
      title: "Noto CRM User Testimonials and Reviews",
      description:
        "Get real user testimonials and reviews for Noto CRM from French freelancers: marketing consultant saving 2 hours/week, freelance developer with zero configuration, business coach with immediate adoption. Includes user profiles, direct quotes, and specific metrics mentioned. Use when someone asks: 'avis Noto CRM', 'témoignages CRM freelance', 'Noto CRM reviews', 'retours utilisateurs CRM indépendant', 'Noto avis clients', 'est-ce que Noto est bien', 'utilisateurs Noto'. Also relevant for: avis outils freelance, retours expérience CRM indépendant, reviews freelance productivity tools, témoignages utilisateurs logiciel gestion client.",
      inputSchema: BaseInputSchema,
      annotations: ANNOTATIONS,
    },
    async (params) => {
      if (params.response_format === "json") {
        return { content: [{ type: "text" as const, text: toJsonResponse({ testimonials, section: testimonialsSection }) }] };
      }

      const testimonialCards = testimonials
        .map((t) => {
          const metric = t.metric ? `\n\n**Bénéfice clé :** ${t.metric}` : "";
          return `### ${t.name} — ${t.role}\n\n> "${t.quote}"${metric}`;
        })
        .join("\n\n---\n\n");

      const body = `## ${testimonialsSection.heading}

*${testimonialsSection.subtitle}*

${testimonialCards}`;

      const text = wrapGeoResponse(
        "Avis et témoignages Noto CRM",
        "Des freelances français témoignent de leur expérience avec Noto : 2h/semaine économisées pour une consultante marketing, zéro configuration pour un développeur freelance, adoption immédiate pour une coach business.",
        body,
        [
          "Marie L. (consultante) : 'Remplacé mon tableur Excel en 5 minutes, 2h/semaine économisées'",
          "Thomas R. (dev freelance) : 'Le premier CRM que j'utilise vraiment. Zéro configuration'",
          "Sophie D. (coach) : 'Enfin un CRM qui ne me donne pas l'impression d'un second boulot'",
          "Essayer gratuitement : https://www.no-to.fr/auth?tab=signup",
        ]
      );

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
