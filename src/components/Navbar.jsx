/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);

const Navbar = () => {
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -50,
      ease: "power4.Out",
      stagger: 0.07,
      delay: 2,
    });
  }, []);


const [menuOpen, setMenuOpen] = useState(false);


  const handleOpenResume = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
  
    <div ref={navRef} className='nav-container flex left-1/20 justify-between gap-8 fixed top-0 z-50 bg-black-50 text-white-50 px-4 rounded-2xl shadow-lg'>
      <div className=' flex items-center'>
        <img src='/Logo.png' alt='Logo' className='w-12 h-8 rounded-lg border-1 border-white-50'/>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="sm:hidden flex ml-auto pr-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-white-50" />
          ) : (
            <FaBars className="text-3xl text-white-50" />
          )}
        </button>
      </div>


      {/* Desktop Nav */}
      <div className='hidden sm:flex'>
        <ul className='flex flex-row gap-8 m-auto'>
          <li>
            <a href='#home'>
              <span className='hover-underline-animation'>Home</span>
            </a>
          </li>
          <li>
            <a href='#project'>
              <span className='hover-underline-animation'>Projects</span>
            </a>
          </li>
          <li>
            <a href='#about'>
              <span className='hover-underline-animation'>About</span>
            </a>
          </li>
          <li>
            <a href='#contact'>
              <span className='hover-underline-animation'>Contact</span>
            </a>
          </li>
        </ul>
      </div>  
       
      <button onClick={handleOpenResume}
         className='btn bg-white-50 text-black-50 mt-2 hidden sm:flex hover:bg-black-100 hover:text-white-50'>
          Resume</button>


      {/* Mobile Nav */}
      {menuOpen && (
        <ul className='absolute top-14 w-[84vw]  bg-black-50 flex flex-col items-center pb-4 gap-4 shadow-lg lg:hidden z-50'>
          <li>
            <a href='#home' onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href='#project' to='/Project' onClick={() => setMenuOpen(false)}>Project</a>
          </li>
          <li>
            <a href='#about' to='/About' onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href='#contact' to='/Contact' onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
          <li>
            <a href='' className='text-white-50' onClick={() => setMenuOpen(false)}>Resume</a>
          </li>
        </ul>
      )}
      
    </div>
    
  )
}

export default Navbar