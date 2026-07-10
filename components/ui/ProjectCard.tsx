"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-[var(--radius-card)] border border-border bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-soft"
      >
        <div
          className={cn(
            "relative aspect-[4/3] w-full overflow-hidden",
            project.coverGradient && `bg-gradient-to-br ${project.coverGradient}`
          )}
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="origin-center object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full origin-center transition-transform duration-500 ease-out group-hover:scale-105" />
          )}
        </div>

        <div className="flex items-start justify-between gap-4 p-5">
          <div>
            <h3 className="font-heading text-base font-bold italic tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pill px-2.5 py-1 text-xs font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
          />
        </div>
      </Link>
    </motion.div>
  );
}
