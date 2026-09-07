import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { CERTIFICATIONS, VENTURES } from '@/data/profile';
import styles from './AchievementsPage.module.css';

function formatDate(iso: string): string {
  const [year, month] = iso.split('-');
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export function AchievementsPage() {
  return (
    <>
      <SeoHead
        title={`Achievements | ${IDENTITY.displayName}`}
        description={`Professional certifications, founder ventures, and achievements of ${IDENTITY.displayName}.`}
        path="/achievements"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Achievements', path: '/achievements' },
          ]),
        ]}
      />

      <Section eyebrow={`${VENTURES.length} Ventures`} title="Founder & Owner">
        <ul className={styles.list}>
          {VENTURES.map((v) => (
            <li key={v.name} className={styles.card}>
              <p className={styles.title}>
                <a href={v.url} target="_blank" rel="noopener noreferrer">
                  {v.domain}
                </a>
              </p>
              <p className={styles.date}>{v.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow={`${CERTIFICATIONS.length} Certifications`} title="Certifications">
        <ul className={styles.list}>
          {CERTIFICATIONS.map((c) => (
            <li key={c.title} className={styles.card}>
              <p className={styles.title}>{c.title}</p>
              <p className={styles.date}>{formatDate(c.date)}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
