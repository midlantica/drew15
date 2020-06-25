// purgecss.js
const { PurgeCSS } = require('purgecss');

// const purgeCSSResults = await new Purgecss().purge({
//   css: ['./dist/css/**/*.css']
// })

async function purgeIt() {
  const result = await new PurgeCSS().purge({
    css: ['dist/css/**/*.css']
  })

  console.log('Purge CSS done!')
}

purgeIt()
