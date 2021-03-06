import colors from 'vuetify/es5/util/colors'
import StylelintPlugin from 'stylelint-webpack-plugin'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-free/css/all.css', '@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/composition-api'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    icons: {
      iconfont: 'fa'
    },
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
        'postcss-sorting': {
          'properties-order': 'alphabetical',
          'unspecified-properties-position': 'bottom'
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss']
          })
        )
      }
    }
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  pwa: {
    manifest: {
      name: 'Muscle Training App',
      background_color: '#1976D2',
      lang: 'ja',
      display: 'standalone'
    }
  }
}
