process.env.VUE_APP_VERSION = require('./package.json').version

/* eslint-disable */
module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/main.scss";`
      }
    }
  },
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
}
