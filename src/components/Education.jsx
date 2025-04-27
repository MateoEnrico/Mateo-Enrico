import { useCV } from '../context/CVContext'
import { FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Education = () => {
  const { cv } = useCV()
  
  return (
    <section id="education" className="section bg-secondary-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          <span className="inline-block">
            <FaGraduationCap className="inline mr-2 mb-1" />
            Educación
          </span>
        </h2>
        
        <div className="space-y-10">
          {cv.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="card border-l-4 border-accent-500 hover:border-accent-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-accent-600">{edu.degree}</h3>
                  <p className="text-lg font-medium text-secondary-700">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                </div>
              </div>
              
              <p className="text-secondary-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education