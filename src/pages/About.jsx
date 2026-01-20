import { useEffect, useRef } from 'react';
import CustomIcon from '../components/CustomIcon';
import Section from '../components/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    // Highlight code blocks
    const highlightCode = () => {
      if (typeof window !== 'undefined' && window.hljs) {
        const codeBlocks = document.querySelectorAll('#about code');
        codeBlocks.forEach((block) => {
          window.hljs.highlightElement(block);
        });
      }
    };
    
    highlightCode();
    const highlightTimeout = setTimeout(highlightCode, 500);

    // GSAP animations
    const ctx = gsap.context(() => {
      if (aboutRef.current && boxRefs.current.length > 0) {
        gsap.from(boxRefs.current, {
          opacity: 0,
          y: 30,
          stagger: 0.3,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none"
          }
        });
      }
    }, aboutRef);

    return () => {
      clearTimeout(highlightTimeout);
      ctx.revert();
    };
  }, []);

  const codeBlock = `const developer = {
    firstName: "Murali",
    lastName: "M",
    role: "Full Stack Mobile Developer",
    location: "Chennai, India",
    hobby: () => {
      //eat();
      //sleep();
      //code();
      //repeat();
    }
}`;

  return (
    <Section id="about" ref={aboutRef}>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="box bg-secondary rounded-3 p-0 relative overflow-hidden self-start h-full col-span-2 lg:col-span-1" ref={el => boxRefs.current[0] = el}>
          <div className="spotlight w-[180px] right-0"></div>
          <div className="p-5 relative z-20 flex flex-col gap-5">
            <div className="flex items-center gap-2.5 mb-5 p-2.5 rounded-3" style={{ background: 'rgba(var(--bg-base-rgb), 0.8)' }}>
              <div className="profile">
                <img src={`${import.meta.env.BASE_URL}assets/me.png`} alt="Murali M" />
              </div>
              <div className="details">
                <h4 className="font-medium">Murali M</h4>
                <p className="text__muted">Full Stack Mobile Developer</p>
              </div>
            </div>
            <h2 className="sub__title">
              <span className="primary">Passionate</span> Developer
            </h2>
            <p className="description">
              Started as an intern and quickly grew into leading mobile and frontend teams. 
              I love solving complex problems, building scalable solutions, and helping others grow in their journey.
            </p>
          </div>
          <CustomIcon name="window" className="kit window absolute bottom-[-10px] right-0 z-10" />
        </div>

        <div className="col-2 box bg-secondary rounded-3 p-0 relative overflow-hidden col-span-2 lg:col-span-2" ref={el => boxRefs.current[1] = el}>
          <div className="spotlight w-[180px] right-0"></div>
          <div className="flex flex-col lg:flex-row gap-5 p-4 md:p-5 relative z-50">
            <div className="code__block rounded-3 shadow-sm overflow-hidden h-fit w-full lg:w-auto">
              <div className="flex items-center justify-start h-[50px] px-5 border-b border-solid" style={{ borderColor: 'rgba(212, 175, 55, 0.25)', background: 'rgba(var(--bg-secondary-rgb), 0.6)' }}>
                <span className="w-3 h-3 min-w-3 min-h-3 max-w-3 max-h-3 rounded-full bg-danger mr-2"></span>
                <span className="w-3 h-3 min-w-3 min-h-3 max-w-3 max-h-3 rounded-full bg-warning mr-2"></span>
                <span className="w-3 h-3 min-w-3 min-h-3 max-w-3 max-h-3 rounded-full bg-success"></span>
              </div>
              <pre>
                <code className="language-javascript">{codeBlock}</code>
              </pre>
            </div>
            <div className="my__drive flex-1 p-5 rounded-3 shadow-sm" style={{ background: 'rgba(var(--bg-secondary-rgb), 0.5)' }}>
              <h2 className="sub__title">
                What <span className="primary">Drives Me</span>
              </h2>
              <p className="description">
                I'm passionate about building full-stack solutions that make a real impact 🚀. 
                From architecting LMS-ERP systems to developing sleek mobile apps, I love turning 
                complex requirements into clean, scalable code 💻. What drives me? The thrill of 
                solving problems, the joy of seeing users interact with what I build 👥, and the 
                satisfaction of mentoring others to grow 🌱. Whether it's React Native, Django, or 
                Spring Boot, I'm always excited to dive into new challenges!
              </p>
            </div>
          </div>
          <CustomIcon name="grid-wire-frame" className="kit grid__wireframe absolute bottom-[-10px] right-0 z-10" />
        </div>

        <div className="col-2 box bg-secondary rounded-3 p-0 relative overflow-hidden col-span-2 lg:col-span-2" ref={el => boxRefs.current[2] = el}>
          <div className="cluster p-4 md:p-5 relative z-50 flex flex-col gap-4 md:gap-5">
            <div className="column">
              <h2 className="sub__title">
                My <span className="primary">Tech Stack</span>
              </h2>
              <p className="description">Always Evolving My Tech Stack</p>
            </div>
            <div className="column stacks__container grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 pt-5">
              <div className="flex__center btn stack bg-[rgba(var(--bg-secondary-rgb),0.8)] shadow-sm">
                <CustomIcon name="react" /> React Native
              </div>
              <div className="flex__center btn stack bg-[rgba(var(--bg-secondary-rgb),0.8)] shadow-sm">
                <CustomIcon name="react" /> React.js
              </div>
              <div className="flex__center btn stack bg-[rgba(var(--bg-secondary-rgb),0.8)] shadow-sm">
                <CustomIcon name="typescript" /> TypeScript
              </div>
              <div className="flex__center btn stack bg-[rgba(var(--bg-secondary-rgb),0.8)] shadow-sm">
                <CustomIcon name="tailwindcss" /> Django
              </div>
              <div className="flex__center btn stack bg-[rgba(var(--bg-secondary-rgb),0.8)] shadow-sm">
                <CustomIcon name="tailwindcss" /> Spring Boot
              </div>
            </div>
          </div>
          <CustomIcon name="grid" className="kit grid__box absolute bottom-[-10px] left-0 z-10" />
          <CustomIcon name="card-ui" className="kit card__ui absolute bottom-[-20px] right-[10px] z-10 w-[200px] h-[200px]" />
        </div>

        <div className="box flex__center last__box bg-secondary rounded-3 p-0 relative overflow-hidden bg-cover bg-no-repeat text-center col-span-2 lg:col-span-1" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/bg1.jpg)` }} ref={el => boxRefs.current[3] = el}>
          <div className="cluster p-5 relative z-50 flex flex-col gap-5">
            <h2 className="text-white sub__title">
              I'm Committed to Collaboration and Clear Communication
            </h2>
            <div className="flex__center btn__wrapper mt-8">
              <a href="#contact" className="btn bg-[#222] text-white rounded-none border border-solid border-transparent" style={{ borderImage: 'linear-gradient(45deg, var(--color-primary-accent), var(--color-primary-accent), var(--color-primary), #f0cb35) 1' }}>Let Collaborate</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
