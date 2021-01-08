// 文章相关请求模块
import request from '@/utils/request'

// 获取文章列表: params 接收用户传过来的数据
export const getArticles = params => {
// export const getArticles = () => {
  return request({
    method: 'GET',
    url: '/后端请求地址',
    // Body 参数使用 data 设置
    // Query 参数使用 params 设置
    // Headers 参数使用 headers 设置
    params // params： params 当属性值和属性名同名，可只写一个
  })
}

// 添加文章: draft 草稿
export const addArticle = (data, draft = false) => {
  return request({
    method: 'POST',
    url: '/请求后端接口路径',
    param: {
      draft // 是否保存为草稿（ true 为草稿 ）
    },
    data
  })
}
