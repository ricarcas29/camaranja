import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export default defineNuxtConfig({
  experimental: {
    asyncEntry: true,
  },
  pages: true,
  ssr: true,
  target: "static",
  build: {
    extractCSS: true,
    hardSource: true,
    parallel: true,
    cache: true,
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    analyze: true, // Ayuda a identificar paquetes grandes
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
        pages: true,
        commons: true,
        chunks: "all",
        automaticNameDelimiter: ".",
        name: undefined,
        cacheGroups: {},
      },
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxt/babel-preset-app",
            {
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },
    transpile: ["vue-lazy-hydration", "intersection-observer"],
    postcss: {
      plugins: {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-preset-env": {
          stage: 2,
          features: {
            "focus-within-pseudo-class": false,
          },
        },
        cssnano: { preset: "default" },
      },
    },
  },
  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles.filter((f) => f.asType === "script" && f.file === "runtime.js").map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
    },
    compressor: {
      threshold: 0,
    },
    resourceHints: true,
    crossorigin: "anonymous",
  },
  htmlAttrs: {
    lang: "es",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "nuxt-headlessui", "@nuxt/content", "@vueuse/nuxt", "@nuxtjs/color-mode", "@nuxt/icon" /*"@nuxthq/studio"*/],
  // Configuración de imágenes
  image: {
    inject: true,
    format: ["webp", "avif", "jpg"],
    domains: ["localhost", "camaranja.nuxt.space.com"],
    dir: "public",
    presets: {
      default: {
        modifiers: {
          format: "webp",
        },
      },
    },

    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    densities: [1, 2],
  },
  // Configuración de la aplicación
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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
        {
          rel: "preload",
          as: "font",
          href: "https://fonts.googleapis.com/css2?Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
          crossorigin: "anonymous",
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
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
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

  ...(process.env.NUXT_STUDIO_ENABLE ? { extends: "@nuxthq/studio" } : {}),

  // Fecha de compatibilidad
  compatibilityDate: "2024-09-23",
});
