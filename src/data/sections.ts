import type { SectionHeading } from '../types/content';
export const headings = {
  about: {
    eyebrow: '01 // Cómo puedo ayudar',
    title: 'Desarrollo sistemas que ordenan el trabajo y facilitan las decisiones.',
    description:
      'Combino análisis de procesos, desarrollo backend y diseño de interfaces para entregar herramientas que un equipo pueda usar, mantener y ampliar.',
  },
  experience: {
    eyebrow: '02 // Experiencia laboral & formación',
    title: 'Trayectoria Profesional y Académica',
    description:
      'Historial de contribuciones técnicas en soporte, desarrollo e ingeniería de software.',
  },
  projects: {
    eyebrow: '03 // Proyectos destacados',
    title: 'Proyectos seleccionados',
    description:
      'Una selección de mi trabajo en desarrollo web y sistemas de gestión.',
  },
  stack: {
    eyebrow: '04 // Competencias técnicas',
    title: 'Lo que puedo aportar a tu equipo',
    description: 'Desarrollo con .NET, Angular y bases de datos relacionales, con experiencia en sistemas de gestión e integración de servicios.',
  },
  certificates: {
    eyebrow: '05 // Certificaciones & formación continua',
    title: 'Credenciales y Certificaciones Profesionales',
    description: 'Formación técnica, especialización y aprendizaje continuo.',
  },
  languages: {
    eyebrow: '06 // Competencia lingüística',
    title: 'Perfil Trilingüe y Comunicación Técnica',
  },
  contact: {
    eyebrow: '06 // Contacto directo',
    title: 'Iniciemos una conversación profesional',
    description:
      'Disponible para integrarme a equipos de desarrollo de software, proyectos empresariales .NET/Angular, consultoría o nuevos retos profesionales.',
  },
  music: { eyebrow: 'Más allá del código', title: 'Música que me acompaña' },
  references: { eyebrow: 'Personas con las que he trabajado', title: 'Referencias profesionales' },
} satisfies Record<string, SectionHeading>;

export const philosophyQuote =
  'El software de calidad se logra aplicando disciplina en los límites de dominio y claridad en cada abstracción.';
export const contactTopics = [
  { label: 'Oportunidad laboral', value: 'Oportunidad laboral / contratación' },
  { label: 'Proyecto web / ERP', value: 'Desarrollo de proyecto web / ERP' },
  { label: '.NET / Angular / APIs', value: 'Desarrollo .NET Core / Angular / APIs' },
  { label: 'Otro asunto', value: 'Otro asunto profesional' },
];
