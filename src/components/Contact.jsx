import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import { useCV } from '../context/CVContext'

const initialForm = { name: '', email: '', message: '' }

const Contact = () => {
  const { cv } = useCV()
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  const links = [
    { icon: <FaEnvelope />, label: cv.personal.email, href: `mailto:${cv.personal.email}`, wide: true },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: cv.personal.linkedin, external: true },
    { icon: <FaGithub />, label: 'GitHub', href: cv.personal.github, external: true },
    { icon: <FaWhatsapp />, label: cv.personal.phone, href: `https://wa.me/${cv.personal.phone.replace(/\D/g, '')}`, external: true },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('https://formspree.io/f/xvgagwbz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Formspree error')
      setStatus('ok')
      setFormData(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-2xl border border-ink-700 bg-ink-800 px-4 py-3 text-white placeholder:text-ink-500 focus:border-lime focus:outline-none'

  return (
    <section id="contact" className="section bg-ink-900 text-ink-300">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow !text-lime">Contacto</p>
          <h2 className="section-heading !text-white">
            ¿Buscás a alguien que construya y entregue? <span className="text-lime">Hablemos.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg">
            Busco un equipo donde sumar como desarrollador full-stack o de automatización con IA, en modalidad remota o híbrida.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-ink-400">
            <FaMapMarkerAlt /> {cv.personal.location} · GMT-3
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`group flex items-center gap-3 rounded-2xl ${item.wide ? "sm:col-span-2" : ""} border border-ink-700 px-4 py-3 text-white transition hover:border-lime`}
              >
                <span className="text-lime">{item.icon}</span>
                <span className="min-w-0 truncate text-sm">{item.label}</span>
                <FaArrowRight className="ml-auto shrink-0 text-xs text-ink-500 transition group-hover:translate-x-0.5 group-hover:text-lime" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-ink-700 bg-ink-800/50 p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-xl font-semibold !text-white">Escribime</h3>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm">Nombre</label>
            <input id="name" name="name" value={formData.name} onChange={handleInputChange} className={inputClass} placeholder="Tu nombre" required />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm">Email</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="nombre@empresa.com" required />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm">Mensaje</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} className={inputClass} placeholder="Contame sobre el puesto o el proyecto…" required />
          </div>
          <button type="submit" className="btn-lime w-full" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
          {status === 'ok' && <p className="text-center text-sm text-lime">¡Gracias! Te respondo a la brevedad.</p>}
          {status === 'error' && <p className="text-center text-sm text-red-400">No se pudo enviar. Escribime directo por email.</p>}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
