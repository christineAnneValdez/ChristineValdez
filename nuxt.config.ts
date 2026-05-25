// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Christine Anne Valdez',
      meta: [
        { name: 'description', content: 'Hand-drawn inspired full stack developer portfolio built with Nuxt 3 and TailwindCSS.' },
        { name: 'theme-color', content: '#fff8e7' }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
})
