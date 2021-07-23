/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-12-14 16:56:06
 * @LastEditTime: 2020-12-14 17:17:06
 * @LastEditors: 艾欢欢
 * @FilePath: \vue-base-templet\config\webpack.config.dev.js
 */
module.exports = config => {
  // --------- 分割：以下适用移动端 H5 ---------
  // 移动端调试工具
  config.plugin('html-link').use(require('html-webpack-link-plugin'), [
    {
      js: ['https://cdn.jsdelivr.net/npm/eruda'],
      before: true,
    },
  ])
}
