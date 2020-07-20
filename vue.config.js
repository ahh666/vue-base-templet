const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: !isProd ? '/' : '',
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 设置页面title
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = '不才的小站'
        return args // 传递给 html-webpack-plugin's 构造函数的新参数
      })
      .end()
    // 移动端调试工具
    if (!isProd) {
      config
        .plugin('html-link')
        .use(require('html-webpack-link-plugin'), [
          {
            js: ['https://cdn.bootcss.com/eruda/1.5.4/eruda.min.js'],
            before: true,
          },
        ])
        .end()
    }
  },
}
