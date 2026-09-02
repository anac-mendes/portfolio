import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PaperCard, SectionHeading } from "@/components/paper";
import { workCategories } from "@/lib/portfolio-content";

export const Route = createFileRoute("/work/$category")({
  loader: ({ params }) => {
    const category = workCategories.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.name} Work — Marketing Coordinator Portfolio`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.blurb },
      ],
    };
  },
  component: WorkCategory,
});

function WorkCategory() {
  const { category } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-6">
      <Link to="/work" className="text-sm text-primary underline underline-offset-4">
        ← All work
      </Link>
      <SectionHeading kicker="Work" title={category.name} className="mt-4" />
      <p className="-mt-4 mb-8 max-w-xl text-ink/70">{category.blurb}</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <PaperCard key={i} className={i % 2 ? "rotate-1" : "-rotate-1"}>
            <div className="flex h-44 items-center justify-center border border-dashed border-ink/25 bg-card/55 text-xs uppercase tracking-widest text-ink/70">
              Placeholder {i + 1}
            </div>
            <p className="mt-3 text-sm text-ink/70">
              Add a title, short description and the asset for this piece.
            </p>
          </PaperCard>
        ))}
      </div>
    </div>
  );
}