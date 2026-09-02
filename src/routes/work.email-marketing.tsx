import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, PaperCard } from "@/components/paper";
import { emailMarketingItems } from "@/lib/portfolio-content";

const title = "Email Marketing — Marketing Coordinator Portfolio";
const description =
  "Newsletters, email campaigns, and automated workflows designed for engagement and conversion.";

export const Route = createFileRoute("/work/email-marketing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: EmailMarketing,
});

function EmailMarketing() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="Portfolio" title="Email Marketing" />
      <p className="text-base text-foreground mb-4">
        Newsletters, email campaigns, and marketing automation designed for high engagement, click-through rates, and conversions.
      </p>

      <div className="space-y-8">
        {emailMarketingItems.map((item) => (
          <div
            key={item.id}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56.2225%",
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none",
                  padding: 0,
                  margin: 0,
                }}
                src={item.media.src}
                allowFullScreen
              />
            </div>
            <p className="text-xs text-ink/60 mt-4">
              💡 Tip: Hover over the design to reveal navigation and zoom controls
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
