<template>
  <!-- 布局组件：左则导航栏 和 顶部 -->
  <el-container class="layout-container">
    <!-- 侧边导航栏 -->
    <el-aside width="auto">
      <!-- 3、使用则边栏组件 -->
      <!-- 可大写 <AppAside/>-->
      <app-aside :is-collapse="isCollapse"/>
    </el-aside>
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header>
        <div>
          <i :class="{
            'el-icon-s-fold':isCollapse,
            'el-icon-s-unfold':!isCollapse }"
             @click="isCollapse = !isCollapse"></i>
          <span class="title">黑马头条后台管理</span>
        </div>
        <el-dropdown>
          <!-- 用户头像 -->
          <div class="avatar-wrap">
            <img class="avatar" src="./1.jpg"/>
            <span>Bing</span>
            <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
          </div>
          <el-dropdown-menu slot="dropdown" @click="onLogout">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item @click.native="onLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppAside from '@/components/aside' // 1、引入则边栏组件

export default {
  name: 'LayoutIndex',
  components: {
    // 2、注册则边栏组件
    AppAside
  },
  data () {
    return {
      // 侧边菜单栏的展开状态，默认不展开
      isCollapse: false
    }
  },
  created () {
  },
  methods: {
    // 退出登录
    onLogout () {
      this.$confirm('您确定要退出吗？', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 把用户的登录状态清除
        window.localStorage.removeItem('user')
        // 跳转到登录页面
        this.$router.push('/login')
        // console.log('onLogout')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
// 布局外层容器
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.toggle-button {
  cursor: pointer; // 鼠标移上变小手
}

// 顶部
.el-header {
  height: 60px;
  display: flex; // 默认水平排列
  justify-content: space-between; // 让元素项左右撑开靠两端
  align-items: center; // 水平居中
  border-bottom: 3px solid #69bd9d;
  background-color: #e5eef5;

  .title {
    padding-left: 15px;
  }
}

// 主体内容
.el-main {
  background-color: aliceblue;
}

// 用户头像区域
.avatar-wrap {
  display: flex; // 默认水平排列
  align-items: center; // 水平居中
  // 用户头像
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
