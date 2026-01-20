import { useEffect, useRef } from 'react';
import CustomIcon from '../components/CustomIcon';
import Section from '../components/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const awardsRef = useRef(null);
  const clientsRef = useRef(null);
  const headerRef = useRef(null);
  const pointsRef = useRef(null);
  const meRef = useRef(null);
  const userInfoRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const pointRefs = useRef([]);

  useEffect(() => {
    // Function to initialize and animate odometers
    const initOdometers = () => {
      // Wait for Odometer library to be available and elements to be mounted
      if (typeof window.Odometer === 'undefined' || !experienceRef.current || !projectRef.current || !awardsRef.current || !clientsRef.current) {
        setTimeout(initOdometers, 100);
        return null;
      }

      // Initialize all odometers with value 0
      let experienceOdometer, projectOdometer, awardsOdometer, clientsOdometer;

      if (experienceRef.current && !experienceRef.current.odometerInstance) {
        experienceOdometer = new window.Odometer({
          el: experienceRef.current,
          value: 0
        });
        experienceRef.current.odometerInstance = experienceOdometer;
      }

      if (projectRef.current && !projectRef.current.odometerInstance) {
        projectOdometer = new window.Odometer({
          el: projectRef.current,
          value: 0
        });
        projectRef.current.odometerInstance = projectOdometer;
      }

      if (awardsRef.current && !awardsRef.current.odometerInstance) {
        awardsOdometer = new window.Odometer({
          el: awardsRef.current,
          value: 0
        });
        awardsRef.current.odometerInstance = awardsOdometer;
      }

      if (clientsRef.current && !clientsRef.current.odometerInstance) {
        clientsOdometer = new window.Odometer({
          el: clientsRef.current,
          value: 0
        });
        clientsRef.current.odometerInstance = clientsOdometer;
      }

      // Animate to target values after a short delay
      const updateTimeout = setTimeout(() => {
        if (experienceRef.current?.odometerInstance) {
          experienceRef.current.odometerInstance.update(1.5);
        }
        if (projectRef.current?.odometerInstance) {
          projectRef.current.odometerInstance.update(2);
        }
        if (awardsRef.current?.odometerInstance) {
          awardsRef.current.odometerInstance.update(0);
        }
        if (clientsRef.current?.odometerInstance) {
          clientsRef.current.odometerInstance.update(1);
        }
      }, 1000);

      return () => clearTimeout(updateTimeout);
    };

    const odometerCleanup = initOdometers();

    // GSAP animations
    const ctx = gsap.context(() => {
      if (pointsRef.current && meRef.current && userInfoRef.current && titleRef.current && buttonsRef.current) {
        const timeline = gsap.timeline({ delay: 0.5 });
        
        timeline
          .from(pointsRef.current, { 
            opacity: 0, 
            y: -30, 
            duration: 0.8,
            ease: "power2.out"
          })
          .from(meRef.current, { 
            opacity: 0, 
            scale: 0.7, 
            duration: 0.8,
            ease: "back.out(1.7)"
          }, "-=0.4")
          .from([
            userInfoRef.current.querySelector('.sub__title'),
            userInfoRef.current.querySelector('.description')
          ], { 
            opacity: 0, 
            y: 20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
          }, "-=0.4")
          .from(titleRef.current, { 
            opacity: 0, 
            x: -30,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.6")
          .from(buttonsRef.current, { 
            opacity: 0, 
            x: -30,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4");

        // Animate individual points
        if (pointRefs.current.length > 0) {
          gsap.from(pointRefs.current, {
            opacity: 0,
            x: -30,
            stagger: 0.2,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pointsRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        }
      }
    }, headerRef);

    return () => {
      if (odometerCleanup) odometerCleanup();
      ctx.revert();
    };
  }, []);

  return (
    <Section 
      id="header" 
      className="bg-secondary relative" 
      ref={headerRef}
    >
      <div className="spotlight w-1/2 left-1/2 -translate-x-1/2"></div>
      <div className="container min-h-screen pt-[120px] md:pt-[120px] overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-[400px_auto] gap-8 relative z-10 pb-8">
          <div className="me flex justify-center md:justify-start" ref={meRef}>
            <img src={`${import.meta.env.BASE_URL}assets/me.png`} alt="Murali M" className="w-full max-w-[300px] md:max-w-[400px] mx-auto md:mx-0" />
          </div>
          <div className="user__info" ref={userInfoRef}>
            <h2 className="sub__title text-center md:text-left">Hi 👋, I'm Murali</h2>
            <h1 className="title text-center md:text-left" ref={titleRef}>Full Stack Mobile Developer</h1>
            <p className="text-base md:text-lg leading-[25px] text-center md:text-left">
              Software Developer at MHCognition crafting meaningful digital experiences through web and mobile 
              applications. Started as an intern, now leading development teams and launching apps that users 
              love. Always learning, always building. Let's create something amazing together!
            </p>
            <div className="flex buttons items-center gap-5 my-8 justify-center md:justify-start flex-col md:flex-row" ref={buttonsRef}>
              <div className="flex social__handles items-center gap-4">
                {/* <a href="#" target="_blank" className="icon__container handle bg-base">
                  <CustomIcon name="fiverr" />
                </a> */}
                <a href="https://www.github.com/Murali-1105/My_Projects.git" target="_blank" className="icon__container handle bg-base">
                  <CustomIcon name="github" />
                </a>
                <a href="http://www.linkedin.com/in/murali1105" target="_blank" className="icon__container handle bg-base">
                  <CustomIcon name="linkedin" />
                </a>
                  {/* <a href="#" target="_blank" className="icon__container handle bg-base">
                    <CustomIcon name="youtube" />
                  </a> */}
              </div>
              <a href="#contact" className="btn btn__primary">Contact Me</a>
            </div>
          </div>

          <div 
            className="points relative md:absolute bottom-0 left-0 w-full z-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8 backdrop-blur-[50px] rounded-xl justify-items-center md:justify-items-start shadow-lg mt-8 md:mt-0" 
            style={{ background: 'rgba(var(--bg-base-rgb), 0.5)' }}
            ref={pointsRef}
          >
            <div className="spotlight w-[40%] h-[90px] right-0"></div>
            <div className="point" ref={el => pointRefs.current[0] = el}>
              <div className="flex items-center gap-1.5 justify-center">
                <div className="odometer sub__title text-xl md:text-2xl" id="experience" ref={experienceRef}></div>
                <h3 className="sub__title text-xl md:text-2xl">+</h3>
              </div>
              <p className="text__muted text-[10px] text-center">Years Of Experience</p>
            </div>
            <div className="point" ref={el => pointRefs.current[1] = el}>
              <div className="flex items-center gap-1.5 justify-center">
                <div className="odometer sub__title text-xl md:text-2xl" id="project" ref={projectRef}></div>
                <h3 className="sub__title text-xl md:text-2xl">+</h3>
              </div>
              <p className="text__muted text-[10px] text-center">Completed projects</p>
            </div>
            <div className="point" ref={el => pointRefs.current[2] = el}>
              <div className="flex items-center gap-1.5 justify-center">
                <div className="odometer sub__title text-xl md:text-2xl" id="awards" ref={awardsRef}></div>
                <h3 className="sub__title text-xl md:text-2xl">🏆+</h3>
              </div>
              <p className="text__muted text-[10px] text-center">Major Projects</p>
            </div>
            <div className="point" ref={el => pointRefs.current[3] = el}>
              <div className="flex items-center gap-1.5 justify-center">
                <div className="odometer sub__title text-xl md:text-2xl" id="clients" ref={clientsRef}></div>
                <h3 className="sub__title text-xl md:text-2xl">+</h3>
              </div>
              <p className="text__muted text-[10px] text-center">Companies Worked</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Header;
