import { Link } from 'react-router-dom';
import { SeoHead } from '@/components/seo/SeoHead';
import { Section } from '@/components/ui/Section';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { PERSON } from '@/data/profile';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <>
      <SeoHead
        title={`About | ${IDENTITY.displayName}`}
        description={`Biography of ${IDENTITY.displayName}, ${IDENTITY.professionalTitle} at ${IDENTITY.affiliation}.`}
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
            <p>{PERSON.shortBio}</p>
            <p className={styles.crossLinks}>
              <Link to="/education">Education →</Link>
              <Link to="/experience">Experience →</Link>
            </p>
          </div>
        </div>
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
