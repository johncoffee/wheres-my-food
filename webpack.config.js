const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: Path.join(__dirname, 'src/main.js'),
    // assets: Path.join(__dirname, 'src/assets.js'),
  },
  // output: {
    // path: Path.join(__dirname, '../build'),
    // filename: 'js/[name].js'
  // },
  // optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   name: false
    // }
  // },
  plugins: [
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   { from: Path.join(__dirname, 'dist'), to: 'public' }
    // ]),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, 'src/index.html')
    })
  ],
  // resolve: {
    // alias: {
    //   '~': Path.resolve(__dirname, '../src')
    // }
  // },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=images/[name].[ext]"
      // },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        }
      },
    ]
  }
};
