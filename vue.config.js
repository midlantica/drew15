/* eslint-disable */
module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "src/assets/css/main.scss";`
      }
    }
  },
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
}
