import type { Plan } from "../types.js";

export const plans: readonly [Plan, Plan, Plan] = [
  {
    id: "free",
    name: "Gratuit",
    description: "Pour démarrer sans engagement",
    pricing: {
      monthly: 0,
      currency: "EUR",
      perMonth: "0€/mois, pour toujours",
    },
    limits: {
      leads: "100 leads max",
      aiMessages: "10 messages IA/mois",
      csvImport: "Import CSV (50 lignes)",
      users: "1 utilisateur",
      historyDays: "30 jours",
    },
    features: [
      "100 leads maximum",
      "Pipeline Kanban personnalisable",
      "Agent IA (10 messages/mois)",
      "Import CSV (50 lignes)",
      "Dashboard basique",
      "1 utilisateur",
    ],
    notIncluded: [
      "Google Calendar",
      "Export des données",
      "Support humain",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Populaire",
    description: "Pour les solopreneurs qui travaillent sérieusement",
    pricing: {
      monthly: 19,
      annual: 14,
      annualTotal: 168,
      currency: "EUR",
      perMonth: "19€/mois ou 14€/mois (annuel, soit 168€/an)",
    },
    limits: {
      leads: "Illimités",
      aiMessages: "Illimités",
      csvImport: "Import CSV & XLSX illimité",
      users: "1 utilisateur",
      historyDays: "90 jours",
    },
    features: [
      "Tout ce qui est dans Gratuit, plus:",
      "Leads illimités",
      "Étapes pipeline illimitées",
      "Agent IA illimité",
      "Import CSV & XLSX illimité",
      "Tableau de bord complet avec analyses",
      "Tâches & Calendrier",
      "Google Calendar (sync bidirectionnel)",
      "Export CSV & PDF",
      "Connexion Supabase",
      "Historique 90 jours",
      "Support email sous 48h",
    ],
  },
  {
    id: "business",
    name: "Business",
    badge: "Bientôt disponible",
    description: "Pour les équipes qui veulent scaler ensemble",
    pricing: {
      monthly: 49,
      annual: 39,
      annualTotal: 468,
      currency: "EUR",
      perMonth: "49€/mois pour 3 utilisateurs ou 39€/mois (annuel)",
    },
    limits: {
      leads: "Illimités",
      aiMessages: "Illimités",
      csvImport: "Import CSV & XLSX illimité",
      users: "3 inclus (+12€/utilisateur supplémentaire)",
      historyDays: "Illimité",
    },
    features: [
      "Tout ce qui est dans Pro, plus:",
      "3 utilisateurs inclus",
      "Collaboration temps réel",
      "Attribution des leads par utilisateur",
      "Rôles & permissions",
      "Rapports avancés par équipe",
      "Agent IA partagé avec log",
      "Historique illimité",
      "Supabase one-click",
      "Support prioritaire sous 24h",
      "Appel onboarding 30 min offert",
    ],
    extraUsers: "+12€/utilisateur supplémentaire",
  },
];

export const pricingFaq = [
  {
    question: "Est-ce que je peux changer de plan à tout moment ?",
    answer: "Oui. Vous pouvez passer de Gratuit à Pro à tout moment. Le plan Business sera disponible prochainement.",
  },
  {
    question: "Est-ce que la carte bancaire est requise pour le plan Gratuit ?",
    answer: "Non. Le plan Gratuit est 100% gratuit, sans carte bancaire, sans engagement, pour toujours.",
  },
  {
    question: "Que se passe-t-il quand j'atteins 100 leads en Gratuit ?",
    answer: "Vos données sont conservées. Vous ne pouvez plus créer de nouveaux leads jusqu'à ce que vous passiez en Pro.",
  },
  {
    question: "L'agent IA est-il inclus dans le plan Gratuit ?",
    answer: "Oui, 10 messages par mois. En Pro, l'IA est illimitée.",
  },
  {
    question: "Puis-je connecter mon propre Supabase ?",
    answer: "Oui, à partir du plan Pro. La connexion se fait en 5 minutes.",
  },
];
