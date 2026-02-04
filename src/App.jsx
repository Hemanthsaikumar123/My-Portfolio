import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
// import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'education', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeSection={activeSection} />
      <main>
        <About />
        <div className="border-t border-white/20 mx-auto max-w-7xl" />
        <Projects />
        <div className="border-t border-white/20 mx-auto max-w-7xl" />
        {/* <Experience /> */}
        <Education />
        <div className="border-t border-white/20 mx-auto max-w-7xl" />
        <Certifications />
        <div className="border-t border-white/20 mx-auto max-w-7xl" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
