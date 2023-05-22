const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",

  devServer: {
    port: 8081,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],

};
