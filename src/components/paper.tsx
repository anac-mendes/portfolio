import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pin({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute -top-4 left-6 h-8 w-6",
        className,
      )}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow/depth */}
      <ellipse cx="12" cy="30" rx="3" ry="1.5" fill="#00000015" />
      
      {/* Pin head - metallic look */}
      <circle cx="12" cy="8" r="5.5" fill="#C41E3A" />
      <circle cx="12" cy="8" r="5" fill="#E63946" />
      <circle cx="10.5" cy="6" r="1.5" fill="#ffffff" opacity="0.6" />
      
      {/* Pin shaft */}
      <rect x="11" y="12" width="2" height="15" fill="#4A5568" rx="1" />
      <rect x="11.3" y="12" width="1.4" height="15" fill="#2D3748" rx="0.7" />
      
      {/* Shaft highlight */}
      <rect x="11.1" y="12" width="0.6" height="15" fill="#ffffff" opacity="0.3" rx="0.3" />
      
      {/* Point */}
      <path d="M 11 27 L 12 31 L 13 27 Z" fill="#4A5568" />
    </svg>
  );
}

export function TapeStrip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 -translate-y-1/2 -rotate-2 bg-tape/80 shadow-sm",
        className,
      )}
    />
  );
}

export function BinderClip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute -top-3 left-8 h-7 w-5 rounded-sm border-2 border-primary/70 bg-primary/20",
        className,
      )}
    />
  );
}

export function PaperCard({
  children,
  className,
  tape = false,
  clip = false,
  pin = false,
}: {
  children: ReactNode;
  className?: string;
  tape?: boolean;
  clip?: boolean;
  pin?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-sm border border-ink/25 bg-card p-6 shadow-[6px_8px_0_-2px_oklch(0.885_0.018_80)]",
        className,
      )}
    >
      {tape ? <TapeStrip /> : null}
      {clip ? <BinderClip /> : null}
      {pin ? <Pin /> : null}
      {children}
    </div>
  );
}

export function SectionHeading({
  title,
  kicker,
  className,
}: {
  title: string;
  kicker?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      {kicker ? (
        <p className="mb-1 font-hand text-2xl text-primary/80">{kicker}</p>
      ) : null}
      <h1 className="font-display text-5xl tracking-wide text-primary sm:text-6xl">{title}</h1>
      <span aria-hidden className="mt-3 block h-1.5 w-28 -rotate-1 bg-tape" />
    </div>
  );
}

export function ToolChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-ink/25 bg-card/70 px-2.5 py-1 text-sm">
      <span aria-hidden className="h-2 w-2 rotate-45 bg-primary/70" />
      {label}
    </span>
  );
}

/** Real brand logo tile; the tool name appears on hover/focus. */
export function ToolLogo({ label, slug }: { label: string; slug?: string | undefined }) {
  const [failed, setFailed] = useState(!slug || slug === "");
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);
  const words = label.split(/[\s&]+/).filter(Boolean);
  const initials = (
    words.length > 1 ? words.slice(0, 2).map((w) => w[0]).join("") : label.slice(0, 2)
  ).toUpperCase();

  return (
    <span className="group relative flex flex-col items-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-sm border border-ink/20 bg-card/85 shadow-[3px_4px_0_-1px_oklch(0.885_0.018_80)] transition-transform duration-150 group-hover:-translate-y-0.5">
        {failed ? (
          <span className="font-display text-xl tracking-wide text-primary">{initials}</span>
        ) : (
          <img
            ref={imgRef}
            src={slug}
            alt={`${label} logo`}
            width={32}
            height={32}
            loading="lazy"
            className="h-8 w-8 object-contain"
            onError={() => setFailed(true)}
          />
        )}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute -bottom-6 whitespace-nowrap rounded-sm bg-ink px-2 py-0.5 text-xs text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
