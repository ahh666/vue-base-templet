const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: !isProd ? '/' : '',
  productionSourceMap: false,
  devServer: {
    port: 8090,
  },
  configureWebpack: (config) => {
    if (isProd) {
      // 生产环境去掉 console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: (config) => {
    // 设置页面title
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = '不才的小站'
        return args // 传递给 html-webpack-plugin's 构造函数的新参数
      })
      .end()

    if (isProd) {
      // gzip压缩
      config
        .plugin('gzip-plugin')
        .use('compression-webpack-plugin', [
          {
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.html$|\.json$|\.css$|\.ttf$/,
            threshold: 4096, // 只有大小大于该值（4KB）的资源会被处理
            minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
            deleteOriginalAssets: true, // 删除原文件
          },
        ])
        .end()
    }
    // --------- 分割：以下适用移动端 H5 ---------
    // 移动端调试工具
    if (!isProd) {
      config
        .plugin('html-link')
        .use(require('html-webpack-link-plugin'), [
          {
            js: ['https://cdn.jsdelivr.net/npm/eruda'],
            before: true,
          },
        ])
        .end()
    }
  },
}
