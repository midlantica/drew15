/* eslint-disable */
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
