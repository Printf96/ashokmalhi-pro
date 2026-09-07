import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>[];
  image?: string;
}

/**
 * Sets per-route title, meta description, canonical URL, Open Graph
 * and Twitter card tags, and any JSON-LD structured data for that
 * page.
 */
export function SeoHead({ title, description, path, jsonLd = [], image }: SeoHeadProps) {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/images/ashok-malhi-profile-bw.webp`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
