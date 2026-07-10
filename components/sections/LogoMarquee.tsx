import Marquee from "@/components/ui/Marquee";
import RevealOnScroll from "@/components/animation/RevealOnScroll";
import { clientLogos } from "@/lib/data/logos";

export default function LogoMarquee() {
  return (
    <section className="border-y border-border py-12">
      <RevealOnScroll className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-muted">
          Ils nous ont fait confiance
        </p>
      </RevealOnScroll>

      <div className="mt-8">
        <Marquee durationSeconds={26}>
          {clientLogos.map((name) => (
            <span
              key={name}
              className="mx-8 text-xl font-bold tracking-tight text-muted/50 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
