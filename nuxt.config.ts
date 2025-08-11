// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      script: [
        {
          hid: 'gtm-head',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P2DQX9R8');`,
          type: 'text/javascript'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-head': ['innerHTML']
      },
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  ssr: true,
  target: 'static',

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    site: {
      url: 'https://moding-junior.hr'
    },
    xsl: false,
    routes: [
      '/',
      '/proizvodi'
    ]
  },

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: true
  },

  telemetry: false,

  vite: {
    build: {
      minify: 'esbuild',
      terserOptions: {
        compress: true,
        mangle: true
      }
    }
  }
})