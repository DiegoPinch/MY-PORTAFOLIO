import type { Language, TechCategory } from '../types/content';
export const techStack: TechCategory[] = [
  {
    title: 'Backend & APIs',
    eyebrow: '01 / Lógica de negocio',
    skills: [
      { name: 'C#', level: 'Avanzado' },
      { name: '.NET Core / .NET 8/10', level: 'Avanzado' },
      { name: 'ASP.NET Core Web API', level: 'Avanzado' },
      { name: 'Node.js & Express', level: 'Competente' },
      { name: 'REST APIs & SOLID', level: 'Estándar' },
    ],
    note: 'Clean Architecture, inyección de dependencias, DTOs',
  },
  {
    title: 'Frontend & UI',
    eyebrow: '02 / Interfaz de usuario',
    skills: [
      { name: 'Angular (SPA)', level: 'Avanzado' },
      { name: 'Blazor (WebAssembly)', level: 'Avanzado' },
      { name: 'TypeScript & JavaScript', level: 'Avanzado' },
      { name: 'HTML5 & CSS3', level: 'Avanzado' },
      { name: 'Tailwind CSS & Bootstrap', level: 'Ágil' },
    ],
    note: 'Componentes modulares, responsive design, UX accesible',
  },
  {
    title: 'Bases de Datos',
    eyebrow: '03 / Persistencia & datos',
    skills: [
      { name: 'Microsoft SQL Server', level: 'Avanzado' },
      { name: 'MySQL Relacional', level: 'Avanzado' },
      { name: 'PostgreSQL', level: 'Competente' },
      { name: 'Entity Framework Core', level: 'Experto' },
      { name: 'Modelado ER & Queries', level: 'Optimizado' },
    ],
    note: 'Migraciones, procedimientos almacenados, índices',
  },
  {
    title: 'DevOps & Seguridad',
    eyebrow: '04 / Plataforma',
    skills: [
      { name: 'Docker & Containers', level: 'Certificado' },
      { name: 'Git & GitHub Flujos', level: 'Avanzado' },
      { name: 'Postman & Swagger', level: 'Avanzado' },
      { name: 'JWT & RBAC Auth', level: 'Producción' },
      { name: 'OWASP Best Practices', level: 'Aplicado' },
    ],
    note: 'Validación de payloads, headers seguros y hashing',
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
