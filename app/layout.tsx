import type { Metadata } from "next";
import { Aleo, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { themeInitScript } from "@/lib/theme";

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://ux-go-studio.vercel.app";
const siteTitle = "UX&GO Studio — Sacha Busuttil, UX/UI Designer";
const siteDescription =
  "UX&GO Studio, le studio de design produit de Sacha Busuttil : UX/UI design, identité de marque et développement frontend pour startups, PME et institutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — UX&GO Studio",
  },
  description: siteDescription,
  keywords: [
    "UX design",
    "UI design",
    "design produit",
    "identité de marque",
    "développement frontend",
    "UX&GO Studio",
    "Sacha Busuttil",
  ],
  authors: [{ name: "Sacha Busuttil", url: "https://www.linkedin.com/in/sachabusuttil/" }],
  creator: "Sacha Busuttil",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "UX&GO Studio" }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Sacha Busuttil",
    jobTitle: "UX/UI Designer",
    email: "mailto:sacha.busuttil.pro@gmail.com",
    url: siteUrl,
    sameAs: ["https://www.linkedin.com/in/sachabusuttil/"],
    worksFor: {
      "@type": "Organization",
      name: "UX&GO Studio",
      url: siteUrl,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${aleo.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
