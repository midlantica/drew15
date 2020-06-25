// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // INDENT DEFAULT AT 2 SPACES
    indent: ["error", 2],
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
}
