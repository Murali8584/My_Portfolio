import CustomIcon from '../components/CustomIcon';
import Section from '../components/Section';

const Footer = () => {
  const routes = [
    { name: 'Home', href: '#header' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer 
      id="footer" 
      className="bg-secondary rounded-[50px_50px_0_0] shadow-sm relative overflow-hidden"
    >
      <Section>
      <div className="spotlight -bottom-[50px] -left-[50px] h-[120px]"></div>
      <div className="container pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-2 column md:col-span-2 lg:col-span-2 max-md:col-span-1">
            <div className="logo">
              <CustomIcon name="logo" />
            </div>
            <p className="text__muted description my-5">
              Building scalable mobile and web applications 🚀 with a passion for clean code 💻 
              and user-first design 👥. Always learning, always growing. Let's create something 
              amazing together!
            </p>
            <div className="flex social__handles items-center gap-4">
              <a href="https://www.github.com/Murali-1105/My_Projects.git" target="_blank" className="icon__container handle">
                <CustomIcon name="github" />
              </a>
              <a href="http://www.linkedin.com/in/murali1105" target="_blank" className="icon__container handle">
                <CustomIcon name="linkedin" />
              </a>
            </div>
          </div>
          <div className="column">
            <h3 className="group__name text-base mb-4 font-medium">Hot Links</h3>
            <div className="routes__container">
              {routes.map((route) => (
                <a 
                  key={route.href} 
                  href={route.href} 
                  className="route__item block text-muted transition-all duration-400 text-[15px] cursor-pointer my-2.5 hover:text-primary"
                >
                  {route.name}
                </a>
              ))}
            </div>
          </div>
          <div className="column">
            <h3 className="group__name text-base mb-4 font-medium">Others</h3>
            <div className="routes__container">
              <a href="#" className="route__item block text-muted transition-all duration-400 text-[15px] cursor-pointer my-2.5 hover:text-primary">Privacy Policy</a>
              <a href="#" className="route__item block text-muted transition-all duration-400 text-[15px] cursor-pointer my-2.5 hover:text-primary">Terms and Condition</a>
              <a href="#" className="route__item block text-muted transition-all duration-400 text-[15px] cursor-pointer my-2.5 hover:text-primary">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="copyright mt-20 text-center">
          <h3 className="text-base font-medium mb-5 text-primary">Copyright &copy; 2025 Murali M. All rights reserved.</h3>
          <p className="text__muted">
            Built with React and lots of ☕
          </p>
        </div>
      </div>
      </Section>
    </footer>
  );
};

export default Footer;
