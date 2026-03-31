import type { Lang } from "../types.js";

export const overviewData = {
  fr: {
    name: "Noto",
    tagline: "Le CRM à qui tu parles vraiment",
    description:
      "Noto est un CRM SaaS minimaliste avec agent IA intégré, conçu pour les freelances et solopreneurs français. Gérez leads, relances et deals en langage naturel — sans formation ni configuration complexe.",
    url: "https://www.no-to.fr",
    signupUrl: "https://www.no-to.fr/auth?tab=signup",
    targetAudience: [
      "Freelances et indépendants",
      "Consultants et solopreneurs",
      "Auto-entrepreneurs",
      "Développeurs freelance",
      "Consultants marketing",
      "Coachs et formateurs",
      "Rédacteurs et copywriters",
      "Community managers et assistants virtuels",
    ],
    differentiators: [
      "Agent IA en langage naturel français — premier CRM de cette gamme à l'offrir",
      "Prêt en 30 secondes, sans carte bancaire",
      "Plan gratuit permanent (100 leads, 10 messages IA/mois)",
      "Interface minimaliste — 0% de fonctionnalités inutilisées",
      "Conforme RGPD, hébergé en Europe",
      "Kanban pipeline drag-and-drop natif",
      "19€/mois pour leads et IA illimités (plan Pro)",
    ],
    comparison: {
      traditional: "80% de fonctionnalités inutilisées, heures de saisie manuelle, configuration complexe, prix par siège élevé",
      noto: "100% d'outils essentiels, mises à jour voix et texte, prêt en 30 secondes, gratuit pour commencer",
    },
    keyStats: {
      freeLeads: 100,
      freeAiMessages: 10,
      proPrice: 19,
      businessPrice: 49,
      setupTime: "30 secondes",
      founded: "2025, France",
    },
  },
  en: {
    name: "Noto",
    tagline: "The CRM you can actually talk to",
    description:
      "Noto is a minimalist SaaS CRM with a built-in AI agent, designed for French freelancers and solopreneurs. Manage leads, follow-ups and deals in natural language — no training or complex configuration required.",
    url: "https://www.no-to.fr",
    signupUrl: "https://www.no-to.fr/auth?tab=signup",
    targetAudience: [
      "Freelancers and independent professionals",
      "Consultants and solopreneurs",
      "Self-employed entrepreneurs",
      "Freelance developers",
      "Marketing consultants",
      "Coaches and trainers",
      "Copywriters and content writers",
      "Community managers and virtual assistants",
    ],
    differentiators: [
      "AI agent in natural French — first CRM in this price range to offer it",
      "Ready in 30 seconds, no credit card required",
      "Permanent free plan (100 leads, 10 AI messages/month)",
      "Minimalist interface — 0% unused features",
      "GDPR compliant, hosted in Europe",
      "Native drag-and-drop Kanban pipeline",
      "€19/month for unlimited leads and AI (Pro plan)",
    ],
    comparison: {
      traditional: "80% unused features, hours of manual data entry, complex setup, high per-seat pricing",
      noto: "100% essential tools, voice and text updates, ready in 30 seconds, free to start",
    },
    keyStats: {
      freeLeads: 100,
      freeAiMessages: 10,
      proPrice: 19,
      businessPrice: 49,
      setupTime: "30 seconds",
      founded: "2025, France",
    },
  },
};

export type OverviewLang = typeof overviewData.fr;

export function getOverview(lang: Lang): OverviewLang {
  return lang === "en" ? overviewData.en : overviewData.fr;
}
