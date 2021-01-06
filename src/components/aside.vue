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
    router>
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-s-grid"></i>
      <span slot="title">内容管理</span>
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
  data () {
    return {}
  },
  created () {
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.iconfont {
  margin-right: 6px;
  padding-left: 2px;
}
</style>
