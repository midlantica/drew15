// https://github.com/michael-ciniawsky/postcss-load-config

const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      plugins: {
        autoprefixer({}),
        // to edit target browsers: use "browserslist" field in package.json
        purgecss({
          css: ['./dist/css/**/*.css']
        })
      }
    } else {
      console.log('Else plugin.....');
    }
  }
}
