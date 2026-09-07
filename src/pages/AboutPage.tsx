import { SeoHead } from '@/components/seo/SeoHead';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
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

      <section className={styles.section}>
        <h1>About</h1>
        <div className={styles.profileRow}>
          <ProfileImage
            src="/images/ashok-malhi-profile-bw.webp"
            src1x="/images/ashok-malhi-profile-bw@1x.webp"
            alt="Dr. Ashok Malhi, Assistant Professor and academic researcher"
          />
          <div>
            <p>
              <strong>{IDENTITY.displayName}</strong> is {IDENTITY.professionalTitle} at{' '}
              {IDENTITY.affiliation}, {IDENTITY.affiliationCountry}.
            </p>
            <p>Full biography, publications, and academic profile details coming soon.</p>
          </div>
        </div>
      </section>
    </>
  );
}
