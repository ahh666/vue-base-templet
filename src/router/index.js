/*
 * @Description: 前端路由
 * @Author: 艾欢欢
 * @Date: 2020-07-23 16:30:18
 * @LastEditTime: 2020-08-06 16:18:12
 * @LastEditors: 艾欢欢
 * @FilePath: \vue-base-templet\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 为了首屏加载速度，首屏不需要按需加载
import Home from '../views/home'

// 处理路由跳转会报错的问题: Error: Avoided redundant navigation to current location: xxx
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  routes,
  // 页面滚动行为
  scrollBehavior(/* to, from, savedPosition */) {
    return {
      x: 0,
      y: 0,
    }
  },
})

export default router
