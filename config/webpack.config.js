/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-12-14 16:56:06
 * @LastEditTime: 2020-12-14 17:03:04
 * @LastEditors: 艾欢欢
 * @FilePath: \vue-base-templet\config\webpack.config.js
 */
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, '../', dir)

module.exports = (config) => {
  // 通用配置
  // 设置路径别名
  config.resolve.alias
    .set('@', resolve('./src'))
    .set('@assets', resolve('src/assets'))
  // .set('@components', resolve('src/components'))
  // .set('@views', resolve('src/views'))
  // .set('@store', resolve('src/store'))

  // 根据环境不同，执行不同的配置
  if (process.env.NODE_ENV === 'production') {
    require('./webpack.config.prod.js')(config)
  } else {
    require('./webpack.config.dev.js')(config)
  }
}
