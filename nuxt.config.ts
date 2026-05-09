// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Aurelius Dev Portfolio',
      meta: [
        { name: 'description', content: 'Premium full stack developer portfolio built with Nuxt 3, TypeScript, and TailwindCSS.' },
        { name: 'theme-color', content: '#1e1f26' }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
})
