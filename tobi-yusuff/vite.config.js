import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = process.env.VERCEL === "1";

export default defineConfig(async () => {
  const rollupPlugins = [];

  if (!isVercel) {
    const { default: prerender } = await import("@prerenderer/rollup-plugin");
    const { default: PuppeteerRenderer } = await import("@prerenderer/renderer-puppeteer");

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
          "/insights/hidden-economics-off-plan",
          "/insights/beyond-remittances",
          "/insights/unlocking-nigeria-real-estate",
          "/insights/nigerias-election-cycle-and-early-signals",
          "/insights/when-oil-shocks-reach-nigeria",
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