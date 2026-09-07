import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

/**
 * vitest.config.ts runs in a plain Node environment (no real DOM), so
 * `document`/`window` are stubbed here with the minimal surface
 * analytics.ts actually touches. `vi.resetModules()` before each test
 * gives a fresh copy of the module (and its module-level `initialized`
 * flag) so tests don't leak state into each other.
 */

interface FakeScript {
  id?: string;
  async?: boolean;
  src?: string;
}

function setupFakeDom() {
  const appended: FakeScript[] = [];

  const fakeDocument = {
    title: 'Test Page',
    getElementById: (id: string) => appended.find((s) => s.id === id) ?? null,
    createElement: () => ({}) as FakeScript,
    head: {
      appendChild: (el: FakeScript) => {
        appended.push(el);
      },
    },
    getElementsByTagName: () => [
      {
        parentNode: {
          insertBefore: (el: FakeScript) => {
            appended.push(el);
          },
        },
      },
    ],
  };

  vi.stubGlobal('document', fakeDocument);
  vi.stubGlobal('window', { location: { href: 'https://ashokmalhi.pro/about' } });

  return appended;
}

describe('analytics', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('uses the exact supplied GA4 Measurement ID and Clarity Project ID', async () => {
    setupFakeDom();
    const { GA_MEASUREMENT_ID, CLARITY_PROJECT_ID } = await import('./analytics');
    expect(GA_MEASUREMENT_ID).toBe('G-R1S0YMCE8S');
    expect(CLARITY_PROJECT_ID).toBe('yef3p8216g');
  });

  it('initAnalytics injects exactly one GA4 script and one Clarity script, even when called twice', async () => {
    const appended = setupFakeDom();
    const { initAnalytics } = await import('./analytics');

    initAnalytics();
    initAnalytics();

    expect(appended).toHaveLength(2); // 1 GA4 script + 1 Clarity script
    expect(appended.filter((s) => s.id === 'ga4-gtag-script')).toHaveLength(1);
  });

  it('disables automatic GA4 page_view on config (send_page_view: false)', async () => {
    setupFakeDom();
    const { initAnalytics } = await import('./analytics');

    initAnalytics();

    // window.gtag (defined by initAnalytics) pushes its args onto dataLayer.
    const dataLayer = (window as unknown as { dataLayer: unknown[] }).dataLayer;
    const configCall = dataLayer.find((entry) => Array.isArray(entry) && entry[0] === 'config');
    expect(configCall).toBeDefined();
    expect((configCall as unknown[])[2]).toMatchObject({ send_page_view: false });
  });

  it('trackPageView does not throw when gtag has not loaded yet', async () => {
    setupFakeDom();
    const { trackPageView } = await import('./analytics');
    expect(() => trackPageView('/about')).not.toThrow();
  });

  it('trackPageView fires exactly one page_view event with the given path', async () => {
    setupFakeDom();
    const calls: unknown[][] = [];
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag = (...args: unknown[]) =>
      calls.push(args);
    const { trackPageView } = await import('./analytics');

    trackPageView('/research');

    expect(calls).toHaveLength(1);
    expect(calls[0]?.[0]).toBe('event');
    expect(calls[0]?.[1]).toBe('page_view');
    expect((calls[0]?.[2] as { page_path: string }).page_path).toBe('/research');
  });
});
