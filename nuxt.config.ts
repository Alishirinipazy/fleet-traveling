// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules:[],
  app: {

    head: {
      link: [{ rel: 'icon', type: '/brand.png', href: '/k' }],
    },
  }
})
