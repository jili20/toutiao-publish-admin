import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login/index'
import Login from '@/views/login' // index 可以省略
import Home from '@/views/home' // index 可以省略
import Layout from '@/views/layout' // 布局组件，index 可以省略

Vue.use(VueRouter)
// 路由配置表
const routes = [
  { // 登录组件
    path: '/login',
    name: 'login',
    component: Login
  },
  { // 布局组件：左则导航 和 顶部
    path: '/',
    // 默认子路由只能有一个
    // 命令路由 layout 有一个默认子路由，这个名字没有意义，控制台会报错
    // 正确做法：如果有默认子路由，不要给父路由起名字
    // name: 'layout', // 因有默认子路由 home ，父路由不要起名字，控制台就没有警告
    component: Layout,
    children: [
      { // 子组件 - 首页
        path: '', // path 为空，会作为默认子路由渲染
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
