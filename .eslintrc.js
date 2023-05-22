module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    quotes: [2, "double"],
    indent: ["error", 2],
    "max-classes-per-file": "off",
  },
};
