import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { FolderTabs, MobileTabs } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import creamBg from "@/assets/cream-backdrop.jpg";
import kraftTex from "@/assets/kraft-texture.jpg";
import paperclip from "@/assets/paperclip.png";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-ink/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-ink/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-h-screen px-3 py-6 font-sans text-ink sm:px-8 sm:py-12"
        style={{ backgroundImage: `url(${creamBg})`, backgroundSize: "620px auto" }}
      >
        <MobileTabs />

        <div className="relative mx-auto flex w-full max-w-[105rem] items-stretch">
          {/* White paper sheet peeking from behind, angled to the left */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 rounded-[0.4rem] bg-card shadow-[0_10px_30px_-12px_oklch(0.3_0.03_55_/_55%)]"
            style={{ transform: "rotate(-2.2deg) translateX(-1.5rem) translateY(0.75rem)" }}
          />
          {/* Folder face */}
          <div
            className="folder-face kraft-shade relative z-10 min-h-[70vh] flex-1"
            style={{ backgroundImage: `url(${kraftTex})`, backgroundSize: "620px auto" }}
          >
            <main className="relative pt-14 sm:pt-16">
              {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
              <Outlet />
            </main>
            <SiteFooter />
          </div>

          <FolderTabs />

          <img
            src={paperclip}
            alt=""
            aria-hidden
            width={576}
            height={1152}
            className="pointer-events-none absolute -top-10 right-24 z-30 h-40 w-auto rotate-6 drop-shadow-[0_8px_8px_rgba(60,40,20,0.4)] sm:right-40 sm:h-52"
          />
        </div>

      </div>
    </QueryClientProvider>
  );
}

