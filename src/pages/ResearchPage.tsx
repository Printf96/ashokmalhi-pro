import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { PERSON, RESEARCH_INTERESTS } from '@/data/profile';
import styles from './ResearchPage.module.css';

export function ResearchPage() {
  return (
    <>
      <SeoHead
        title={`Research | ${IDENTITY.displayName}`}
        description={`Research interests and Google Scholar metrics for ${IDENTITY.displayName}.`}
        path="/research"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Research', path: '/research' },
          ]),
        ]}
      />

      <Section eyebrow="Focus Areas" title="Research Interests">
        <ol className={styles.interestGrid}>
          {RESEARCH_INTERESTS.map((r, i) => (
            <li key={r} className={styles.interestCard}>
              <span className={styles.interestIndex}>{String(i + 1).padStart(2, '0')}</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
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
    </>
  );
}
