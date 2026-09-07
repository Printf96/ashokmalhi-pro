/**
 * Centralized analytics: Google Analytics 4 (gtag.js) + Microsoft
 * Clarity. This is the single place either ID is written — no other
 * file references them directly — per the "no ID hardcoded in
 * multiple files" requirement.
 *
 * Both IDs are public client-side embed identifiers (every visitor's
 * page source contains them regardless of where they're defined in
 * source) — not secrets — so they're kept as plain constants here
 * rather than build-time environment variables. That also avoids a
 * real deployment footgun: an env-var-only approach silently ships
 * with analytics disabled if the variable isn't set on the hosting
 * platform (Render) at build time.
 *
 * SPA page_view strategy: GA4's automatic page_view (normally fired
 * by the `config` call) is explicitly disabled below
 * (`send_page_view: false`). `trackPageView` is the ONLY source of
 * page_view events, called once per route change — including the
 * first — by `AnalyticsTracker`. This is the "choose one clean
 * strategy" the brief asks for, avoiding double-counting the
 * automatic pageview plus a manual one.
 */

export const GA_MEASUREMENT_ID = 'G-R1S0YMCE8S';
export const CLARITY_PROJECT_ID = 'yef3p8216g';

interface ClarityFn {
  (...args: unknown[]): void;
  q?: unknown[];
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: ClarityFn;
  }
}

let initialized = false;

function initGoogleAnalytics(): void {
  // Guards against StrictMode's dev-only double effect invocation and
  // any accidental repeat call: skip if the script is already present.
  if (!GA_MEASUREMENT_ID || document.getElementById('ga4-gtag-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
}

function initClarity(): void {
  if (!CLARITY_PROJECT_ID || typeof window.clarity === 'function') return;

  const clarityFn: ClarityFn = (...args: unknown[]) => {
    (clarityFn.q = clarityFn.q || []).push(args);
  };
  window.clarity = clarityFn;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);
}

/** Loads GA4 + Clarity exactly once for the whole app session. */
export function initAnalytics(): void {
  if (initialized) return;
  initialized = true;
  initGoogleAnalytics();
  initClarity();
}

/**
 * Fires exactly one GA4 page_view for `path`. No-ops silently if GA4
 * hasn't loaded yet (e.g. ad blocker) rather than throwing.
 */
export function trackPageView(path: string): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
