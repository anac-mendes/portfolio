import { createFileRoute } from "@tanstack/react-router";
import { PaperCard, SectionHeading, ToolLogo } from "@/components/paper";
import {
  certifications,
  operationalSkills,
  softSkills,
  technicalSkills,
  toolIconSlugs,
  toolStack,
} from "@/lib/portfolio-content";

const title = "Skills & Certifications — Marketing Coordinator Portfolio";
const description =
  "Soft, operational and technical marketing skills, the platform stack I work in, and my certifications.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Skills,
});

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm">
      {items.map((i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="What I bring" title="Skills & Certifications" />

      <div className="grid gap-6 md:grid-cols-3">
        <PaperCard pin className="-rotate-1">
          <h2 className="font-display text-3xl tracking-wide text-primary">Soft Skills</h2>
          <List items={softSkills} />
        </PaperCard>
        <PaperCard pin className="rotate-1">
          <h2 className="font-display text-3xl tracking-wide text-primary">Operational</h2>
          <List items={operationalSkills} />
        </PaperCard>
        <PaperCard pin className="-rotate-1">
          <h2 className="font-display text-3xl tracking-wide text-primary">
            Technical & Platforms
          </h2>
          <List items={technicalSkills} />
        </PaperCard>
      </div>

      <h2 className="mt-16 font-display text-4xl tracking-wide text-foreground">The tool wall</h2>
      <PaperCard className="mt-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {toolStack.map((g) => (
            <div key={g.group}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-ink/70">{g.group}</h3>
              <div className="mt-3 flex flex-wrap gap-4">
                {g.tools.map((t) => (
                  <ToolLogo key={t} label={t} slug={toolIconSlugs[t]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PaperCard>

      <h2 className="mt-16 font-display text-4xl tracking-wide text-foreground">Certifications</h2>
      <PaperCard tape className="mt-6">
        <ul className="divide-y divide-ink/20">
          {certifications.map((c) => (
            <li key={c.name} className="flex flex-wrap items-baseline gap-x-3 py-3">
              <span className="font-medium">{c.name}</span>
              <span className="text-sm text-ink/70">{c.issuer}</span>
              <span className="ml-auto rounded-sm bg-tape/70 px-2 py-0.5 font-display text-lg tracking-wide">
                {c.year}
              </span>
            </li>
          ))}
        </ul>
      </PaperCard>
    </div>
  );
}
