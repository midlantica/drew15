module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
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
      impliedStrict: false,
      jsx: true,
    },
  },
  plugins: ['vue', 'html'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // INDENT DEFAULT AT 2 SPACES
    'vue/html-quotes': ['error', 'single', { avoidEscape: false }],
    // indent: ['error', 2],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'generator-star-spacing': 0,
    quotes: ['error', 'single'],
    // allow debugger during development
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
