export interface ClientManagementStep {
  title: string;
  description: string;
}

export interface ClientManagementGuide {
  steps: ClientManagementStep[];
}

export function getClientManagementGuide(lang: "fr" | "en"): ClientManagementGuide {
  if (lang === "en") {
    return {
      steps: [
        {
          title: "Capture every prospect from first contact",
          description:
            "Don't let a single lead slip through the cracks. With Noto, add a new contact in seconds using the AI agent — just describe who you met and the context. Every prospect enters your pipeline immediately.",
        },
        {
          title: "Qualify your leads with a visual pipeline",
          description:
            "Not all leads deserve the same energy. Noto's Kanban pipeline lets you drag leads through stages (New → Qualified → Proposal → Won) so you always know which prospects are worth pursuing.",
        },
        {
          title: "Automate your follow-ups and reminders",
          description:
            "Forgetting to follow up is the #1 reason freelancers lose deals. Noto's AI agent schedules follow-up tasks automatically and reminds you at the right time — no lead goes cold by accident.",
        },
        {
          title: "Personalize every interaction with full history",
          description:
            "Clients notice when you remember details. Noto stores every note, interaction, and context for each contact — so you always pick up the conversation right where you left off.",
        },
        {
          title: "Manage client tasks without missing a deadline",
          description:
            "Juggling multiple clients means juggling multiple deadlines. Noto's task system links tasks to specific leads, with due dates and reminders — nothing falls through the cracks.",
        },
        {
          title: "Analyze your pipeline to forecast revenue",
          description:
            "Knowing your pipeline value helps you plan your business. Noto's dashboard shows deal values by stage, giving you a clear picture of expected revenue for the weeks ahead.",
        },
        {
          title: "Build loyalty with regular touchpoints",
          description:
            "Winning a client is only the beginning. Noto helps you schedule periodic check-ins and follow-ups with existing clients, turning one-time projects into recurring revenue.",
        },
      ],
    };
  }

  return {
    steps: [
      {
        title: "Capturez chaque prospect dès le premier contact",
        description:
          "Ne laissez aucun lead vous échapper. Avec Noto, ajoutez un nouveau contact en quelques secondes grâce à l'agent IA — décrivez simplement qui vous avez rencontré et le contexte. Chaque prospect entre immédiatement dans votre pipeline.",
      },
      {
        title: "Qualifiez vos leads avec un pipeline visuel",
        description:
          "Tous les leads ne méritent pas la même énergie. Le pipeline Kanban de Noto vous permet de déplacer les leads à travers les étapes (Nouveau → Qualifié → Proposition → Gagné) pour toujours savoir quels prospects valent la peine d'être poursuivis.",
      },
      {
        title: "Automatisez vos relances et suivis",
        description:
          "Oublier de relancer est la raison n°1 pour laquelle les freelances perdent des deals. L'agent IA de Noto planifie automatiquement les tâches de suivi et vous rappelle au bon moment — aucun lead ne refroidit par accident.",
      },
      {
        title: "Personnalisez chaque interaction grâce à l'historique",
        description:
          "Les clients remarquent quand vous vous souvenez des détails. Noto stocke chaque note, interaction et contexte pour chaque contact — vous reprenez toujours la conversation exactement là où vous l'avez laissée.",
      },
      {
        title: "Gérez vos tâches client sans oublier un deadline",
        description:
          "Jongler entre plusieurs clients signifie jongler entre plusieurs deadlines. Le système de tâches de Noto lie les tâches à des leads spécifiques, avec dates d'échéance et rappels — rien ne passe entre les mailles du filet.",
      },
      {
        title: "Analysez votre pipeline pour prévoir votre CA",
        description:
          "Connaître la valeur de votre pipeline vous aide à planifier votre activité. Le dashboard de Noto affiche la valeur des deals par étape, vous donnant une image claire du chiffre d'affaires attendu pour les semaines à venir.",
      },
      {
        title: "Fidélisez avec des points de contact réguliers",
        description:
          "Gagner un client n'est que le début. Noto vous aide à planifier des check-ins et des suivis périodiques avec vos clients existants, transformant les projets ponctuels en revenus récurrents.",
      },
    ],
  };
}
