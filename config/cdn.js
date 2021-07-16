/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-12-14 16:28:26
 * @LastEditTime: 2021-07-16 19:45:59
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \vue-base-templet\config\cdn.js
 */

module.exports = {
  // 是否启用CDN
  enable: true,
  JS: {
    vue: {
      url: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
      exportName: 'Vue',
    },
    vuex: {
      url: 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js',
      exportName: 'Vuex',
    },
    'vue-router': {
      url: 'https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min.js',
      exportName: 'VueRouter',
    },
    axios: 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
  },
  CSS: {},
}
