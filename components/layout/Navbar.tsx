"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Projets" },
  { href: "/#about", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50 px-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-2xl items-center justify-between gap-6 rounded-full py-3.5 pl-4 pr-3 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-500 ease-out",
          scrolled
            ? "border-border bg-surface/70 shadow-soft border"
            : "border border-transparent bg-surface/30"
        )}
      >
        <Link href="/" className="flex items-center">
          <Logo className="h-6 w-auto text-foreground" />
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />

          <Link
            href="/#contact"
            className="font-heading hidden whitespace-nowrap rounded-full bg-accent px-5 py-3 text-sm font-bold italic text-accent-foreground transition-opacity hover:opacity-90 md:inline-block"
          >
            Me contacter
          </Link>

          <ThemeToggle className="md:hidden" />

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full bg-surface-2 p-2.5 md:hidden"
            aria-label="Basculer le menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-auto mt-2 max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface/90 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-base font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
