var Purgecss = require('purgecss')
plugins: {
  autoprefixer(),
  purgecss()({
    content: ['index.html', '**/*.js', '**/*.html', '**/*.vue'],
    css: ['dist/css/**/*.css']
  })
}
var purgecssResult = purgecss.purge()

