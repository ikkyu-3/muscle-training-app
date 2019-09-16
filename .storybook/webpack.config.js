const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts')
  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../')
      }
    }
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return config
}
