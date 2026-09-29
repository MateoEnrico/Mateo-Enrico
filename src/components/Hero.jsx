import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaArrowDown, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useCV } from '../context/CVContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const Hero = () => {
  const { cv } = useCV()
  const { personal, stats, marquee } = cv

  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <div className="container-page relative">
        <div className="grid items-end gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-700">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-brand-400" />
              {personal.availability}
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="mt-6 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              {personal.headline[0]}{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">{personal.headline[1]}</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-lime sm:h-4" />
              </span>
              {personal.headline[2]}
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="mt-6 max-w-2xl text-lg text-ink-600 md:text-xl">
              {personal.bio}
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="projects" smooth offset={-80} duration={600} className="btn-dark cursor-pointer">
                Ver proyectos <FaArrowDown className="text-xs" />
              </Link>
              <a href={personal.cvFile} download className="btn-ghost">
                <FaFileDownload /> Descargar CV
              </a>
              <div className="ml-1 flex gap-1">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-ink-600 transition hover:bg-white hover:text-ink-900">
                  <FaGithub size={20} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-ink-600 transition hover:bg-white hover:text-ink-900">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2)} className="relative mx-auto w-full max-w-[15rem] sm:max-w-xs lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border border-ink-200 bg-white p-2 shadow-[0_30px_60px_-30px_rgba(12,16,15,0.35)]">
              <img src={personal.photo} alt={personal.name} className="aspect-square w-full rounded-[1.6rem] object-cover" />
              <div className="flex items-center justify-between px-3 py-3">
                <div>
                  <p className="font-display text-base font-semibold text-ink-900">{personal.name}</p>
                  <p className="text-xs text-ink-500">{personal.title}</p>
                </div>
                <span className="font-mono text-[11px] text-ink-500">{personal.shortLocation}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.dl {...fadeUp(0.32)} className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse bg-white p-5 md:p-6">
              <dt className="mt-1 text-sm text-ink-500">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-ink-900 md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="mask-fade-x mt-14 overflow-hidden border-y border-ink-200 bg-white py-4">
        <div className="flex w-max animate-marquee gap-10 font-mono text-sm text-ink-500">
          {[...marquee, ...marquee].map((tech, i) => (
            <span key={i} className="flex items-center gap-10">
              {tech}
              <span className="text-brand-400">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
