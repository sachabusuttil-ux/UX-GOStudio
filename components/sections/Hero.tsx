"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, PenTool, Palette, Sparkles } from "lucide-react";
import Magnetic from "@/components/animation/Magnetic";
import { cn } from "@/lib/utils";

const lines = ["Studio design", "concevant des interfaces", "qui prennent vie."];

const badges = [
  {
    icon: PenTool,
    color: "bg-violet-500",
    shadow: "139, 92, 246",
    top: "10%",
    left: "4%",
    rotate: -8,
  },
  {
    icon: Palette,
    color: "bg-orange-400",
    shadow: "251, 146, 60",
    top: "62%",
    left: "8%",
    rotate: 6,
  },
  {
    icon: Layers,
    color: "bg-emerald-500",
    shadow: "16, 185, 129",
    top: "16%",
    left: "90%",
    rotate: 10,
  },
  {
    icon: Code2,
    color: "bg-blue-500",
    shadow: "59, 130, 246",
    top: "64%",
    left: "92%",
    rotate: -6,
  },
  {
    icon: Sparkles,
    color: "bg-pink-500",
    shadow: "236, 72, 153",
    top: "2%",
    left: "48%",
    rotate: 4,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line", {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
      })
        .from(
          ".hero-fade",
          { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 overflow-hidden px-6 pt-40 pb-12 text-center md:pt-48"
    >
      {badges.map(({ icon: Icon, color, shadow, top, left, rotate }, index) => (
        <div
          key={index}
          className="animate-float absolute hidden md:block"
          style={{
            top,
            left,
            animationDuration: `${3.5 + index * 0.4}s`,
            animationDelay: `${0.6 + index * 0.15}s`,
          }}
        >
          <motion.div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl text-white",
              color
            )}
            style={{ boxShadow: `0 18px 30px -8px rgba(${shadow}, 0.55)` }}
            initial={{ opacity: 0, scale: 0.6, rotate }}
            animate={{ opacity: 1, scale: 1, rotate }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
          >
            <Icon size={22} />
          </motion.div>
        </div>
      ))}

      <h1 className="font-heading max-w-3xl text-5xl font-bold italic tracking-tight md:text-7xl">
        {lines.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span className="hero-line block">{line}</span>
          </span>
        ))}
      </h1>

      <p className="hero-fade max-w-xl text-lg text-muted">
        Nous concevons et développons des produits numériques de bout en bout
        — des premiers concepts aux interfaces animées et abouties.
      </p>

      <div className="hero-fade flex flex-col items-center gap-3 sm:flex-row">
        <Magnetic>
          <Link
            href="#work"
            className="font-heading rounded-full bg-accent px-6 py-3 text-sm font-bold italic text-accent-foreground transition-opacity hover:opacity-90"
          >
            Voir nos projets
          </Link>
        </Magnetic>

        <Magnetic>
          <Link
            href="#contact"
            className="font-heading inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold italic text-foreground transition-colors hover:bg-pill"
          >
            Nous contacter
            <ArrowRight size={14} />
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}
