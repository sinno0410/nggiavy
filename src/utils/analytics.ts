/**
 * Google Analytics 4.
 *
 * Dán Measurement ID (dạng "G-XXXXXXXXXX") vào GA_MEASUREMENT_ID bên dưới.
 * Để trống thì không tải Google Analytics.
 *
 * Trang dùng History API khi chuyển project, nên GA4 (Enhanced measurement →
 * "Page changes based on browser history events") tự ghi nhận mỗi trang project là một page_view.
 */
export const GA_MEASUREMENT_ID = "G-4JQF5JEJKJ";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;

  // Load the GA library only after the page has finished loading, so it never competes with
  // the first paint. Events queued before that are kept in dataLayer and sent once it arrives.
  const loadScript = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  };
  const idle = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void })
    .requestIdleCallback;
  const schedule = () => (idle ? idle(loadScript, { timeout: 4000 }) : window.setTimeout(loadScript, 1500));
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  trackConversionClicks();
}

/** Sends a GA4 event (no-op when analytics is off). */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  window.gtag?.("event", name, params);
}

/**
 * Records the clicks a recruiter makes: CV download / view and contact links (email, LinkedIn, Zalo).
 * In GA4 they appear under Reports → Engagement → Events as
 * cv_download, cv_view and contact_click (parameter "method").
 */
function trackConversionClicks() {
  const where = (el: Element) =>
    el.closest("footer")
      ? "footer"
      : el.closest(".contact")
        ? "contact"
        : el.closest(".hero")
          ? "hero"
          : el.closest(".header, header")
            ? "header"
            : "page";

  const handle = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!link) return;
    const href = link.getAttribute("href") ?? "";
    const base = {
      language: document.documentElement.lang || "vi",
      location: where(link),
      page_path: window.location.pathname,
    };

    if (/\/cv\/.+\.pdf$/i.test(href)) {
      trackEvent("cv_download", { ...base, file_name: href.split("/").pop() ?? "" });
    } else if (href.includes("canva.com")) {
      trackEvent("cv_view", base);
    } else if (href.startsWith("mailto:")) {
      trackEvent("contact_click", { ...base, method: "email" });
    } else if (href.includes("linkedin.com")) {
      trackEvent("contact_click", { ...base, method: "linkedin" });
    } else if (href.includes("zalo.me")) {
      trackEvent("contact_click", { ...base, method: "zalo" });
    }
  };

  document.addEventListener("click", handle, { capture: true });
  // middle-click / "open in new tab"
  document.addEventListener("auxclick", handle, { capture: true });
}
