import type { Experience, Feature } from '../types/content';
export const principles: Feature[] = [
  {
    title: 'Procesos más claros',
    icon: 'layers',
    tone: 'sky',
    description:
      'Convierto procesos manuales en flujos digitales ordenados, para que el equipo encuentre la información y avance sin depender de hojas de cálculo dispersas.',
  },
  {
    title: 'Sistemas que pueden crecer',
    icon: 'lock',
    tone: 'emerald',
    description:
      'Construyo APIs y módulos separados para que añadir usuarios, reportes o nuevas funciones no obligue a rehacer todo el sistema.',
  },
  {
    title: 'Entrega con menos riesgos',
    icon: 'box',
    tone: 'indigo',
    description:
      'Documento las decisiones, organizo el código y preparo entornos reproducibles para facilitar el mantenimiento y la continuidad del proyecto.',
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
