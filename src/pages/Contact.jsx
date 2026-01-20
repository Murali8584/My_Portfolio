import { useEffect, useRef } from 'react';
import { AtSign, Phone, MapPin } from 'lucide-react';
import CustomIcon from '../components/CustomIcon';
import Section from '../components/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const boxRefs = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contactRef.current && boxRefs.current.length > 0 && formRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none"
          }
        });

        timeline
          .from(boxRefs.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
          })
          .from(formRef.current, {
            opacity: 0,
            x: 30,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4");
      }
    }, contactRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Section id="contact" ref={contactRef}>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="left__column">
          <div className="box bg-secondary shadow-sm rounded-3 relative overflow-hidden mb-6 md:mb-8" ref={el => boxRefs.current[0] = el}>
            <div className="cluster p-4 md:p-5 z-50">
              <h2 className="sub__title">
                Let's <span className="primary">create something</span> amazing together!
              </h2>
              <p className="description my-5">
                Always excited to connect! Whether you're looking for a full stack developer, 
                need help with mobile app development, or want to discuss a collaboration, 
                feel free to drop me a message. I love talking about code, tech, and new opportunities!
              </p>
            </div>
            <CustomIcon name="list-option-ui" className="list__ui absolute z-10 -right-[10px] -bottom-[10px] w-1/2 h-auto" />
          </div>
          <div 
            className="box bg-secondary shadow-sm rounded-3 relative overflow-hidden"
            ref={el => boxRefs.current[1] = el}
          >
            <div className="cluster p-4 md:p-5 z-50">
              <div className="flex items-center gap-2.5 bg-[rgba(var(--bg-secondary-rgb),0.8)] w-full md:w-fit p-2.5 px-4 md:px-5 my-2 md:my-2.5 rounded-3 hover:[&_.icon__container]:scale-110 hover:[&_.icon__container]:text-text">
                <div className="icon__container">
                  <AtSign />
                </div>
                <div className="details">
                  <h3 className="name font-medium">Email</h3>
                  <p className="text__muted value">mmurali8584@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-[rgba(var(--bg-secondary-rgb),0.8)] w-fit p-2.5 px-5 my-2.5 rounded-3 hover:[&_.icon__container]:scale-110 hover:[&_.icon__container]:text-text">
                <div className="icon__container">
                  <Phone />
                </div>
                <div className="details">
                  <h3 className="name font-medium">Phone</h3>
                  <p className="text__muted value">9626659448</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-[rgba(var(--bg-secondary-rgb),0.8)] w-fit p-2.5 px-5 my-2.5 rounded-3 hover:[&_.icon__container]:scale-110 hover:[&_.icon__container]:text-text">
                <div className="icon__container">
                  <MapPin />
                </div>
                <div className="details">
                  <h3 className="name font-medium">Address</h3>
                  <p className="text__muted value">East Tambaram, Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form 
          className="contact__form p-4 md:p-5 w-full bg-secondary shadow-sm rounded-3 overflow-hidden relative" 
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="spotlight w-[170px] h-[100px] right-0 -bottom-[30px] z-10"></div>
          <h2 className="sub__title">
            Let's work <span className="primary">together!</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <input
              type="text"
              placeholder="First name"
              name="firstname"
              className="control block w-full p-2.5 my-2 md:my-5 rounded-2 text-text text-[15px] overflow-hidden transition-all duration-400 border-2 resize-none h-[50px] bg-transparent"
              style={{ borderColor: 'var(--color-primary)' }}
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              className="control block w-full p-2.5 my-2 md:my-5 rounded-2 text-text text-[15px] overflow-hidden transition-all duration-400 border-2 resize-none h-[50px] bg-transparent"
              style={{ borderColor: 'var(--color-primary)' }}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="control block w-full p-2.5 my-2 md:my-5 rounded-2 text-text text-[15px] overflow-hidden transition-all duration-400 border-2 resize-none h-[50px] bg-transparent"
              style={{ borderColor: 'var(--color-primary)' }}
            />
            <input
              type="tel"
              placeholder="Phone number"
              name="phone"
              className="control block w-full p-2.5 my-2 md:my-5 rounded-2 text-text text-[15px] overflow-hidden transition-all duration-400 border-2 resize-none h-[50px] bg-transparent"
              style={{ borderColor: 'var(--color-primary)' }}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="control block w-full p-2.5 my-2 md:my-5 rounded-2 text-text text-[15px] overflow-hidden transition-all duration-400 border-2 resize-none h-[130px] bg-transparent"
            style={{ borderColor: 'var(--color-primary)' }}
          ></textarea>
          <button type="submit" className="btn btn__primary submit__btn block w-full md:w-fit mx-auto mt-4">
            Send Now
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
