/* eslint-disable */
// IMPORT INITIAL SCSS
// https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
// And:
// https://webpack.js.org/loaders/sass-loader/
// CSS source maps only work on Chrome

const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/main.scss";'
      }
    }
  },
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './src/**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ]),
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-z0-9-_:\/]+/g) || [];
              }
            },
            extensions: ['html', 'vue', 'js'],
          },
        ],
      })
    ]
  }
}
