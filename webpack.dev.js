const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', "css-loader", "sass-loader"],
      },
    ],
  },
  stats: "errors-only",
  devtool: "eval-source-map",
  devServer: {
    port: 8080,
  },
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
});
