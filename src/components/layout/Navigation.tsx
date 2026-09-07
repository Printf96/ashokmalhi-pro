import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/presentations', label: 'Presentations' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape, and whenever the viewport grows
  // back to desktop width (avoids a stale open panel after resize).
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 768) setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          Dr. Ashok Malhi
        </NavLink>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav aria-label="Primary" id="primary-navigation" className={open ? styles.navOpen : undefined}>
          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
