import { motion } from 'framer-motion'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { useCV } from '../context/CVContext'
import Carousel from './Carousel'

const FeaturedProject = ({ project, index }) => (
  <motion.article
    className="card overflow-hidden"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid lg:grid-cols-[1fr_1.5fr]">
      {/* Meta column */}
      <div className="flex flex-col justify-between gap-8 bg-ink-900 p-6 text-ink-300 md:p-8">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-lime">{String(index + 1).padStart(2, '0')}</span>
            <span className="rounded-full border border-ink-700 px-3 py-1 font-mono text-[11px] text-ink-300">{project.status}</span>
          </div>
          <h3 className="mt-6 text-2xl font-semibold !text-white md:text-3xl">{project.name}</h3>
          <p className="mt-1 text-sm text-ink-400">{project.context}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-300">{project.tagline}</p>
        </div>

        {project.metrics?.length > 0 && (
          <dl className="grid grid-cols-2 gap-4 border-t border-ink-700 pt-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse">
                <dd className="font-display text-2xl font-semibold text-white">{m.value}</dd>
                <dt className="text-xs text-ink-400">{m.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>

      {/* Content column */}
      <div className="p-6 md:p-8">
        {project.flow?.length > 0 && (
          <div className="mb-7 flex flex-wrap items-center gap-2">
            {project.flow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-lg bg-brand-50 px-2.5 py-1 font-mono text-[11px] font-medium text-brand-700">{step}</span>
                {i < project.flow.length - 1 && <FaArrowRight className="text-[10px] text-ink-300" />}
              </span>
            ))}
          </div>
        )}

        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">El problema</p>
        <p className="mt-2 text-ink-700">{project.problem}</p>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">Lo que construí</p>
        <ul className="mt-3 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[15px] text-ink-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-ink-100 pt-6">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
)

const OtherProject = ({ project, index }) => (
  <motion.article
    className="card flex flex-col overflow-hidden p-3"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
  >
    <Carousel images={project.images} alt={project.name} />
    <div className="flex flex-1 flex-col p-3 pt-5">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold leading-snug">{project.name}</h4>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.name}`} className="mt-1 text-ink-400 transition hover:text-ink-900">
            <FaExternalLinkAlt size={13} />
          </a>
        )}
      </div>
      <p className="mt-2 flex-1 text-[15px] text-ink-600">{project.text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">{tech}</span>
        ))}
      </div>
    </div>
  </motion.article>
)

const Proyects = () => {
  const { cv } = useCV()

  return (
    <section id="projects" className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Proyectos destacados</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="section-heading max-w-3xl">Software real, para negocios reales</h2>
          <p className="max-w-sm text-ink-500">
            Casos seleccionados. Por confidencialidad muestro arquitectura y decisiones técnicas, no datos de clientes.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {cv.featured.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        <h3 className="mt-24 text-2xl font-semibold md:text-3xl">Más trabajos</h3>
        <p className="mt-2 text-ink-500">Automatizaciones, agentes y sitios que ya están funcionando.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {cv.otherProjects.map((project, index) => (
            <OtherProject key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyects
