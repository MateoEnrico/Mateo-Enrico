import { motion } from 'framer-motion'
import { useCV } from '../context/CVContext'

const Experience = () => {
  const { cv } = useCV()

  return (
    <section id="experience" className="section">
      <div className="container-page">
        <p className="eyebrow">Experiencia</p>
        <h2 className="section-heading max-w-3xl">Dónde vengo construyendo</h2>

        <ol className="relative mt-14 space-y-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-ink-200 md:before:left-[calc(12rem+7px)]">
          {cv.experience.map((job, index) => (
            <motion.li
              key={job.id}
              className="relative grid gap-4 pl-8 md:grid-cols-[12rem_1fr] md:gap-8 md:pl-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-paper bg-brand-500 md:left-[12rem]" />
              <div className="font-mono text-xs uppercase tracking-wider text-ink-500 md:pt-1.5 md:text-right md:pr-8">
                {job.period}
              </div>
              <div className="card p-6 md:ml-8 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold md:text-2xl">{job.company}</h3>
                  <span className="text-sm font-medium text-brand-600">{job.position}</span>
                </div>
                <p className="mt-3 text-ink-600">{job.description}</p>
                {job.achievements?.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-[15px] text-ink-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {job.stack?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
