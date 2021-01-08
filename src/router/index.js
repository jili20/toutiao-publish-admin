import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login/index'
import Login from '@/views/login' // index 可以省略
import Home from '@/views/home' // index 可以省略
import Layout from '@/views/layout' // 布局组件，index 可以省略
import Article from '@/views/article' // 文章列表
import Publish from '@/views/publish' // 文章管理
import Image from '@/views/image' // 图片素材管理

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
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish
      },
      {
        path: '/image',
        name: 'image',
        component: Image
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// // 路由导航守卫，所有页面导航都会经过这里
// // 使用 router.beforeEach 注册一个全局前置守卫
// // to  要去的路由信息
// // from  来自哪里的路由信息
// // next()  放行方法 允许通过
// router.beforeEach((to, from, next) => {
// // 如果要访问的页面不是 /login , 校验登录状态
// // 如果没有登录，则跳转到登录页面
//
//   const user = JSON.parse(window.localStorage.getItem('user'))
//   // 如果登录了，则允许通过 next()
//   // 校验非登录页面的登录状态
//   if (to.path !== '/login') {
//     if (user) {
//       next() // 已登录，允许通过
//     } else {
//       next('/login') // 没有登录，跳转到登录页面
//     }
//   } else {
//     // 登录页面，正常允许通过
//     next()
//   }
//   console.log('页面进来了')
// })
// // http://localhost:8081/#/

export default router
