import RevealOnScroll from "@/components/animation/RevealOnScroll";

const stack = [
  "Design Thinking",
  "Double Diamond",
  "Lean UX",
  "UX Metrics : NPS, CSAT",
  "OKRs",
  "MoSCoW",
  "A/B Testing",
  "Atomic Design",
  "User Centered Design",
];

export default function About() {
  return (
    <section id="about" className="bg-surface/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <RevealOnScroll>
          <h2 className="font-heading text-4xl font-bold italic tracking-tight md:text-5xl">
            À propos de nous
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Votre produit mérite une expérience sur-mesure, pensée pour vos
            utilisateurs. Institutions, Startups, PME, ou Freelances, nous
            nous adaptons à vos enjeux. Que vous partiez de zéro ou que vous
            ayez besoin d&apos;optimiser l&apos;existant, nous vous aidons à
            (re)penser votre site avec méthode, clarté et efficacité.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="text-sm font-medium text-muted">Méthodologies &amp; frameworks</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full bg-surface-2 px-3 py-1.5 text-sm font-medium shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
