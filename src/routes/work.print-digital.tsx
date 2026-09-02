import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, PaperCard } from "@/components/paper";
import { printDigitalMediaItems } from "@/lib/portfolio-content";

const title = "Print & Digital Media — Marketing Coordinator Portfolio";
const description =
  "Flyers, postcards, catalogs, and digital assets designed and produced.";

export const Route = createFileRoute("/work/print-digital")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrintDigitalMedia,
});

function PrintDigitalMedia() {
  // Group items by type
  const groupedItems = printDigitalMediaItems.reduce(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    },
    {} as Record<string, typeof printDigitalMediaItems>,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <SectionHeading kicker="Portfolio" title="Print & Digital Media" />
      <p className="text-base text-foreground mb-4">
        Flyers, postcards, product catalogs, and other print and digital assets designed for brand campaigns and marketing initiatives.
      </p>

      {Object.entries(groupedItems).map(([type, items]) => (
        <div key={type} className="mb-16">
          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
              >
                {/* Canva Embed */}
                {item.media.type === "canva" && (
                  <>
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
                  </>
                )}

                {/* Other media types */}
                {item.media.type === "image" && (
                  <PaperCard>
                    <div className="mb-4">
                      <h3 className="font-display text-xl tracking-wide text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <img
                      src={item.media.src}
                      alt={item.media.alt || item.title}
                      className="w-full h-auto rounded-sm"
                    />
                  </PaperCard>
                )}

                {item.media.type === "pdf" && (
                  <PaperCard>
                    <div className="mb-4">
                      <h3 className="font-display text-xl tracking-wide text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <iframe
                      src={item.media.src}
                      title={item.title}
                      className="w-full h-[600px] border-0 rounded-sm"
                      allowFullScreen
                    />
                  </PaperCard>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
