import en from '@/locales/en.json'
import fa from '@/locales/fa.json'
import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: true,
        globalInjection: true,
        locale: 'fa',
        messages: {
            en,
            fa
        }
    })

    vueApp.use(i18n)
})