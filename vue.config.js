// IMPORT INITIAL SCSS
// https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
// And:
// https://webpack.js.org/loaders/sass-loader/

const path = require('path')

module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {}
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/main.scss";',
        sourceMap: true,
        sassOptions: {
          outputStyle: 'compressed'
        }
      },
      test: /\.css/,
      use: [
        { loader: 'style-loader', options: { sourceMap: true } },
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    }
  }
}

// module.exports = {
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === 'production') {
//       css: {
//         loaderOptions: {
//           sass: {
//             prependData: '@import "@/assets/css/main.scss";'
//           }
//         }
//       }
//     } else {
//       css: {
//         loaderOptions: {
//           sass: {
//             prependData: '@import "@/assets/css/main.scss";'
//           }
//         }
//       }
//     }
//   }
// }
