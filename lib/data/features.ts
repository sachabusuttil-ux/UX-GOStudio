import type { LucideIcon } from "lucide-react";
import { Layers, Palette, Rocket, Sparkles, Wand2, Zap } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Palette,
    title: "Design produit",
    description: "Des wireframes à une interface soignée, prête pour la production.",
  },
  {
    icon: Sparkles,
    title: "Animations & micro-interactions",
    description: "Des animations qui apportent de la clarté, pas juste de la décoration.",
  },
  {
    icon: Layers,
    title: "Design systems",
    description: "Des composants et tokens réutilisables qui évoluent avec le produit.",
  },
  {
    icon: Zap,
    title: "Développement Frontend",
    description: "Des implémentations React précises au pixel près et performantes.",
  },
  {
    icon: Wand2,
    title: "Prototypage",
    description: "Des prototypes rapides et interactifs pour valider les idées tôt.",
  },
  {
    icon: Rocket,
    title: "Mise en production",
    description: "À l'aise pour porter une fonctionnalité du concept jusqu'au lancement.",
  },
];
