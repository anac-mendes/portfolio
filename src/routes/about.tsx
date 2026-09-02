import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PaperCard, SectionHeading, Pin, TapeStrip } from "@/components/paper";
import { contact } from "@/lib/portfolio-content";

const photo = "https://anac-mendes.github.io/portfolio/static/media/profilepic.0d42297bef85d6b59c03.png";

const title = "About Me — Marketing Coordinator Portfolio";
const description =
  "A quick bio, photo and downloadable resume for a marketing coordinator with design and web skills.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="Nice to meet you" title="About Me" />
      <div className="grid gap-10 md:grid-cols-[320px_1fr]">
        <div className="relative mx-auto w-full max-w-[320px] rotate-[-3deg] border border-border bg-card p-3 pb-14 shadow-[8px_10px_0_-2px_oklch(0.885_0.018_80)]">
          <TapeStrip className="left-1/2 top-0 -translate-x-1/2" />
          <img
            src={photo}
            alt="Ana's portrait"
            width={800}
            height={1000}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        <PaperCard pin className="rotate-[0.5deg]">
          <h2 className="font-display text-3xl tracking-wide text-primary">Quick bio</h2>
          <p className="mt-4 text-base leading-relaxed">
            I&apos;m Ana, a digital marketer who enjoys the mix of creativity and problem-solving. My background blends creative work in graphic design, web, and video with the more strategic and operational side of marketing, including reporting, automation, campaign strategy, and product development.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            My journey into digital marketing started as a hobby when I was a teenager and grew into a real interest in creating content and strategies that make an impact. I enjoy finding ways to connect brands with the right audience through thoughtful, well-rounded digital marketing.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            I like building marketing that not only looks good, but also drives measurable results. I&apos;m naturally curious and quick to pick up new tools, platforms, and ways of working.
          </p>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-display text-xl tracking-wide text-primary-foreground transition-transform hover:-rotate-1"
          >
            <Download className="h-4 w-4" /> Download resume
          </a>
        </PaperCard>
      </div>
    </div>
  );
}
