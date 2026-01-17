import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const sectionHeaderRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (projectsRef.current && sectionHeaderRef.current && projectRefs.current.length > 0) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: projectsRef.current,
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
          .from(projectRefs.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4");
      }
    }, projectsRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const projects = [
    {
      image: "/assets/project1.png",
      title: "Explore Mira – LMS Mobile App",
      description: "A comprehensive learning platform that marked my transition from web to mobile development. Built with React Native, this app handles course management, assignments, online exams, attendance tracking, and real-time notifications. The journey taught me mobile architecture, performance optimization, store requirements, and handling production at scale. Now live on both Google Play Store and Apple App Store, serving real users and supporting structured learning experiences."
    },
    {
      image: "/assets/project2.png",
      title: "TripEase – Travel Booking Web App",
      description: "A full-stack travel booking application I built as a personal project to explore Spring Boot. Developed backend services with MySQL database, implemented user authentication using Spring Security, and created a clean, responsive UI with client-side validations. This project helped me master Java backend development and understand the full lifecycle of building a production-ready application."
    }
  ];

  return (
    <Section 
      id="projects" 
      ref={projectsRef}
      className="bg-[#1a1a1a] bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(/assets/bg2.jpg)' }}
    >
      <div className="container">
        <div className="section__header text-white" ref={sectionHeaderRef}>
          <h2 className="sub__title">My Recent Projects</h2>
          <p className="description">
            Projects that shaped my growth as a developer. From mobile apps serving thousands of users 
            to full-stack web applications - each one taught me valuable lessons about architecture, 
            performance, and user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto mt-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project backdrop-blur-[50px] border border-solid border-white/10 rounded-xl overflow-hidden rounded-3 shadow-sm flex flex-col"
              ref={el => projectRefs.current[index] = el}
            >
              <a href="#" target="_blank" className="picture overflow-hidden">
                <img src={project.image} alt={project.title} className="transition-all duration-400 hover:scale-110" />
              </a>
              <div className="flex details flex-col justify-between items-stretch flex-1 p-5">
                <h3 className="line-clamp-1 font-medium text-lg mb-2.5">{project.title}</h3>
                <p className="text__muted description flex-1 text-base mt-2.5 line-clamp-4">
                  {project.description}
                </p>
                <div className="flex bottom mt-5">
                  <a href="#" target="_blank" className="flex__center btn text-primary px-3 py-2">
                    <ExternalLink /> View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
