/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-12-14 16:56:06
 * @LastEditTime: 2021-07-23 14:20:33
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \vue-base-templet\config\webpack.config.js
 */
const path = require('path')

const resolve = dir => path.resolve(__dirname, '../', dir)

module.exports = config => {
  // 通用配置
  // 设置路径别名
  config.resolve.alias.set('@', resolve('./src')).set('@assets', resolve('src/assets'))
  // .set('@components', resolve('src/components'))
  // .set('@views', resolve('src/views'))
  // .set('@store', resolve('src/store'))

  const oneOfsMap = config.module.rule('scss').oneOfs.store
  oneOfsMap.forEach(item => {
    item
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: [
          path.resolve(__dirname, '../src/assets/style/themeify.scss'),
          path.resolve(__dirname, '../src/assets/style/base.scss'),
        ],
      }).end
  })

  // 根据环境不同，执行不同的配置
  if (process.env.NODE_ENV === 'production') {
    require('./webpack.config.prod.js')(config)
  } else {
    require('./webpack.config.dev.js')(config)
  }
}
