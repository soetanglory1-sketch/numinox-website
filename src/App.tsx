import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { OurWorkPage } from '@/pages/OurWorkPage';
import { AreasOfExplorationPage } from '@/pages/AreasOfExplorationPage';
import { VitalLinkPage } from '@/pages/VitalLinkPage';
import { TeamPage } from '@/pages/TeamPage';
import { CollaboratePage } from '@/pages/CollaboratePage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/areas-of-exploration" element={<AreasOfExplorationPage />} />
            <Route path="/vitallink" element={<VitalLinkPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/collaborate" element={<CollaboratePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
