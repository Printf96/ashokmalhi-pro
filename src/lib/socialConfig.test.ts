import { describe, it, expect } from 'vitest';
import { SOCIAL_LINKS, SOCIAL_RAIL_LINKS, ACADEMIC_RAIL_LINKS, SOCIAL_MEDIA_PAGE_LINKS, SAME_AS_LINKS } from './socialConfig';

describe('SOCIAL_LINKS configuration', () => {
  it('gives every coming-soon entry a null URL and a "coming soon" tooltip', () => {
    const comingSoon = SOCIAL_LINKS.filter((l) => l.status === 'coming-soon');
    expect(comingSoon.length).toBeGreaterThan(0);
    for (const link of comingSoon) {
      expect(link.url).toBeNull();
      expect(link.tooltip.toLowerCase()).toContain('coming soon');
    }
  });

  it('never has a fabricated URL for X, GitHub, Discord, Blog, or Medium', () => {
    for (const platform of ['x', 'github', 'discord', 'blog', 'medium']) {
      const link = SOCIAL_LINKS.find((l) => l.platform === platform);
      expect(link).toBeDefined();
      expect(link?.url).toBeNull();
      expect(link?.status).toBe('coming-soon');
    }
  });

  it('gives every active entry a real, non-empty URL', () => {
    const active = SOCIAL_LINKS.filter((l) => l.status === 'active');
    expect(active.length).toBeGreaterThan(0);
    for (const link of active) {
      expect(link.url).toBeTruthy();
    }
  });

  it('uses the exact verified phone number for both phone and WhatsApp, and never a second number', () => {
    const phone = SOCIAL_LINKS.find((l) => l.platform === 'phone');
    const whatsapp = SOCIAL_LINKS.find((l) => l.platform === 'whatsapp');
    expect(phone?.url).toBe('tel:+917011115411');
    expect(whatsapp?.url).toBe('https://wa.me/917011115411');
    expect(phone?.url).toContain('917011115411');
    expect(whatsapp?.url).toContain('917011115411');
  });

  it('uses the exact verified email address for mailto', () => {
    const email = SOCIAL_LINKS.find((l) => l.platform === 'email');
    expect(email?.url).toBe('mailto:ashok.singh.malhi@gmail.com');
  });

  it('never includes a contact channel (email/phone/whatsapp) in SAME_AS_LINKS', () => {
    for (const url of SAME_AS_LINKS) {
      expect(url.startsWith('mailto:')).toBe(false);
      expect(url.startsWith('tel:')).toBe(false);
      expect(url).not.toContain('wa.me');
    }
  });

  it('never includes a coming-soon (null) URL in SAME_AS_LINKS', () => {
    expect(SAME_AS_LINKS.every((url) => typeof url === 'string' && url.length > 0)).toBe(true);
  });

  it('puts exactly the 8 specified platforms in the left social rail, in order', () => {
    expect(SOCIAL_RAIL_LINKS.map((l) => l.platform)).toEqual([
      'x',
      'facebook',
      'instagram',
      'github',
      'discord',
      'linkedin',
      'blog',
      'medium',
    ]);
  });

  it('puts exactly Google Scholar, ResearchGate, and ORCID in the right academic rail', () => {
    expect(ACADEMIC_RAIL_LINKS.map((l) => l.platform)).toEqual([
      'google-scholar',
      'researchgate',
      'orcid',
    ]);
  });

  it('never puts a contact entry in either rail', () => {
    for (const link of [...SOCIAL_RAIL_LINKS, ...ACADEMIC_RAIL_LINKS]) {
      expect(link.category).not.toBe('contact');
    }
  });

  it('includes YouTube on the Social Media page even though it is not in the rail', () => {
    expect(SOCIAL_MEDIA_PAGE_LINKS.map((l) => l.platform)).toContain('youtube');
    expect(SOCIAL_RAIL_LINKS.map((l) => l.platform)).not.toContain('youtube');
  });
});
