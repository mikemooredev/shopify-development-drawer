const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./dist/App.js",
  mode: "production",
  target: 'web',
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js",
  },
  devServer: {
    static: ['./src', './dist'],
    hot: false,
    liveReload: true,
    watchFiles: ['src/index.html'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};