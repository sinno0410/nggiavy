import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import glsl from "vite-plugin-glsl";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import type { Plugin } from "vite";

type SeoEntry = { title: string; description: string };
type SeoData = { site: string; pages: Record<string, Record<"vi" | "en", SeoEntry>> };

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * After the build: writes one static HTML file per project (own title, description, canonical, hreflang)
 * so search engines and link previews see the right metadata before JavaScript runs, plus sitemap.xml.
 */
const seoPages = (): Plugin => ({
  name: "seo-pages",
  apply: "build",
  closeBundle() {
    const dist = resolve(process.cwd(), "dist");
    const seo = JSON.parse(readFileSync(resolve(process.cwd(), "src/content/seo.json"), "utf8")) as SeoData;
    const base = readFileSync(resolve(dist, "index.html"), "utf8");
    const home = seo.pages["/"]!.vi;
    const today = new Date().toISOString().slice(0, 10);

    for (const [path, meta] of Object.entries(seo.pages)) {
      if (path === "/") continue;
      const url = `${seo.site}${path}`;
      const { title, description } = meta.vi;
      const html = base
        .split(escapeAttr(home.title)).join(escapeAttr(title))
        .split(home.title).join(title)
        .split(escapeAttr(home.description)).join(escapeAttr(description))
        .split(home.description).join(description)
        .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
        .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
        .replace(/(hreflang="vi" href=")[^"]*"/, `$1${url}?lang=vi"`)
        .replace(/(hreflang="en" href=")[^"]*"/, `$1${url}?lang=en"`)
        .replace(/(hreflang="x-default" href=")[^"]*"/, `$1${url}"`)
        .replace(/<meta property="og:type" content="website" \/>/, '<meta property="og:type" content="article" />');
      const file = resolve(dist, `.${path}.html`);
      mkdirSync(resolve(file, ".."), { recursive: true });
      writeFileSync(file, html);
    }

    const urls = Object.keys(seo.pages)
      .map((path) => {
        const loc = `${seo.site}${path}`;
        return [
          "  <url>",
          `    <loc>${loc}</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <xhtml:link rel="alternate" hreflang="vi" href="${loc}?lang=vi" />`,
          `    <xhtml:link rel="alternate" hreflang="en" href="${loc}?lang=en" />`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`,
          `    <priority>${path === "/" ? "1.0" : "0.8"}</priority>`,
          "  </url>",
        ].join("\n");
      })
      .join("\n");
    writeFileSync(
      resolve(dist, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    );
  },
});

export default defineConfig({
  plugins: [
    seoPages(),
    vue(),
    glsl({
      include: ["**/*.glsl", "**/*.vert", "**/*.frag"],
      defaultExtension: "glsl",
      warnDuplicatedImports: false,
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".ogg", ".wav", ".glsl", ".ktx2"],
  },
  assetsInclude: ["**/*.svg", "**/*.gltf", "**/*.glb", "**/*.png", "**/*.jpg", "**/*.ktx2"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/assets/styles/mixins.scss";`,
      },
    },
  },
  build: {
    outDir: "./dist",
    sourcemap: false,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        assetFileNames: "assets/[hash].[ext]",
        entryFileNames: "chunks/[name]-[hash].js",
        chunkFileNames: "chunks/[hash].js",
      },
    },
  },
});
