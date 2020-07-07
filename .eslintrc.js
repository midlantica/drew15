/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      // impliedStrict: false,
    },
  },
  plugins: ['import', 'variables', 'vue', 'html', 'prettier'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 1,
    // INDENT DEFAULT AT 2 SPACES
    'vue/html-quotes': ['error', 'single', { avoidEscape: false }],
    // indent: ['error', 2],
    // 'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'generator-star-spacing': 0,
    quotes: ['error', 'single', 'avoid-escape'],
    // quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'space-before-function-paren': ['error', 'never'],
    'space-before-function-paren': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'ignore'
    }],
  },
};
