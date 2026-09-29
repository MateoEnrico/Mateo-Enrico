import { motion } from 'framer-motion'
import { useCV } from '../context/CVContext'

const Education = () => {
  const { cv } = useCV()

  return (
    <section id="education" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">Formación</p>
          <h2 className="section-heading">Base académica y aprendizaje continuo</h2>
        </div>

        <div className="divide-y divide-ink-200 border-y border-ink-200">
          {cv.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-sm font-medium text-ink-500">{edu.institution}</p>
                {edu.description && <p className="mt-2 text-ink-600">{edu.description}</p>}
              </div>
              <span className="font-mono text-xs text-ink-500 sm:pt-1.5">{edu.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
