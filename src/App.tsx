import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { EducationPage } from '@/pages/EducationPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { ResearchPage } from '@/pages/ResearchPage';
import { PublicationsPage } from '@/pages/PublicationsPage';
import { PresentationsPage } from '@/pages/PresentationsPage';
import { AchievementsPage } from '@/pages/AchievementsPage';
import { SocialMediaPage } from '@/pages/SocialMediaPage';
import { ContactPage } from '@/pages/ContactPage';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="presentations" element={<PresentationsPage />} />
        <Route path="achievements" element={<AchievementsPage />} />
        <Route path="social-media" element={<SocialMediaPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
