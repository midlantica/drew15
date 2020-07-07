/* eslint-disable */
// IMPORT INITIAL SCSS
// https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
// And:
// https://webpack.js.org/loaders/sass-loader/
// CSS source maps only work on Chrome

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/main.scss";'
      }
    }
  }
}
