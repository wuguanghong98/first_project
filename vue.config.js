module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'api': '@/api',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'store': '@/store',
        'views': '@/views'
      }
    },

  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            // 要公用的scss的路径
            resources: './src/assets/css/common.scss'
          })
          .end()
    })
  }
}