// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Netlify's server output can't be loaded by the build-time prerender pass,
// so on Netlify pages render through its server function instead.
const isNetlifyBuild = process.env.NITRO_PRESET === "netlify" || process.env.NETLIFY === "true";

export default defineConfig({
  // Keep external hosts' publish directory aligned with netlify.toml.
  // Lovable retains its own pinned output layout.
  nitro: {
    output: { publicDir: "dist/client" },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: [{ path: "/" }],
    prerender: { enabled: !isNetlifyBuild, autoStaticPathsDiscovery: false },
  },
});
