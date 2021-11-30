module.exports = {
  'env': [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/typescript'
  ],

  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ],

  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },

  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    "parser": "babel-eslint",
  },

  'plugins': [
    'vue'
  ],

  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'semi': [
      'error',
      'never'
    ],
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 0,
      // "ignores": []
    }],
  },

  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ],

  root: true,

  env: {
    browser: true,
    node: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },

  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      'error',
      'never'
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 0
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
