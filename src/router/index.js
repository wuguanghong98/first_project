import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './base/routes'

Vue.use(VueRouter)

//解决重复点击同一路由时产生的错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  document.title = to.meta
  next()
})

export default router
