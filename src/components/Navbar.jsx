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
      duration: 1,
      ease: "power4.Out",
      stagger: 0.07,
      delay: 0.5,
    });
  }, []);


const [menuOpen, setMenuOpen] = useState(false);

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
            <a 
              href='#home'
              className={({ isActive }) => 
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>Home</a>
          </li>
          <li>
            <a 
              href='#project'
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>Project</a>
          </li>
          <li>
            <a 
              href='#about'
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>About</a>
          </li>
          <li>
            <a 
              href='#contact'
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>Contact</a>
          </li>
        </ul>
      </div>  
       
      <button className='btn bg-white-50 text-black-50 mt-2 hidden sm:flex'>Resume</button>


      {/* Mobile Nav */}
      {menuOpen && (
        <ul className='absolute top-14 w-[84vw]  bg-black-50 flex flex-col items-center pb-4 gap-4 shadow-lg lg:hidden z-50'>
          <li>
            <a href='#home' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>Home</a>
          </li>
          <li>
            <a href='#project' to='/Project' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>Project</a>
          </li>
          <li>
            <a href='#about' to='/About' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>About</a>
          </li>
          <li>
            <a href='#contact' to='/Contact' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>Contact</a>
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