import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, PaperCard } from "@/components/paper";

const title = "Blog Content — Marketing Coordinator Portfolio";
const description =
  "Articles, blog posts, and editorial content created and optimized for SEO.";

export const Route = createFileRoute("/work/blog-content")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BlogContent,
});

interface BlogItem {
  id: string;
  title: string;
  src: string;
}

const blogItems: BlogItem[] = [
  {
    id: "blog-posts",
    title: "Blog Posts",
    src: "https://www.canva.com/design/DAHT_HlZC7I/wFzTQ3XiCwgNwLd0o_T4bg/view?embed",
  },
];

function BlogContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="Portfolio" title="Blog Content" />
      <p className="text-base text-foreground mb-4">
        Articles, blog posts, and editorial content written and optimized for search engines and reader engagement.
      </p>

      <div className="space-y-8">
        {blogItems.map((item) => (
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
                src={item.src}
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
