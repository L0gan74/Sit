// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxt/image", 'nuxt-icons',  '@element-plus/nuxt'],
    runtimeConfig: {
        public: {
            apiBase: '',
        }
    },
})