const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV.trim() === 'development'

const dirs = require('./build/dirs')

module.exports = {
  rules: [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        },
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('autoprefixer')()]
          }
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: `${dirs.src}/assets/scss/mixins.scss`
          }
        }
      ]
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: './',
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/img/[hash].[ext]'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            disable: isDev,
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            pngquant: {
              quality: '65-90',
              strip: true
            },
            svgo: {
              cleanupIDs: true
            }
          }
        }
      ]
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':src', ':href']
        }
      }
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      options: {
        pretty: true,
        self: true
      }
    }
  ]
}
