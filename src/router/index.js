import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  // linkActiveClass: 'active', // 并不会精确匹配
  routes
})
// 在这里边就行登录拦截和路由拦截
router.beforeEach((to,form,next)=>{
  console.log("to====",to)
  console.log("form====",form)
  next()
})
export default router
