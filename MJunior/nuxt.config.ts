// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  ssr: true,
  target: 'static',

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
  ],

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    build: {
      minify: 'esbuild'
    }
  }
})