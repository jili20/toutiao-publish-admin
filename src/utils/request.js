// 基于 axios 封装的请求模块
import axios from 'axios'

// 创建一个 axios 实例，说白了就是复制了一个 axios
// 通过此实例去发请求，把需要的配置配置给这个实例来处理
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net/app/' // 请求的基础路径
})

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request

// 哪里调用就加载 request 模块
// import request from 'request.js'
// request.xxxx
// request({
//   method:,
//   url: ''
// })
