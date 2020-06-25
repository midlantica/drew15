// purgecss config - https://www.purgecss.com/configuration
module.exports = {
  content: [
    './src/**/*.vue',
    './src/components/**/*.vue',
    './src/template-bourbon/**/*.vue',
    './src/template-corp/**/*.vue',
    './src/template-groovy/**/*.vue',
    './src/template-punk/**/*.vue',
    './src/template-techy/**/*.vue',
    './dist/index.html',
    './dist/js/*.js'
  ],
  css: [
    './dist/css/*.css'
  ],
  whitelistPatterns: [
    // // Modernizr
    // /touchevents$/,
    // // Vue transition classes
    // /-enter-active$/,
    // /-enter$/,
    // /-enter-to$/,
    // /-leave-active$/,
    // /-leave$/,
    // /-leave-to$/
  ]
}
