import { IDENTITY } from './seo';

/**
 * Central social/academic/contact link configuration — the ONE place
 * to update any link on the site (icon rails, Social Media page,
 * Contact page). No component hardcodes a platform URL directly;
 * every icon renders from an entry in `SOCIAL_LINKS` below.
 *
 * NON-NEGOTIABLE RULE: never invent a URL, username, or handle. A
 * platform with no verified URL yet gets `url: null` and
 * `status: 'coming-soon'` — it stays visible, but renders as a
 * non-navigating, clearly-labeled placeholder until a real URL is
 * supplied here.
 *
 * `rail` groups an entry into one of the two fixed vertical icon
 * rails (`'social'` → left rail, `'academic'` → right rail), or
 * `null` for entries that appear only on the Social Media page /
 * Contact page, not in either fixed rail.
 *
 * `SAME_AS_LINKS` (consumed by seo.ts's JSON-LD builders) draws ONLY
 * from entries with `status: 'active'` in the sameAs-eligible
 * categories (academic, social) — never `coming-soon`, never contact
 * channels (email/phone/whatsapp).
 */

export type SocialCategory = 'academic' | 'social' | 'contact';
export type SocialStatus = 'active' | 'coming-soon';
export type RailGroup = 'social' | 'academic' | null;

export interface SocialLinkConfig {
  platform: string;
  label: string;
  /** Icon key — see `SocialIcon.tsx` for the matching SVG glyph. */
  icon: string;
  /** Verified URL, or null when not yet supplied — never invented. */
  url: string | null;
  category: SocialCategory;
  status: SocialStatus;
  ariaLabel: string;
  tooltip: string;
  order: number;
  /** Which fixed vertical rail (if any) this renders in. */
  rail: RailGroup;
  /** True for mailto:/tel:/wa.me links — these open a native handler, not a new tab. */
  isDirectAction?: boolean;
}

export const SOCIAL_LINKS: SocialLinkConfig[] = [
  // ---- Social rail (left) — exactly the 8 platforms specified ----
  {
    platform: 'x',
    label: 'X',
    icon: 'x',
    url: null,
    category: 'social',
    status: 'coming-soon',
    ariaLabel: 'X (Twitter) — link coming soon',
    tooltip: 'X — Link coming soon',
    order: 0,
    rail: 'social',
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    icon: 'facebook',
    url: IDENTITY.facebookUrl,
    category: 'social',
    status: 'active',
    ariaLabel: 'Dr. Ashok Malhi on Facebook (opens in a new tab)',
    tooltip: 'Facebook',
    order: 1,
    rail: 'social',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    icon: 'instagram',
    url: IDENTITY.instagramUrl,
    category: 'social',
    status: 'active',
    ariaLabel: 'Dr. Ashok Malhi on Instagram (opens in a new tab)',
    tooltip: 'Instagram',
    order: 2,
    rail: 'social',
  },
  {
    platform: 'github',
    label: 'GitHub',
    icon: 'github',
    // Not supplied as verified data — never guessed. Icon stays visible;
    // becomes a live link the moment a real URL is added here.
    url: null,
    category: 'social',
    status: 'coming-soon',
    ariaLabel: 'GitHub — link coming soon',
    tooltip: 'GitHub — Link coming soon',
    order: 3,
    rail: 'social',
  },
  {
    platform: 'discord',
    label: 'Discord',
    icon: 'discord',
    url: null,
    category: 'social',
    status: 'coming-soon',
    ariaLabel: 'Discord — server link coming soon',
    tooltip: 'Discord — Server link coming soon',
    order: 4,
    rail: 'social',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    icon: 'linkedin',
    url: IDENTITY.linkedinUrl,
    category: 'social',
    status: 'active',
    ariaLabel: 'Dr. Ashok Malhi on LinkedIn (opens in a new tab)',
    tooltip: 'LinkedIn',
    order: 5,
    rail: 'social',
  },
  {
    platform: 'blog',
    label: 'Blog',
    icon: 'blog',
    url: null,
    category: 'social',
    status: 'coming-soon',
    ariaLabel: 'Blog — link coming soon',
    tooltip: 'Blog — Link coming soon',
    order: 6,
    rail: 'social',
  },
  {
    platform: 'medium',
    label: 'Medium',
    icon: 'medium',
    url: null,
    category: 'social',
    status: 'coming-soon',
    ariaLabel: 'Medium — link coming soon',
    tooltip: 'Medium — Link coming soon',
    order: 7,
    rail: 'social',
  },

  // ---- Academic rail (right) ----
  {
    platform: 'google-scholar',
    label: 'Google Scholar',
    icon: 'google-scholar',
    url: IDENTITY.googleScholarUrl,
    category: 'academic',
    status: 'active',
    ariaLabel: 'Dr. Ashok Malhi on Google Scholar (opens in a new tab)',
    tooltip: 'Google Scholar',
    order: 8,
    rail: 'academic',
  },
  {
    platform: 'researchgate',
    label: 'ResearchGate',
    icon: 'researchgate',
    url: IDENTITY.researchGateUrl,
    category: 'academic',
    status: 'active',
    ariaLabel: 'Dr. Ashok Malhi on ResearchGate (opens in a new tab)',
    tooltip: 'ResearchGate',
    order: 9,
    rail: 'academic',
  },
  {
    platform: 'orcid',
    label: 'ORCID',
    icon: 'orcid',
    url: IDENTITY.orcid,
    category: 'academic',
    status: 'active',
    ariaLabel: 'Dr. Ashok Malhi on ORCID (opens in a new tab)',
    tooltip: 'ORCID',
    order: 10,
    rail: 'academic',
  },

  // ---- Social, not in either rail — shown on the Social Media page only ----
  {
    platform: 'youtube',
    label: 'YouTube',
    icon: 'youtube',
    url: IDENTITY.youtubeUrl,
    category: 'social',
    status: 'active',
    ariaLabel: "Dr. Ashok Malhi's YouTube channel (opens in a new tab)",
    tooltip: 'YouTube',
    order: 11,
    rail: null,
  },

  // ---- Contact — Contact page only, not in either rail ----
  {
    platform: 'email',
    label: 'Email',
    icon: 'email',
    url: 'mailto:ashok.singh.malhi@gmail.com',
    category: 'contact',
    status: 'active',
    ariaLabel: 'Email Dr. Ashok Malhi at ashok.singh.malhi@gmail.com',
    tooltip: 'Email — ashok.singh.malhi@gmail.com',
    order: 12,
    rail: null,
    isDirectAction: true,
  },
  {
    platform: 'phone',
    label: 'Phone',
    icon: 'phone',
    url: 'tel:+917011115411',
    category: 'contact',
    status: 'active',
    ariaLabel: 'Call Dr. Ashok Malhi',
    tooltip: 'Call Dr. Ashok Malhi',
    order: 13,
    rail: null,
    isDirectAction: true,
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    icon: 'whatsapp',
    // Same number as Phone above (mobile and WhatsApp Business are the
    // same number) — never a second, different number.
    url: 'https://wa.me/917011115411',
    category: 'contact',
    status: 'active',
    ariaLabel: 'Message Dr. Ashok Malhi on WhatsApp',
    tooltip: 'WhatsApp — Message Dr. Ashok Malhi',
    order: 14,
    rail: null,
  },
];

/** The 8 entries shown in the left "social" icon rail, in order. */
export const SOCIAL_RAIL_LINKS: SocialLinkConfig[] = SOCIAL_LINKS.filter(
  (l) => l.rail === 'social'
).sort((a, b) => a.order - b.order);

/** The 3 entries shown in the right "academic" icon rail, in order. */
export const ACADEMIC_RAIL_LINKS: SocialLinkConfig[] = SOCIAL_LINKS.filter(
  (l) => l.rail === 'academic'
).sort((a, b) => a.order - b.order);

/**
 * Every social-media handle (rail platforms + YouTube), for the
 * cascade-style Social Media page — the comprehensive listing, as
 * opposed to the curated 8-platform rail.
 */
export const SOCIAL_MEDIA_PAGE_LINKS: SocialLinkConfig[] = SOCIAL_LINKS.filter(
  (l) => l.category === 'social'
).sort((a, b) => a.order - b.order);

/**
 * URLs eligible for JSON-LD `sameAs` — active, non-contact entries
 * only. Contact channels and any coming-soon placeholder are excluded.
 * Scopus is appended separately: it's a verified academic identifier
 * but isn't part of either icon rail.
 */
export const SAME_AS_LINKS: string[] = [
  ...SOCIAL_LINKS.filter(
    (link) => link.status === 'active' && link.category !== 'contact' && link.url
  ).map((link) => link.url as string),
  `https://www.scopus.com/authid/detail.uri?authorId=${IDENTITY.scopusId}`,
];
