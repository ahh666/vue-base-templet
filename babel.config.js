/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-07-23 16:30:18
 * @LastEditTime: 2020-12-14 15:55:20
 * @LastEditors: 艾欢欢
 * @FilePath: \vue-base-templet\babel.config.js
 */
const prodPlugin = []
// 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
if (process.env.NODE_ENV === 'production') {
  prodPlugin.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [...prodPlugin]
}
