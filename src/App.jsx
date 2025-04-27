import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CVProvider } from './context/CVContext'
import Proyects from './components/Proyects'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <CVProvider>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <Experience />
          <Proyects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </CVProvider>
  )
}

export default App