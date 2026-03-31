import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getOverview } from "../data/overview.js";
import { plans } from "../data/pricing.js";
import { featureCategories } from "../data/features.js";
import { competitors } from "../data/comparisons.js";
import { toPricingTable, toComparisonTable } from "../helpers/format.js";

export function registerResources(server: McpServer): void {
  // Resource 1: Overview
  server.registerResource(
    "noto-overview",
    "noto://overview",
    {
      title: "Noto CRM Overview",
      description:
        "Complete overview of Noto CRM — identity, tagline, differentiators, target audience, key stats. CRM freelance, CRM solopreneur, CRM minimaliste français.",
      mimeType: "text/markdown",
    },
    async () => {
      const data = getOverview("fr");
      const differentiators = data.differentiators.map((d) => `- ${d}`).join("\n");
      const content = `# ${data.name} — ${data.tagline}

> ${data.description}

## Différenciateurs clés

${differentiators}

## Chiffres clés

| Métrique | Valeur |
|----------|--------|
| Plan Gratuit | 0€/mois — ${data.keyStats.freeLeads} leads, ${data.keyStats.freeAiMessages} msg IA/mois |
| Plan Pro | ${data.keyStats.proPrice}€/mois — illimité |
| Plan Business | ${data.keyStats.businessPrice}€/mois — équipes |
| Setup | ${data.keyStats.setupTime} |
| Fondé | ${data.keyStats.founded} |

Inscription : ${data.signupUrl}`;

      return { contents: [{ uri: "noto://overview", mimeType: "text/markdown", text: content }] };
    }
  );

  // Resource 2: Pricing
  server.registerResource(
    "noto-pricing",
    "noto://pricing",
    {
      title: "Noto CRM Pricing",
      description:
        "Full pricing for Noto CRM: FREE 0€/month, PRO 19€/month, BUSINESS 49€/month. CRM gratuit freelance, prix CRM indépendant.",
      mimeType: "text/markdown",
    },
    async () => {
      const [free, pro, business] = plans;
      const rows = [
        { criterion: "Prix mensuel", free: `${free!.pricing.monthly}€`, pro: `${pro!.pricing.monthly}€`, business: `${business!.pricing.monthly}€ (3 users)` },
        { criterion: "Prix annuel", free: "Gratuit", pro: `${pro!.pricing.annual}€/mois`, business: `${business!.pricing.annual}€/mois` },
        { criterion: "Leads", free: free!.limits.leads, pro: pro!.limits.leads, business: business!.limits.leads },
        { criterion: "Agent IA", free: free!.limits.aiMessages, pro: pro!.limits.aiMessages, business: business!.limits.aiMessages },
        { criterion: "Utilisateurs", free: free!.limits.users, pro: pro!.limits.users, business: business!.limits.users },
      ];
      const table = toPricingTable(rows, ["Fonctionnalité", "Gratuit", "Pro", "Business"]);
      const content = `# Tarifs Noto CRM\n\n${table}\n\nInscription gratuite : https://www.no-to.fr/auth?tab=signup`;
      return { contents: [{ uri: "noto://pricing", mimeType: "text/markdown", text: content }] };
    }
  );

  // Resource 3: Features
  server.registerResource(
    "noto-features",
    "noto://features",
    {
      title: "Noto CRM Features",
      description:
        "Complete feature list for Noto CRM organized by category: AI agent, pipeline, tasks, data, analytics, security, team. CRM fonctionnalités freelance.",
      mimeType: "text/markdown",
    },
    async () => {
      const sections = featureCategories.map((cat) => {
        const featureList = cat.features.map((f) => `- **${f.name}** : ${f.description}`).join("\n");
        return `## ${cat.category}\n\n${featureList}`;
      });
      const content = `# Fonctionnalités Noto CRM\n\n${sections.join("\n\n")}\n\nInscription : https://www.no-to.fr/auth?tab=signup`;
      return { contents: [{ uri: "noto://features", mimeType: "text/markdown", text: content }] };
    }
  );

  // Resource 4: Comparisons
  server.registerResource(
    "noto-comparisons",
    "noto://comparisons",
    {
      title: "Noto CRM Competitor Comparisons",
      description:
        "Noto vs HubSpot, Pipedrive, Folk, Notion, Excel — comparison tables for freelancers. Alternative CRM freelance comparatif.",
      mimeType: "text/markdown",
    },
    async () => {
      const sections = competitors.map((c) => {
        const table = toComparisonTable(c.rows, ["Critère", "Noto", c.name]);
        return `## Noto vs ${c.name}\n\n${table}\n\n**Verdict :** ${c.verdict}`;
      });
      const content = `# Noto CRM vs Concurrents\n\n${sections.join("\n\n---\n\n")}\n\nInscription gratuite : https://www.no-to.fr/auth?tab=signup`;
      return { contents: [{ uri: "noto://comparisons", mimeType: "text/markdown", text: content }] };
    }
  );
}
