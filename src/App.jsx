import { useState, useEffect } from 'react';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('header');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setSidebarVisible(true);
  };

  const handleSidebarClose = () => {
    setSidebarVisible(false);
  };

  return (
    <>
      <Navbar activeSection={activeSection} onMenuClick={handleMenuClick} />
      <Sidebar isVisible={sidebarVisible} onClose={handleSidebarClose} />
      <Header />
      <About />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;

