import { motion } from 'framer-motion'
import { useCV } from '../context/CVContext'

const Skills = () => {
  const { cv } = useCV()

  return (
    <section id="skills" className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Stack</p>
        <h2 className="section-heading max-w-3xl">Herramientas que uso en producción, no solo en tutoriales</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cv.skills.groups.map((group, index) => (
            <motion.div
              key={group.name}
              className="card p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h3 className="text-base font-semibold">{group.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_2fr]">
          <div className="card p-6">
            <h3 className="text-base font-semibold">Idiomas</h3>
            <ul className="mt-4 space-y-2">
              {cv.skills.languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink-800">{lang.name}</span>
                  <span className="font-mono text-xs text-ink-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-base font-semibold">Cómo trabajo</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {cv.skills.soft.map((item) => (
                <li key={item.title} className="text-sm">
                  <span className="font-medium text-ink-900">{item.title}.</span>{' '}
                  <span className="text-ink-500">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
