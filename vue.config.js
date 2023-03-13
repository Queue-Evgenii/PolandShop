const CopyWebpackPlugin = require('copy-webpack-plugin');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/shop",
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public/.htaccess',
            to: 'dist/.htaccess'
          }
        ]
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!ora)/,
          use: {
            loader: 'babel-loader',
            options: {
              ignore: [/node_modules\/ora\/index\.js/]
            }
          }
        }
      ]
    }
  }
})
