import Link from "next/link";
import { Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";

const exploreLinks = [
  { label: "Projets", href: "/#work" },
  { label: "À propos", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const connectLinks = [
  { label: "Email", href: "mailto:sacha.busuttil.pro@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sachabusuttil/" },
];

const socialLinks = [
  { content: Mail, href: "mailto:sacha.busuttil.pro@gmail.com", label: "Email" },
  { content: "in", href: "https://www.linkedin.com/in/sachabusuttil/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="mx-4 mb-4 overflow-hidden rounded-3xl bg-footer text-footer-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-8 py-14 md:flex-row md:justify-between">
        <div>
          <Logo className="h-6 w-auto text-footer-foreground" />
          <p className="mt-3 max-w-xs text-sm text-footer-muted">
            Studio de design produit &amp; développement frontend, nous
            créons des interfaces qui prennent vie.
          </p>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ content: Content, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xs font-semibold text-footer-muted transition-colors hover:bg-white/10 hover:text-footer-foreground"
              >
                {typeof Content === "string" ? Content : <Content size={16} />}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-footer-muted">Explorer</p>
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-footer-muted">Réseaux</p>
            {connectLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 px-8 py-5 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} UX&amp;GO Studio. Tous droits réservés.</span>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-footer-foreground">
            Confidentialité
          </Link>
          <Link href="#" className="hover:text-footer-foreground">
            Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
