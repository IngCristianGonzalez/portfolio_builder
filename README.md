# Portfolio Builder — Cristian Gonzalez

Sitio web personal de portafolio para **Cristian Gonzalez**, Full Stack Developer & Systems Engineer. Construido con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS v4**, con soporte completo de internacionalización (español/inglés), tema claro/oscuro y diseño responsivo.

---

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.6 | Framework React con App Router |
| [React](https://react.dev/) | 19.2.4 | Librería UI |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.3.0 | Estilos utilitarios |
| [next-intl](https://next-intl.dev/) | ^4.12.0 | Internacionalización (i18n) |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4.6 | Alternancia tema claro/oscuro |
| [framer-motion](https://motion.dev/) | ^12.38.0 | Animaciones |
| [lucide-react](https://lucide.dev/) | ^1.16.0 | Iconos |
| [react-icons](https://react-icons.github.io/react-icons/) | ^5.6.0 | Iconos extendidos (FontAwesome, SimpleIcons, Tabler) |

---

## Arquitectura

```
src/
├── app/                          # App Router de Next.js
│   ├── [locale]/                 # Segmento dinámico para i18n (es/en)
│   │   ├── globals.css           # Estilos globales del locale
│   │   ├── layout.tsx            # Layout con NextIntlClientProvider
│   │   └── page.tsx              # Página principal (secciones assembles)
│   ├── globals.css               # Estilos raíz (Tailwind, variables CSS)
│   └── layout.tsx                # Layout raíz (ThemeProvider)
├── components/                   # Componentes UI (todos "use client")
│   ├── Contact/
│   ├── DownloadCV/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/                   # Navbar + LanguageSwitcher + ThemeToggle
│   ├── Philosophy/
│   ├── Projects/
│   └── Skills/
├── i18n/                         # Configuración de next-intl
├── lib/                          # Datos y utilidades
│   ├── profile.ts                # Información personal
│   ├── experience.ts             # Datos de experiencia laboral (bilingüe)
│   ├── project.ts               # Datos de proyectos (bilingüe)
│   ├── skills.ts                 # Datos de habilidades técnicas (bilingüe)
│   └── custom-icons.tsx          # Iconos SVG personalizados (PowerBI, Tableau)
├── messages/                     # Archivos de traducción JSON
│   ├── en.json
│   └── es.json
├── providers/
│   └── ThemeProviders.tsx        # Provider de next-themes
├── proxy.ts                      # Middleware de next-intl
└── types/
    └── project.ts                # Tipos (pendiente de implementar)
```

### Principios de arquitectura

- **Single Page Application** con navegación por anclas y scroll suave.
- **Internacionalización** mediante segmento dinámico `[locale]` en la ruta.
- **Separación de datos y presentación**: los datos (bilingües) residen en `src/lib/`, los componentes solo consumen.
- **Tema claro/oscuro** vía clase CSS en `<html>` manejada por `next-themes`.
- Todos los componentes son **"use client"** por dependencia de hooks de `next-intl` y `next-themes`.

---

## Enrutamiento

| Ruta | Descripción |
|---|---|
| `/` | Redirige al locale por defecto (`es`) |
| `/es` | Portafolio en español |
| `/en` | Portafolio en inglés |
| `/#experience` | Sección Experiencia |
| `/#projects` | Sección Proyectos |
| `/#skills` | Sección Habilidades |
| `/#philosophy` | Sección Filosofía |
| `/#contact` | Sección Contacto |

El middleware en `src/proxy.ts` intercepta las peticiones y asigna el locale correspondiente.

---

## Componentes

### Navbar
Barra de navegación fija con logotipo, enlaces a secciones, selector de idioma (`LanguageSwitcher`) y alternador de tema (`ThemeToggle`). Escucha el scroll para cambiar de estilo.

### Hero
Sección de presentación a pantalla completa. Muestra saludo, nombre, rol, estado actual, botón "Ver proyectos" (scroll a `#projects`) y botón de descarga de CV.

### DownloadCV
Descarga el CV en PDF según el locale activo (`/cv/cristian-gonzalez-{es,en}.pdf`).

### Experience
Línea de tiempo con 4 experiencias laborales (2022–2026). Datos bilingües desde `src/lib/experience.ts`.

### Projects
Grid de 2 columnas con 6 proyectos. Cada tarjeta muestra título, descripción, tecnologías, y enlaces a GitHub/Demo.

### Skills
Sección "My Toolbox" con habilidades agrupadas por categoría (Backend, Frontend, Database, Cloud/DevOps, Data Science). Iconos SVG coloreados con colores oficiales de cada tecnología.

### Philosophy
Cita en bloque (blockquote) que describe la filosofía de trabajo. Texto bilingüe en línea.

### Contact
Información de contacto: email, WhatsApp, ubicación, zona horaria (GMT-5), botón de LinkedIn e indicador de disponibilidad.

### Footer
Copyright y enlaces de navegación secundarios.

---

## Internacionalización (i18n)

- **Locales**: `es` (español, por defecto) y `en` (inglés).
- **Traducciones**: Archivos JSON en `src/messages/` con estructura plana de claves.
- **Configuración**: `src/i18n/i18n.ts` expone `locales` y `defaultLocale`; `src/i18n/request.ts` carga el archivo de mensajes según el locale.
- **Uso**: `useTranslations()` y `useLocale()` de `next-intl` en componentes cliente.

---

## Tematización

- Implementado con `next-themes`.
- Atributo `class` en `<html>` para activar modo oscuro.
- Tema por defecto: `dark`.
- Sincronización con preferencia del sistema (`enableSystem`).
- Variables CSS personalizadas para colores de fondo, texto, tarjetas y elementos atenuados.

---

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo con Turbopack |
| `npm run build` | Compila para producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint en todo el proyecto |

---

## Configuración del Proyecto

- **TypeScript**: Modo estricto, path alias `@/*` → `./src/*`.
- **ESLint**: Flat config v9 con reglas de `next/core-web-vitals` y TypeScript.
- **PostCSS**: Plugin `@tailwindcss/postcss` para Tailwind v4.
- **next.config.ts**: Plugin `createNextIntlPlugin` para i18n, `allowedDevOrigins` para desarrollo en red local.

---

## Despliegue

Construir para producción:

```bash
npm run build
```

El directorio de salida `.next/` contiene la aplicación lista para servir con `npm start` o desplegar en plataformas como Vercel, Railway o un VPS.

---

## Desarrollo Local

```bash
npm run dev
```

El servidor se inicia en `http://localhost:3000` por defecto.
