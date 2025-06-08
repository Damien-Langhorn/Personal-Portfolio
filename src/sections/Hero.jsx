/* eslint-disable react/react-in-jsx-scope */
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SplitText);

const Hero = () => {
  const h1Ref = useRef([]);
  const cardRef = useRef();
  const textRef = useRef();

  
    useGSAP(() => {
     const split = new SplitText(h1Ref.current, { type: "chars" });
     const split2 = new SplitText(textRef.current, { type: "chars", smartWrap:true });
     
     gsap.from(split.chars, { 
      xPercent: 100,
      yPercent: -100,
      rotation: "random([-30, 30])",
      ease: "sine.in",
      autoAlpha: 0,
      stagger: {
        amount: 1,
      }
      });

    gsap.from(cardRef.current, {
      opacity: 0,
      rotationX: "180",
      rotationY: "45",
      rotationZ: "100",
      autoAlpha: 0,
      duration: 1,

    });
    
     gsap.from(split2.chars, { 
      yPercent: "random([-100, 100])",
      rotation: "random([-30, 30])",
      ease: "sine.in",
      autoAlpha: 0,
      delay: 0.7,
      mask: "chars",
      stagger: {
        amount: 1,
        from: "random",
      }
      });

      return () => {
        split.revert(); // Clean up SplitText spans
      };

    

  }, []);



 


  return (
    <section id='home' className='h-screen flex flex-col justify-center items-center overflow-hidden'>
        <video 
        fetchPriority='high'
        src="/Hero-Vid.mp4" 
        autoPlay 
        loop 
        muted 
        className='fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none'/>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0"></div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse px-10 pt-20 sm:pt-0">
            <div ref={cardRef} className="mockup-window bg-[url('/Bg-Window.jpg')] bg-cover bg-center border border-white-50 w-full h-[250px] sm:h-full shadow-lg shadow-white-50">
              
              <h1 ref={h1Ref} className="flex justify-center pt-10 sm:pt-20 border-t border-white-50 h-80 text-5xl sm:text-7xl text-white-50 font-bold">Welcome!</h1>
            </div>
            <div>
              <h1 ref={textRef} className="text-2xl sm:text-5xl font-bold text-center text-balance text-white-50 pt-4">Hi my name is Damien. A Frontend Developer
                based in NYC.
              </h1>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero