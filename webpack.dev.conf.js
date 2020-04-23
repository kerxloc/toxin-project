const Webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: '#cheap-eval-source-map', 
    devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: {
        warnings: true,
        errors: true
        }
    },
    plugins: [
       new Webpack.SourceMapDevToolPlugin({
          filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
