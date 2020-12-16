/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-12-14 16:28:26
 * @LastEditTime: 2020-12-14 16:29:45
 * @LastEditors: 艾欢欢
 * @FilePath: \vue-base-templet\config\cdn.js
 */

module.exports = {
  // 是否启用CDN
  enable: true,
  JS: {
    vue: {
      url: 'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
      exportName: 'Vue',
    },
    vuex: {
      url: 'https://cdn.bootcdn.net/ajax/libs/vuex/3.4.0/vuex.js',
      exportName: 'Vuex',
    },
    'vue-router': {
      url: 'https://cdn.bootcss.com/vue-router/3.2.0/vue-router.min.js',
      exportName: 'VueRouter',
    },
    axios: 'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
  },
  CSS: {},
}
