import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export default defineNuxtConfig({
  pages: true,

  ssr: true,

  htmlAttrs: {
    lang: "es",
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "nuxt-headlessui", "@nuxt/content", "@vueuse/nuxt", "@nuxtjs/color-mode", "@nuxt/icon"],

  image: {
    inject: true,
    format: ["webp"],
    domains: ["localhost", "camaranja.nuxt.space.com"],
    dir: "public",
    // providers: {
    //   ipx: {
    //     provider: "ipx",
    //     options: {
    //       baseURL: "/_ipx/",
    //     },
    //   },
    // },
    presets: {
      default: {
        modifiers: {
          format: "webp",
        },
      },
    },
  },

  app: {
    //baseURL: '/camaranja/',
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

  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
  },

  icon: {
    size: [16, 32, 120],
    purpose: ["any", "maskable"],
  },

  site: {
    url: process.env.BASE_URL,
    name: "Kenia Espinoza Alba Portfolio",
    description: "Conoceme, contactame, creemos recuerdos juntos!",
    defaultLocale: "es",
  },

  nitro: {
    baseURL: process.env.BASE_URL ?? "/camaranja/",
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Kenia Espinoza Alba",
      url: process.env.BASE_URL ?? "/camaranja/",
      logo: "img/logo.jpg",
    },
  },

  compatibilityDate: "2024-09-23",
});
