import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { EDUCATION } from '@/data/profile';
import styles from '@/styles/timeline.module.css';

export function EducationPage() {
  return (
    <>
      <SeoHead
        title={`Education | ${IDENTITY.displayName}`}
        description={`Academic qualifications of ${IDENTITY.displayName}, ${IDENTITY.professionalTitle} at ${IDENTITY.affiliation}.`}
        path="/education"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Education', path: '/education' },
          ]),
        ]}
      />

      <Section eyebrow="Academic Background" title="Education">
        <ul className={styles.timeline}>
          {EDUCATION.map((item) => (
            <li key={item.order} className={styles.timelineItem}>
              <p className={styles.timelineTitle}>
                {item.degree}
                {item.fieldOfStudy ? ` — ${item.fieldOfStudy}` : ''}
              </p>
              <p className={styles.timelineMeta}>
                {item.institution}, {item.institutionCountry} · {item.endYear}
                {item.grade ? ` · ${item.grade} ${item.gradeLabel ?? ''}` : ''}
              </p>
              {item.provenanceNote && <p className={styles.provenance}>{item.provenanceNote}</p>}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
