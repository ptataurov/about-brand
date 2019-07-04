const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { getDirectoriesBasenames } = require('./build/utils.js')
const modules = require('./webpack.modules')

const isDev = process.env.NODE_ENV === 'development'
const pages = getDirectoriesBasenames(path.resolve('./src/pages'))

// const components = getDirectoriesBasenames(path.resolve('./src/components'))

const instances = pages.map(page => {
  return new HtmlWebpackPlugin({
    template: `./pages/${page}/${page}.pug`,
    filename: `${page}.html`,
    chunks: ['common', page]
    // dependencies: require(path.resolve(`./src/pages/${page}/dependencies.json`))
  })
})

// const componentsEntries = components.reduce((acc, component) => {
//   acc[component] = `./components/${component}/${component}.js`

//   return acc
// }, {})

const entries = pages.reduce((acc, page) => {
  acc[page] = `./pages/${page}/${page}.js`

  return acc
}, {})

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: entries,
  devtool: isDev && 'inline-source-map',
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.scss', '.pug'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     output: {
      //       comments: false
      //     }
      //   }
      // }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devServer: {
    index: 'reputation.html',
    hot: false,
    open: true
  },
  mode: isDev ? 'development' : 'production',
  watch: isDev,
  module: modules,
  plugins: [
    ...instances,
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

module.exports = config
