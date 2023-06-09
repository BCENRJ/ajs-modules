module.exports = {
  sourceType: "unambiguous",
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-transform-classes",
  ],
};
