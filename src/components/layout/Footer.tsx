import { IDENTITY } from '@/lib/seo';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          © {new Date().getFullYear()} {IDENTITY.displayName}. All rights reserved.
        </p>
        <p className={styles.text}>
          {IDENTITY.professionalTitle} · {IDENTITY.affiliation}
        </p>
      </div>
    </footer>
  );
}
