import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useCV } from '../context/CVContext'

const navLinks = [
  { name: 'Proyectos', to: 'projects' },
  { name: 'Experiencia', to: 'experience' },
  { name: 'Stack', to: 'skills' },
  { name: 'Formación', to: 'education' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cv } = useCV()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav
        className={`mx-auto flex max-w-page items-center justify-between rounded-full px-4 py-2 transition-all duration-300 sm:px-5 ${
          scrolled ? 'border border-ink-200 bg-white/80 shadow-sm backdrop-blur-md' : 'border border-transparent'
        }`}
      >
        <Link to="hero" smooth duration={500} className="flex cursor-pointer items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 font-display text-sm font-bold text-lime">
            ME
          </span>
          <span className="font-display text-base font-semibold text-ink-900">{cv.personal.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="!text-ink-900 bg-ink-100"
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth offset={-40} duration={500} className="btn-dark ml-2 cursor-pointer !py-2 !px-5">
            Contacto
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-ink-900 md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mx-auto mt-2 max-w-page rounded-3xl border border-ink-200 bg-white p-3 shadow-lg md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {[...navLinks, { name: 'Contacto', to: 'contact' }].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer rounded-2xl px-4 py-3 text-base font-medium text-ink-800 hover:bg-ink-100"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
