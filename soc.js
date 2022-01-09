import pkg from './package.json'

export default {
  // 🐱 Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Главный сварщик: Cварочное оборудование, всё для сварки Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=width=400, initial-scale=0.8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Сварочное оборудование и всё для сварки: Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  publicRuntimeConfig: {
    clientVersion: pkg.version,
  },

  // 🐱 Global CSS: https://go.nuxtjs.dev/config-css
  // https://bootstrap-vue.org/docs#nuxtjs-module
  css: ['@/assets/custom.scss', '@mdi/font/css/materialdesignicons.min.css'],

  // 🐱 Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/lodash.js', '~/plugins/netstat.js'],

  // 🐱 Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // 🐱 Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://mysite.ru', /// Бэк на Django(Python)
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [({ isServer }) => 'vue-typeahead-bootstrap'],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
}