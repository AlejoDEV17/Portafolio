# Portafolio — Alejandro Lozano Restrepo

Portafolio profesional construido como un laboratorio digital de automatización. Presenta experiencia, tecnologías, proyectos y formación mediante una interfaz editorial, animaciones por scroll y un núcleo 3D interactivo.

## Stack

- Next.js 16 con App Router y TypeScript
- React 19
- Tailwind CSS 4
- Motion
- GSAP + ScrollTrigger
- React Three Fiber + Drei + Three.js
- Lenis

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Comandos

```bash
npm run lint
npm run build
npm start
```

## Edición de contenido

La información del portafolio está centralizada en:

```text
data/portfolio.ts
```

Desde allí se pueden actualizar:

- Perfil y enlaces de contacto
- Tecnologías
- Experiencia
- Proyectos
- Bloques de impacto
- Formación

La foto y el CV descargable están en `public/`.

## Formulario de contacto

El formulario valida los campos y prepara un correo usando la aplicación de correo del visitante. Esto evita almacenar datos personales o depender de una clave de terceros. Si más adelante se desea envío directo, se puede conectar el formulario a un servicio transaccional desde una ruta segura del servidor.

## Accesibilidad y rendimiento

- Navegación por teclado y enlace para saltar al contenido
- Estados de foco visibles
- HTML semántico y datos estructurados
- Soporte para `prefers-reduced-motion`
- Canvas 3D cargado de forma dinámica
- Escena simplificada en móvil
- Imagen WebP y fuentes optimizadas
- Sitemap, robots, Open Graph y Twitter Card

## Despliegue

Antes de publicar:

```bash
npm run lint
npm run build
```

El proyecto puede desplegarse en cualquier plataforma compatible con Next.js. Para GitHub Pages se requiere una exportación estática y configurar el `basePath` correspondiente; para despliegues con servidor o edge runtime puede publicarse directamente.
