import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/animation/Magnetic";
import RevealOnScroll from "@/components/animation/RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-surface px-6 py-24 text-center md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,92,53,0.18),transparent_70%)]" />

        <RevealOnScroll className="relative flex flex-col items-center gap-8">
          <h2 className="font-heading max-w-2xl text-4xl font-bold italic tracking-tight md:text-6xl">
            Un projet en tête ? Construisons quelque chose ensemble.
          </h2>

          <Magnetic>
            <Link
              href="mailto:sacha.busuttil.pro@gmail.com"
              className="font-heading inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold italic text-accent-foreground transition-opacity hover:opacity-90"
            >
              sacha.busuttil.pro@gmail.com
              <ArrowUpRight size={16} />
            </Link>
          </Magnetic>
        </RevealOnScroll>
      </div>
    </section>
  );
}
