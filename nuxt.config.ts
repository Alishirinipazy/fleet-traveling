// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({

    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: ['@primevue/nuxt-module', '@nuxthub/core'],
    primevue: {
        usePrimeVue: true,
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: 'light',
                    cssLayer: false
                }
            }
        }
    },
    app: {

        head: {
            link: [{rel: 'icon', type: '/brand.png', href: '/k'}],
        },
    }
})