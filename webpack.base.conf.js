const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));

module.exports = {

  externals: {
    paths: PATHS,
    moment: 'moment'
  },
    entry: {
      app: PATHS.src,
      roomList: `${PATHS.src}/js/room-list.js`,
      loginReg: `${PATHS.src}/js/login-reg.js`,
      roomDetails: `${PATHS.src}/js/room-details.js`,
    },
    output: {
      filename: `${PATHS.assets}js/[name].[contenthash].js`
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
          filename: './assets/css/[name].[contenthash].css',
        }),
        new CopyWebpackPlugin([
          { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
          { from: `${PATHS.src}/components/room_details/images`, to: `${PATHS.assets}img/room-details` }
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
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {sourceMap: true},
              },
              {
                loader: 'postcss-loader',
                options: {sourceMap: true, config: {path: `./postcss.config.js`}},
              },
              {
                loader: 'resolve-url-loader',
                options: {
                  root: path.join(__dirname, 'src'),
                },
              },
            ],
          },

          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {sourceMap: true},
              },
              {
                loader: 'postcss-loader',
                options: {sourceMap: true, config: {path: `./postcss.config.js`}},
              },
              {
                loader: 'resolve-url-loader',
                options: {
                  engine: 'postcss'
                },
              },
              {
                loader: 'sass-loader',
                options: {sourceMap: true},
              },
            ],
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
            test: /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            },
          },

          {
            test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
            exclude: [/img/],
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: (url, resourcePath) => {
                  if (/Material-icons/.test(resourcePath)) {
                      return `assets/fonts/Material-icons/${url}`;
                  } else if (/Montserrat/.test(resourcePath)) {
                      return `assets/fonts/Montserrat/${url}`;
                  } else if (/Font-Awesome/.test(resourcePath)) {
                      return `assets/fonts/Font-Awesome/${url}`;
                }
              },
            }
          }
        ],
      },
    };