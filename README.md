# AuraBot Web 🤖

Landing page + panel de cliente para **AuraBot** — Mac Mini con OpenClaw preconfigurado, venta en Chile.

**URL de producción:** [aurabot.cl](https://aurabot.cl)

---

## Stack

| Tecnología | Uso |
|---|---|
| Next.js 15 (App Router) | Framework React SSG |
| TypeScript | Tipado estático |
| Tailwind CSS | Estilos |
| Framer Motion | Animaciones |
| Supabase | Base de datos + Auth |
| Cloudflare Pages | Hosting y CDN |
| GitHub Actions | CI/CD |

---

## Setup local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-org/aurabot-web.git
cd aurabot-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

### 4. Levantar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu browser.

---

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción (genera carpeta /out)
npm run start    # Servidor de producción (no aplica para export)
npm run lint     # ESLint
```

---

## Deploy a Cloudflare Pages

El deploy es automático al hacer push a `main` via GitHub Actions.

### Configurar secrets en GitHub

Ve a **Settings → Secrets and variables → Actions** y agrega:

| Secret | Descripción |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Token de API de Cloudflare con permisos de Pages |
| `CLOUDFLARE_ACCOUNT_ID` | ID de tu cuenta Cloudflare |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics 4 |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key de Supabase |

### Deploy manual

```bash
npm run build
npx wrangler pages deploy out --project-name=aurabot-web
```

---

## Estructura del proyecto

```
aurabot-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout raíz + GA4 + SEO metadata
│   │   ├── page.tsx         # Landing page principal
│   │   └── globals.css      # Estilos globales + paleta de colores
│   ├── components/
│   │   └── ui/
│   │       ├── Hero.tsx          # Sección hero animada
│   │       ├── PricingCard.tsx   # Tarjeta de precio reutilizable
│   │       ├── FAQ.tsx           # FAQ con acordeón
│   │       └── WhatsAppButton.tsx # Botón flotante WhatsApp
│   └── lib/
│       ├── analytics.ts     # Helpers GA4
│       └── supabase.ts      # Cliente Supabase
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── .github/
│   └── workflows/
│       ├── ci.yml           # Lint + build en PRs
│       └── deploy.yml       # Deploy a Cloudflare Pages
├── .env.example
├── next.config.ts
└── README.md
```

---

## Contacto

- **WhatsApp:** [+56 9 6392 6061](https://wa.me/56963926061)
- **Email:** hola@aurabot.cl

---

> Hecho con ❤️ en Chile 🇨🇱
