import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);

const Hero = () => {
  const lettersRef = useRef([]);
  const cardRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    gsap.from(lettersRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.Out",
      stagger: 0.07,
      delay: 0.5,
    });

    gsap.from(cardRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power4.Out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power4.Out",
      delay: 0.5,
    });
  }, []);

  const welcomeText = "Welcome!";



  return (
    <section id='home' className='h-screen'>
        <video 
        src="/Hero-Vid.mp4" 
        autoPlay 
        loop 
        muted 
        className='fixed top-0 left-0 w-full h-full object-cover z-0'/>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0"></div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse px-10 pt-20 sm:pt-0">
            <div ref={cardRef} className="mockup-window bg-[url('/Bg-Window.jpg')] bg-cover bg-center border border-white-50 w-full shadow-lg shadow-white-50">
              <h1 className="flex justify-center pt-20 border-t border-white-50 h-80 text-7xl font-bold">
                {welcomeText.split("").map((char, i) => (
                <span
                  key={i}
                  ref={el => lettersRef.current[i] = el}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </span>
              ))}
                </h1>
            </div>
            <div>
              <h1 ref={textRef} className="text-3xl sm:text-5xl font-bold text-center text-balance pt-4">Hi my name is Damien. A Frontend Developer
                based in NYC.
              </h1>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero