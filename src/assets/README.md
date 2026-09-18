# Imágenes del portafolio

Organizar archivos reales en `profile/`, `projects/`, `certificates/` y `music/` cuando estén disponibles.

Los certificados se conectan automáticamente al colocar sus imágenes o PDFs en `certificates/` con el nombre indicado en [la guía de certificados](certificates/README.md). No necesitan importaciones manuales.

Importar imágenes desde los archivos de `src/data/` y asignarlas al campo `image`, `avatar` o `cover` con `src`, `alt`, `width` y `height`. `ResponsiveImage.astro` genera imágenes WebP responsivas para importaciones locales, reserva la proporción y muestra un respaldo si falla la carga. Las rutas string deben ser URLs públicas o rutas desde `/`, nunca rutas de `src/`.

La pantalla de Stitch seleccionada no contiene fotografías ni documentos originales de certificados. Se mantiene su representación gráfica mediante HTML e iconos, sin usar una fotografía de otra persona ni simular documentos oficiales.
