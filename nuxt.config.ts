import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export default defineNuxtConfig({
  pages: true,
  ssr: true,

  router: {
    base: "/",
  },
  target: "server",
  experimental: {
    asyncEntry: true,
    payloadExtraction: false,
  },
  routeRules: {
    "/**": { ssr: true },
  },
  build: {
    publicPath: "/_nuxt/",
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
    analyze: true,
    optimization: {
      splitChunks: {
        layouts: true,
        pages: true,
        commons: true,
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
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "nuxt-headlessui", "@nuxt/content", "@vueuse/nuxt", "@nuxtjs/color-mode", "@nuxt/icon", "@nuxtjs/seo", "nuxt-newsletter"],
  image: {
    inject: true,
    format: ["webp", "avif", "jpg"],
    domains: ["localhost"],
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
  app: {
    cdnURL: process.env.NUXT_APP_CDN_URL,
    pageTransition: { name: "page", mode: "out-in" },
    baseURL: process.env.NODE_ENV === "production" ? "/" : "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap" },
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
    size: [16, 24, 32, 120],
    purpose: ["any", "maskable"],
    types: ["image/png", "image/svg+xml", "image/webp", "image/avif", "image/jpeg"],
  },
  site: {
    url: process.env.BASE_URL,
    name: "Kenia Espinoza Alba Portfolio",
    description: "Conóceme, contáctame, ¡creemos recuerdos juntos!",
    defaultLocale: "es",
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/", "/galleries", "/stories", "/hire-me"],
      failOnError: false,
    },
  },
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Kenia Espinoza Alba",
      url: "/",
      logo: "img/logo.jpg",
    },
  },
  generate: {
    fallback: true,
  },
  seo: {
    baseUrl: process.env.BASE_URL,
    name: "Kenia Espinoza Alba Portafolio",
    title: "Kenia Espinoza Alba Portafolio",
    description: "Conóceme, contáctame, ¡creemos recuerdos juntos!",
    image: "img/logo.jpg",
    twitter: "@keniaespinozaalba",
    facebook: "keniaespinozaalba",
    locale: "es",
    type: "website",
    twitterCard: "summary_large_image",
    twitterSite: "@keniaespinozaalba",
    twitterCreator: "@keniaespinozaalba",
    favicon: "img/logo.jpg",
    robots: {
      UserAgent: "*",
      Disallow: "",
    },
    sitemap: {
      hostname: process.env.BASE_URL,
      exclude: ["/stories"],
    },
    openGraph: {
      type: "website",
      locale: "es",
      site_name: "Kenia Espinoza Alba Portfolio",
      title: "Kenia Espinoza Alba Portfolio",
      description: "Conóceme, contáctame, ¡creemos recuerdos juntos!",
      image: "img/logo.jpg",
      url: process.env.BASE_URL,
    },
  },

  newsletter: {
    mailchimp: {
      apiKey: process.env.MAILCHIMP_API_KEY ?? "",
      serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX ?? "",
      audienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? "",
      component: true, // optional
    },
  },

  hcaptcha: {
    siteKey: process.env.HCAPTCHA_SITE_KEY,
  },
  // ...(process.env.NUXT_STUDIO_ENABLE ? { extends: "@nuxthq/studio" } : {}),
  compatibilityDate: "2024-09-23",
});
