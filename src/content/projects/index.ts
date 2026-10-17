import type { Locale } from "../../i18n/types";

export const projectIds = ["mekong", "semtek", "timeo", "ebuzz", "sic", "freelance", "hatmuoi", "research"];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

/**
 * Project content is split into one small chunk per page (loaded on demand) so it no longer
 * weighs down the first load of the home page. Each entry is a loader: `await loader()` → module.
 */
export const projectModules = {
  vi: simplifyModules(import.meta.glob("./vi/*.ts")),
  en: simplifyModules(import.meta.glob("./en/*.ts")),
} as const satisfies Record<Locale, Record<string, any>>;

/** Warm the cache for every project of a language, so opening a project stays instant. */
export const prefetchProjects = (locale: Locale) => {
  for (const loader of Object.values(projectModules[locale])) {
    (loader as () => Promise<unknown>)().catch(() => {});
  }
};
