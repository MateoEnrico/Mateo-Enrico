import { createContext, useContext } from 'react'
import miFoto from '/MiFoto.jpg'

const CVContext = createContext()

const cv = {
  personal: {
    name: 'Mateo Enrico',
    title: 'Full-Stack Developer · IA aplicada',
    photo: miFoto,
    headline: ['Construyo productos con IA que', 'funcionan', ' en producción.'],
    bio: 'Desarrollador full-stack. Diseño y entrego SaaS multi-tenant con Next.js y Supabase, agentes con Claude y Gemini, e integraciones de pagos y facturación electrónica para clientes de Argentina, Uruguay, Chile y EE.UU.',
    pitch:
      'Trabajo en la intersección entre producto y código: entiendo el proceso del cliente, lo convierto en specs y lo entrego con tests, CI y documentación. Hoy lidero delivery en una software factory y desarrollo sistemas de IA para educación médica.',
    availability: 'Disponible para nuevas oportunidades · Remoto',
    email: 'mateoenrico1221@gmail.com',
    phone: '+54 341 6547082',
    location: 'Funes, Santa Fe, Argentina',
    shortLocation: 'Funes · AR',
    linkedin: 'https://www.linkedin.com/in/mateo-enrico-630565269/',
    github: 'https://github.com/MateoEnrico',
    cvFile: '/Curriculum%20completo%20Mateo%20Enrico.pdf',
  },

  stats: [
    { value: '6', label: 'productos construidos en 2026' },
    { value: '700+', label: 'commits propios este año' },
    { value: '15+', label: 'APIs integradas en producción' },
    { value: '18k', label: 'líneas de Python en pipelines de IA' },
  ],

  marquee: [
    'TypeScript', 'React', 'Next.js', 'Supabase', 'PostgreSQL', 'Python', 'FastAPI', 'Claude API',
    'Gemini', 'MCP', 'n8n', 'Mercado Pago', 'ARCA / AFIP', 'WhatsApp API', 'Vitest', 'GitHub Actions', 'Vercel',
  ],

  services: [
    {
      icon: 'saas',
      title: 'SaaS full-stack',
      text: 'Apps multi-tenant con React / Next.js y Supabase: auth, RLS, roles, migraciones, tests y CI desde el día uno.',
    },
    {
      icon: 'ai',
      title: 'IA aplicada y agentes',
      text: 'Pipelines con Claude y Gemini que se validan a sí mismos, servidores MCP y extracción de documentos con OCR + LLM.',
    },
    {
      icon: 'integrations',
      title: 'Integraciones y automatización',
      text: 'WhatsApp, CRMs, Google Workspace, e-commerce y n8n. Conecto herramientas para que el equipo deje de copiar y pegar.',
    },
    {
      icon: 'payments',
      title: 'Pagos y facturación',
      text: 'Mercado Pago, Payway, Stripe y Paddle. Facturación electrónica con ARCA/AFIP (Argentina) y DGI (Uruguay).',
    },
  ],

  featured: [
    {
      id: 'pelokitos',
      name: 'Pelokitos',
      context: 'Plataforma operativa para una cadena de peluquerías infantiles · AR · UY · Miami',
      status: 'En producción',
      tagline:
        'Reemplazo de un sistema legacy (Laravel + SQL Server) por una plataforma multi-país y multi-tenant que maneja turnos, caja, sueldos, franquicias y facturación.',
      problem:
        'La cadena operaba en tres países con un sistema viejo que no soportaba monedas, fiscalidad ni franquicias distintas por país, y cada cierre de caja se hacía a mano.',
      highlights: [
        'Integré Payway de punta a punta: links de pago, webhooks, conciliación, simulador y validación de credenciales.',
        'Facturación electrónica con ARCA/AFIP con certificado cargable por sucursal, junto a DGI Uruguay.',
        'Lideré módulos de caja, sueldos y comisiones, bonos, catálogo, emails transaccionales e internacionalización.',
        'Desarrollo guiado por specs (OpenSpec): propuesta → spec → diseño → tareas → verificación, con aprobación antes de codear.',
        'Agentes con Claude para atención al cliente, promociones y un chatbot de ayuda que responde desde las guías de la app.',
      ],
      metrics: [
        { value: '1.2k', label: 'commits del equipo (307 míos)' },
        { value: '250+', label: 'archivos de test' },
        { value: '56', label: 'Edge Functions' },
        { value: '250+', label: 'migraciones SQL' },
      ],
      flow: ['Kiosko / Turnos', 'Caja', 'Pagos (MP · Payway · Stripe)', 'ARCA / DGI', 'Reportes'],
      stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Deno', 'TanStack Query', 'Zod', 'Vitest', 'GitHub Actions', 'Sentry', 'PostHog', 'Claude API'],
    },
    {
      id: 'eunacom',
      name: 'EUNAMed · Generador IA',
      context: 'Educación médica · preparación del examen EUNACOM (Chile)',
      status: 'En producción',
      tagline:
        'Backend que convierte clases en video en casos clínicos nuevos, presentaciones listas para usar, clips para redes y reportes de inconsistencias para revisión médica.',
      problem:
        'Crear preguntas de examen y material de clase a partir de cientos de videos llevaba semanas de trabajo manual de médicos, con errores difíciles de rastrear.',
      highlights: [
        'Pipeline multi-agente (generador, validador y críticos) que produce 5 "gemelos psicométricos" por pregunta y bloquea los casos que no pasan validación.',
        'Cada caso se contrasta contra el perfil oficial EUNACOM, que parseé a 1.557 ítems estructurados y verificados.',
        'Presentaciones PPTX generadas sobre la plantilla real del equipo: cambiar el diseño es cambiar la plantilla, no el código.',
        'Transcripción con timestamps exactos usando subtítulos de Vimeo: el modelo elige el cue, los segundos salen del archivo. Nunca le pido números al LLM.',
        'Watcher que recorre ~900 videos por ciclo con concurrencia acotada, y clips para redes cortados con ffmpeg bajo demanda.',
      ],
      metrics: [
        { value: '12k', label: 'líneas de Python' },
        { value: '29', label: 'endpoints de API' },
        { value: '5×', label: 'variantes por pregunta' },
        { value: '1.557', label: 'ítems del perfil oficial' },
      ],
      flow: ['Vimeo', 'Transcripción VTT', 'LLM multi-agente', 'Validador', 'PPTX · Clips · Reportes'],
      stack: ['Python', 'FastAPI', 'Pydantic', 'Supabase', 'OpenRouter', 'Gemini', 'python-pptx', 'ffmpeg', 'Google Slides API', 'Vimeo API'],
    },
    {
      id: 'claveo',
      name: 'Claveo',
      context: 'SaaS para inmobiliarias que trabajan con Tokko Broker',
      status: 'Piloto',
      tagline:
        'Espeja las conversaciones de WhatsApp del agente, arma el perfil del cliente y su búsqueda ideal, y sugiere respuestas. La IA propone; el humano siempre envía.',
      problem:
        'Los agentes inmobiliarios pierden horas cruzando lo que el cliente pide por WhatsApp con el inventario propio, la red de colegas y los portales.',
      highlights: [
        'Motor de búsqueda en paralelo sobre Tokko, la red de inmobiliarias y ZonaProp, rankeando por cantidad de criterios cumplidos.',
        'Servidor MCP remoto (Streamable HTTP, API keys, rate limiting, protección DNS-rebinding) para consultar el inventario desde Claude.',
        'API pública v1, suscripciones con Mercado Pago y Paddle, y extensión de Chrome para portales que bloquean la lectura server-side.',
        'Servicio de WhatsApp aparte en Fly.io con sesiones cifradas y administrador de flota.',
      ],
      metrics: [
        { value: '106', label: 'rutas de API' },
        { value: '76', label: 'archivos de test' },
        { value: '127', label: 'commits míos' },
        { value: '3', label: 'fuentes de búsqueda' },
      ],
      flow: ['WhatsApp', 'Perfil con Claude', 'Búsqueda Tokko · Red · ZonaProp', 'Respuesta sugerida'],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind 4', 'Supabase', 'Anthropic SDK', 'MCP', 'Baileys', 'Fly.io', 'Paddle', 'Mercado Pago', 'Chrome Extension'],
    },
    {
      id: 'ponz',
      name: 'Automatización contable',
      context: 'Estudio contable · Argentina',
      status: 'En producción',
      tagline:
        'Lee facturas de proveedores y extractos bancarios, extrae los datos con OCR + LLM y los cruza contra ARCA. Reemplaza la transcripción manual de PDFs a Excel.',
      problem:
        'El equipo del estudio pasaba horas transcribiendo PDFs de decenas de bancos y proveedores, cada uno con un formato distinto.',
      highlights: [
        'v1 en n8n con bots de WhatsApp y Telegram, hoy en soporte; v2 como app propia en Next.js, de la que soy autor principal.',
        'Extracción híbrida: OCR con tesseract.js y pdf.js, y modelos Gemini Flash / Claude Sonnet según costo y complejidad.',
        'Parsers específicos por banco (Credicoop, Coinag, Patagonia, tarjetas) cubiertos con fixtures de casos reales.',
        'Deploy propio en VPS con systemd, nginx y script de despliegue.',
      ],
      metrics: [
        { value: '124', label: 'commits míos (de 139)' },
        { value: '74', label: 'archivos de test' },
      ],
      flow: ['PDF / Foto', 'OCR', 'LLM', 'Cruce con ARCA', 'Reporte'],
      stack: ['Next.js', 'Supabase', 'tesseract.js', 'pdf.js', 'Gemini', 'Claude', 'n8n', 'Vitest', 'nginx'],
    },
    {
      id: 'rastrillo',
      name: 'Rastrillo de leads',
      context: 'Panel de operaciones comerciales · EUNAMed',
      status: 'Uso interno',
      tagline:
        'Barre los 7 canales de la empresa para encontrar consultas con intención de compra que nadie atendió, y las prioriza con reglas auditables.',
      problem:
        'Comercial registraba ~8 consultas con intención de compra por día, pero la estimación real era 15–20: se estaban perdiendo ventas entre canales.',
      highlights: [
        'Conectores a Supabase, Respond.io, WooCommerce, Gmail, Slack, Meta e YouTube, con resolución de identidad por teléfono.',
        'Solo lectura garantizada en código: whitelist de endpoints que bloquea cualquier escritura antes de tocar la red, más auditoría automática.',
        'Scoring determinístico "reglas primero, LLM después": cada señal guarda la frase exacta que la disparó. Ajustado sobre ~32k mensajes reales.',
        'Caché incremental para respetar rate limits estrictos (20 requests por ventana).',
      ],
      metrics: [
        { value: '7', label: 'fuentes conectadas' },
        { value: '32k', label: 'mensajes analizados' },
      ],
      flow: ['7 canales', 'Identidad', 'Scoring con evidencia', 'Panel priorizado'],
      stack: ['Python', 'FastAPI', 'SQLite', 'Respond.io API', 'Meta Graph API', 'WooCommerce API', 'Gmail API'],
    },
    {
      id: 'portal',
      name: 'Portal de Delivery',
      context: 'Plataforma interna de la software factory',
      status: 'En desarrollo',
      tagline:
        'Sistema central que conecta clientes, desarrolladores, PMs y Customer Success: onboarding, soporte con SLA, releases y pagos a desarrolladores.',
      problem:
        'La información de cada proyecto vivía dispersa en chats y planillas, sin trazabilidad de soporte ni de costos por cliente.',
      highlights: [
        'Único autor del código: desde el mock inicial hasta la app en Next.js + Supabase.',
        '6 roles con permisos que limitan qué montos puede ver cada uno, y cola de soporte con timers de SLA.',
        'Seguimiento de consumo de WhatsApp (Gupshup) y de la API de Anthropic por cliente.',
      ],
      metrics: [
        { value: '92', label: 'commits (100% míos)' },
        { value: '33', label: 'rutas' },
      ],
      flow: ['Cliente', 'Soporte con SLA', 'Proyecto / Release', 'Pagos y costos'],
      stack: ['Next.js', 'TypeScript', 'Supabase', 'Zod', 'Vitest', 'GitHub Actions', 'Vercel'],
    },
  ],

  otherProjects: [
    {
      name: 'Agente de WhatsApp con IA + CRM',
      text: 'Agente que responde consultas de clientes por WhatsApp y actualiza un CRM en Airtable en tiempo real. Redujo las tareas manuales del equipo comercial y los tiempos de respuesta.',
      stack: ['n8n', 'OpenAI', 'Airtable', 'WhatsApp'],
      images: ['/Agente-1.png', '/Agente-2.png', '/Agente-3.png', '/Agente-4.png', '/Agente-5.png', '/Agente-6.png', '/Agente-7.png', '/Agente-8.png', '/Agente-9.png'],
    },
    {
      name: 'Blackjack Clothes — e-commerce',
      text: 'Tienda online completa: diseño a medida de la marca, catálogo, envíos y cobro con Mercado Pago. Publicada y vendiendo.',
      stack: ['WordPress', 'WooCommerce', 'Mercado Pago'],
      images: ['/BJ-Inicio.png', '/BJ-Tienda.png', '/BJ-Carrito.png', '/BJ-Checkout.png'],
      link: 'https://www.blackjackclothes.com.ar',
    },
    {
      name: 'Preguntas de examen desde videos',
      text: 'Primera versión del generador de EUNAMed: toma videos de Drive, genera preguntas con Gemini y las clasifica según el perfil del examen. Bajó 70% el tiempo del proceso manual.',
      stack: ['n8n', 'Gemini', 'Google Drive', 'Google Sheets'],
      images: ['/Automatizacion-preguntas.png', '/Conseguir-codigo.png'],
    },
    {
      name: 'Ruteo automático de formularios',
      text: 'Cada formulario de reconocimiento de título dispara un mail al destinatario correcto según el país de origen. Cero intervención manual.',
      stack: ['n8n', 'Webhooks', 'Gmail API'],
      images: ['/Reconocimiento-titulo.png'],
    },
  ],

  experience: [
    {
      id: 1,
      company: 'Mithandir Tecnologías · GPSF',
      position: 'Head of Delivery & Full-Stack Developer',
      period: '2026 — Presente',
      description:
        'Software factory en Rosario que construye productos SaaS y automatizaciones para clientes de Argentina, Uruguay y EE.UU. Combino desarrollo hands-on con la gestión de entregas.',
      achievements: [
        'Desarrollo en 5 productos en paralelo: Pelokitos, Claveo, automatización contable, Portal de Delivery y sistema para clínica de kinesiología.',
        'Integraciones de pagos (Payway, Mercado Pago, Paddle) y facturación electrónica ARCA/AFIP en producción.',
        'Trabajo con specs antes que código (OpenSpec), commits atómicos ligados a issues, CI con lint, typecheck y tests.',
        'Uso de repositorios "brain" (bases de conocimiento en Obsidian) para desarrollar con Claude Code con contexto completo de cada cliente.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Claude API', 'Vitest'],
    },
    {
      id: 2,
      company: 'Cultiva tus Ideas',
      position: 'Desarrollador de IA y Automatización',
      period: 'Dic 2024 — Presente',
      description:
        'Consultora que diseña sistemas de IA y conocimiento para organizaciones. Mi cliente principal es EUNAMed, empresa de preparación para el examen médico EUNACOM de Chile.',
      achievements: [
        'Construí el backend de generación de contenido con IA de EUNAMed: 12k líneas de Python, FastAPI y pipeline multi-agente.',
        'Diseñé CTI-Brain: base de conocimiento verificada de 450+ notas, armada a partir de ~340 transcripciones, con capa de validación y herencia entre "cerebros" por cliente.',
        'Desarrollé el panel de rastrillo de leads que cruza 7 canales comerciales.',
        'Automatizaciones en n8n y sitios WordPress/WooCommerce para clientes de la consultora.',
      ],
      stack: ['Python', 'FastAPI', 'Gemini', 'Supabase', 'n8n', 'Obsidian'],
    },
    {
      id: 3,
      company: 'B&M Relojes',
      position: 'Fundador',
      period: 'Sep 2024 — Presente',
      description:
        'Emprendimiento propio de venta de relojes. Manejo stock, ventas, contenido y redes: me da una mirada de negocio que aplico a cada producto que construyo.',
    },
  ],

  education: [
    {
      id: 1,
      institution: 'Universidad Tecnológica Nacional (UTN)',
      degree: 'Ingeniería en Sistemas de Información',
      period: '2023 — Presente',
      description: 'Construcción de sistemas, programación funcional y web, Python y C.',
    },
    {
      id: 2,
      institution: 'Digitalers',
      degree: 'Desarrollador Web Front-End',
      period: '2023 — 2024',
      description: 'HTML, CSS, JavaScript y React.',
    },
    {
      id: 3,
      institution: 'Britania English School',
      degree: 'Inglés',
      period: '2016 — 2019',
    },
  ],

  skills: {
    groups: [
      { name: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'Zustand', 'Vite'] },
      { name: 'Backend y datos', items: ['Supabase', 'PostgreSQL', 'RLS', 'Edge Functions (Deno)', 'Node.js', 'Python', 'FastAPI', 'Prisma'] },
      { name: 'IA aplicada', items: ['Claude API', 'Gemini', 'OpenAI', 'OpenRouter', 'MCP', 'Agentes multi-rol', 'OCR + LLM', 'Claude Code'] },
      { name: 'Pagos y fiscal', items: ['Mercado Pago', 'Payway', 'Stripe', 'Paddle', 'ARCA / AFIP', 'DGI Uruguay'] },
      { name: 'Integraciones', items: ['WhatsApp (Gupshup · Baileys)', 'Google APIs', 'WooCommerce', 'Meta Graph', 'Vimeo', 'n8n', 'Webhooks'] },
      { name: 'Calidad y DevOps', items: ['Git', 'GitHub Actions', 'Vitest', 'Vercel', 'Fly.io', 'VPS · nginx', 'Sentry', 'PostHog'] },
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio' },
    ],
    soft: [
      { title: 'Specs antes que código', text: 'Propuesta, diseño y tareas aprobadas antes de abrir el editor.' },
      { title: 'Tests y CI', text: 'Si no está testeado, no está terminado.' },
      { title: 'IA como herramienta de equipo', text: 'Claude Code con bases de conocimiento por cliente.' },
      { title: 'Mirada de negocio', text: 'Mido el impacto en horas ahorradas y ventas recuperadas.' },
      { title: 'Comunicación con clientes', text: 'Traduzco necesidades en entregables concretos.' },
      { title: 'Aprendizaje rápido', text: 'De n8n a SaaS multi-tenant en menos de dos años.' },
    ],
  },
}

export const CVProvider = ({ children }) => (
  <CVContext.Provider value={{ cv }}>{children}</CVContext.Provider>
)

// eslint-disable-next-line react-refresh/only-export-components
export const useCV = () => {
  const context = useContext(CVContext)
  if (!context) {
    throw new Error('useCV must be used within a CVProvider')
  }
  return context
}
