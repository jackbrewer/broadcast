const path = require('path')

const autoprefixer = require('autoprefixer')
const stylusMixins = require('stylus-mixins')
const responsiveGrid = require('responsive-grid')
const poststylus = require('poststylus')
const cssnano = require('cssnano')

module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              minimize: true
            }
          },
          {
            loader: require.resolve('stylus-loader'),
            options: {
              use: [
                stylusMixins(),
                responsiveGrid(),
                poststylus([ autoprefixer ])
              ],
              import: [
                '~stylus-mixins/index.styl',
                path.resolve(__dirname, '../src/asset/stylus/_______settings/index.styl')
              ]
            }
          }
        ]
      }
    ]
  }
}
