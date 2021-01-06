<template>
  <!-- 登录页面 -->
  <div class="login-container">

    <div class="login-form-wrap">
      <div class="login-head">
        <div class="logo"></div>
      </div>
      <el-form class="login-form" ref="form" :model="user">
        <br>
        <el-form-item>
          <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">我已阅读并同意用户协议和隐藏条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/user' // 引入请求模块,可以1个
// import { login, getUserInfo, updateUser } from '@/api/user' // 引入请求模块,可以多个

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      },
      checked: false // 是否同意协议的选中状态
    }
  },
  created () {
  },
  methods: {
    // ⛑ 绑定登录按钮事件
    // onLogin () {
    //   // 获取表单数据(根据接口要求绑定数据）
    //   const user = this.user
    //   // 表单验证
    //   // 验证通过，提交登录
    //   request({
    //     method: 'POST',
    //     // url: 'v1_0/authorizations',
    //     url: '/v1_0/authorizations',
    //     // data 用来设置 post 请求体
    //     data: user
    //   }).then(res => {
    //     console.log(res)
    //     // 登录用户名和密码： 13911111111  246810
    //   })
    //   // 处理后端响应结果
    //   // 成功
    //   // 失败
    // },

    // http://localhost:8081/#/login
    login () {
      login(this.user).then(res => {
        console.log(res)
        // 登录成功
        this.$message({
          message: '登录成功！',
          type: 'success'
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex; // 开启弹性布局
  flex-direction: column; // 向下排列
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;

  .login-form-wrap {
    min-width: 300px;
    padding: 30px 50px 10px;
    background-color: #fff;

    .login-head {
      display: flex;
      justify-content: center;

      .logo {
        width: 200px;
        height: 57px;
        background: url("./logo_index.png") no-repeat;
        background-size: contain;
      }
    }

    .login-form {
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
