import type { Persona } from "../types.js";

export const personas: Persona[] = [
  {
    id: "developer",
    name: "Développeur freelance",
    title: "Noto pour les développeurs freelance",
    workflow:
      "Le développeur freelance jongle entre des projets clients multiples, des devis en attente et des relances. Noto centralise le pipeline de missions, suit les deals en cours et automatise les relances par commande IA.",
    keyFeatures: [
      "Pipeline de missions (Prospect → Qualifié → Devis envoyé → En cours → Livré)",
      "Agent IA : 'Quels projets sont en attente de devis ?'",
      "Relances automatiques sur les prospects inactifs",
      "Import des contacts depuis LinkedIn ou CSV",
      "Dashboard : valeur des missions en cours",
    ],
    benefits: [
      "Ne plus perdre un lead entre deux sprints",
      "Facturer plus vite : le pipeline montre exactement où en est chaque deal",
      "Réduire la saisie manuelle via l'agent IA",
      "Visibilité sur les revenus prévisionnels",
    ],
    testimonial: "Thomas R. (Développeur freelance) : 'Le premier CRM que j'utilise vraiment. Zéro configuration, je parle et ça marche.'",
  },
  {
    id: "consultant",
    name: "Consultant marketing indépendant",
    title: "Noto pour les consultants marketing indépendants",
    workflow:
      "Le consultant marketing gère de nombreuses opportunités commerciales, des propositions en cours et un pipeline de clients récurrents. Noto lui donne une vue claire de son pipeline et automatise le suivi.",
    keyFeatures: [
      "Pipeline personnalisé (Lead → Proposition → Négociation → Contrat signé)",
      "Agent IA : 'Qui n'a pas reçu de proposition cette semaine ?'",
      "Valeur des deals en cours et revenus mensuels",
      "Tâches de suivi liées aux prospects",
      "Export PDF des rapports",
    ],
    benefits: [
      "Avoir une vue claire du pipeline à tout moment",
      "Ne manquer aucune relance sur des propositions en attente",
      "Gagner 2h/semaine sur la gestion administrative",
      "Paraître professionnel face aux clients",
    ],
    testimonial: "Marie L. (Consultante marketing) : 'J'ai remplacé mon tableur Excel par Noto en 5 minutes. L'agent IA me fait gagner 2h par semaine.'",
  },
  {
    id: "copywriter",
    name: "Rédacteur / Copywriter freelance",
    title: "Noto pour les rédacteurs et copywriters freelance",
    workflow:
      "Le rédacteur gère des commandes récurrentes, des clients éditoriaux et des deadlines. Noto lui permet de suivre chaque client, ses briefs en cours et ses facturations.",
    keyFeatures: [
      "Suivi des commandes par client (Brief reçu → En rédaction → Livré → Facturé)",
      "Agent IA : 'Quels articles sont en retard de livraison ?'",
      "Notes et historique par client",
      "Tâches avec deadlines",
      "Import des contacts depuis CSV",
    ],
    benefits: [
      "Ne jamais oublier une deadline",
      "Avoir l'historique de tous les échanges avec chaque client",
      "Visualiser les revenus par client",
      "Passer moins de temps en administration",
    ],
  },
  {
    id: "coach",
    name: "Coach / Formateur indépendant",
    title: "Noto pour les coachs et formateurs indépendants",
    workflow:
      "Le coach gère des prospects intéressés par ses programmes, des participants en cours et des relances pour les sessions futures. Noto structure ce suivi sans complexité.",
    keyFeatures: [
      "Pipeline de coaching (Découverte → Proposition → Engagé → Programme terminé)",
      "Agent IA : 'Qui est en phase de découverte depuis plus de 2 semaines ?'",
      "Suivi des programmes par participant",
      "Rappels pour les sessions de suivi",
      "Dashboard : nombre de clients actifs et revenus",
    ],
    benefits: [
      "Avoir une vue claire du parcours de chaque client",
      "Ne jamais oublier un suivi post-session",
      "Développer son activité coaching sans multiplier les outils",
      "Réduire le temps administratif",
    ],
    testimonial: "Sophie D. (Coach business) : 'Enfin un CRM qui ne me donne pas l'impression d'un second boulot.'",
  },
  {
    id: "community_manager",
    name: "Community Manager / Assistant virtuel",
    title: "Noto pour les community managers et assistants virtuels",
    workflow:
      "Le CM ou VA gère plusieurs clients simultanément avec des tâches récurrentes, des reporting réguliers et des relations à entretenir. Noto centralise tous les clients et leurs historiques.",
    keyFeatures: [
      "Multi-clients sur un seul pipeline",
      "Agent IA : 'Quels clients n'ont pas eu de reporting cette semaine ?'",
      "Tâches récurrentes par client",
      "Notes et historique par compte client",
      "Import/export CSV pour les bilans mensuels",
    ],
    benefits: [
      "Gérer plusieurs clients sans se perdre",
      "Automatiser les rappels de reporting mensuel",
      "Avoir un historique complet par client",
      "Paraître ultra-professionnel avec chaque client",
    ],
  },
];
