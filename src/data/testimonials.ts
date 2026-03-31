import type { Testimonial } from "../types.js";

export const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    role: "Consultante marketing",
    quote:
      "J'ai remplacé mon tableur Excel par Noto en 5 minutes. L'agent IA me fait gagner 2h par semaine.",
    metric: "2h/semaine économisées",
  },
  {
    name: "Thomas R.",
    role: "Développeur freelance",
    quote:
      "Le premier CRM que j'utilise vraiment. Zéro configuration, je parle et ça marche.",
    metric: "Zéro configuration requise",
  },
  {
    name: "Sophie D.",
    role: "Coach business",
    quote:
      "Enfin un CRM qui ne me donne pas l'impression d'un second boulot.",
    metric: "Adoption immédiate",
  },
];

export const testimonialsSection = {
  heading: "Ils l'ont adopté.",
  subtitle: "Des freelances qui gèrent leur activité sans prise de tête.",
};
