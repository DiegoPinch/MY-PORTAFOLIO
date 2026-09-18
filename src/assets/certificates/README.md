# Certificados: fotos y PDFs

Coloca aquí tus archivos originales. El sitio los conecta automáticamente según el nombre del archivo, sin editar componentes.

| Certificado | Nombre del archivo, sin extensión |
| --- | --- |
| Arquitectura .NET 10 — Udemy | `net-10` |
| Docker — Código Facilito | `docker` |
| Python — UNEMI | `python-unemi` |
| Angular — Edureka | `angular` |
| Python Essentials 2 | `python-essentials` |
| CCNA 1 | `ccna` |
| Suficiencia en Kichwa | `kichwa` |

Formatos admitidos: `.png`, `.jpg`, `.jpeg`, `.webp` y `.pdf`. Usa nombres y extensiones en minúsculas.

Ejemplos:

- `docker.jpg`: muestra la imagen en la tarjeta y en el diálogo.
- `docker.pdf`: agrega un botón para abrir el documento original en otra pestaña.
- `docker.jpg` y `docker.pdf`: muestra la imagen como vista previa y permite abrir el PDF.

Los PDFs no generan una miniatura automáticamente. Para tener una vista previa, agrega también una foto o captura del documento con el mismo nombre. Si hay varias imágenes para un certificado, se utiliza la primera según este orden: PNG, JPG, JPEG, WebP.

Las imágenes conservan su proporción y se optimizan con Astro. Los documentos PDF se publican como archivos del sitio.

Después de agregar archivos, recarga la página. Si no aparecen durante el desarrollo, reinicia el servidor. Para un sitio publicado, vuelve a compilar y publicar.

Para añadir otro certificado o corregir título, emisor y año, edita `src/data/certificates.ts`. El `id` de cada entrada debe coincidir con el nombre de sus archivos. El campo opcional `verificationUrl` permite añadir la URL de validación del emisor.
