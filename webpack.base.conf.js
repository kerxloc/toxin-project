const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pages`
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'))

module.exports = {

  externals: {
    paths: PATHS
  },
    entry: {
      app: PATHS.src,
      roomList: `${PATHS.src}/js/room-list.js`,
      loginReg: `${PATHS.src}/js/login-reg.js`
    },
    output: {
      filename: `${PATHS.assets}js/[name].[hash].js`,
      path: PATHS.dist,
      publicPath: '/' 
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: `${PATHS.assets}css/[name].[hash].css`
        }),
        new CopyWebpackPlugin([
          { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
          { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` }
        ]),
        ...PAGES.map(page => new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/,'.html')}`
        })),
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
          },

          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
          },

          {
            test: /\.pug$/,
            loader: 'pug-loader'
          },

          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            },
          },

          {
            test: /\.(woff|ttf|svg|)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './',
              useRelativePath: true
            }
          }
        ],
      },
    };