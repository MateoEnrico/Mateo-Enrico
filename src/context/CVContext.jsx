import { createContext, useContext, useState } from 'react'
import { jsPDF } from 'jspdf'
import miFoto from '/MiFoto.jpg';


// Create context
const CVContext = createContext()

// CV data
const defaultCV = {
  personal: {
    name: 'Mateo Enrico',
    title: 'Programador',
    photo: miFoto,
    bio: 'Estudiante de Ingeniería en Sistemas con experiencia en automatización de procesos, desarrollo web y soporte informático. Me especializo en la optimización de tareas mediante herramientas como n8n y la integración de APIs, además de la gestión y personalización de sitios en WordPress. Me adapto rápidamente a nuevos desafíos y busco oportunidades en desarrollo, automatización o soporte IT en modalidad remota.',
    email: 'mateoenrico1221@gmail.com',
    phone: '+54 341 6547082',
    location: 'Funes, Santa Fe, Argentina',
    linkedin: 'https://www.linkedin.com/in/mateo-enrico-630565269/',
    github: 'https://github.com/MateoEnrico',
  },
  experience: [
    {
      id: 1,
      company: 'Cultiva tus Ideas',
      position: 'Programador / Técnico',
      period: 'Diciembre 2024 - Presente',
      description: 'Trabajo como programador usando n8n y Python. También haciendo y manteniendo páginas web con WordPress. Estas herramientas me permitieron desarrollar automatizaciones que optimizaron la forma de trabajo en la empresa.',
      achievements: [
        'Creación de un sistema que genera automáticamente e-mails a partir de formularios web, optimizando tiempo y reduciendo errores.',
        'Mantenimiento y personalización de sitios web en WordPress, incluyendo ajustes en plugins mediante código.',
        'Desarrollo de automatizaciones con n8n, integrando APIs de Gemini AI, Google Drive, etc.',
        'Creación de sistema de generacion de preguntas de examen con inteligencia artificial a partir de videos, conversion automática a google sheet y adaptación para exportar a WordPress mediante n8n.',
        'Creación de sitio web para una tienda de ropa mediante wordpress (www.blackjackclothes.com.ar).'
      ]
    },
    {
      id: 2,
      company: 'B&M Relojes',
      position: 'Dueño',
      period: 'Septiembre 2024 - Presente',
      description: 'Dueño del emprendimiento y encargado de la administración de las redes sociales de la empresa.',
      achievements: [
        'Manejo de redes.',
        'Habilidades comerciales.',
        'Realización de fotos y videos.',
        'Creación de diseños para instagram.',
        'Gestión y administración de stock.'
      ]
    }
  ],
  education: [
    {
      id: 1,
      institution: 'Universidad Tecnológica Nacional',
      degree: 'Ingeniería en Sistemas',
      period: '2023 - Presente',
      description: 'Enfocado en construccion de sistemas, programación funcional y web. Aprendí Python y C.'
    },
    {
      id: 2,
      institution: 'Digitalers',
      degree: 'Programador web Front-End',
      period: '2023 - 2024',
      description: 'Me enseñaron HTML, CSS, JavaScript y React'
    },
    {
      id: 3,
      institution: 'Britania English School',
      degree: 'Inglés',
      period: '2016 - 2019',
      description: 'Estudio de inglés hasta tercero adol.'
    },
    {
      id: 4,
      institution: 'Nazaret',
      degree: 'Secundario',
      period: '2018 - 2022',
      description: 'Secundario enfocado en la economía'
    }
  ],
  skills: {
    technical: [
      { id: 1, name: 'JavaScript', category: 'Desarrollo' },
      { id: 2, name: 'React', category: 'Desarrollo' },
      { id: 3, name: 'HTML/CSS', category: 'Desarrollo' },
      { id: 4, name: 'n8n', category: 'Desarrollo' },
      { id: 5, name: 'GitHub', category: 'Herramientas' },
      { id: 6, name: 'Python', category: 'Desarrollo'},
      { id: 7, name: 'C', category: 'Desarrollo'},
      { id: 8, name: 'WordPress', category: 'Desarrollo'},
    ],
    languages: [
      { id: 1, name: 'Español', level: 'Nativo' },
      { id: 2, name: 'Inglés', level: 'Intermedio' }
    ],
    soft: [
      'Adaptabilidad',
      'Aprendizaje',
      'Resolucion de problemas',
      'Gestión de tiempo y organización',
      'Trabajo en equipo',
      'Pensamiento Crítico',
      'Comunicación efectiva'
    ]
  }
}

// Provider component
export const CVProvider = ({ children }) => {
  const [cv, setCV] = useState(defaultCV)

  // Function to download CV as PDF
  const downloadCV = () => {
    const doc = new jsPDF()
    
    // Add content to PDF
    doc.setFontSize(22)
    doc.text(cv.personal.name, 20, 20)
    
    doc.setFontSize(16)
    doc.text(cv.personal.title, 20, 30)
    
    doc.setFontSize(12)
    doc.text(`Email: ${cv.personal.email}`, 20, 40)
    doc.text(`Phone: ${cv.personal.phone}`, 20, 50)
    doc.text(`Location: ${cv.personal.location}`, 20, 60)
    
    // Experience
    doc.setFontSize(18)
    doc.text('Experience', 20, 80)
    
    let yPos = 90
    cv.experience.forEach(exp => {
      doc.setFontSize(14)
      doc.text(`${exp.position} - ${exp.company}`, 20, yPos)
      yPos += 10
      doc.setFontSize(12)
      doc.text(exp.period, 20, yPos)
      yPos += 10
      doc.text(exp.description, 20, yPos, { maxWidth: 170 })
      yPos += 20
    })
    
    // Education
    doc.setFontSize(18)
    doc.text('Education', 20, yPos)
    yPos += 10
    
    cv.education.forEach(edu => {
      doc.setFontSize(14)
      doc.text(`${edu.degree}`, 20, yPos)
      yPos += 10
      doc.setFontSize(12)
      doc.text(`${edu.institution} - ${edu.period}`, 20, yPos)
      yPos += 10
      doc.text(edu.description, 20, yPos, { maxWidth: 170 })
      yPos += 20
    })
    
    // Skills
    doc.setFontSize(18)
    doc.text('Skills', 20, yPos)
    yPos += 10
    
    doc.setFontSize(14)
    doc.text('Technical', 20, yPos)
    yPos += 10
    
    let skillsText = cv.skills.technical.map(skill => skill.name).join(', ')
    doc.setFontSize(12)
    doc.text(skillsText, 20, yPos, { maxWidth: 170 })
    yPos += 20
    
    // Save PDF
    doc.save('CV.pdf')
  }

  return (
    <CVContext.Provider value={{ cv, setCV, downloadCV }}>
      {children}
    </CVContext.Provider>
  )
}

// Create custom hook
export const useCV = () => {
  const context = useContext(CVContext)
  if (!context) {
    throw new Error('useCV must be used within a CVProvider')
  }
  return context
}