PORTAFOLIO PROFESIONAL — EDUARDO LÓPEZ

Contenido
- index.html: estructura y contenido del sitio.
- styles.css: identidad visual y estilos adaptables a computadoras y celulares.
- script.js: navegación del menú móvil.
- evidencias/: dos registros descriptivos enlazados desde la sección de evidencias.

Ejecución local
1. Abrí index.html en un navegador moderno. No requiere instalar dependencias ni ejecutar un servidor.
2. Para probarlo con servidor local, abrí una terminal en esta carpeta y ejecutá: py -m http.server 8000
3. Visitá http://localhost:8000 y detené el servidor con Ctrl+C.

Publicación
- GitHub Pages: subí todo el contenido de esta carpeta a un repositorio y, en Settings > Pages, elegí la rama y carpeta que contienen index.html.
- Vercel: importá el repositorio o desplegá esta carpeta como proyecto estático. No hace falta framework ni build command; la carpeta raíz es la salida.

Antes de publicar
- Confirmá el correo, el enlace de LinkedIn, cargos y períodos.
- Los archivos de evidencias son resúmenes personales, no constancias externas. Adjuntá documentos verificables solo si existen y tenés autorización para divulgarlos.
- No publiques datos, código, procesos internos ni información confidencial de Patria Seguros o KOVE S.A.


Agregar imágenes a la galería
1. Copiá cada imagen a assets/images/ con un nombre simple, por ejemplo proyecto-erp.jpg.
2. Dentro de <div class="gallery-grid"> en index.html, duplicá el bloque <figure class="gallery-card"> existente.
3. Actualizá el valor de src, el texto alternativo alt y el pie de foto.
4. La cuadrícula se adapta automáticamente a pantallas grandes y celulares.


Privacidad de certificados laborales
La galería de evidencias muestra los cargos y períodos acreditados, pero no enlaza las imágenes originales de los certificados porque contienen datos personales, salario, horario y firmas. No copies los originales a una carpeta pública del sitio. Si los agregaste a un repositorio público, quitarlos de la carpeta del sitio no elimina copias de commits anteriores; revisá la visibilidad del repositorio y el historial.


Certificados para mostrar en el sitio
En assets/image se guardan únicamente las copias redactadas. Los certificados originales se guardan en Portafolio_Eduardo_privado, fuera de la carpeta publicable. Antes de desplegar, comprobá que el repositorio remoto no conserve las fotos originales en versiones anteriores; quitarlas de la versión actual no las elimina del historial de Git.


Tema visual
La navegación permite elegir Sistema, Claro u Oscuro. Sistema sigue la preferencia de apariencia del dispositivo y se actualiza si cambia; las selecciones Claro y Oscuro se guardan en el navegador.
