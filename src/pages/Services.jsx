import { useEffect, useRef } from 'react';
import { Smartphone, Code, PencilRuler, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const sectionHeaderRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (servicesRef.current && sectionHeaderRef.current && serviceRefs.current.length > 0) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none"
          }
        });

        timeline
          .from(sectionHeaderRef.current.querySelector('.sub__title'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out"
          })
          .from(sectionHeaderRef.current.querySelector('.description'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4")
          .from(serviceRefs.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4");
      }
    }, servicesRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building native mobile applications using React Native that work seamlessly across iOS and Android. From user onboarding to complex dashboards, I create performant mobile experiences."
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Architecting end-to-end solutions from frontend to backend. Whether it's React.js for web, Django for Python APIs, or Spring Boot for Java services, I build scalable, maintainable systems."
    },
    {
      icon: PencilRuler,
      title: "System Architecture & Integration",
      description: "Designing multi-institute architectures, implementing role-based access control, and integrating complex modules like LMS-ERP systems. I ensure your application scales and performs flawlessly."
    }
  ];

  return (
    <Section id="services" className="bg-secondary relative z-50" ref={servicesRef}>
      <div className="container">
        <div className="section__header" ref={sectionHeaderRef}>
          <h2 className="sub__title text-center">My <span className="primary">Services</span></h2>
          <p className="description">
            Building scalable applications that work beautifully across web and mobile. I focus on functionality 
            first, then polish the experience. From React Native apps serving thousands of users to full-stack 
            web platforms, I deliver solutions that perform and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8 md:mt-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="service p-8 md:p-12 px-4 md:px-5 rounded-3 overflow-hidden border border-solid backdrop-blur-[50px]" 
                style={{ background: 'rgba(var(--bg-secondary-rgb), 0.5)', borderColor: 'rgba(212, 175, 55, 0.25)' }}
                ref={el => serviceRefs.current[index] = el}
              >
                <div className="flex__center circle w-20 h-20 mx-auto rounded-full mb-10 relative border border-solid" style={{ borderColor: 'rgba(212, 175, 55, 0.25)' }}>
                  <div className="spotlight w-[40%]"></div>
                  <div className="icon__container border border-solid text-[30px] bg-base" style={{ borderColor: 'rgba(212, 175, 55, 0.25)' }}>
                    <IconComponent />
                  </div>
                </div>

                <h3 className="name text-center mb-5 font-medium">{service.title}</h3>
                <p className="text__muted description text-center mb-5">{service.description}</p>
                <div className="flex__center">
                  <a href="#contact" className="btn border border-solid inline-flex items-center gap-2.5 text-primary" style={{ borderColor: 'var(--color-primary)', background: 'rgba(var(--bg-secondary-rgb), 0.5)' }}>
                    Let Talk <ArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Services;
