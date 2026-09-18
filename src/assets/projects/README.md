# Fotos y enlaces de proyectos

Coloca las capturas aquí; el sitio las conecta automáticamente por el `id` del proyecto.

| Proyecto | Nombre de captura |
| --- | --- |
| Gestión de vinculación | `vinculacion-uta.png` |
| Sizadianthy | `sizadianthy.png` |
| Chaluapamba | `chaluapamba.png` |

También se admiten `.jpg`, `.jpeg` y `.webp`. Usa nombres y extensiones en minúsculas. Si hay varias imágenes con el mismo nombre, se prioriza PNG, JPG, JPEG y WebP, en ese orden.

Cada tarjeta muestra una vista previa horizontal (16:9). Usa una captura de la parte principal de la web. El enlace «Ver imagen» abre la captura completa.

## Enlaces y landing pages

Edita las entradas de `src/data/projects.ts`:

- `url`: dirección HTTPS del sitio publicado; activa «Visitar web».
- `repository`: dirección del repositorio; activa «Ver código».
- `summary`: descripción breve para la tarjeta.
- `tags`: las tres primeras tecnologías aparecen en la tarjeta.

Una imagen y los enlaces son opcionales. Puedes mostrar únicamente información y un enlace para una landing page. Si no hay web ni repositorio, aparece «Consultar proyecto».

Para añadir una landing page, agrega una entrada al arreglo `entries` con su `id`, `title`, `category: 'Landing page'`, `context`, `description`, `tone`, `tags` y su `url` real. Si añades también una captura, su nombre debe coincidir con ese `id`.

No necesitas configurar diagramas, métricas ni arquitectura. Si el sitio ya está publicado, vuelve a compilar y publicar tras añadir archivos.
