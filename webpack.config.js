var path = require("path");
var webpack = require("webpack");
var WebpackBuildNotifierPlugin = require("webpack-build-notifier");

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
};

module.exports = {

  entry: {
    "smart-terminal": PATHS.src + '/SmartTerminal.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    library: 'SmartTerminal',
    libraryTarget: 'umd'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.p?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, url: false
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]


  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js']
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build"
    })/*,
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          fontMagician({
            variants: {
              'Droid Sans Mono': {
                '300': [],
                '400': [],
                '700': []
              }
            },
            foundries: ['google']
          })
        ]
      }
    })
*/  ]
};
