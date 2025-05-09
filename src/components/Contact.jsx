import { useCV } from '../context/CVContext'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const { cv } = useCV()

  const [formData, setFormData]= useState({
    name: "",
    email: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const contactItems = [
    { 
      icon: <FaEnvelope />, 
      label: 'Email', 
      value: cv.personal.email, 
      link: `mailto:${cv.personal.email}` 
    },
    { 
      icon: <FaPhone />, 
      label: 'Celular', 
      value: cv.personal.phone, 
      link: `tel:${cv.personal.phone.replace(/\s+/g, '')}` 
    },
    { 
      icon: <FaMapMarkerAlt />, 
      label: 'Ubicación', 
      value: cv.personal.location 
    },
    { 
      icon: <FaLinkedin />, 
      label: 'LinkedIn', 
      value: 'Conecta conmigo', 
      link: cv.personal.linkedin 
    },
    { 
      icon: <FaGithub />, 
      label: 'GitHub', 
      value: 'Revisa mis proyectos', 
      link: cv.personal.github 
    }
  ]
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('Enviando...')

    try {
      const response = await fetch('https://formspree.io/f/xvgagwbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatusMessage('Mensaje enviado con éxito.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatusMessage('Hubo un error al enviar el mensaje.')
      }
    } catch (error) {
      setStatusMessage('Error al intentar enviar el mensaje.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-primary-600 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title border-white text-white after:bg-white">
          Ponte en contacto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Información de contacto</h3>
            <p className="mb-6">
              Sientete libre de enviarme oportunidades laborales!
            </p>
            
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-light">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                        className="font-medium hover:underline transition-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white text-secondary-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={FormData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="email@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={FormData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  className="w-full p-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tu mensaje..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full py-3"
                disable={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
            {statusMessage && <p className= "mt-4 text-center text-white">{statusMessage}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact