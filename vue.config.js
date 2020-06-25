// IMPORT INITIAL SCSS
// https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
// And:
// https://webpack.js.org/loaders/sass-loader/

// const path = require('path')
// const glob = require('glob')
// // const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const PurgecssPlugin = require('purgecss-webpack-plugin')

// const PATHS = {
//   src: path.join(__dirname, 'dist/css')
// }

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/main.scss";'
      }
    }
  }
  // configureWebpack: {
  //   plugins: [
  //     new PurgecssPlugin({
  //       paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
  //     })
  //   ]
  // }
}
