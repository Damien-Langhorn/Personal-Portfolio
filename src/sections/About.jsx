/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SplitText);


const About = () => {
  const h1Ref = useRef();
  const textRef = useRef();
  const h2Ref = useRef();
  const techStackRef = useRef([]);

  useGSAP(() => {
    const split = new SplitText(textRef.current, {
    type: "chars",
    smartWrap: true,
    wordsClass: "split-text-word",
    charsClass: "split-text-char",
    autoSplit: true
  });

  

  gsap.from(h1Ref.current, {
    y: 100,
    opacity: 0,
    scale: 0.1,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 95%",
        end: "top 60%",
        scrub: 0.5,
    }   
  })

  gsap.from(split.chars, {
    yPercent: "random([-100, 100])",
    rotation: "random(-30, 30)",
    autoAlpha: 0,
    ease: "sine.inOut",
    stagger: {
      amount: 0.5,
      from: "random",
    },
    scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "top 60%",
        scrub: 0.5,
    }   
  })

  gsap.from(h2Ref.current, {
    y: 100,
    opacity: 0,
    scale: 0.1,
    ease: "power2.inOut",
    delay: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 95%",
        end: "top 60%",
        scrub: 0.5,
    }   
  })
  gsap.from(techStackRef.current, {
    opacity: 0,
    xPercent: "random([-100, 100])",
    stagger: 0.15,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 70%",
        end: "top 55%",
        scrub: 0.5,
    }   
  });

    ScrollTrigger.refresh();
    
    return () => {
    split.revert(); // Clean up SplitText spans
  };

  }, []);


  return (
    <section id='about' className='h-screen relative flex flex-col justify-center items-center overflow-hidden'>
      <h1 ref={h1Ref} className='text-white-50 text-5xl flex-center font-bold'>About Me</h1> 

      <div className='flex flex-col lg:flex-row pt-16  justify-center items-center gap-8 px-10'>

        <div className='flex'>
        <p ref={textRef} className='text-white-50 text-[12px] sm:text-xl lg:text-2xl px-10 text-balance text-center whitespace-pre-line'>I'm a developer who focuses on creating React web applications.
            Whether it's building a new feature, fixing bugs, or optimizing performance. I strive to deliver high-quality code and user experiences.
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
              className="badge bg-black-50 border-black-50 h-15 w-full sm:w-[50vw] text-2xl text-white-50 flex items-center gap-2"
            >
              <img loading="lazy" className="size-[2em]" src={tech.src} alt={`${tech.label} Icon`} />
              {tech.label}
              </div>
          ))}
        </div>

        </div>
    </section>
  )
}

export default About