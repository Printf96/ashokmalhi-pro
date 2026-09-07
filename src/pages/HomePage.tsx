import { SeoHead } from '@/components/seo/SeoHead';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { IDENTITY, buildWebsiteSchema, buildProfilePageSchema } from '@/lib/seo';
import { SAME_AS_LINKS } from '@/lib/socialConfig';
import styles from './HomePage.module.css';

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
          </div>
        </div>
      </section>
    </>
  );
}
