import type { Project } from '../types/content';
export const projects: Project[] = [
  {
    id: 'vinculacion-uta',
    featured: true,
    category: 'Academic Enterprise',
    context: 'Proyecto de Titulación UTA · 2024–2025',
    tone: 'sky',
    title: 'Sistema de Gestión de Prácticas de Servicio Comunitario',
    description:
      'Plataforma integral orientada a la planificación, seguimiento continuo, evaluación y gestión de evidencias documentales de las prácticas de vinculación universitaria. Desarrollada bajo Clean Architecture con ASP.NET Core y frontend reactivo en Blazor.',
    tags: ['C#', 'ASP.NET Core Web API', 'Blazor', 'SQL Server', 'EF Core', 'JWT', 'Swagger'],
    facts: [
      {
        label: 'Desafío',
        value: 'Procesos manuales dispersos y falta de trazabilidad documental académica.',
      },
      {
        label: 'Solución',
        value: 'Clean Architecture, ASP.NET Core Web API y Blazor interactivo con roles RBAC.',
      },
      {
        label: 'Impacto',
        value: 'Control digitalizado, gestión de indicadores y reportes automatizados.',
      },
    ],
    layers: [
      { label: 'Blazor WebAssembly / UI Client', detail: 'SPA' },
      { label: 'JWT Authentication & RBAC', detail: 'Tokens' },
      { label: 'ASP.NET Core Clean Architecture API', detail: 'Domain / App' },
      { label: 'Entity Framework Core + SQL Server', detail: 'Relational DB' },
    ],
  },
  {
    id: 'sizadianthy',
    category: 'ERP & Logística',
    context: 'Empresarial',
    tone: 'indigo',
    title: 'ERP de Exportaciones y Contabilidad (Sizadianthy)',
    description:
      'Automatización integral de operaciones para la industria de exportación: control de inventarios, gestión de cadenas de producción, seguimiento logístico internacional y flujos contables centralizados en APIs desacopladas.',
    tags: ['.NET Core', 'Web API', 'SQL Server', 'Angular', 'Docker'],
    process: {
      label: 'Cobertura de procesos',
      value: 'Inventario + Contabilidad',
      stack: '.NET Core + Angular',
      detail: 'Contenedor: Docker',
    },
  },
  {
    id: 'chaluapamba',
    category: 'Sector público / comunitario',
    context: 'Producción',
    tone: 'emerald',
    title: 'ERP de Gestión de Servicios Públicos (Chaluapamba)',
    description:
      'Digitalización de procesos operativos de la Junta de Agua: registro de lecturas de consumo mensuales, facturación automatizada, módulo de recaudación de taquilla, control de mora y balances contables para rendición de cuentas comunitaria.',
    tags: ['Node.js', 'Express', 'MySQL', 'Angular', 'Docker'],
    process: {
      label: 'Optimización de cobro',
      value: 'Gestión digitalizada',
      stack: 'Backend: Node.js Express',
      detail: 'Frontend: Angular SPA',
    },
  },
];
