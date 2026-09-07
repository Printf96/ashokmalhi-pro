import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { PUBLICATIONS } from '@/data/profile';
import { slugify } from '@/lib/slug';
import styles from '@/styles/recordList.module.css';

export function PublicationsPage() {
  return (
    <>
      <SeoHead
        title={`Publications | ${IDENTITY.displayName}`}
        description={`Peer-reviewed publications by ${IDENTITY.displayName}, ${IDENTITY.professionalTitle} at ${IDENTITY.affiliation}.`}
        path="/publications"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Publications', path: '/publications' },
          ]),
        ]}
      />

      <Section eyebrow={`${PUBLICATIONS.length} Publications`} title="Publications">
        <ul className={styles.list}>
          {PUBLICATIONS.map((pub) => (
            <li key={pub.title} id={slugify(pub.title)} className={styles.item}>
              <p className={styles.itemTitle}>{pub.title}</p>
              <p className={styles.itemMeta}>
                {pub.year}
                {pub.citationCount != null ? ` · ${pub.citationCount} citations` : ''}
              </p>
              {pub.researchAreas.length > 0 && (
                <p className={styles.areaTag}>
                  {pub.researchAreas.join(', ')} (
                  {pub.researchAreasSource === 'inferred-from-title' ? 'inferred from title' : 'unclassified'})
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
