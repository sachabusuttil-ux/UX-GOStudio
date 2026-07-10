"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FilterPills({
  options,
  active,
  onChange,
}: {
  options: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-full bg-pill p-1">
      {options.map((option) => {
        const isActive = option === active;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive ? "text-foreground" : "text-muted hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 rounded-full bg-surface-2 shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{option}</span>
          </button>
        );
      })}
    </div>
  );
}
