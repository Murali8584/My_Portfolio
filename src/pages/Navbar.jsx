import { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = ({ activeSection, onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    { name: 'Home', href: '#header' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      id="navbar" 
      className={`flex items-center justify-center gap-2.5 ${
        isScrolled 
          ? 'fixed top-5 animate-[drop_1s]' 
          : 'absolute top-5'
      } left-1/2 -translate-x-1/2 max-w-fit z-50 px-4 py-2.5 rounded-xl backdrop-blur-[50px] border border-solid`}
      style={{
        background: 'rgba(var(--bg-secondary-rgb), 0.5)',
        borderColor: 'rgba(212, 175, 55, 0.25)'
      }}
    >
      {/* <div className="logo">
        <CustomIcon name="logo" />
      </div> */}
      <div className="hidden md:flex items-center gap-8">
        {routes.map((route) => (
          <a
            key={route.href}
            href={route.href}
            className={`text-base font-bold block cursor-pointer transition-all duration-400 ${
              activeSection === route.href.slice(1) ? 'text-primary' : ''
            }`}
          >
            {route.name}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <label className="flex items-center">
          <input
            type="checkbox"
            id="theme-checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            className="absolute -top-[9999px] invisible w-0 h-0 opacity-0"
          />
          <div className="icon__container">
            {darkMode ? <Sun className="sun transition-all duration-400" /> : <Moon className="moon transition-all duration-400" />}
          </div>
        </label>
        <div 
          className="icon__container md:hidden flex" 
          id="menu__btn" 
          onClick={onMenuClick}
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
