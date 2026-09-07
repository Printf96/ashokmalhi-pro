import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { IconRail } from './IconRail';

export function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <IconRail />
      <main id="main-content" className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
