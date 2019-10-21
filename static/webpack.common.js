const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.ts")
  },

  output: {
    library: "KinicartExample",
    libraryTarget: "umd",
    libraryExport: "default",
    path: path.join(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },

      {test: /\.json$/, loader: "json-loader"},

      {
        test: /\.tsx?$/,
        use: ["ts-loader", "uglify-template-string-loader"],
        exclude: /node_modules/
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: ["/node_modules/", "/src/blog.sass", "/assets/"],
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //     fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    // }),

    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "/site/data"),
      prettyPrint: true
    })
  ],
  resolve: {
    extensions: [ ".ts", ".js"],
    modules: [
      "src",
      "node_modules"
    ]
  }
};
