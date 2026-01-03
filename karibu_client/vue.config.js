const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://karibu-le0x.onrender.com',
        },
      },
    },
  },
}
