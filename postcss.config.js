/* eslint-disable */
// const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './public/index.html',
        './src/**/*.vue'
      ]
    })
  ]
}
