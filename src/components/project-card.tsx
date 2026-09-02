import { useState } from "react";
import { X } from "lucide-react";
import type { ProjectItem } from "@/lib/portfolio-content";

export function ProjectCard({ item }: { item: ProjectItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden rounded-sm border border-ink/20 bg-card shadow-[3px_4px_0_-1px_oklch(0.885_0.018_80)] transition-all hover:shadow-[6px_8px_0_-1px_oklch(0.885_0.018_80)] hover:-translate-y-1"
      >
        <div className="aspect-video overflow-hidden bg-card/50">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="border-t border-ink/20 bg-card p-3">
          <p className="text-xs uppercase tracking-[0.1em] text-ink/60 mb-1">
            {item.type}
          </p>
          <h3 className="font-display text-sm tracking-wide text-foreground line-clamp-2">
            {item.title}
          </h3>
        </div>
      </button>

      {isOpen && (
        <ProjectModal
          item={item}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function ProjectModal({
  item,
  onClose,
}: {
  item: ProjectItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-4xl w-full bg-card rounded-sm shadow-2xl overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-sm bg-primary p-2 text-primary-foreground hover:bg-primary/90"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70 mb-2">
            {item.type}
          </p>
          <h2 className="font-display text-3xl tracking-wide text-foreground mb-6">
            {item.title}
          </h2>

          <div className="bg-ink/5 rounded-sm overflow-hidden">
            {item.media.type === "image" && (
              <img
                src={item.media.src}
                alt={item.media.alt || item.title}
                className="w-full h-auto"
              />
            )}

            {item.media.type === "pdf" && (
              <iframe
                src={item.media.src}
                title={item.title}
                className="w-full h-[600px] border-0"
                allowFullScreen
              />
            )}

            {item.media.type === "video" && (
              <iframe
                src={item.media.src}
                title={item.title}
                className="w-full aspect-video border-0"
                allowFullScreen
              />
            )}

            {item.media.type === "canva" && (
              <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.25%", overflow: "hidden" }}>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
