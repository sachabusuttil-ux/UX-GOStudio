export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Travailler avec cette personne a changé la donne pour notre produit — le niveau de soin apporté à chaque détail était évident.",
    name: "Charly B.",
    role: "CEO, Next2You",
    initial: "C",
  },
  {
    quote:
      "Rare de trouver quelqu'un d'aussi solide en design qu'en développement. Livré rapidement sans jamais rogner sur la qualité.",
    name: "Nassir E.",
    role: "CEO, Nutri AI",
    initial: "N",
  },
  {
    quote:
      "A transformé une idée vague en un produit abouti et animé en quelques semaines. Communication excellente du début à la fin.",
    name: "Ines M.",
    role: "CEO, Un Cookie d'Amour",
    initial: "I",
  },
  {
    quote:
      "Le soin apporté aux micro-interactions a rendu notre appli bien plus premium. Je recommande vivement.",
    name: "Charly B.",
    role: "Co-CEO, 5%",
    initial: "C",
  },
];
