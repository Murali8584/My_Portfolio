import { X } from 'lucide-react';
import CustomIcon from '../components/CustomIcon';

const Sidebar = ({ isVisible, onClose }) => {
  const routes = [
    { name: 'Home', href: '#header' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-400 overflow-hidden backdrop-blur-[50px] ${
        isVisible ? 'h-full' : 'h-0'
      }`}
      style={{
        background: 'rgba(var(--bg-secondary-rgb), 0.8)'
      }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between gap-2.5">
          <div className="logo">
            <CustomIcon name="logo" />
          </div>
          <div className="icon__container" id="close-sidebar-btn" onClick={onClose}>
            <X />
          </div>
        </div>
        <div className="mt-4">
          {routes.map((route) => (
            <a 
              key={route.href} 
              href={route.href} 
              className="block py-2.5 text-base font-medium cursor-pointer transition-all duration-400 hover:text-primary"
              onClick={onClose}
            >
              {route.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
