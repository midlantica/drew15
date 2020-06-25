const purgecss = require('@fullhuman/postcss-purgecss')
const plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    purgecss({
      css: ['./dist/css/**/*.css']
    })
  )
}

module.exports = {
  plugins
}
