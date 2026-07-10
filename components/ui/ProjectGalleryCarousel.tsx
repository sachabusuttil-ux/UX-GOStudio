"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

export default function ProjectGalleryCarousel({
  gallery,
  liveUrl,
  device = "web",
}: {
  gallery: Project["gallery"];
  liveUrl?: string;
  device?: "web" | "phone";
}) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (gallery.length === 0) return null;

  const goTo = (next: number) => setIndex((next + gallery.length) % gallery.length);
  const current = gallery[index];
  const isPhone = (current.device ?? device) === "phone";
  const host = liveUrl ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : "galerie-projet";

  const screen = (
    <>
      <AnimatePresence initial={false} mode="wait">
        <motion.button
          key={index}
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group absolute inset-0 h-full w-full cursor-zoom-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-label={`Agrandir : ${current.caption}`}
        >
          {current.image ? (
            <Image
              src={current.image}
              alt={current.caption}
              fill
              sizes={isPhone ? "(min-width: 768px) 40vw, 90vw" : "(min-width: 768px) 66vw, 100vw"}
              className="object-cover object-top"
            />
          ) : (
            <div
              className={cn(
                "h-full w-full",
                current.gradient && `bg-gradient-to-br ${current.gradient}`
              )}
            />
          )}

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
            <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow-soft transition-all group-hover:scale-100 group-hover:opacity-100">
              <Expand size={18} />
            </span>
          </div>
        </motion.button>
      </AnimatePresence>
    </>
  );

  return (
    <>
      <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-soft">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          {!isPhone && (
            <div className="mx-auto flex max-w-xs flex-1 items-center justify-center truncate rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">
              {host}
            </div>
          )}
        </div>

        <div
          className={cn(
            "relative flex w-full items-center justify-center overflow-hidden bg-surface-2",
            isPhone ? "h-[560px] py-10 md:h-[640px]" : "h-[360px] md:h-[500px]"
          )}
        >
          {isPhone ? (
            <div className="relative h-full aspect-[9/19.5] overflow-hidden rounded-[2.5rem] border-[6px] border-foreground/80 bg-black shadow-soft">
              {screen}
            </div>
          ) : (
            <div className="relative h-full w-full">{screen}</div>
          )}

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Image précédente"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-soft backdrop-blur transition-transform hover:scale-105"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Image suivante"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-soft backdrop-blur transition-transform hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <p className="truncate text-sm text-muted">{current.caption}</p>

          {gallery.length > 1 && (
            <div className="flex shrink-0 gap-1.5">
              {gallery.map((item, i) => (
                <button
                  key={item.caption}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Aller à l'image ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-5 bg-accent" : "w-1.5 bg-foreground/15"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Fermer"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <motion.div
              className="relative h-full max-h-[85vh] w-full max-w-5xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              {current.image ? (
                <Image
                  src={current.image}
                  alt={current.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              ) : (
                <div
                  className={cn(
                    "h-full w-full rounded-2xl",
                    current.gradient && `bg-gradient-to-br ${current.gradient}`
                  )}
                />
              )}
            </motion.div>

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goTo(index - 1);
                  }}
                  aria-label="Image précédente"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goTo(index + 1);
                  }}
                  aria-label="Image suivante"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {current.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
