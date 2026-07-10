import RevealOnScroll from "@/components/animation/RevealOnScroll";
import { features } from "@/lib/data/features";

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-4xl font-bold italic tracking-tight md:text-5xl">
          Ce que nous faisons
        </h2>
        <p className="mt-3 text-muted">
          Un aperçu rapide de ce sur quoi nous passons le plus de temps.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }, index) => (
          <RevealOnScroll key={title} delay={index * 0.05}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-muted transition-colors group-hover:text-accent">
                <Icon size={20} />
              </span>
              <p className="mt-4 font-medium">{title}</p>
              <p className="mt-1.5 text-sm text-muted">{description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
