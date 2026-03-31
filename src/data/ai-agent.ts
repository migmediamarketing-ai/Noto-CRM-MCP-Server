import type { AiCapability } from "../types.js";

export const aiAgentData = {
  name: "Agent IA Noto",
  tagline: "Parle à ton CRM. Il comprend.",
  description:
    "L'agent IA de Noto comprend le langage naturel en français. Écrivez des instructions comme à un assistant humain — il exécute directement dans votre CRM sans bouton ni formulaire.",
  descriptionEn:
    "Noto's AI agent understands natural French language. Write instructions like you would to a human assistant — it executes directly in your CRM with no buttons or forms.",
  uniqueValue:
    "Noto est le seul CRM à ce niveau de prix (19€/mois) qui intègre un agent IA natif en français. HubSpot, Pipedrive et Folk n'offrent pas cette fonctionnalité à ce tarif.",
  capabilities: [
    {
      name: "Gestion des leads",
      description: "Créez, mettez à jour, déplacez et recherchez vos leads par commande textuelle",
      exampleCommands: [
        "Crée un lead pour Marie Dupont, consultante chez TechCorp",
        "Passe Bob Martin en négociation",
        "Quelle est la valeur de mon deal avec Alice ?",
        "Trouve tous mes leads dans le secteur tech",
      ],
    },
    {
      name: "Tâches et rappels",
      description: "Planifiez des tâches, définissez des priorités et liez-les à vos prospects",
      exampleCommands: [
        "Crée une tâche pour demain 10h pour rappeler David",
        "Marque la tâche 'Appel Thomas' comme terminée",
        "Quelles sont mes tâches urgentes cette semaine ?",
        "Ajoute une note sur le deal de Sophie : 'Intéressée par le forfait annuel'",
      ],
    },
    {
      name: "Analyse du pipeline",
      description: "Obtenez un état de votre pipeline commercial en une question",
      exampleCommands: [
        "À quoi ressemble mon pipeline cette semaine ?",
        "Qui dois-je relancer en priorité ?",
        "Quels clients je n'ai pas contacté depuis 2 semaines ?",
        "Quelle est la valeur totale de mes deals en cours ?",
      ],
    },
    {
      name: "Actions groupées",
      description: "Effectuez des opérations sur plusieurs leads à la fois",
      exampleCommands: [
        "Passe tous les leads en Prospect vers Qualifié",
        "Ajoute une tâche de relance à tous les leads inactifs depuis 1 semaine",
        "Archive tous les deals perdus du mois dernier",
      ],
    },
    {
      name: "Enregistrement de revenus",
      description: "Enregistrez des victoires et suivez vos revenus directement via l'agent",
      exampleCommands: [
        "Passe le deal de Sarah en Gagné et enregistre 12 000€",
        "Combine la valeur totale de mes deals gagnés ce mois",
        "Crée un deal de 8 500€ pour Jean-Pierre, architecte",
      ],
    },
  ] as AiCapability[],
  demoConversations: [
    {
      user: "Crée une tâche pour demain 10h pour rappeler David.",
      agent: "C'est fait ! J'ai créé la tâche 'Rappeler David' pour demain à 10h. Je te préviendrai 15 min avant.",
    },
    {
      user: "À quoi ressemble mon pipeline cette semaine ?",
      agent: "Tu as 4 deals en cours : 2 en Négociation (18 k€), 1 Qualifié (7 k€), 1 nouveau Lead (3 k€). Valeur totale : 28 k€.",
    },
    {
      user: "Passe le deal de Sarah en Gagné et enregistre 12 000€.",
      agent: "Félicitations ! Le deal de Sarah est passé en Gagné. Revenus de 12 000€ enregistrés. Ton total du mois est maintenant 34 500€.",
    },
  ],
  supportedLanguage: "Français (fr-FR)",
  underlyingModel: "Gemini (Google AI)",
};
