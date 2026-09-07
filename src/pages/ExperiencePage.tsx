import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { EXPERIENCE } from '@/data/profile';
import styles from '@/styles/timeline.module.css';

function formatDate(iso: string | null): string {
  if (!iso) return 'Present';
  const [year, month] = iso.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function ExperiencePage() {
  return (
    <>
      <SeoHead
        title={`Experience | ${IDENTITY.displayName}`}
        description={`Professional and academic experience of ${IDENTITY.displayName}.`}
        path="/experience"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Experience', path: '/experience' },
          ]),
        ]}
      />

      <Section eyebrow="Career" title="Professional Experience">
        <ul className={styles.timeline}>
          {EXPERIENCE.map((item) => (
            <li key={item.order} className={styles.timelineItem}>
              <p className={styles.timelineTitle}>
                {item.role} · {item.organization}
              </p>
              <p className={styles.timelineMeta}>
                {formatDate(item.startDate)} – {item.isCurrent ? 'Present' : formatDate(item.endDate)} ·{' '}
                {item.organizationCountry}
              </p>
              {item.description && <p>{item.description}</p>}
              {item.responsibilities.length > 0 && (
                <ul className={styles.responsibilities}>
                  {item.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              )}
              {item.provenanceNote && <p className={styles.provenance}>{item.provenanceNote}</p>}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
