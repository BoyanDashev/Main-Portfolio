
import Tech from './components/Technologies.jsx'
import Navbar from './components/Navbar'

import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Profiles from './components/Profiles.jsx'
import Projects from './components/Projects.jsx'

function App() {
 
  

  return (
    <div className='bg-slate-700'>
      <Navbar />
      <Hero/>
      <Tech />
      <Profiles />
      <Projects/>
      <About />
      <Contact/>
      
     
    </div>
  )
}

export default App
