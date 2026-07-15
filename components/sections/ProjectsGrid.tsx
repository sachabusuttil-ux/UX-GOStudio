"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { allTags, projects } from "@/lib/data/projects";
import FilterPills from "@/components/ui/FilterPills";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealOnScroll from "@/components/animation/RevealOnScroll";

const ALL = "Tous";
const filterOptions = [ALL, ...allTags];

export default function ProjectsGrid() {
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL
      ? projects
      : projects.filter((project) => project.tags.includes(active));

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <RevealOnScroll className="flex flex-col items-center gap-6 text-center">
        <div>
          <h2 className="font-heading text-4xl font-bold italic tracking-tight md:text-5xl">
            Découvrir nos projets
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Quelques projets sélectionnés.
          </p>
        </div>

        <FilterPills options={filterOptions} active={active} onChange={setActive} />
      </RevealOnScroll>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
