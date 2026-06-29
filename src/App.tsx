import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

import FullScreenLoader from './components/FullScreenLoader';

// Lazy load pages for faster initial load 
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'));
const ContactPro = lazy(() => import('./pages/ContactPro'));

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = React.useState(true);

  React.useEffect(() => {
    // Artificial minimum delay so the beautiful loader is visible
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        setIsAppLoading(false);
      } else {
        window.addEventListener('load', () => setIsAppLoading(false));
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        {isAppLoading && <FullScreenLoader />}
        <ScrollToTop />
        <Navbar />
        <main>
          <Suspense fallback={<FullScreenLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<ProjectsPage />} />
              <Route path="/portfolio/:id" element={<ProjectDetailsPage />} />
              <Route path="/contact" element={<ContactPro />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
