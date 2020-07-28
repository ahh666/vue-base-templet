import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/base'
import Api from './api'
import Utils from './utils'
import * as filters from './filters'
// 配置全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$api = Api
Vue.prototype.$utils = Utils

if (process.env.NODE_ENV !== 'production') {
  window.eruda.init()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
