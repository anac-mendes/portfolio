import { Link } from "@tanstack/react-router";
import kraftTex from "@/assets/kraft-texture.jpg";

export const navLinks = [
  { to: "/", label: "home", tint: "rgba(196, 101, 74, 0.55)" },
  { to: "/about", label: "about me", tint: "rgba(135, 168, 120, 0.55)" },
  { to: "/skills", label: "skills", tint: "rgba(216, 170, 84, 0.55)" },
  { to: "/work", label: "my work", tint: "rgba(122, 150, 176, 0.55)" },
  { to: "/case-studies", label: "case studies", tint: "rgba(190, 132, 140, 0.55)" },
  { to: "/connect", label: "connect", tint: "rgba(120, 140, 132, 0.55)" },
] as const;

function tabStyle(tint: string) {
  return {
    backgroundImage: `linear-gradient(0deg, ${tint}, ${tint}), url(${kraftTex})`,
    backgroundSize: "cover, 420px auto",
    backgroundBlendMode: "multiply, normal",
  } as const;
}

/** Vertical index tabs down the right edge of the folder (md and up). */
export function FolderTabs() {
  return (
    <nav
      aria-label="Sections"
      className="relative z-0 -ml-3 hidden shrink-0 flex-col justify-start gap-2 pt-14 md:flex"
    >
      {navLinks.map((l, i) => (
        <Link
          key={l.to}
          to={l.to}
          activeOptions={{ exact: l.to === "/" }}
          activeProps={{ className: "text-ink" }}
          inactiveProps={{ className: "text-ink/70 hover:text-ink" }}
          className="folder-tab kraft-shade group relative flex w-14 items-center justify-center py-6 pl-4 pr-1 transition-[padding] duration-200 hover:pl-6"
          style={tabStyle(l.tint)}
        >
          <span
            className="font-display text-lg leading-none tracking-[0.14em]"
            style={{ writingMode: "vertical-rl" }}
          >
            {l.label}
          </span>
          <span
            aria-hidden
            className="absolute left-2 top-6 h-1.5 w-1.5 rounded-full bg-ink/0 group-data-[status=active]:bg-ink"
          />
          <span className="sr-only">{`Section ${i + 1}`}</span>
        </Link>
      ))}
    </nav>
  );
}

/** Horizontal tab strip for small screens. */
export function MobileTabs() {
  return (
    <nav
      aria-label="Sections"
      className="mx-auto -mb-2 flex max-w-5xl flex-wrap gap-1 px-3 md:hidden"
    >
      {navLinks.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          activeOptions={{ exact: l.to === "/" }}
          activeProps={{ className: "text-ink" }}
          inactiveProps={{ className: "text-ink/70" }}
          className="folder-tab-h kraft-shade px-4 pb-3 pt-2 font-display text-sm leading-none tracking-[0.12em]"
          style={tabStyle(l.tint)}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return null;
}
