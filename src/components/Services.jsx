import { motion } from 'framer-motion'
import { FaLayerGroup, FaRobot, FaPlug, FaReceipt } from 'react-icons/fa'
import { useCV } from '../context/CVContext'

const icons = { saas: FaLayerGroup, ai: FaRobot, integrations: FaPlug, payments: FaReceipt }

const Services = () => {
  const { cv } = useCV()

  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="eyebrow">Qué aporto a un equipo</p>
            <h2 className="section-heading">Del problema de negocio al software en producción</h2>
          </div>
          <p className="text-lg text-ink-600 lg:pb-2">{cv.personal.pitch}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cv.services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.title}
                className="card group p-6 transition hover:-translate-y-1 hover:border-ink-300 hover:shadow-[0_20px_40px_-24px_rgba(12,16,15,0.3)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-900 text-lime transition group-hover:rotate-[-6deg]">
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-[15px] text-ink-600">{service.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
