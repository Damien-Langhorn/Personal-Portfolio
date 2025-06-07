/* eslint-disable react/react-in-jsx-scope */
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Project from "./sections/Project"

function App() {
  
  return (

    <>
      <Navbar />
      <Hero />
      <Project />
      <About/>
      <Contact/>
    </>
      
    
    
  )
}

export default App
