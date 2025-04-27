import { useCV } from '../context/CVContext'
import { FaBriefcase, FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Experience = () => {
  const { cv } = useCV()
  
  return (
    <section id="experience" className="section bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          <span className="inline-block">
            <FaBriefcase className="inline mr-2 mb-1" />
            Experiencia Laboral
          </span>
        </h2>
        
        <div className="space-y-10">
          {cv.experience.map((job, index) => (
            <motion.div
              key={job.id}
              className="card border-l-4 border-primary-500 hover:border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-600">{job.position}</h3>
                  <p className="text-lg font-medium text-secondary-700">{job.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.period}
                  </span>
                </div>
              </div>
              
              <p className="text-secondary-700 mb-4">{job.description}</p>
              
              {job.achievements && job.achievements.length > 0 && (
                <div>
                  <h4 className="font-medium text-secondary-900 mb-2">Experiencias:</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-accent-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience