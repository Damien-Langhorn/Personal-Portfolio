/* eslint-disable react/react-in-jsx-scope */
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SplitText);


const Project = () => {
    const h1Ref = useRef();
    const project1Ref = useRef();
    const project2Ref = useRef();
    const project3Ref = useRef();
    

    useGSAP(() => {
        const split = new SplitText(h1Ref.current, { type: "words", wordsClass: "split-text-word" });
        
        gsap.fromTo(split.words, {
            yPercent: "random( -100, 100)",
            opacity: 0,
            autoAlpha: 0,
            },
            {
                yPercent: 0,
                opacity: 1,
                autoAlpha:1,                
                ease: "sine.inOut",
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 0.5
                }   
            }
            
        );

        
        gsap.fromTo(project1Ref.current, {
            opacity: 0,
            yPercent: 30,
            scale: 0,
            rotationX: "180",
            rotationY: '45',
            rotationZ: "100",
            autoAlpha: 0,
            },
            {
            opacity: 1,
            yPercent:0,
            scale: 1,
            rotationX: "0",
            rotationY: "0",
            rotationZ: "0",
            autoAlpha: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: project1Ref.current,
                start: "top 100%",
                end: "top 80%",
                scrub: 0.5,
                }
            }
        );

        gsap.fromTo(project2Ref.current, {
            opacity: 0,
            yPercent: 30,
            scale: 0,
            rotationX: "180",
            rotationY: '45',
            rotationZ: "100",
            autoAlpha: 0,
            },
            {
            opacity: 1,
            yPercent: 0,
            scale: 1,
            rotationX: "0",
            rotationY: "0",
            rotationZ: "0",
            autoAlpha: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: project2Ref.current,
                start: "top 85%",
                end: "top 65%",
                scrub: 0.5,
                }
            }
        );

        gsap.fromTo(project3Ref.current, {
            opacity: 0,
            yPercent: 30,
            scale: 0,
            rotationX: "180",
            rotationY: '45',
            rotationZ: "100",
            autoAlpha: 0,
            },
            {
            opacity: 1,
            yPercent: 0,
            scale: 1,
            rotationX: "0",
            rotationY: "0",
            rotationZ: "0",
            autoAlpha: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: project3Ref.current,
                start: "top 90%",
                end: "top 70%",
                scrub: 0.5,
                }
            }
        );

        ScrollTrigger.refresh(true);

        return () => { 
            split.revert(); // Clean up SplitText spans
        };

    
    }, []);

  return (
    <section id='project' className='h-full relative pt-32 flex flex-col justify-center items-center overflow-hidden'>
        <h1 ref={h1Ref} className='flex-center text-5xl font-bold text-white-50 whitespace-pre-line'>See My Work!</h1>
        <div className='flex flex-col lg:flex-row gap-8 h-full m-auto px-8 lg:px-16 py-8 lg:py-16'>

            {/*Featured Project, Left side of screen */}
          
            <div ref={project1Ref} className="card bg-black-50 w-full lg:h-[70vh] mt-10">
                <figure>
                    <img
                    loading="lazy"
                    className='w-full h-full object-cover object-top'
                    src="/Project-1.png"
                    alt="Featured Project" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white-50">Innovative Tech</h2>
                    <p className='text-[12px] text-white-50'>A tech company project based off an AI generated wireframe.
                        The purpose of this project was to create the website exactly as the wireframe
                        intened with some desgin changes as I saw fit.
                    </p>
                    <div className="card-actions justify-end">
                        <a href="https://innovativetechcompany.netlify.app/"
                           target="_blank"
                           rel="noopener noreferrer" 
                           className="btn bg-white-50 text-black-50 hover:bg-black-100 hover:text-white-50">See More</a>
                    </div>
                </div>
            </div>
        

            {/*Other Projects, Right side of screen */}
           <div className='flex flex-col md:flex-row lg:flex-col gap-4'>

            <div ref={project2Ref} className="pointer-events-none card bg-black-50 w-full lg:w-[40vw] lg:h-[60vh]">
                <figure>
                    <img
                    loading="lazy"
                    className='w-full h-full object-cover object-top'
                    src="/Placeholder.jpg"
                    alt="Project 2"/>
                </figure>
                <div className="card-body">
                    <h2 hidden className="card-title">Card Title</h2>
                    <p hidden>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn bg-white-50 text-black-50">See More</button>
                    </div>
                </div>
            </div>

            <div ref={project3Ref} className="pointer-events-none card bg-black-50 w-full lg:w-[40vw] lg:h-[60vh]">
                <figure>
                    <img
                    loading='lazy'
                    className='w-full h-full object-cover object-top'
                    src="/Placeholder.jpg"
                    alt="Project 3"/>
                </figure>
                <div className="card-body">
                    <h2 hidden className="card-title">Card Title</h2>
                    <p hidden>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn bg-white-50 text-black-50">See More</button>
                    </div>
                </div>
            </div>
         </div>

        </div>
           
    </section>
  )
}

export default Project