import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CustomIcon from '../components/CustomIcon';
import Section from '../components/Section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const sectionHeaderRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (testimonialsRef.current && sectionHeaderRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none"
          }
        });

        if (sectionHeaderRef.current.querySelector('.sub__title')) {
          timeline.from(sectionHeaderRef.current.querySelector('.sub__title'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out"
          });
        }

        if (testimonialRefs.current.length > 0) {
          gsap.from(testimonialRefs.current, {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        }
      }
    }, testimonialsRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const testimonials = [
    {
      image: "/assets/client1.jpg",
      name: "Jessica Harper",
      position: "Product Manager",
      company: "TechNova Solutions",
      content: "Emmanuel transformed our website's user experience! His attention to detail and ability to translate our vision into a seamless interface was exceptional. We saw an immediate improvement in user engagement."
    },
    {
      image: "/assets/client2.jpg",
      name: "Mark Thompson",
      position: "CEO",
      company: "Dynamic Designs",
      content: "Working with Emmanuel was a breeze! He's fast, communicative, and his code is always clean and efficient. Our website looks and performs better than ever."
    },
    {
      image: "/assets/client3.jpg",
      name: "Clara Mensah",
      position: "Marketing Director",
      company: "BrightPath Agency",
      content: "Emmanuel's frontend skills took our branding to the next level. He was able to bring our design concepts to life with stunning accuracy and creativity. I highly recommend him!"
    },
    {
      image: "/assets/client4.jpg",
      name: "Samuel Okwuosa",
      position: "CTO",
      company: "Greenline Tech",
      content: "Emmanuel is hands-down one of the best frontend developers I've worked with. His expertise made our site not only look great but perform flawlessly across all devices."
    },
    {
      image: "/assets/client5.jpg",
      name: "Linda Ruiz",
      position: "Co-Founder",
      company: "PixelSpark Creative Studio",
      content: "Emmanuel is incredibly talented. He consistently delivers pixel-perfect designs and smooth user experiences. I appreciate his dedication to excellence and innovation."
    },
    {
      image: "/assets/client6.jpg",
      name: "Tunde Adebayo",
      position: "Lead Developer",
      company: "CodeWave",
      content: "Emmanuel is a top-notch frontend developer! His work always exceeds expectations, and he's a pleasure to collaborate with. Our site is now faster and more user-friendly than ever."
    }
  ];

  return (
    <Section 
      id="testimonials" 
      ref={testimonialsRef}
      className="overflow-hidden relative py-12"
      style={{ background: 'rgba(var(--bg-secondary-rgb), 0.8)' }}
    >
      <div 
        className="absolute w-1/4 h-full top-0 left-0 z-10"
        style={{ background: 'linear-gradient(to left, transparent, var(--bg-secondary))' }}
      ></div>
      <div 
        className="absolute w-1/4 h-full top-0 right-0 z-10"
        style={{ background: 'linear-gradient(to right, transparent, var(--bg-secondary))' }}
      ></div>
      <div className="section__header" ref={sectionHeaderRef}>
        <h2 className="sub__title text-center">
          What My <span className="primary">Clients</span> Says
        </h2>
      </div>
      <Swiper
        className="testimonials mt-12 py-5 static h-full"
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        speed={5000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: "auto",
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div 
              className="testimonial h-auto max-w-[80%] md:max-w-[60%] bg-secondary p-6 md:p-10 shadow-sm rounded-4 relative"
              ref={el => testimonialRefs.current[index] = el}
            >
              <div className="flex items-center gap-2.5 mb-6 md:mb-8">
                <div className="profile">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="details">
                  <h3 className="name text-base font-medium">{testimonial.name}</h3>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2.5 text-left">
                    <p className="text__muted position">{testimonial.position}</p>
                    <p className="primary company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
              <p className="text__muted content text-sm md:text-base mb-4 md:mb-5">{testimonial.content}</p>
              <div className="flex__center stars__container justify-start absolute bottom-6 left-6 md:bottom-10 md:left-10">
                {[...Array(5)].map((_, i) => (
                  <CustomIcon key={i} name="star" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Testimonials;
