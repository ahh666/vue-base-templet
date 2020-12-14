/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-07-23 16:30:18
 * @LastEditTime: 2020-12-14 15:55:45
 * @LastEditors: 艾欢欢
 * @FilePath: \vue-base-templet\vue.config.js
 */
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

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
          '^/api': '/',
        },
      },
    },
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

    // 设置路径别名
    config.resolve.alias
    // .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
    // .set('@components', resolve('src/components'))
    // .set('@plugins', resolve('src/plugins'))
    // .set('@views', resolve('src/views'))
    // .set('@store', resolve('src/store'))

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

      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          // gifsicle: { interlaced: false },
          // webp: { quality: 75 }
        })
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
