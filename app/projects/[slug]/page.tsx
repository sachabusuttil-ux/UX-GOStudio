import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/animation/RevealOnScroll";
import ProjectGalleryCarousel from "@/components/ui/ProjectGalleryCarousel";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const socialTitle = `${project.title} — ${project.tagline}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: socialTitle,
      description: project.description,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
      <RevealOnScroll>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Retour aux projets
        </Link>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-heading text-4xl font-bold italic tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted">
              {project.tagline}
            </p>
          </div>

          <dl className="flex gap-8 text-sm">
            <div>
              <dt className="text-muted">Rôle</dt>
              <dd className="mt-1 font-medium">{project.role}</dd>
            </div>
            <div>
              <dt className="text-muted">Année</dt>
              <dd className="mt-1 font-medium">{project.year}</dd>
            </div>
          </dl>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div
          className={cn(
            "relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-card)]",
            project.coverGradient && `bg-gradient-to-br ${project.coverGradient}`
          )}
        >
          {project.coverImage && (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          )}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-12 max-w-2xl">
        <p className="text-base leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-pill px-3 py-1 text-sm font-medium text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Voir le site en ligne
            <ArrowUpRight size={16} />
          </a>
        )}
      </RevealOnScroll>

      {project.sections && (
        <div className="mt-16 max-w-2xl space-y-10">
          {project.sections.map((section, index) => (
            <RevealOnScroll key={section.heading} delay={index * 0.05}>
              <h2 className="font-heading text-xl font-bold italic tracking-tight">
                {section.heading}
              </h2>
              {section.body && (
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-base leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </RevealOnScroll>
          ))}
        </div>
      )}

      <RevealOnScroll delay={0.1} className="mt-16">
        <ProjectGalleryCarousel
          gallery={project.gallery}
          liveUrl={project.liveUrl}
          device={project.galleryDevice}
        />
      </RevealOnScroll>
    </article>
  );
}
