const merge = require("webpack-merge");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name].js",
    chunkFilename: "[id].css"
  },

  devServer: {
    host: "localhost",
    port: process.env.PORT || 5013,
    contentBase: path.join(process.cwd(), "dist"),
    watchContentBase: true,
    quiet: false,
    open: true,
    historyApiFallback: {
      rewrites: [{from: /./, to: "404.html"}]
    }
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "dist/**/*.js",
        "dist/**/*.css",
        "site/data/webpack.json"
      ]}),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new Dotenv()
  ]
});
