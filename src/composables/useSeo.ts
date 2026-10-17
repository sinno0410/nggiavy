import { watch } from "vue";
import seo from "../content/seo.json";
import { locale } from "../i18n/store";
import { path } from "./useRouteObserver";

type SeoEntry = { title: string; description: string };
const pages = seo.pages as Record<string, Record<"vi" | "en", SeoEntry>>;

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector<HTMLElement>(selector);
  if (el) el.setAttribute(attr, value);
};

/** Keeps the document title, description, canonical and Open Graph tags in sync with the current page and language. */
export const useSeo = () => {
  watch(
    [path, locale],
    ([currentPath, currentLocale]) => {
      if (typeof document === "undefined") return;
      const cleanPath = currentPath.replace(/\/+$/, "") || "/";
      const lang = currentLocale === "en" ? "en" : "vi";
      const entry = pages[cleanPath]?.[lang] ?? pages["/"]![lang];
      const url = `${seo.site}${cleanPath === "/" ? "/" : cleanPath}`;
      const hasLangParam = new URLSearchParams(window.location.search).has("lang");

      document.title = entry.title;
      setMeta('meta[name="description"]', "content", entry.description);
      setMeta('meta[property="og:title"]', "content", entry.title);
      setMeta('meta[property="og:description"]', "content", entry.description);
      setMeta('meta[name="twitter:title"]', "content", entry.title);
      setMeta('meta[name="twitter:description"]', "content", entry.description);
      setMeta('meta[property="og:url"]', "content", url);
      setMeta('meta[property="og:locale"]', "content", lang === "en" ? "en_US" : "vi_VN");
      setMeta('link[rel="canonical"]', "href", hasLangParam ? `${url}?lang=${lang}` : url);
      setMeta('link[hreflang="vi"]', "href", `${url}?lang=vi`);
      setMeta('link[hreflang="en"]', "href", `${url}?lang=en`);
      setMeta('link[hreflang="x-default"]', "href", url);
    },
    { immediate: true },
  );
};
