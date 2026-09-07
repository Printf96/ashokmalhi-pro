import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { PERSON, EDUCATION, EXPERIENCE } from '@/data/profile';
import styles from './AboutPage.module.css';

function formatDate(iso: string | null): string {
  if (!iso) return 'Present';
  const [year, month] = iso.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function AboutPage() {
  return (
    <>
      <SeoHead
        title={`About | ${IDENTITY.displayName}`}
        description={`Biography, education, and professional experience of ${IDENTITY.displayName}, ${IDENTITY.professionalTitle} at ${IDENTITY.affiliation}.`}
        path="/about"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      <Section eyebrow="Biography" title="About">
        <div className={styles.profileRow}>
          <ProfileImage
            src="/images/ashok-malhi-profile-bw.webp"
            src1x="/images/ashok-malhi-profile-bw@1x.webp"
            alt="Dr. Ashok Malhi, Assistant Professor and academic researcher"
          />
          <div className={styles.bio}>
            <p>
              <strong>{IDENTITY.displayName}</strong> · {IDENTITY.professionalTitle} ·{' '}
              {IDENTITY.affiliation}, {IDENTITY.affiliationCountry}
            </p>
            <p>Department (per Google Scholar): {PERSON.department}</p>
            <p>{PERSON.shortBio}</p>
          </div>
        </div>
      </Section>

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

      <Section eyebrow="Expertise" title="Skills & Languages">
        <div className={styles.skillGroup}>
          <p className={styles.skillGroupLabel}>Technical</p>
          <div className={styles.chipRow}>
            {PERSON.technicalSkills.map((s) => (
              <span key={s} className={styles.chip}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillGroup}>
          <p className={styles.skillGroupLabel}>Research &amp; Analytics</p>
          <div className={styles.chipRow}>
            {PERSON.researchSkills.map((s) => (
              <span key={s} className={styles.chip}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillGroup}>
          <p className={styles.skillGroupLabel}>Soft Skills</p>
          <div className={styles.chipRow}>
            {PERSON.softSkills.map((s) => (
              <span key={s} className={styles.chip}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillGroup}>
          <p className={styles.skillGroupLabel}>Languages</p>
          <div className={styles.chipRow}>
            {PERSON.languages.map((l) => (
              <span key={l.name} className={styles.chip}>
                {l.name}
                {l.proficiency ? ` (${l.proficiency})` : ''}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
