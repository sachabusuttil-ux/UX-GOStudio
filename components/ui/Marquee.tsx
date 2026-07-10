import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  className,
  durationSeconds = 30,
}: {
  children: React.ReactNode;
  className?: string;
  durationSeconds?: number;
}) {
  return (
    <div
      className={cn(
        "marquee-track overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className="flex w-max animate-marquee items-center"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
