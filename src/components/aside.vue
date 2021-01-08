<template>
  <!-- 左则导航栏 -->
  <!-- 1、背景颜色 background-color="#002033"
       2、激活状态的颜色 active-text-color="#409EFF"
       3、开启路由跳转 router 绑定 <el-menu-item index="/">
       4、默认激活的菜单项 首页 default-active="/"
   -->
  <el-menu
    default-active="/"
    background-color="#002033"
    text-color="#fff"
    active-text-color="#409EFF"
    router
    :collapse="isCollapse">
    <!-- collapse 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）绑定父组件传来的数据 -->
    <el-menu-item>
      <img class="logo" src="./logo.png" alt="">
    </el-menu-item>
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-document"></i>
      <span slot="title">文章管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
      <i class="iconfont icontuxiangimages17"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="/publish">
      <i class="iconfont iconpublish"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="iconfont iconcomment-dots"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="/fans">
      <i class="iconfont iconfans"></i>
      <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="iconfont iconzcpt-xitongguanli"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'AppAside',
  components: {},
  props: ['is-collapse'], // 声明参数来接收
  data () {
    return {
      // isCollapse: true
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.iconfont {
  margin-right: 6px;
  padding-left: 2px;
}

// 左则导航栏
.el-menu {
  height: 100%;
}

// logo
.logo {
  width: 100px;
}
</style>
