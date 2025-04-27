import { useCV } from '../context/CVContext'
import { FaTools, FaLanguage, FaUserFriends } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Skills = () => {
  const { cv } = useCV()
  
  // Group technical skills by category
  const groupedSkills = cv.skills.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});
  
  return (
    <section id="skills" className="section bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          <span className="inline-block">
            <FaTools className="inline mr-2 mb-1" />
            Habilidades
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-600">Habilidades técnicas</h3>
            <div className="space-y-6">
              {Object.entries(groupedSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-medium text-secondary-700 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill.id}
                        className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="space-y-10">
            {/* Languages */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600 flex items-center">
                <FaLanguage className="mr-2" />Lenguajes
              </h3>
              <div className="space-y-3">
                {cv.skills.languages.map((lang) => (
                  <div key={lang.id} className="flex items-center justify-between bg-secondary-50 p-3 rounded-lg">
                    <span className="font-medium text-secondary-800">{lang.name}</span>
                    <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Soft Skills */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600 flex items-center">
                <FaUserFriends className="mr-2" />Habilidades Blandas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cv.skills.soft.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-secondary-50 text-secondary-800 p-3 rounded-lg text-center font-medium"
                    style={{backgroundColor: "rgba(145, 206, 235, 0.3)"}}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills