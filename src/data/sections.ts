import type { SectionHeading } from '../types/content';
export const headings = {
  about: {
    eyebrow: '01 // Enfoque y filosofía de ingeniería',
    title: 'Arquitectura por capas, código limpio y soluciones diseñadas para escalar.',
    description:
      'Construyo sistemas con separación estricta de responsabilidades, alta mantenibilidad y contratos de API consistentes, asegurando que cada componente aporte valor de negocio sin complejidad innecesaria.',
  },
  experience: {
    eyebrow: '02 // Experiencia laboral & formación',
    title: 'Trayectoria Profesional y Académica',
    description:
      'Historial de contribuciones técnicas en soporte, desarrollo e ingeniería de software.',
  },
  projects: {
    eyebrow: '03 // Proyectos destacados',
    title: 'Sistemas Empresariales & Software en Producción',
    description:
      'Plataformas desarrolladas con arquitecturas desacopladas, APIs REST y bases de datos robustas.',
  },
  stack: {
    eyebrow: '04 // Matriz tecnológica',
    title: 'Capacidades Técnicas & Herramientas',
    description: 'Herramientas y lenguajes utilizados en proyectos académicos y empresariales.',
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
    eyebrow: '07 // Contacto directo',
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
  'Oportunidad laboral / contratación',
  'Desarrollo de proyecto web / ERP',
  'Desarrollo .NET Core / Angular / APIs',
  'Otro asunto profesional',
];
