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
- Vinext como adaptador de producción para el runtime de hosting

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

### Ver desde otro dispositivo en la misma red Wi-Fi

Inicia el servidor escuchando en la red local:

```bash
npm run dev:lan
```

Luego abre desde el celular u otro computador:

```text
http://IP-DE-TU-PC:3000
```

En Windows puedes consultar la IP con `ipconfig`. Ambos dispositivos deben
estar conectados a la misma red y Windows debe permitir Node.js en redes
privadas. Para probar el bundle de producción en la red local, ejecuta primero
`npm run build` y después `npm run start:lan`.

## Comandos

```bash
npm run lint
npm run build
npm run build:next
npm run dev:lan
npm run start:lan
npm start
```

`npm run build` genera el bundle de producción compatible con el hosting en
`dist/`. `npm run build:next` ejecuta una compilación nativa de Next.js para
validación adicional.

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

El formulario valida los campos y abre el redactor web de Gmail con el destinatario, asunto y mensaje preparados. Esto evita almacenar datos personales o depender de una clave de terceros. Si más adelante se desea envío directo, se puede conectar el formulario a un servicio transaccional desde una ruta segura del servidor.

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

El proyecto conserva su estructura Next.js. El comando principal de build usa
Vinext para producir el entrypoint de producción requerido por el hosting. Para
otras plataformas se puede usar `npm run build:next` o adaptar el comando de
build al proveedor elegido.
