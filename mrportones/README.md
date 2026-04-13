# MR Portones — Sitio Web

## Archivos incluidos

- `index.html` — Estructura completa del sitio
- `styles.css` — Estilos (dark navy/black/white)
- `script.js` — Interactividad (menú, contadores, formulario, animaciones)

## Para publicar el sitio

### Opción 1: GitHub Pages (gratis)
1. Subí los 3 archivos a un repositorio público en GitHub
2. Activá GitHub Pages en Settings → Pages → Source: main branch
3. Accedé al sitio en `https://tuusuario.github.io/mrportones/`

### Opción 2: Netlify (gratis, con dominio personalizado)
1. Arrastrá la carpeta al panel de Netlify (app.netlify.com)
2. Activá tu dominio `mrportones.com` en Netlify DNS

### Opción 3: Cualquier hosting con cPanel
1. Subí los archivos a `public_html/`
2. Apuntá el dominio al servidor

## Formulario de contacto

El formulario usa **Formspree**. Para activarlo:
1. Creá una cuenta en https://formspree.io
2. Creá un nuevo formulario para `contactomrportones@gmail.com`
3. Copiá el ID del formulario (ej: `xrgwqabc`)
4. En `index.html`, cambiá la acción del formulario:
   ```html
   action="https://formspree.io/f/xrgwqabc"
   ```

## Imágenes
Reemplazá los placeholders SVG con fotos reales de trabajos realizados.
Guardá las imágenes en una carpeta `images/` y actualizá los `<img src="">` en el HTML.

## Local SEO futuro
El sitio está preparado para expandir con páginas locales:
- `/portones-buenos-aires/index.html`
- `/reparacion-portones-buenos-aires/index.html`
- `/portones-cordoba/index.html`
- `/portones-rosario/index.html`
