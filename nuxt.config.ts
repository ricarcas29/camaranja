import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export default defineNuxtConfig({
  pages: true,
  ssr: true,

  // // Extender Nuxt Studio si está habilitado
  // $production: {
  //   extends: process.env.NUXT_STUDIO_ENABLE ? "@nuxthq/studio" : undefined,
  //   ssr: true,
  // },

  htmlAttrs: {
    lang: "es",
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "nuxt-headlessui", "@nuxt/content", "@vueuse/nuxt", "@nuxtjs/color-mode", "@nuxt/icon" /*"@nuxthq/studio"*/],

  // Configuración de imágenes
  image: {
    inject: true,
    format: ["webp"],
    domains: ["localhost", "camaranja.nuxt.space.com"],
    dir: "public",
    presets: {
      default: {
        modifiers: {
          format: "webp",
        },
      },
    },
  },

  // Configuración de la aplicación
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/camaranja/",
    buildAssetsDir: "/_nuxt/",
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  // Configuración del contenido
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },

  // Configuración del modo oscuro
  colorMode: {
    classSuffix: "",
  },

  // Configuración de Tailwind CSS
  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
  },

  // Configuración de iconos
  icon: {
    size: [16, 32, 120],
    purpose: ["any", "maskable"],
  },

  // Información del sitio
  site: {
    url: process.env.BASE_URL,
    name: "Kenia Espinoza Alba Portfolio",
    description: "Conóceme, contáctame, ¡creemos recuerdos juntos!",
    defaultLocale: "es",
  },

  // Configuración de Nitro para la generación estática
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
    },
  },

  // Configuración de Schema.org
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Kenia Espinoza Alba",
      url: process.env.BASE_URL ?? "/camaranja/",
      logo: "img/logo.jpg",
    },
  },


  ...(process.env.NUXT_STUDIO_ENABLE ? { extends: '@nuxthq/studio' } : {}),

  // Fecha de compatibilidad
  compatibilityDate: "2024-09-23",
});
