import Purgecss from 'purgecss'

let purgecss = new Purgecss({
  content: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  css: ['dist/**/*.css'],
  defaultExtractor (content) {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
  },
  whitelist: [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /data-v-.*/
  ]
})

var purgecssResult = purgecss.purge()
