module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true,
    },
  },
  plugins: ["vue", "html"],
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // INDENT DEFAULT AT 2 SPACES
    "vue/html-quotes": [1],
    indent: ["error", 2],
    "vue/script-indent": ["error", 4, { baseIndent: 1 }],
    // "vue": {
    // 	"script-indent": [
    // 		"error",
    // 		"tab",
    // 		{
    // 			"baseIndent": 1
    // 		}
    // 	]
    // },
    // allow async-await
    "generator-star-spacing": 0,
    quotes: ["error", "single"],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
}
