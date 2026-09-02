import { createFileRoute, Link } from "@tanstack/react-router";
import { PaperCard, SectionHeading } from "@/components/paper";
import { workCategories, printDigitalMediaItems, emailMarketingItems, socialMediaItems, videoItems, brandingItems } from "@/lib/portfolio-content";

const title = "My Work — Marketing Coordinator Portfolio";
const description =
  "Work samples across social media, branding, web, print & digital media, email marketing and blog content.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="Samples" title="My Work" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/work/print-digital" className="group">
          <PaperCard tape className="h-full transition-transform group-hover:rotate-0 -rotate-1">
            <div className="mb-4 flex h-32 items-center justify-center bg-gradient-to-br from-ink/10 to-primary/10 rounded-sm">
              <span className="text-3xl">📋</span>
            </div>
            <h2 className="font-display text-3xl tracking-wide text-primary">
              Print & Digital Media
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Flyers, catalogs, and promotional materials
            </p>
          </PaperCard>
        </Link>
        <Link to="/work/blog-content" className="group">
          <PaperCard tape className="h-full transition-transform group-hover:rotate-0 rotate-1">
            <div className="mb-4 flex h-32 items-center justify-center bg-gradient-to-br from-primary/10 to-ink/10 rounded-sm">
              <span className="text-3xl">📝</span>
            </div>
            <h2 className="font-display text-3xl tracking-wide text-primary">
              Blog Content
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Articles, blog posts, and editorial content
            </p>
          </PaperCard>
        </Link>
        <Link to="/work/email-marketing" className="group">
          <PaperCard tape className="h-full transition-transform group-hover:rotate-0 -rotate-1">
            <div className="mb-4 flex h-32 items-center justify-center bg-gradient-to-br from-ink/10 to-primary/10 rounded-sm">
              <span className="text-3xl">📧</span>
            </div>
            <h2 className="font-display text-3xl tracking-wide text-primary">
              Email Marketing
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Newsletters, campaigns, and automated workflows
            </p>
          </PaperCard>
        </Link>
        <Link to="/work/social-media" className="group">
          <PaperCard tape className="h-full transition-transform group-hover:rotate-0 rotate-1">
            <div className="mb-4 flex h-32 items-center justify-center bg-gradient-to-br from-primary/10 to-ink/10 rounded-sm">
              <span className="text-3xl">📱</span>
            </div>
            <h2 className="font-display text-3xl tracking-wide text-primary">
              Social Media
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Posts, reels, and short-form video content
            </p>
          </PaperCard>
        </Link>
        <Link to="/work/video" className="group">
          <PaperCard tape className="h-full transition-transform group-hover:rotate-0 -rotate-1">
            <div className="mb-4 flex h-32 items-center justify-center bg-gradient-to-br from-ink/10 to-primary/10 rounded-sm">
              <span className="text-3xl">🎬</span>
            </div>
            <h2 className="font-display text-3xl tracking-wide text-primary">
              Video
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Video content, demos, and visual storytelling
            </p>
          </PaperCard>
        </Link>
        <Link to="/work/branding" className="group">
          <PaperCard tape className="h-full transition-transform group-hover:rotate-0 rotate-1">
            <div className="mb-4 flex h-32 items-center justify-center bg-gradient-to-br from-primary/10 to-ink/10 rounded-sm">
              <span className="text-3xl">✨</span>
            </div>
            <h2 className="font-display text-3xl tracking-wide text-primary">
              Branding
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Identity systems, visual guidelines, and key visuals
            </p>
          </PaperCard>
        </Link>
      </div>
    </div>
  );
}