import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { CERTIFICATIONS } from '@/data/profile';
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
        title={`Certifications | ${IDENTITY.displayName}`}
        description={`Professional certifications held by ${IDENTITY.displayName}.`}
        path="/achievements"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Certifications', path: '/achievements' },
          ]),
        ]}
      />

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
