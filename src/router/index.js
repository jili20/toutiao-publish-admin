import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login/index'
import Login from '@/views/login' // index 可以省略

Vue.use(VueRouter)
// 路由配置表
const routes = [
  { // 登录组件
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
