// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Lexend: [300, 400, 500, 700]
    },
    display: 'swap'
  }
})