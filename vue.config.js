/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-07-23 16:30:18
 * @LastEditTime: 2020-12-14 17:06:29
 * @LastEditors: 艾欢欢
 * @FilePath: \vue-base-templet\vue.config.js
 */
const isProd = process.env.NODE_ENV === 'production'
const webpackConfig = require('./config/webpack.config.js')

module.exports = {
  publicPath: !isProd ? '/' : '',
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  productionSourceMap: !isProd,
  devServer: {
    port: 8090,
    // 配置 proxy 代理解决跨域问题
    proxy: {
      // 假设接口为 https://www.mock.com/mock
      '/api': {
        target: 'https://www.mock.com/mock', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    // 设置页面title
    config.plugin('html').tap(args => {
      args[0].title = '不才的小站'
      return args // 传递给 html-webpack-plugin's 构造函数的新参数
    })
    webpackConfig(config)
  }
}
