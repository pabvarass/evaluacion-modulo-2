# Proyecto Web: Sitio Informativo sobre Ciberseguridad

Este proyecto corresponde a la evaluación final del **Módulo 2: Desarrollo Web**. Consiste en un sitio web informativo y responsivo que educa sobre ciberseguridad, incluye interactividad y está desarrollado siguiendo buenas prácticas de programación, diseño y control de versiones.

## Tecnologías Utilizadas

- **HTML5** → para estructura semántica del contenido.
- **CSS3** → para estilos personalizados y diseño visual.
- **Bootstrap 5** → para diseño responsive, componentes (navbar, cards, accordion, modal) y utilidades CSS.
- **JavaScript / jQuery** → para interactividad, validaciones y manejo de modals.
- **Git** y **GitHub** → para control de versiones y publicación.

## Estructura del Sitio

### 1. `index.html` - Inicio

- Introducción a la ciberseguridad.
- Imagen destacada, responsiva y con estilo mejorado.
- Barra de navegación a las demás secciones.
- Footer fijo en la parte inferior de la página, aunque el contenido sea corto.

### 2. `amenazas.html`

- Tarjetas informativas sobre amenazas comunes:
  - Phishing
  - Ransomware
  - Malware
  - Ataques DDoS
- Accordion interactivo que permite expandir información.
- Carrusel con ejemplos reales de ciberataques (casos WannaCry, Phishing PayPal, DynDNS DDoS).

### 3. `consejos.html`

- Lista de buenas prácticas para la seguridad online.
- Formulario de contacto validado con jQuery.
- Modal interactivo con un test de seguridad, que presenta preguntas y retroalimentación.

## Archivos Principales

- `/index.html` → página principal.
- `/amenazas.html` → página de amenazas.
- `/consejos.html` → página de consejos y test.
- `/css/styles.css` → estilos personalizados que incluyen:
  - Layout flex para el footer siempre abajo.
  - Gradientes en títulos.
  - Sombras y hover en cards.
  - Footer con fondo en gradiente.
  - Estilo mejorado de botones.
- `/js/script.js` → validaciones de formularios y lógica del test de seguridad.
- `/img/` → imágenes utilizadas en tarjetas y encabezados.

## Características de Diseño

- Diseño **responsive** para móviles y escritorio.
- Footer siempre fijado abajo gracias al layout flex.
- Títulos con degradado azul-morado para efecto visual atractivo.
- Cards con animación hover.
- Navegación coherente en todas las páginas.

## Cómo Ejecutar el Proyecto

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en un navegador web.
3. Navegar entre las secciones usando la barra de navegación.
4. (Opcional) Publicar en **GitHub Pages** para acceso online.

## Requisitos del Proyecto

- Estructura clara, semántica y ordenada.
- Navegación entre 3 páginas enlazadas.
- Interactividad con jQuery (validación, modals, accordion).
- Uso de componentes de Bootstrap (navbar, cards, accordion, carousel, modal).
- Proyecto publicado en GitHub con archivo README.md documentando el desarrollo.

## Autor

Este proyecto fue desarrollado como parte de una evaluación académica para fortalecer competencias en desarrollo web frontend.  
Desarrollado por **Pablo Varas S.**, Bootcamp Java, Módulo 2: Desarrollo Web.

