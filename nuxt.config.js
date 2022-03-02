import { numberFormats } from './helpers/numberFormats'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rakuten-xchange',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/tooltip.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // range slider
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // multilang
    '@nuxtjs/i18n',
    // for cors
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // baseURL: 'https://hiring.zumata.xyz', // Used as a fallback if no runtime config is provided
  },

  // for cors
  proxy: {
    '/api/': {
      target: process.env.BASE_URL || 'https://hiring.zumata.xyz',
      pathRewrite: { '^/api/': '' },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL || 'https://hiring.zumata.xyz',
    // axios: {
    //   baseURL: process.env.API_BASE_URL || 'https://hiring.zumata.xyz',
    // },
  },

  // multilang
  i18n: {
    langDir: '@/lang/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'sg', iso: 'zh-sg', file: 'sg.json' },
    ],
    vueI18n: {
      numberFormats,
    },
  },
}
