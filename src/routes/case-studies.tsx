import { createFileRoute } from "@tanstack/react-router";
import { PaperCard, SectionHeading } from "@/components/paper";
import { caseStudies } from "@/lib/portfolio-content";

const title = "Case Studies — Marketing Coordinator Portfolio";
const description =
  "Marketing wins: organic traffic growth, campaign execution and customer experience improvements.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="Results" title="Case Studies" />
      <div className="space-y-8">
        {caseStudies.map((cs, i) => (
          <PaperCard key={cs.title} pin className={i % 2 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]"}>
            <h2 className="font-display text-4xl tracking-wide text-primary">{cs.title}</h2>
            
            {/* Images Section */}
            {cs.images && cs.images.length > 0 && (
              <div className="my-6 flex flex-wrap gap-4">
                {cs.images.map((img, idx) => (
                  <div key={idx} className="flex-1 min-w-[200px]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full rounded-sm border border-ink/15 object-cover shadow-[3px_4px_0_-1px_oklch(0.885_0.018_80)]"
                      loading="lazy"
                    />
                    {img.caption && (
                      <p className="mt-2 text-xs text-ink/60 italic">{img.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { label: "Challenge", body: cs.challenge },
                { label: "Action", body: cs.action },
                { label: "Result", body: cs.result },
              ].map((b) => (
                <div key={b.label} className="border-t-2 border-tape pt-3">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-ink/70">
                    {b.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </PaperCard>
        ))}
      </div>
    </div>
  );
}
