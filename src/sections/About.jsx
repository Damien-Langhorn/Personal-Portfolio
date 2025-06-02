import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);


const About = () => {
  const h1Ref = useRef();
  const textRef = useRef();
  const h2Ref = useRef();
  const techStackRef = useRef([]);

  useGSAP(() => {
    gsap.from(h1Ref.current, {
            opacity: 0,
            scale: 0.1,
            duration: 1,
            ease: "power4.Out",
            scrollTrigger: {
                trigger: h1Ref.current,
                start: "top 80%",
            }
        });

       gsap.from(textRef.current, {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power4.Out",
            delay: 0.4,
            scrollTrigger: {
                trigger: h1Ref.current,
                start: "top 80%",
            }
        }); 

        gsap.from(h2Ref.current, {
            opacity: 0,
            scale: 0.1,
            duration: 1,
            ease: "power4.Out",
            delay: 0.2,
            scrollTrigger: {
                trigger: h1Ref.current,
                start: "top 80%",
            }
        });

        gsap.from(techStackRef.current, {
          opacity: 0,
          x: 50,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 80%",
      }
    });
  }, []);

  return (
    <section id='about' className='h-screen relative pt-16'>
      <h1 ref={h1Ref} className='text-white-50 text-5xl flex-center font-bold'>About Me</h1> 

      <div className='flex flex-col lg:flex-row pt-16  justify-center items-center gap-8 px-10'>

        <div className='flex'>
        <p ref={textRef} className='text-white-50 text-xl lg:text-2xl flex-center px-10 text-balance'>I'm a developer who focuses on creating React.js web applications.
            Whether it's building a new feature, fixing bugs, or optimizing performance, I strive to deliver high-quality code and user experiences.
        </p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <h2 ref={h2Ref} className='text-white-50 text-3xl font-semibold'>Tech Stack</h2>
          {[
            { src: "/react-icon.png", label: "React" },
            { src: "/tailwind-icon.png", label: "Tailwind CSS" },
            { src: "/js-icon.png", label: "JavaScript" },
            { src: "/html-icon.png", label: "HTML" },
            { src: "/gsap-icon.png", label: "GSAP" },
          ].map((tech, i) => (
            <div
              key={tech.label}
              ref={el => techStackRef.current[i] = el}
              className="badge bg-black-50 h-15 w-[50vw] text-2xl flex items-center gap-2"
            >
              <img className="size-[2em]" src={tech.src} alt={`${tech.label} Icon`} />
              {tech.label}
              </div>
          ))}
        </div>

        </div>
    </section>
  )
}

export default About