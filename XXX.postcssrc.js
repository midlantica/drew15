const purgecss = require('@fullhuman/postcss-purgecss')
let environment = ""

// Only run PurgeCSS in production (you can also add staging here)
if (process.env.RAILS_ENV === "production") {
  environment.plugins.push(
    purgecss({
      content: [
        './public/index.html',
        './src/**/*.vue'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  )
}

module.exports = environment

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// module.exports = {
//   plugins: [
//     purgecss({
//       content: [
//         './public/index.html',
//         './src/**/*.vue'
//       ],
//       css: ['./src/**/*.css'],
//       defaultExtractor (content) {
//         const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
//         return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
//       },
//       whitelist: ['html', 'body'],
//       whitelistPatterns: [
//         /-(leave|enter|appear)(|-(to|from|active))$/,/^(?!(|.*?:)cursor-move).+-move$/,/^router-link(|-exact)-active$/,/data-v-.*/, '/.VueCarousel/', '/^.VueCarousel$/','/^carousel$/', '/^.druCarousel$/', '/^VueCarousel-navigation-button/', '/^VueCarousel-navigation/'
//       ]
//     })
//   ]
// }
