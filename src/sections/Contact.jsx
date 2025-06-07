/* eslint-disable react/react-in-jsx-scope */
import { FaLinkedin, FaGithub,  } from "react-icons/fa"
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import emailjs from '@emailjs/browser';

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SplitText);


const Contact = () => {

  const h1Ref = useRef();
  const formRef = useRef();
  const icon1Ref = useRef();
  const icon2Ref = useRef();


  useGSAP(() => {
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

  gsap.from(formRef.current, {
    y: 100,
    opacity: 0,
    scale: 0.1,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 85%",
        end: "top 60%",
        scrub: 0.5,
    }
  })

  gsap.from(icon1Ref.current, {
    x: -100,
    opacity: 0,
    scale: 0.1,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 45%",
        end: "top 40%",
        scrub: 0.5,
    }
  })

  gsap.from(icon2Ref.current, {
    x: 100,
    opacity: 0,
    scale: 0.1,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 45%",
        end: "top 40%",
        scrub: 0.5,
    }
  });

}, []);


const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const [loading, setLoading] = useState(false); 


const handleChange = (e) => {
  const { name, value} = e.target;
  setFormData({
    ... formData,
    [name]: value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try{
    await emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );
    alert('Message sent!');
  } catch (error) {
    console.log('EMAILJS ERROR:', error);
    alert('Failed to send message.');
  } finally {
    setLoading(false);
    setFormData({ name: '', email: '', message: '' });
  }
}


  return (
    <section id='contact' className='relative h-screen flex flex-col justify-center items-center overflow-hidden'>
      <h1 ref={h1Ref} className='text-white-50 font-bold text-5xl flex-center'>Contact Me</h1>
    
        <div ref={formRef} className='flex flex-col pt-8 px-8'>
          <div className='bg-black-50 rounded-lg p-4 w-[70vw] max-w-200 m-auto'>
            <form onSubmit={handleSubmit} autoComplete="on">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input autoComplete="name" value={formData.name} onChange={handleChange} name="name" type="text" className="input w-full" placeholder="Type here" required />
                <legend className="fieldset-legend">Email</legend>
                <input autoComplete="email" value={formData.email} onChange={handleChange} name="email" type="email" className="input w-full" placeholder="Type here" required />
                <legend className="fieldset-legend">Send me a message</legend>
                <textarea autoComplete="off" value={formData.message} onChange={handleChange} name="message" className="textarea h-24 w-full" placeholder="Enter here" required></textarea>
                <button disabled={loading} className='btn bg-white-50 text-black-50 w-[25%] mx-auto mt-2 hover:bg-black-100 hover:text-white-50'>{loading ? 'Sending...' : 'Send'}</button>
              </fieldset>
            </form>
          </div>

          <div className="flex justify-center items-center pt-8 gap-4">
            <a
            ref={icon1Ref}
            href="https://www.linkedin.com/in/damien-langhorn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-50 hover:text-blue-700 text-3xl"
            >
            <FaLinkedin />
            </a>

            <a
            ref={icon2Ref}
            href="https://github.com/Damien-Langhorn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-50 hover:text-blue-700 text-3xl"
            >
            <FaGithub />
            </a>
          </div>
        </div>
      
    </section>
  )
}

export default Contact