export const SITE_URL = 'https://ashokmalhi.pro';
export const SITE_NAME = 'Dr. Ashok Malhi — Official Profile';

export const IDENTITY = {
  displayName: 'Dr. Ashok Malhi',
  authorName: 'Ashok Malhi',
  authorNameVariant: 'Ashok Singh Malhi',
  professionalTitle: 'Assistant Professor',
  affiliation: 'Lovely Professional University',
  affiliationCountry: 'India',
  orcid: 'https://orcid.org/0000-0001-9756-5865',
  googleScholarUrl: 'https://scholar.google.com/citations?user=Uf8bU5sAAAAJ',
  researchGateUrl: 'https://www.researchgate.net/profile/Ashok-Malhi',
  linkedinUrl: 'https://www.linkedin.com/in/ashok-malhi/',
  facebookUrl: 'https://www.facebook.com/official.ashok.malhi',
  instagramUrl: 'https://www.instagram.com/dr.ashok_malhi/',
  youtubeUrl: 'https://www.youtube.com/@Dr_ashok_malhi',
} as const;

/**
 * Schema.org Person object for the site's canonical identity. `sameAs`
 * draws only from verified, active links in socialConfig.ts — see
 * `SAME_AS_LINKS` below, which is built from that single source so the
 * icon rail and structured data can never drift into asserting
 * different sets of "verified" profiles.
 */
export function buildPersonSchema(sameAsLinks: string[]) {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: IDENTITY.displayName,
    alternateName: [IDENTITY.authorName, IDENTITY.authorNameVariant],
    jobTitle: IDENTITY.professionalTitle,
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: IDENTITY.affiliation,
      address: {
        '@type': 'PostalAddress',
        addressCountry: IDENTITY.affiliationCountry,
      },
    },
    url: SITE_URL,
    sameAs: sameAsLinks,
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en',
  };
}

export function buildProfilePageSchema(sameAsLinks: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    mainEntity: buildPersonSchema(sameAsLinks),
    inLanguage: 'en',
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
