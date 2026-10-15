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

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}
