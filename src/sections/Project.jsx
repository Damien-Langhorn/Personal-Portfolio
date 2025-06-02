import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);


const Project = () => {
    const h1Ref = useRef();
    const project1Ref = useRef();
    const project2Ref = useRef();
    const project3Ref = useRef();

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

        gsap.from(project1Ref.current, {
            opacity: 0,
            scale: 0.1,
            duration: 1,
            delay: 0.5,
            ease: "power4.Out",
            scrollTrigger: {
                trigger: h1Ref.current,
                start: "top 80%",
            }
        });

        gsap.from(project2Ref.current, {
            opacity: 0,
            scale: 0.1,
            duration: 1,
            delay: 0.7,
            ease: "power4.Out",
            scrollTrigger: {
                trigger: h1Ref.current,
                start: "top 80%",
            }
        });

        gsap.from(project3Ref.current, {
            opacity: 0,
            scale: 0.1,
            duration: 1,
            delay: 0.9,
            ease: "power4.Out",
            scrollTrigger: {
                trigger: h1Ref.current,
                start: "top 80%",
            }
        });
    }, []);

  return (
    <section id='project' className='relative pt-16'>
        <h1 ref={h1Ref} className='flex-center text-5xl font-bold text-white-50'>See My Work!</h1>
        <div className='flex flex-col lg:flex-row gap-8 h-full m-auto px-8 lg:px-16 py-8 lg:py-16'>

            {/*Featured Project, Left side of screen */}
          
            <div ref={project1Ref} className="card bg-black-50 w-full lg:h-[70vh] mt-10">
                <figure>
                    <img
                    className='w-full h-full object-cover object-top'
                    src="/Project-1.png"
                    alt="Featured Project" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Innovative Tech</h2>
                    <p>A tech company project based off an AI generated wireframe.
                        The purpose of this project was to create the website exactly as the wireframe
                        intened with some desgin changes as I saw fit.
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-white-50 text-black-50">See More</button>
                    </div>
                </div>
            </div>
        

            {/*Other Projects, Right side of screen */}
           <div className='flex flex-col md:flex-row lg:flex-col gap-4'>

            <div ref={project2Ref} className="pointer-events-none card bg-black-50 w-full lg:w-[40vw] lg:h-[60vh]">
                <figure>
                    <img
                    className='w-full h-full object-cover object-top'
                    src="/Project-1.png"
                    alt="Project 2"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn bg-white-50 text-black-50">See More</button>
                    </div>
                </div>
            </div>

            <div ref={project3Ref} className="pointer-events-none card bg-black-50 w-full lg:w-[40vw] lg:h-[60vh]">
                <figure>
                    <img
                    className='w-full h-full object-cover object-top'
                    src="/Project-1.png"
                    alt="Project 3"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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