import type { Certificate } from '../types/content';
import type { ImageMetadata } from 'astro';

const images = import.meta.glob<ImageMetadata>(
  '../assets/certificates/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
);
const pdfs = import.meta.glob<string>('../assets/certificates/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});

const entries: Certificate[] = [
  {
    id: 'net-10',
    title: 'Arquitectura de Aplicaciones Empresariales con .NET 10',
    issuer: 'Udemy',
    year: '2026',
    description:
      'Diseño de software empresarial desacoplado, microservicios, inyección de dependencias y patrones de diseño en el runtime moderno de Microsoft.',
    icon: 'award',
    tone: 'sky',
  },
  {
    id: 'docker',
    title: 'Curso Profesional de Docker',
    issuer: 'Código Facilito',
    year: '2026',
    description:
      'Contenerización multicapa, Dockerfiles optimizados, orquestación local con Docker Compose, volúmenes y redes aisladas.',
    icon: 'box',
    tone: 'emerald',
  },
  {
    id: 'python-unemi',
    title: 'Python — Nivel Medio a Avanzado',
    issuer: 'UNEMI',
    year: '2026',
    description:
      'Programación funcional, orientación a objetos avanzada, manejo de excepciones y automatización de flujos de datos.',
    icon: 'terminal',
    tone: 'indigo',
  },
  {
    id: 'angular',
    title: 'Getting Started with Angular',
    issuer: 'Edureka',
    year: '2026',
    description:
      'Fundamentos de Angular SPA, enlaces de datos bidireccionales, servicios reactivos, routing y consumo de APIs REST.',
    icon: 'code',
    tone: 'sky',
  },
  {
    id: 'python-essentials',
    title: 'Python Essentials 2',
    issuer: 'Cisco / OpenEDG',
    year: '2024',
    description:
      'Estructuras de datos avanzadas, generadores, iteradores y modularización bajo estándares de OpenEDG.',
    icon: 'check',
    tone: 'emerald',
  },
  {
    id: 'ccna',
    title: 'CCNA 1 v7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2021',
    description:
      'Modelos OSI y TCP/IP, direccionamiento IPv4/IPv6, subredes, configuración básica de routers y switches Cisco.',
    icon: 'network',
    tone: 'sky',
  },
  {
    id: 'kichwa',
    title: 'Certificación de Suficiencia en Idioma Kichwa',
    issuer: 'CESLI',
    description:
      'Acreditación lingüística emitida por el Centro de Especialización en Lenguas Indígenas (CESLI). Comunicación comunitaria, proyectos de vinculación social y proyectos interculturales.',
    icon: 'languages',
    tone: 'emerald',
    featured: true,
  },
];

// El nombre del archivo debe coincidir con el id del certificado.
export const certificates: Certificate[] = entries.map((certificate) => {
  const basePath = `../assets/certificates/${certificate.id}`;
  const image = ['png', 'jpg', 'jpeg', 'webp']
    .map((extension) => images[`${basePath}.${extension}`])
    .find(Boolean);

  return {
    ...certificate,
    image: image
      ? {
          src: image,
          width: image.width,
          height: image.height,
          alt: `Certificado de ${certificate.title}, emitido por ${certificate.issuer}`,
        }
      : certificate.image,
    pdfUrl: pdfs[`${basePath}.pdf`] ?? certificate.pdfUrl,
  };
});
