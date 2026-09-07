import { SocialIcon } from '@/components/ui/SocialIcon';
import type { SocialLinkConfig } from '@/lib/socialConfig';
import styles from './Rail.module.css';

interface RailProps {
  links: SocialLinkConfig[];
  side: 'left' | 'right';
  label: string;
}

/**
 * A fixed vertical icon rail (medium-to-large icons). Two of these are
 * rendered — social platforms on the left, academic identifiers on
 * the right (see Layout.tsx) — each fed from the single central
 * `SOCIAL_LINKS` configuration. Collapses to a static horizontal row
 * on mobile so it never obstructs content.
 */
export function Rail({ links, side, label }: RailProps) {
  return (
    <nav
      className={`${styles.rail} ${side === 'left' ? styles.railLeft : styles.railRight}`}
      aria-label={label}
    >
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.platform} className={styles.item}>
            {link.status === 'active' && link.url ? (
              <a
                href={link.url}
                className={styles.iconLink}
                aria-label={link.ariaLabel}
                title={link.tooltip}
                {...(link.isDirectAction
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <SocialIcon icon={link.icon} size={24} />
              </a>
            ) : (
              <button
                type="button"
                className={`${styles.iconLink} ${styles.comingSoon}`}
                aria-label={link.ariaLabel}
                aria-disabled="true"
                title={link.tooltip}
                onClick={(e) => e.preventDefault()}
              >
                <SocialIcon icon={link.icon} size={24} />
                <span className={styles.comingSoonDot} aria-hidden="true" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
