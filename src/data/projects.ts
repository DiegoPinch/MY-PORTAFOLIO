import type { Project } from '../types/content';
import type { ImageMetadata } from 'astro';

const images = import.meta.glob<ImageMetadata>('../assets/projects/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const entries: Project[] = [
  {
    id: 'vinculacion-uta',
    featured: true,
    category: 'Aplicación web',
    context: 'Proyecto de Titulación UTA · 2024–2025',
    tone: 'sky',
    title: 'Gestión de vinculación',
    repository: 'https://github.com/Cifu2002/A_PSC/tree/main',
    summary:
      'Planificación, seguimiento y evaluación de prácticas universitarias en una sola plataforma.',
    description:
      'Plataforma integral orientada a la planificación, seguimiento continuo, evaluación y gestión de evidencias documentales de las prácticas de vinculación universitaria. Desarrollada bajo Clean Architecture con ASP.NET Core y frontend reactivo en Blazor.',
    tags: ['ASP.NET Core', 'Blazor', 'SQL Server', 'C#', 'EF Core', 'JWT', 'Swagger'],
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
    title: 'Sizadianthy',
    url: 'https://sizadianthy.com/',
    privateCode: true,
    summary: 'ERP para organizar inventarios, operaciones de exportación y contabilidad.',
    description:
      'Automatización integral de operaciones para la industria de exportación: control de inventarios, gestión de cadenas de producción, seguimiento logístico internacional y flujos contables centralizados en APIs desacopladas.',
    tags: ['.NET Core', 'Angular', 'SQL Server', 'Web API', 'Docker'],
    process: {
      label: 'Cobertura de procesos',
      value: 'Inventario + Contabilidad',
      stack: '.NET Core + Angular',
      detail: 'Contenedor: Docker',
    },
  },
  {
    id: 'chaluapamba',
    category: 'Servicios públicos',
    context: 'Producción',
    tone: 'emerald',
    title: 'Yakugest',
    url: 'https://erp-aguademo.netlify.app/',
    repository: 'https://github.com/DiegoPinch/ErpComunitario',
    summary: 'Sistema para registrar consumos de agua, emitir facturas y gestionar cobros.',
    description:
      'Digitalización de procesos operativos de la Junta de Agua: registro de lecturas de consumo mensuales, facturación automatizada, módulo de recaudación de taquilla, control de mora y balances contables para rendición de cuentas comunitaria.',
    tags: ['Node.js', 'Angular', 'MySQL', 'Express', 'Docker'],
    process: {
      label: 'Optimización de cobro',
      value: 'Gestión digitalizada',
      stack: 'Backend: Node.js Express',
      detail: 'Frontend: Angular SPA',
    },
  },
  {
    id: 'yayaman-tigramuni',
    category: 'Landing page',
    context: 'Cultura y cine',
    tone: 'sky',
    title: 'Yayaman Tigramuni',
    summary: 'Landing page promocional para una película, con una experiencia visual centrada en su historia y presentación.',
    description: 'Sitio web de presentación para una producción cinematográfica.',
    tags: ['Astro', 'Responsive UI', 'Landing page'],
    url: 'https://yayaman-tigramuni.netlify.app/',
  },
  {
    id: 'neuro-centro',
    category: 'Landing page',
    context: 'Salud y bienestar',
    tone: 'indigo',
    title: 'Centro Neuro',
    summary: 'Landing page informativa para un centro especializado en servicios y atención neurológica.',
    description: 'Sitio web de presentación de servicios para un centro de neuroatención.',
    tags: ['Landing page', 'Responsive UI', 'Servicios'],
    url: 'https://landingpage-neuro.pinchadiego8.workers.dev/#servicios',
  },
];

export const projects: Project[] = entries.map((project) => {
  const image = ['png', 'jpg', 'jpeg', 'webp']
    .map((extension) => images[`../assets/projects/${project.id}.${extension}`])
    .find(Boolean);
  return {
    ...project,
    image: image
      ? {
          src: image,
          width: image.width,
          height: image.height,
          alt: `Vista del proyecto ${project.title}`,
        }
      : project.image,
  };
});
