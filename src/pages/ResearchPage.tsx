import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { PERSON, RESEARCH_INTERESTS, PUBLICATIONS, PRESENTATIONS } from '@/data/profile';
import styles from './ResearchPage.module.css';

export function ResearchPage() {
  return (
    <>
      <SeoHead
        title={`Research | ${IDENTITY.displayName}`}
        description={`Research interests, publications, and conference presentations by ${IDENTITY.displayName}.`}
        path="/research"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Research', path: '/research' },
          ]),
        ]}
      />

      <Section eyebrow="Focus Areas" title="Research Interests">
        <div className={styles.chipRow}>
          {RESEARCH_INTERESTS.map((r) => (
            <span key={r} className={styles.chip}>
              {r}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Google Scholar" title="Scholar Metrics">
        <div className={styles.metricsRow}>
          <div className={styles.metric}>
            <div className={styles.metricValue}>{PERSON.scholarMetrics.citations}</div>
            <div className={styles.metricLabel}>Citations</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricValue}>{PERSON.scholarMetrics.hIndex}</div>
            <div className={styles.metricLabel}>h-index</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricValue}>{PERSON.scholarMetrics.i10Index}</div>
            <div className={styles.metricLabel}>i10-index</div>
          </div>
          <p className={styles.metricNote}>Snapshot as of {PERSON.scholarMetrics.asOf} — not a live value.</p>
        </div>
      </Section>

      <Section eyebrow={`${PUBLICATIONS.length} Publications`} title="Publications">
        <ul className={styles.list}>
          {PUBLICATIONS.map((pub) => (
            <li key={pub.title} className={styles.item}>
              <p className={styles.itemTitle}>{pub.title}</p>
              <p className={styles.itemMeta}>
                {pub.year}
                {pub.citationCount != null ? ` · ${pub.citationCount} citations` : ''}
              </p>
              {pub.researchAreas.length > 0 && (
                <p className={styles.areaTag}>
                  {pub.researchAreas.join(', ')} ({pub.researchAreasSource === 'inferred-from-title'
                    ? 'inferred from title'
                    : 'unclassified'}
                  )
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>

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
