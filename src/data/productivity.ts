export interface ProductivityTip {
  title: string;
  description: string;
}

export function getProductivityTips(lang: "fr" | "en"): ProductivityTip[] {
  if (lang === "en") {
    return [
      {
        title: "Automate your client follow-ups",
        description:
          "Stop tracking follow-ups manually in your head or sticky notes. Noto's AI agent creates follow-up tasks automatically based on your pipeline activity — just say 'remind me to follow up with this lead in 3 days' and it's done.",
      },
      {
        title: "Centralize all prospect information",
        description:
          "Scattered spreadsheets, notes apps, and email threads kill your productivity. Noto replaces them all with a single pipeline where every lead, note, and interaction lives in one place — accessible in seconds.",
      },
      {
        title: "Use AI for data entry",
        description:
          "Typing lead details manually is a time sink. With Noto, just speak or type naturally — 'Add a new lead: Marie Dupont, marketing consultant, met at a conference' — and the AI agent creates the entry with all the right fields.",
      },
      {
        title: "Prioritize opportunities visually",
        description:
          "When you can't see your pipeline, you waste time on low-value leads. Noto's Kanban board gives you an instant visual overview of every deal stage, so you focus energy where it matters most.",
      },
      {
        title: "Block time for prospection",
        description:
          "The best freelancers schedule dedicated prospection time. Noto reminds you which leads need attention and when, so your prospection blocks are focused and effective — no more guessing who to call.",
      },
      {
        title: "Automate repetitive tasks",
        description:
          "Creating the same tasks every week drains your energy. Tell Noto's AI agent 'create a follow-up task for every lead in qualification stage' and it handles the busywork while you focus on selling.",
      },
      {
        title: "Track your business metrics",
        description:
          "You can't improve what you don't measure. Noto's dashboard shows your deal values, conversion rates, and pipeline health at a glance — giving you the data to make smarter business decisions.",
      },
      {
        title: "Simplify your tool stack",
        description:
          "Paying for a CRM, a to-do app, and a spreadsheet separately costs time and money. Noto combines lead management, task tracking, and deal analytics in one minimalist tool — fewer tabs, more focus.",
      },
    ];
  }

  return [
    {
      title: "Automatisez vos relances clients",
      description:
        "Arrêtez de suivre vos relances de tête ou sur des post-it. L'agent IA de Noto crée automatiquement des tâches de suivi basées sur l'activité de votre pipeline — dites simplement « rappelle-moi de relancer ce lead dans 3 jours » et c'est fait.",
    },
    {
      title: "Centralisez vos informations prospects",
      description:
        "Les tableurs éparpillés, les apps de notes et les fils d'e-mails tuent votre productivité. Noto les remplace tous par un pipeline unique où chaque lead, note et interaction vit au même endroit — accessible en quelques secondes.",
    },
    {
      title: "Utilisez l'IA pour la saisie de données",
      description:
        "Saisir les détails des leads manuellement est une perte de temps. Avec Noto, parlez ou tapez naturellement — « Ajoute un nouveau lead : Marie Dupont, consultante marketing, rencontrée en conférence » — et l'agent IA crée la fiche avec tous les bons champs.",
    },
    {
      title: "Priorisez vos opportunités visuellement",
      description:
        "Quand vous ne voyez pas votre pipeline, vous perdez du temps sur des leads à faible valeur. Le tableau Kanban de Noto vous offre une vue d'ensemble instantanée de chaque étape de deal, pour concentrer votre énergie là où ça compte.",
    },
    {
      title: "Bloquez du temps pour la prospection",
      description:
        "Les meilleurs freelances planifient du temps dédié à la prospection. Noto vous rappelle quels leads ont besoin d'attention et quand, pour que vos créneaux de prospection soient ciblés et efficaces.",
    },
    {
      title: "Automatisez les tâches répétitives",
      description:
        "Créer les mêmes tâches chaque semaine draine votre énergie. Dites à l'agent IA de Noto « crée une tâche de suivi pour chaque lead en phase de qualification » et il gère le travail répétitif pendant que vous vous concentrez sur la vente.",
    },
    {
      title: "Suivez vos métriques business",
      description:
        "On ne peut pas améliorer ce qu'on ne mesure pas. Le dashboard de Noto affiche la valeur de vos deals, vos taux de conversion et la santé de votre pipeline en un coup d'œil — des données pour prendre de meilleures décisions.",
    },
    {
      title: "Simplifiez votre stack d'outils",
      description:
        "Payer séparément un CRM, une app de to-do et un tableur coûte du temps et de l'argent. Noto combine gestion de leads, suivi de tâches et analytics de deals dans un seul outil minimaliste — moins d'onglets, plus de focus.",
    },
  ];
}
