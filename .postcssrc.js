module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['dist/index.html', '**/*.vue'],
      css: ['dist/css/**/*.css']
    })
  ]
}
