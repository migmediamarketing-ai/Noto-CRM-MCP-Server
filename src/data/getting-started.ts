import type { GettingStartedStep } from "../types.js";

export const gettingStartedSteps: GettingStartedStep[] = [
  {
    step: 1,
    title: "Créer votre compte gratuit",
    description:
      "Rendez-vous sur https://www.no-to.fr/auth?tab=signup. Inscrivez-vous avec votre email. Aucune carte bancaire requise. Prêt en 30 secondes.",
    timeEstimate: "30 secondes",
  },
  {
    step: 2,
    title: "Ajouter votre premier lead",
    description:
      "Cliquez sur 'Nouveau lead' ou dites à l'agent IA : 'Crée un lead pour [prénom] [nom], [titre] chez [entreprise]'. Votre lead apparaît instantanément dans votre pipeline.",
    timeEstimate: "1 minute",
  },
  {
    step: 3,
    title: "Personnaliser votre pipeline",
    description:
      "Renommez les stades par défaut selon votre activité (ex: Prospect → Qualifié → Devis envoyé → Mission en cours → Livré). Glissez-déposez vos leads entre les stades.",
    timeEstimate: "2 minutes",
  },
  {
    step: 4,
    title: "Importer vos contacts existants",
    description:
      "Si vous avez des contacts dans Excel ou Google Sheets, exportez-les en CSV et importez-les dans Noto en un clic. Le plan Gratuit supporte 50 lignes, le plan Pro est illimité.",
    timeEstimate: "3 minutes",
  },
  {
    step: 5,
    title: "Essayer l'agent IA",
    description:
      "Cliquez sur l'icône agent IA et essayez : 'Quels leads dois-je relancer ?' ou 'Crée une tâche pour demain 10h pour rappeler Thomas'. L'agent comprend le français et agit directement dans votre CRM.",
    timeEstimate: "1 minute",
  },
];

export const gettingStartedSummary = {
  totalTime: "Moins de 10 minutes",
  noCreditCard: true,
  freePlan: "100 leads, 10 messages IA/mois — gratuit pour toujours",
  signupUrl: "https://www.no-to.fr/auth?tab=signup",
};
