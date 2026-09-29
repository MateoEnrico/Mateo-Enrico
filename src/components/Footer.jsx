import { useCV } from '../context/CVContext'

const Footer = () => {
  const { cv } = useCV()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-ink-400">
      <div className="container-page flex flex-col items-center justify-between gap-2 border-t border-ink-700 py-8 text-sm md:flex-row">
        <p>&copy; {currentYear} {cv.personal.name}</p>
        <p className="font-mono text-xs">React · Tailwind · Framer Motion</p>
      </div>
    </footer>
  )
}

export default Footer
