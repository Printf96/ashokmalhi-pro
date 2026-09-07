import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Rail } from './Rail';
import { SOCIAL_RAIL_LINKS, ACADEMIC_RAIL_LINKS } from '@/lib/socialConfig';

export function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <Rail links={SOCIAL_RAIL_LINKS} side="left" label="Social media links" />
      <Rail links={ACADEMIC_RAIL_LINKS} side="right" label="Academic profile links" />
      <main id="main-content" className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
