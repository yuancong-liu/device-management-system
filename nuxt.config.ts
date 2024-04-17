// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/storybook', '@nuxt/eslint'],
  storybook: {
    url: 'http://localhost:6006',
    port: 6006,
  },
  components: [
    {
      path: '~/components',
      extensions: ['vue'],
    },
  ],
});
