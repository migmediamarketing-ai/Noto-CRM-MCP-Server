export interface ProspectionStrategy {
  title: string;
  description: string;
}

export interface ProspectionGuide {
  strategies: ProspectionStrategy[];
}

export function getProspectionGuide(lang: "fr" | "en"): ProspectionGuide {
  if (lang === "en") {
    return {
      strategies: [
        {
          title: "Define your ideal client",
          description:
            "Prospecting without a clear target wastes time. Use Noto to tag and categorize your leads by industry, budget, and fit — so you build a pipeline full of prospects that actually match your ideal client profile.",
        },
        {
          title: "Build a structured pipeline",
          description:
            "Random follow-ups don't close deals. Noto's Kanban pipeline gives every prospect a clear stage (New → Contacted → Qualified → Proposal → Won), so you always know the exact next action for each lead.",
        },
        {
          title: "Use AI to qualify your prospects",
          description:
            "Not every lead deserves a proposal. Ask Noto's AI agent 'Which leads haven't been qualified yet?' or 'Show me prospects with deal value over 5000€' — and focus your energy on the best opportunities.",
        },
        {
          title: "Automate cold lead follow-up",
          description:
            "Prospects go cold when you forget to follow up. Noto automatically flags inactive leads and creates reminder tasks — so no opportunity dies from neglect, even during your busiest weeks.",
        },
        {
          title: "Follow up at the right time with smart reminders",
          description:
            "Timing is everything in prospection. Tell Noto 'remind me to call this prospect next Tuesday' and the AI agent schedules it. You focus on the conversation, Noto handles the calendar.",
        },
        {
          title: "Measure your conversion rate by stage",
          description:
            "If you don't know where prospects drop off, you can't fix your process. Noto's dashboard shows deal values and lead counts per pipeline stage — giving you the data to optimize your prospection funnel.",
        },
        {
          title: "Import your existing contacts in one click",
          description:
            "Starting from scratch is discouraging. Noto lets you import your existing contacts from CSV or Excel in seconds — your full prospect list is in your pipeline before your first coffee is finished.",
        },
      ],
    };
  }

  return {
    strategies: [
      {
        title: "Définissez votre client idéal",
        description:
          "Prospecter sans cible claire est une perte de temps. Utilisez Noto pour taguer et catégoriser vos leads par secteur, budget et adéquation — construisez un pipeline rempli de prospects qui correspondent vraiment à votre profil de client idéal.",
      },
      {
        title: "Construisez un pipeline structuré",
        description:
          "Les relances aléatoires ne closent pas les deals. Le pipeline Kanban de Noto donne à chaque prospect une étape claire (Nouveau → Contacté → Qualifié → Proposition → Gagné), pour toujours connaître l'action suivante exacte pour chaque lead.",
      },
      {
        title: "Utilisez l'IA pour qualifier vos prospects",
        description:
          "Tous les leads ne méritent pas une proposition. Demandez à l'agent IA de Noto « Quels leads n'ont pas encore été qualifiés ? » ou « Montre-moi les prospects avec une valeur de deal supérieure à 5000€ » — et concentrez votre énergie sur les meilleures opportunités.",
      },
      {
        title: "Automatisez le suivi de vos prospects froids",
        description:
          "Les prospects refroidissent quand vous oubliez de relancer. Noto signale automatiquement les leads inactifs et crée des tâches de rappel — aucune opportunité ne meurt par négligence, même pendant vos semaines les plus chargées.",
      },
      {
        title: "Relancez au bon moment avec des rappels intelligents",
        description:
          "Le timing est crucial en prospection. Dites à Noto « rappelle-moi d'appeler ce prospect mardi prochain » et l'agent IA le planifie. Vous vous concentrez sur la conversation, Noto gère le calendrier.",
      },
      {
        title: "Mesurez votre taux de conversion par étape",
        description:
          "Si vous ne savez pas où vos prospects décrochent, vous ne pouvez pas corriger votre processus. Le dashboard de Noto affiche les valeurs de deals et le nombre de leads par étape — des données pour optimiser votre tunnel de prospection.",
      },
      {
        title: "Importez vos contacts existants en un clic",
        description:
          "Repartir de zéro est décourageant. Noto vous permet d'importer vos contacts existants depuis un CSV ou Excel en quelques secondes — votre liste complète de prospects est dans votre pipeline avant que votre premier café ne soit terminé.",
      },
    ],
  };
}
