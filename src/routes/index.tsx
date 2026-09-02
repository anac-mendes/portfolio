import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/portfolio-content";

const title = `${contact.name} — Marketing Coordinator Portfolio`;
const description =
  "Scrapbook-style portfolio of a marketing coordinator: campaigns, branding, web, email marketing and content work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const contents = [
  { to: "/about", label: "About me", note: "who I am, in short", page: "01" },
  { to: "/skills", label: "Skills & certifications", note: "tools, strengths, badges", page: "02" },
  { to: "/work", label: "My work", note: "six categories of samples", page: "03" },
  { to: "/case-studies", label: "Case studies", note: "marketing wins", page: "04" },
  { to: "/connect", label: "Connect", note: "let's collaborate", page: "05" },
] as const;

function Index() {
  return (
    <div>
      <article>
        <div className="relative">
          <div className="px-6 pb-6 pl-12 pt-6 sm:pl-24 sm:pr-12">
            <h1 className="font-display text-5xl leading-[0.9] tracking-wide text-foreground sm:text-7xl">
              Hi, I&apos;m Ana —<span className="block text-primary">a digital marketing specialist</span>
            </h1>

            <p className="mt-10 font-hand text-2xl text-primary">contents ↓</p>

            <ol className="mt-4 divide-y divide-ink/20 border-y border-ink/25">
              {contents.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="group flex items-baseline gap-4 py-4 transition-colors hover:bg-card/35"
                  >
                    <span className="font-hand text-xl text-primary/70">{c.page}</span>
                    <span className="font-display text-3xl tracking-wide text-foreground transition-colors group-hover:text-primary">
                      {c.label}
                    </span>
                    <span className="hidden flex-1 translate-y-[-3px] border-b border-dotted border-ink/30 sm:block" />
                    <span className="hidden font-hand text-lg text-ink/70 sm:inline">
                      {c.note}
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 self-center text-primary transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </li>
              ))}
            </ol>

            <p className="mt-8 font-hand text-xl text-ink/70">
              (tap any line to turn the page)
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
