// 用户相关请求模块
import request from '@/utils/request'

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/后端请求地址',
    data // 设置请求体
  })
}

// 获取用户信息
export const getUserInfo = () => {

}

// 修改用户信息
export const updateUser = () => {

}
