const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['dist/index.html', '**/*.vue'],
      css: ['dist/css/**/*.css'],
      defaultExtractor (content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
      whitelist: [],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,/^(?!(|.*?:)cursor-move).+-move$/,/^router-link(|-exact)-active$/,/data-v-.*/
      ]
    })
  ]
}
