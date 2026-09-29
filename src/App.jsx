import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Proyects from './components/Proyects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CVProvider } from './context/CVContext'

function App() {
  return (
    <CVProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Proyects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </CVProvider>
  )
}

export default App
