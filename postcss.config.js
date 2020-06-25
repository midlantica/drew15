const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      css: ['./dist/css/**/*.css']
    })
  ]
}
