/* eslint-disable no-undef */
module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false
    },
    parser: 'babel-eslint'
  },

  plugins: ['import', 'variables', 'prettier', 'vue'],

  rules: {
    'arrow-parens': 1,
    'vue/html-quotes': [
      'error',
      'single',
      {
        avoidEscape: false
      }
    ],
    'generator-star-spacing': 0,
    quotes: [
      'error',
      'single',
      'avoid-escape'
    ],
    semi: [
      'error',
      'never'
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow'
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'ignore'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  'extends': [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/prettier'
  ]
}
