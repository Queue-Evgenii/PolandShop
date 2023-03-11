const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/shop",
  chainWebpack: config => {
    config.plugin('fork-ts-checker').tap(args => {
      args[0].memoryLimit = 4096;
      return args;
    });
  },
})
