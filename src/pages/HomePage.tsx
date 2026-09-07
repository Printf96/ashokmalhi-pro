import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { IDENTITY, buildWebsiteSchema, buildProfilePageSchema } from '@/lib/seo';
import { SAME_AS_LINKS } from '@/lib/socialConfig';
import { PERSON, RESEARCH_INTERESTS, EDUCATION, EXPERIENCE, PUBLICATIONS, PRESENTATIONS } from '@/data/profile';
import { slugify } from '@/lib/slug';
import styles from './HomePage.module.css';

// Selected publications shown on Home — a fixed editorial subset (not
// "most cited"/"most recent" ranking logic), matched by exact title
// against the verified PUBLICATIONS data below so this section can
// never drift out of sync with — or duplicate facts differently from —
// the full Publications page.
const SELECTED_PUBLICATION_TITLES = [
  'A Study on Responsible AI Awareness and Learning Engagement in Higher Education: The Mediating Roles of Trust in AI, AI Literacy, AI Usage Self-Efficacy, and Human–AI Collaboration',
  'Green by Design AI in Fashion Retail and the Rise of the Conscious Consumer',
  'Exploring Narrative Constructions of Market Sentiment: A Systematic Literature Review of Media Influence on Financial Behaviors and Economic Outcomes',
  "A Study on Digital Intelligence and Influencer Marketing for Sustainable Diversification of India's Retail Economy: A Qualitative Study",
];
const selectedPublications = SELECTED_PUBLICATION_TITLES.map((title) =>
  PUBLICATIONS.find((p) => p.title === title)
).filter((p): p is (typeof PUBLICATIONS)[number] => Boolean(p));

const phdEntry = EDUCATION.find((e) => e.degree === 'PhD');
const currentRole = EXPERIENCE.find((e) => e.isCurrent);

export function HomePage() {
  return (
    <>
      <SeoHead
        title={`${IDENTITY.displayName} | ${IDENTITY.professionalTitle}, ${IDENTITY.affiliation}`}
        description={`Official profile of ${IDENTITY.displayName}, ${IDENTITY.professionalTitle} at ${IDENTITY.affiliation}, India.`}
        path="/"
        jsonLd={[buildWebsiteSchema(), buildProfilePageSchema(SAME_AS_LINKS)]}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <ProfileImage
            src="/images/ashok-malhi-profile-bw.webp"
            src1x="/images/ashok-malhi-profile-bw@1x.webp"
            alt="Dr. Ashok Malhi, Assistant Professor and academic researcher"
          />
          <div>
            <p className={styles.eyebrow}>Official Profile</p>
            <h1 className={styles.name}>{IDENTITY.displayName}</h1>
            <p className={styles.titleLine}>
              <strong>{IDENTITY.professionalTitle}</strong> · {IDENTITY.affiliation},{' '}
              {IDENTITY.affiliationCountry}
            </p>
            <p>Academic Researcher &amp; Educator</p>
            <p className={styles.bio}>{PERSON.professionalPositioning}</p>
          </div>
        </div>
      </section>

      <section className={styles.credibilitySection} aria-label="Academic credibility indicators">
        <div className={styles.credibilityRow}>
          <div className={styles.credibilityItem}>
            <div className={styles.credibilityValue}>{PUBLICATIONS.length}</div>
            <div className={styles.credibilityLabel}>Publications</div>
          </div>
          <div className={styles.credibilityItem}>
            <div className={styles.credibilityValue}>{PRESENTATIONS.length}</div>
            <div className={styles.credibilityLabel}>Documented Presentations</div>
          </div>
          {phdEntry && (
            <div className={styles.credibilityItem}>
              <div className={styles.credibilityValue}>PhD</div>
              <div className={styles.credibilityLabel}>{phdEntry.endYear}</div>
            </div>
          )}
          {currentRole && (
            <div className={styles.credibilityItem}>
              <div className={styles.credibilityValueSmall}>{currentRole.role}</div>
              <div className={styles.credibilityLabel}>{currentRole.organization}</div>
            </div>
          )}
        </div>
      </section>

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

      <Section eyebrow="Selected Publications" title="Recent Research">
        <ul className={styles.pubList}>
          {selectedPublications.map((pub) => (
            <li key={pub.title} className={styles.pubItem}>
              <Link to={`/publications#${slugify(pub.title)}`} className={styles.pubTitle}>
                {pub.title}
              </Link>
              <p className={styles.pubMeta}>
                {pub.year}
                {pub.citationCount != null ? ` · ${pub.citationCount} citations` : ''}
              </p>
            </li>
          ))}
        </ul>
        <Link to="/publications" className={styles.viewAll}>
          View All Publications →
        </Link>
      </Section>
    </>
  );
}
