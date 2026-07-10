import { cn } from "@/lib/utils";

export default function LogoMark({
  letter = "S",
  className,
}: {
  letter?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-[0.55rem] bg-foreground text-sm font-bold text-background",
        className
      )}
    >
      {letter}
    </span>
  );
}
