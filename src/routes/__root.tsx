import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nikhil R — Computer Science Engineering Student" },
      { name: "description", content: "Nikhil R — CSE student at Sri Krishna College of Engineering and Technology. Passionate about software development, problem solving, and AI." },
      { name: "author", content: "Nikhil R" },
      { property: "og:title", content: "Nikhil R — Computer Science Engineering Student" },
      { property: "og:description", content: "Nikhil R — CSE student at Sri Krishna College of Engineering and Technology. Passionate about software development, problem solving, and AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Nikhil R — Computer Science Engineering Student" },
      { name: "twitter:description", content: "Nikhil R — CSE student at Sri Krishna College of Engineering and Technology. Passionate about software development, problem solving, and AI." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5973d8e6-5cc3-4504-9645-99a96084f4a5/id-preview-7153c5b9--5abee3a3-42b4-4cb3-a1f7-1aea6bf6729b.lovable.app-1777788813531.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5973d8e6-5cc3-4504-9645-99a96084f4a5/id-preview-7153c5b9--5abee3a3-42b4-4cb3-a1f7-1aea6bf6729b.lovable.app-1777788813531.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
