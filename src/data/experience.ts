import type { Experience, Feature } from '../types/content';
export const principles: Feature[] = [
  {
    title: 'Clean Architecture & SOLID',
    icon: 'layers',
    tone: 'sky',
    description:
      'Diseño en capas (Domain, Application, Infrastructure, Presentation) tanto en C# con .NET Core como en Node.js, facilitando la inyección de dependencias, desacoplamiento y testeo unitario sistemático.',
  },
  {
    title: 'Seguridad e Integración API',
    icon: 'lock',
    tone: 'emerald',
    description:
      'Implementación de autenticación y autorización segura con JSON Web Tokens (JWT), control de acceso basado en roles (RBAC), documentación interactiva Swagger/OpenAPI y alineación con guías de seguridad OWASP.',
  },
  {
    title: 'Contenedores & DevOps',
    icon: 'box',
    tone: 'indigo',
    description:
      'Contenerización de aplicaciones con Docker y Docker Compose para reproducibilidad de entornos de desarrollo y producción, control de versiones con Git/GitHub y flujos ágiles de entrega continua.',
  },
];
export const experience: Experience[] = [
  {
    category: 'Soporte técnico & redes',
    period: 'Oct 2024 – Ene 2026',
    title: 'Auxiliar de Soporte Técnico en Seguridad Electrónica',
    organization: 'TechResources',
    description:
      'Diagnóstico, mantenimiento y resolución de incidencias en redes IP, servidores, hardware y software. Elaboración de documentación técnica y manuales de usuario para optimizar la continuidad operativa de clientes corporativos.',
    tags: ['Redes IP', 'Servidores', 'Diagnóstico Hardware/Software', 'Manuales Técnicos'],
    tone: 'sky',
  },
  {
    category: 'Desarrollo IoT & Fullstack',
    period: 'Abr 2024 – Ago 2024',
    title: 'Pasante de Desarrollo de Software',
    organization: 'Proyecto IoT & Automatización',
    description:
      'Desarrollo e integración de un sistema IoT integral para la automatización y control inteligente de iluminación. Conexión de aplicación móvil en Flutter con arquitectura backend en Node.js, Express y bases de datos relacionales MySQL.',
    tags: ['Node.js', 'Express', 'Flutter', 'MySQL', 'IoT'],
    tone: 'emerald',
  },
];
