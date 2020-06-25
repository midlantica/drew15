// purgecss.js
var Purgecss = require('purgecss') // ES5
import Purgecss from 'purgecss' // ES6var purgecss = new Purgecss({
  content: ['**/*.html'],
  css: ['**/*.css']
})
var purgecssResult = purgecss.purge()
