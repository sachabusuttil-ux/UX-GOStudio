export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  coverGradient?: string;
  coverImage?: string;
  liveUrl?: string;
  galleryDevice?: "web" | "phone";
  gallery: { gradient?: string; image?: string; caption: string; device?: "web" | "phone" }[];
  sections?: { heading: string; body?: string; bullets?: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "5-pourcent-consulting",
    title: "5%",
    tagline: "Identité visuelle et site web boosté par l'IA",
    description:
      "Ce projet a été conçu comme une expérimentation concrète de workflow augmenté par l'IA, avec un objectif clair : produire un site performant, rapidement, sans sacrifier la qualité UX.",
    tags: ["Site web", "UX", "IA"],
    year: "2026",
    role: "UX / UI / Dev IA",
    coverImage: "/projects/five-percent/preview.png",
    liveUrl: "https://5pourcent.consulting/",
    gallery: [
      { image: "/projects/five-percent/homepage-full.png", caption: "Page d'accueil" },
      { image: "/projects/five-percent/wireframe-full.png", caption: "Wireframe basse fidélité" },
      { image: "/projects/five-percent/brand-identity.png", caption: "Direction artistique" },
    ],
    sections: [
      {
        heading: "Objectifs",
        bullets: [
          "Créer un site différenciant dans un marché saturé",
          "Clarifier une proposition de valeur forte",
          "Maximiser la conversion",
          "Réduire drastiquement le temps de production grâce à l'IA",
          "Tester une approche “AI-assisted product design”",
        ],
      },
      {
        heading: "Problématique",
        body: "Comment créer un site à forte conversion en intégrant l'IA comme levier de productivité sans dégrader la qualité ?",
      },
      {
        heading: "Rôle de l'IA dans le projet",
        bullets: [
          "IA comme copilote stratégique",
          "Génération et itération de propositions de valeur",
          "Exploration rapide de différents positionnements",
          "Aide à la structuration du discours",
          "IA pour le développement (Cursor)",
          "Génération de code, debug rapide, accélération du build",
        ],
      },
      {
        heading: "Wireframe et maquette",
        body: "La phase de conception sur Figma a permis de structurer rapidement le produit, en passant d'abord par des wireframes low-fidelity pour poser les bases du parcours utilisateur et de l'architecture de l'information. Cette étape s'est appuyée sur une exploration rapide de plusieurs layouts et hiérarchies de contenu, notamment accélérée par l'IA pour générer différentes pistes et challenger les choix. Une fois la structure validée, les maquettes high-fidelity ont été réalisées en intégrant la direction artistique, le ton de la marque et les enjeux de conversion.",
      },
      {
        heading: "Développement sur Cursor",
        body: "Le site a été développé avec Cursor, utilisé comme copilote pour générer du code, accélérer le build et itérer rapidement. Cette approche a permis de passer rapidement de la conception à la mise en ligne, tout en gardant le contrôle sur la qualité et l'optimisation du rendu final.",
      },
      {
        heading: "Résultat final",
        bullets: [
          "Site fonctionnel et performant",
          "Cohérence entre branding, UX et conversion",
          "Production accélérée",
        ],
      },
      {
        heading: "Impact de l'IA sur le projet",
        bullets: [
          "Réduction du temps de production",
          "Augmentation du nombre d'itérations",
          "Amélioration de la qualité du copywriting",
          "Exploration plus large des solutions",
          "L'IA n'a pas remplacé le designer, elle a augmenté sa capacité d'exécution et de réflexion",
        ],
      },
    ],
  },
  {
    slug: "nutri-ai",
    title: "Nutri AI",
    tagline: "Application iOS de suivi nutritionnel propulsée par un agent IA",
    description:
      "Nutri AI est une application mobile iOS qui simplifie radicalement le suivi alimentaire. L'utilisateur décrit ou photographie son repas : un agent IA identifie les aliments, puis calcule automatiquement le total de calories et la répartition des macronutriments (protéines, glucides, lipides). Au-delà du comptage, l'agent devient un véritable coach : il délivre des conseils nutritionnels personnalisés et génère des programmes sportifs adaptés aux objectifs de chacun.",
    tags: ["Application mobile", "UX", "IA"],
    year: "2026",
    role: "UX/UI + Dev no-code",
    coverImage: "/projects/nutri-ai/preview-poster-v2.png",
    galleryDevice: "phone",
    gallery: [
      { image: "/projects/nutri-ai/onboarding-dark.png", caption: "Onboarding" },
      { image: "/projects/nutri-ai/goal-dark.png", caption: "Objectif journalier" },
      { image: "/projects/nutri-ai/chat-dark.png", caption: "Agent IA — Chat" },
      { image: "/projects/nutri-ai/onboarding-light.png", caption: "Onboarding — light mode" },
      { image: "/projects/nutri-ai/goal-light.png", caption: "Objectif journalier — light mode" },
      { image: "/projects/nutri-ai/chat-light.png", caption: "Agent IA — Chat — light mode" },
      { image: "/projects/nutri-ai/brand-board-dark.png", caption: "Identité de marque — dark mode", device: "web" },
      { image: "/projects/nutri-ai/brand-board-light.png", caption: "Identité de marque — light mode", device: "web" },
    ],
    sections: [
      {
        heading: "Le constat",
        bullets: [
          "Compter ses calories à la main est fastidieux et vite abandonné",
          "Les données nutritionnelles sont dispersées et peu lisibles",
          "Les conseils génériques ne tiennent pas compte des objectifs réels",
          "Nutrition et activité physique restent traitées séparément",
        ],
      },
      {
        heading: "Les objectifs",
        bullets: [
          "Rendre le suivi instantané grâce à l'IA (photo ou langage naturel)",
          "Centraliser calories & macros dans un tableau de bord clair",
          "Offrir des conseils personnalisés selon le profil de l'utilisateur",
          "Réunir alimentation et sport dans une même expérience",
        ],
      },
      {
        heading: "Les parcours utilisateurs",
        body: "Nous avons commencé par cartographier les flux clés de l'application afin d'aligner chaque écran sur un besoin utilisateur précis. Le scénario central — enregistrer un repas via l'agent IA en quelques secondes — a servi de colonne vertébrale à toute la conception, garantissant une expérience fluide et sans friction.",
      },
      {
        heading: "Les wireframes",
        body: "Traduction des parcours en structure d'écrans basse fidélité : hiérarchie de l'information, zones d'action et navigation, avant tout travail visuel — dashboard (bilan du jour & anneau de calories), saisie IA (chat / photo du repas), détail macros (répartition & historique).",
      },
      {
        heading: "Les maquettes haute fidélité",
        body: "Application de la charte UX&GO Studio — palette navy / teal / sky, typographies Montserrat & Aleo — au service d'une lecture claire des données nutritionnelles.",
      },
      {
        heading: "Le développement no-code avec l'IA",
        body: "Nous avons transformé les maquettes en prototype fonctionnel sans écrire de code, en pilotant des outils d'IA générative — de la génération d'interface à l'intégration de la logique de l'agent nutritionnel.",
        bullets: [
          "Prompt & génération — description des écrans et de la logique en langage naturel",
          "Assemblage — composition des interfaces à partir des maquettes UI",
          "Intégration IA — branchement de l'agent : calcul calories, macros, conseils",
          "Test & itération — boucles rapides pour affiner l'expérience réelle",
        ],
      },
      {
        heading: "Les fonctionnalités clés",
        bullets: [
          "Comptage automatique — l'agent IA identifie les aliments et calcule le total de calories ingérées, en un instant",
          "Suivi des macros — répartition claire des protéines, glucides et lipides, visualisée jour après jour",
          "Conseils personnalisés — des recommandations nutritionnelles adaptées au profil et aux objectifs de l'utilisateur",
          "Programme sportif — un plan d'entraînement sur-mesure, généré pour compléter l'approche alimentaire",
        ],
      },
      {
        heading: "Résultats & apprentissages",
        bullets: [
          "4 étapes maîtrisées, de la recherche au prototype",
          "100% no-code — prototype fonctionnel via l'IA",
          "1 expérience unifiée — nutrition + sport réunis",
        ],
      },
      {
        heading: "Ce que nous en retenons",
        bullets: [
          "Un parcours utilisateur solide accélère tout le reste, du wireframe au dev",
          "Le no-code assisté par IA permet de matérialiser une vision produit très vite",
          "Concevoir pour un agent IA demande de penser conversation autant qu'interface",
        ],
      },
    ],
  },
  {
    slug: "next2you",
    title: "Next2You",
    tagline: "Refonte de l'identité visuelle de marque",
    description:
      "Next2You est une entreprise spécialisée dans la location de voitures et d'utilitaires. Leur identité visuelle initiale manquait de clarté et ne reflétait pas pleinement leur positionnement dans un secteur compétitif, où la confiance, la mobilité et la proximité avec les clients sont essentielles. L'objectif de ce projet était de moderniser et renforcer l'impact visuel de la marque, tout en mettant en avant son expertise dans la mobilité et son accessibilité à tous types de clients.",
    tags: ["Identité de marque", "Site vitrine"],
    year: "2025",
    role: "Direction artistique",
    coverImage: "/projects/next2you/preview-wide.png",
    liveUrl: "https://next2-you-rodr.vercel.app/",
    gallery: [
      { image: "/projects/next2you/brand-board.png", caption: "Système d'identité visuelle" },
    ],
    sections: [
      {
        heading: "Objectif du projet",
        bullets: [
          "Redéfinir une identité visuelle cohérente et reconnaissable",
          "Créer un logo impactant qui illustre le mouvement, la fiabilité et la proximité",
          "Développer un système graphique flexible, déclinable sur les supports digitaux et physiques (site web, signalétique, véhicules, documents commerciaux…)",
        ],
      },
      {
        heading: "Processus de création",
        body: "Le travail de conception s'est articulé autour de plusieurs étapes :",
        bullets: [
          "Analyse du positionnement et de la concurrence pour identifier les codes graphiques du secteur",
          "Recherche de symboles liés à la mobilité, au déplacement et à la proximité",
          "Exploration typographique et chromatique afin d'allier dynamisme et professionnalisme",
          "Construction du logo final : une synthèse entre mouvement, direction et lien humain",
        ],
      },
      {
        heading: "Résultat",
        body: "La nouvelle identité de Next2You renforce la perception de marque, en la positionnant comme un acteur moderne, fiable et proche de ses clients. Le logo incarne désormais le mouvement, la fluidité et la confiance, tout en restant facilement identifiable et mémorable.",
      },
    ],
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
