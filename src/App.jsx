import { useEffect, useState, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Projects from './sections/Project';
import Skills from './sections/Skills';
import ContactMe from './sections/Contactme';
import Certificate from './sections/certificate';
import AboutMe from './sections/AboutMe';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { Toaster } from 'react-hot-toast';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentSection = () => {
    const path = location.pathname;
    if (path === '/projects') return 'projects';
    if (path === '/skills') return 'skills';
    if (path === '/certificates') return 'certificates';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contactme';
    return 'about';
  };

  const setActiveSection = (section) => {
    if (section === 'about') {
      navigate('/');
    } else if (section === 'contactme') {
      navigate('/contact');
    } else {
      navigate(`/${section}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Toaster 
        position="top-right" 
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1f2937',
            color: '#fff',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            fontWeight: '500'
          }
        }}
      />
      
      <Navbar activeSection={getCurrentSection()} setActiveSection={setActiveSection} />
      
      <main className="pt-16">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Hero setActiveSection={setActiveSection} />} />
            <Route path="/about" element={<AboutMe setActiveSection={setActiveSection} />} />
            <Route path="/projects" element={<Projects setActiveSection={setActiveSection} />} />
            <Route path="/skills" element={<Skills setActiveSection={setActiveSection} />} />
            <Route path="/certificates" element={<Certificate setActiveSection={setActiveSection} />} />
            <Route path="/contact" element={<ContactMe setActiveSection={setActiveSection} />} />
          </Routes>
        </Suspense>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      
      <Footer />
    </div>
  );
}

export default App;