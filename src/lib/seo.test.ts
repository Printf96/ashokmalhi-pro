import { describe, it, expect } from 'vitest';
import { buildPersonSchema, buildWebsiteSchema, buildBreadcrumbSchema, IDENTITY } from './seo';

describe('SEO schema builders', () => {
  it('builds a Person schema with the given sameAs list and no contact channels in it', () => {
    const sameAs = ['https://www.linkedin.com/in/ashok-malhi/'];
    const person = buildPersonSchema(sameAs);
    expect(person.name).toBe(IDENTITY.displayName);
    expect(person.sameAs).toEqual(sameAs);
    for (const url of person.sameAs) {
      expect(url.startsWith('mailto:')).toBe(false);
      expect(url.startsWith('tel:')).toBe(false);
    }
  });

  it('builds a WebSite schema referencing the Person by @id', () => {
    const site = buildWebsiteSchema();
    expect(site['@type']).toBe('WebSite');
    expect(site.publisher['@id']).toContain('#person');
  });

  it('builds a breadcrumb list with correct positions', () => {
    const crumbs = buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]);
    expect(crumbs.itemListElement[0]?.position).toBe(1);
    expect(crumbs.itemListElement[1]?.position).toBe(2);
  });
});
