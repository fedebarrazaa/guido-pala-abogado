# Guido Palacín — Abogado Penalista

Sitio web institucional para el estudio jurídico del Dr. Guido Palacín, especializado en defensa penal. Desarrollado como landing page profesional con foco en generar confianza y facilitar el contacto directo por WhatsApp.

🔗 **Demo en vivo:** https://guido-palacin.vercel.app/

## Screenshot

<img width="1904" height="910" alt="image" src="https://github.com/user-attachments/assets/056eaa8f-47a0-40e0-93c3-0413b310e7b5" />


## Stack

- **React** + **TypeScript**
- **Vite** como bundler
- **Tailwind CSS** + **CSS Modules**
- **React Router** para la navegación entre páginas
- **Aceternity UI** / **motion-primitives** para componentes visuales (carousel, hover cards, navbar)
- **Vercel** para el deploy

## Estructura del sitio

- **Inicio** — Hero con imagen, presentación, estadísticas (años de experiencia, matrícula, casos resueltos), áreas de práctica destacadas, por qué elegirme, testimonios y CTA de contacto.
- **Sobre mí** — Historia profesional, trayectoria y jurisdicción de actuación.
- **Áreas de práctica** — Detalle de las especialidades legales (derecho civil, jurisdiccional, representación, etc.), cada una con su lista de servicios incluidos.
- **Contacto** — Formulario de contacto, información de confianza (respuesta rápida, confidencialidad, atención personalizada) y botón directo a WhatsApp.

## Características

- **Botón de WhatsApp flotante** con mensaje predefinido (`wa.me`), sin necesidad de API de pago.
- **Header fijo y transparente** que se superpone a las imágenes de fondo en cada sección.
- **Diseño responsive**, adaptado a mobile, tablet y desktop.
- **Componentes reutilizables basados en datos** (`data/areas.tsx`, arrays de testimonios, estadísticas) para facilitar el mantenimiento y la escalabilidad del contenido.
- **Paleta de colores cálida** (tonos beige, marrón y grafito) pensada para transmitir profesionalismo y confianza.

## Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/fedebarrazaa/guido-pala-abogado.git
cd guido-pala-abogado

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev
```

El proyecto va a estar disponible en `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

## Despliegue

El proyecto está desplegado en **Vercel**, con un archivo `vercel.json` que asegura el correcto manejo de rutas para una Single Page Application (SPA):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Esto evita errores 404 al navegar directamente a rutas internas como `/sobre-mi`, `/areas` o `/contacto`.

## Autor

Desarrollado por [Federico Barraza](https://fedebarraza-portfolio.vercel.app) — Desarrollador Frontend / Full Stack.

---

**© 2024 Guido Palacín. Todos los derechos reservados.**
