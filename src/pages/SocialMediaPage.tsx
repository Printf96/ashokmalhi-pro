import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { SOCIAL_MEDIA_PAGE_LINKS } from '@/lib/socialConfig';
import styles from './SocialMediaPage.module.css';

export function SocialMediaPage() {
  return (
    <>
      <SeoHead
        title={`Social Media | ${IDENTITY.displayName}`}
        description={`Social media handles for ${IDENTITY.displayName}.`}
        path="/social-media"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Social Media', path: '/social-media' },
          ]),
        ]}
      />

      <Section eyebrow="Find Me Online" title="Social Media">
        <ul className={styles.cascade}>
          {SOCIAL_MEDIA_PAGE_LINKS.map((link) =>
            link.status === 'active' && link.url ? (
              <li key={link.platform}>
                <a
                  href={link.url}
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                >
                  <span className={styles.iconWrap}>
                    <SocialIcon icon={link.icon} size={22} />
                  </span>
                  <span>
                    <span className={styles.label}>{link.label}</span>
                    <span className={styles.status}>Active</span>
                  </span>
                </a>
              </li>
            ) : (
              <li key={link.platform}>
                <span
                  className={`${styles.card} ${styles.comingSoon}`}
                  role="note"
                  aria-label={link.ariaLabel}
                  title={link.tooltip}
                >
                  <span className={styles.iconWrap}>
                    <SocialIcon icon={link.icon} size={22} />
                  </span>
                  <span>
                    <span className={styles.label}>{link.label}</span>
                    <span className={styles.status}>Coming soon</span>
                  </span>
                </span>
              </li>
            )
          )}
        </ul>
      </Section>
    </>
  );
}
