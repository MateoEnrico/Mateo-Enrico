import { useCV } from '../context/CVContext'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  const { cv, downloadCV } = useCV()
  
  return (
    <section id="hero" className="section pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-2 text-gradient">
              <span className="text-primary-600">Hola, yo soy </span>
              <span className="text-secondary-800">{cv.personal.name}</span>
            </h1>
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-accent-600">
              {cv.personal.title}
            </h2>
            <p className="text-lg text-secondary-700 mb-6 max-w-2xl">
              {cv.personal.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="/Curriculum%20completo%20Mateo%20Enrico.pdf"
              download
              className="btn-primary text-base py-3 px-8 font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCloudDownloadAlt size={20} />
              Descargar CV
              </motion.a>

              <motion.a
                href="#contact"
                className="btn-secondary text-base py-3 px-8 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactáctame
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 overflow-hidden rounded-full border-4 border-white shadow-xl">
                <img 
                  src={cv.personal.photo} 
                  alt={cv.personal.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white py-2 px-4 rounded-lg shadow-lg">
                <p className="font-medium text-sm">Buscando nuevas oportunidades</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero