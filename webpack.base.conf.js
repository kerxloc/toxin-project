const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}

module.exports = {

  externals: {
    paths: PATHS
  },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/' 
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: `${PATHS.assets}css/[name].css`
        }),
        new HtmlWebpackPlugin({
          hash: false,
          template: `${PATHS.src}/index.html`,
          filename: './index.html'
        })
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader'],
          },

          {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: { sourceMap: true }
                }, {
                  loader: 'sass-loader',
                  options: { sourceMap: true }
                }
              ]
          }
        ],
      },
    };