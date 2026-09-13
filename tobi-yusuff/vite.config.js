import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = process.env.VERCEL === "1";

// The prerender step runs the site through headless Chromium so search
// crawlers get real HTML for the key routes. The list of routes now derives
// from the generated insights registry so new articles are prerendered
// automatically without editing this file.
async function loadInsightRoutes() {
  try {
    const mod = await import("./src/generated/insights.js");
    return (mod.INSIGHT_SLUGS || []).map((slug) => `/insights/${slug}`);
  } catch {
    // The registry may not exist yet on a fresh clone; the `prebuild` npm
    // script generates it. On Vercel we skip prerender entirely.
    return [];
  }
}

export default defineConfig(async () => {
  const rollupPlugins = [];

  if (!isVercel) {
    const { default: prerender } = await import("@prerenderer/rollup-plugin");
    const { default: PuppeteerRenderer } = await import("@prerenderer/renderer-puppeteer");

    const insightRoutes = await loadInsightRoutes();

    rollupPlugins.push(
      prerender({
        routes: [
          "/",
          "/about",
          "/expertise",
          "/media",
          "/philanthropy",
          "/insights",
          "/contact",
          ...insightRoutes,
        ],
        renderer: new PuppeteerRenderer({
          headless: true,
          renderAfterTime: 2000,
        }),
      })
    );
  }

  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        plugins: rollupPlugins,
      },
    },
    server: {
      historyApiFallback: true,
    },
  };
});