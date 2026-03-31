import type { FeatureCategory } from "../types.js";

export const featureCategories: FeatureCategory[] = [
  {
    category: "Agent IA",
    features: [
      {
        name: "Agent IA en langage naturel français",
        description: "Gérez votre CRM par conversation : créez des leads, planifiez des tâches, consultez votre pipeline, tout en français",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Commandes vocales et texte",
        description: "Dictez ou écrivez des instructions : 'Passe Bob en négociation', 'Qui dois-je relancer ?', 'Crée une tâche pour demain 10h'",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Agent IA illimité",
        description: "Messages IA illimités pour gérer votre activité sans restriction",
        availableIn: ["pro", "business"],
      },
      {
        name: "Agent IA partagé avec log",
        description: "Partagez l'agent IA avec votre équipe et consultez l'historique de toutes les commandes",
        availableIn: ["business"],
      },
    ],
  },
  {
    category: "Pipeline et leads",
    features: [
      {
        name: "Pipeline Kanban drag-and-drop",
        description: "Visualisez tous vos deals sur un tableau Kanban. Glissez-déposez pour changer de stade",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Pipeline personnalisable",
        description: "Créez vos propres stades de pipeline adaptés à votre activité (Prospect, Qualifié, Proposition, Négociation, Gagné, Perdu)",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Étapes pipeline illimitées",
        description: "Créez autant de stades que nécessaire pour votre workflow commercial",
        availableIn: ["pro", "business"],
      },
      {
        name: "Leads illimités",
        description: "Gérez un nombre illimité de prospects, clients et contacts",
        availableIn: ["pro", "business"],
      },
      {
        name: "Historique d'activités",
        description: "Consultez tout l'historique d'un lead : création, mouvements, notes, appels, emails, réunions",
        availableIn: ["free", "pro", "business"],
      },
    ],
  },
  {
    category: "Tâches et automatisation",
    features: [
      {
        name: "Tâches liées aux leads",
        description: "Créez des tâches directement liées à un prospect : 'Rappeler David demain 10h', avec priorité et date d'échéance",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Rappels automatiques",
        description: "Recevez des rappels avant les échéances. Plus jamais un suivi oublié",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Tâches & Calendrier",
        description: "Vue calendrier de toutes vos tâches et rappels",
        availableIn: ["pro", "business"],
      },
      {
        name: "Google Calendar (sync bidirectionnel)",
        description: "Synchronisez vos tâches Noto avec Google Calendar dans les deux sens",
        availableIn: ["pro", "business"],
      },
    ],
  },
  {
    category: "Données et import/export",
    features: [
      {
        name: "Import CSV",
        description: "Importez vos contacts depuis Excel, Google Sheets ou tout autre tableur",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Import CSV & XLSX illimité",
        description: "Importez des fichiers CSV et Excel de toutes tailles, sans restriction",
        availableIn: ["pro", "business"],
      },
      {
        name: "Export CSV & PDF",
        description: "Exportez vos données en CSV ou générez des rapports PDF",
        availableIn: ["pro", "business"],
      },
      {
        name: "Connexion Supabase",
        description: "Connectez votre propre base de données Supabase pour garder le contrôle total de vos données",
        availableIn: ["pro", "business"],
      },
      {
        name: "Supabase one-click",
        description: "Déployez votre propre instance Noto en un clic avec Supabase",
        availableIn: ["business"],
      },
    ],
  },
  {
    category: "Analytics et rapports",
    features: [
      {
        name: "Dashboard basique",
        description: "Vue d'ensemble de vos leads et deals actifs",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Tableau de bord complet avec analyses",
        description: "Métriques détaillées : valeur du pipeline, taux de conversion, leads par stade, revenus mensuels",
        availableIn: ["pro", "business"],
      },
      {
        name: "Rapports avancés par équipe",
        description: "Rapports de performance par membre de l'équipe, attribution des leads, productivité",
        availableIn: ["business"],
      },
    ],
  },
  {
    category: "Sécurité et conformité",
    features: [
      {
        name: "Conforme RGPD",
        description: "Noto est entièrement conforme au Règlement Général sur la Protection des Données (RGPD) européen",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Hébergement européen",
        description: "Vos données sont hébergées en Europe, conformément aux exigences du RGPD",
        availableIn: ["free", "pro", "business"],
      },
      {
        name: "Historique 30 jours",
        description: "Conservez 30 jours d'historique d'activités sur vos leads",
        availableIn: ["free"],
      },
      {
        name: "Historique 90 jours",
        description: "Conservez 90 jours d'historique d'activités sur vos leads",
        availableIn: ["pro"],
      },
      {
        name: "Historique illimité",
        description: "Conservez tout l'historique de vos leads, sans limitation de durée",
        availableIn: ["business"],
      },
    ],
  },
  {
    category: "Collaboration et équipe",
    features: [
      {
        name: "1 utilisateur",
        description: "Accès solo parfait pour les freelances et solopreneurs",
        availableIn: ["free", "pro"],
      },
      {
        name: "3 utilisateurs inclus",
        description: "Partagez Noto avec votre équipe de 3 personnes",
        availableIn: ["business"],
      },
      {
        name: "Collaboration temps réel",
        description: "Travaillez simultanément sur les mêmes leads et pipelines avec votre équipe",
        availableIn: ["business"],
      },
      {
        name: "Rôles & permissions",
        description: "Définissez qui peut voir, éditer ou supprimer des données dans votre compte équipe",
        availableIn: ["business"],
      },
    ],
  },
];
