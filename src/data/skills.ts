import type { Language, TechCategory } from '../types/content';
export const techStack: TechCategory[] = [
  {
    title: 'Backend & APIs',
    icon: 'layers',
    description: 'Desarrollo APIs y reglas de negocio para digitalizar procesos de gestión.',
    skills: [
      'C# / ASP.NET Core',
      'APIs REST',
      'Node.js / Express',
      'Clean Architecture',
    ],
    evidence: { label: 'Sistema de vinculación', projectId: 'vinculacion-uta' },
  },
  {
    title: 'Interfaces web',
    icon: 'code',
    description: 'Construyo interfaces adaptables con componentes reutilizables y conexión a APIs.',
    skills: [
      'Angular',
      'Blazor',
      'TypeScript / JavaScript',
      'HTML / CSS',
      'Tailwind CSS',
    ],
    evidence: { label: 'ERP de exportaciones', projectId: 'sizadianthy' },
  },
  {
    title: 'Datos y persistencia',
    icon: 'network',
    description: 'Modelo datos y consultas para gestionar inventarios, facturación y reportes.',
    skills: [
      'SQL Server',
      'MySQL',
      'PostgreSQL',
      'Entity Framework Core',
    ],
    evidence: { label: 'Sistema de servicios públicos', projectId: 'chaluapamba' },
  },
  {
    title: 'Entrega y seguridad',
    icon: 'lock',
    description: 'Trabajo con contenedores, documento APIs e implemento autenticación y permisos por rol.',
    skills: [
      'Docker',
      'Git / GitHub',
      'Swagger / Postman',
      'JWT / Roles',
    ],
    evidence: { label: 'Acceso por roles en vinculación', projectId: 'vinculacion-uta' },
  },
];
export const languages: Language[] = [
  {
    name: 'Español',
    label: 'Lengua materna',
    level: 'Nativo / Fluidez completa',
    description:
      'Redacción técnica, documentación de requerimientos funcionales, manuales de usuario y presentaciones a clientes.',
    tone: 'emerald',
  },
  {
    name: 'Inglés',
    label: 'Comunicación técnica',
    level: 'B1 Intermedio Técnico',
    description:
      'Lectura de documentación técnica oficial, especificaciones de arquitectura, resolución de errores en foros globales y comunicación escrita en equipos.',
    tone: 'sky',
  },
  {
    name: 'Kichwa',
    label: 'Lengua ancestral',
    level: 'Certificación CESLI',
    description:
      'Competencia lingüística para integración y proyectos comunitarios en la región andina con certificación de suficiencia.',
    tone: 'indigo',
  },
];
