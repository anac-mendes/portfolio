import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/paper";
import { socialMediaItems } from "@/lib/portfolio-content";

const title = "Social Media — Marketing Coordinator Portfolio";
const description =
  "Social media posts, reels, and short-form video content across brand channels.";

export const Route = createFileRoute("/work/social-media")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SocialMedia,
});

function SocialMedia() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="Portfolio" title="Social Media" />
      <p className="text-base text-foreground mb-4">
        Posts, reels, and short-form video content designed to engage audiences and drive brand awareness across social channels.
      </p>

      <div className="space-y-8">
        {socialMediaItems.map((item) => (
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
