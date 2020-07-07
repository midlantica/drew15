const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: [
        './public/index.html',
        './src/**/*.vue'
      ],
      css: ['./src/**/*.css'],
      defaultExtractor (content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
      whitelist: ['html', 'body'],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,/^(?!(|.*?:)cursor-move).+-move$/,/^router-link(|-exact)-active$/,/data-v-.*/, '/.VueCarousel/', '/^.VueCarousel$/','/^carousel$/', '/^.druCarousel$/', '/^VueCarousel-navigation-button/', '/^VueCarousel-navigation/'
      ]
    })
  ]
}
