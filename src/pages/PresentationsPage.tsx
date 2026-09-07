import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { PRESENTATIONS } from '@/data/profile';
import styles from '@/styles/recordList.module.css';

export function PresentationsPage() {
  return (
    <>
      <SeoHead
        title={`Presentations | ${IDENTITY.displayName}`}
        description={`Conference presentations by ${IDENTITY.displayName}.`}
        path="/presentations"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Presentations', path: '/presentations' },
          ]),
        ]}
      />

      <Section eyebrow={`${PRESENTATIONS.length} Presentations`} title="Conference Presentations">
        <ul className={styles.list}>
          {PRESENTATIONS.map((p) => (
            <li key={p.title} className={styles.item}>
              <p className={styles.itemTitle}>{p.title}</p>
              <p className={styles.itemMeta}>
                {p.event} · {p.organization}
              </p>
              <p className={styles.itemMeta}>
                {p.dateDisplay}
                {p.location ? ` · ${p.location}` : ''} · {p.scope}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
