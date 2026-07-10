import Marquee from "@/components/ui/Marquee";
import RevealOnScroll from "@/components/animation/RevealOnScroll";
import LogoMark from "@/components/ui/LogoMark";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <RevealOnScroll className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-heading text-4xl font-bold italic tracking-tight md:text-5xl">
          Ce qu&apos;on dit de nous
        </h2>
        <p className="mt-3 text-muted">
          Quelques mots de personnes avec qui nous avons travaillé.
        </p>
      </RevealOnScroll>

      <div className="mt-12">
        <Marquee durationSeconds={40}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="mx-3 flex w-80 shrink-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <LogoMark letter={t.initial} className="bg-surface-2 text-foreground" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
