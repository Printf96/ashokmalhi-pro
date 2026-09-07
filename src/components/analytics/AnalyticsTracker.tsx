import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from '@/lib/analytics';

/**
 * Mounted once in Layout.tsx (rendered for every route, never
 * remounted on navigation — see App.tsx's nested Route structure).
 *
 * Two separate effects, run in declaration order on first mount:
 * 1. Load GA4 + Clarity once.
 * 2. Fire one GA4 page_view per route change, including the first —
 *    this is the app's only page_view source (see lib/analytics.ts).
 *
 * Renders nothing.
 */
export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}
