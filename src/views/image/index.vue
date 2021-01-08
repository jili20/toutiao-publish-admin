<template>
  <div>
    <!-- 卡片视频区域 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>素材管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 按钮式单行框 -->
      <div>
        <el-radio-group v-model="radio1" size="mini">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="收藏"></el-radio-button>
        </el-radio-group>
      </div>
      <!-- 素材列表 -->
<!-- 每列间隔 10像素 :gutter="10" -->
<el-row :gutter="10">
  <el-col :xs="12" :sm="6" :md="6" :lg="4">
    <el-image
      style="height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover">
    </el-image>
  </el-col>
  <el-col :xs="12" :sm="6" :md="6" :lg="4">
    <el-image
      style="height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover">
    </el-image>
  </el-col>
  <el-col :xs="12" :sm="6" :md="6" :lg="4">
    <el-image
      style="height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover">
    </el-image>
  </el-col>
  <el-col :xs="12" :sm="6" :md="6" :lg="4">
    <el-image
      style="height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover">
    </el-image>
  </el-col>
  <el-col :xs="12" :sm="6" :md="6" :lg="4">
    <el-image
      style="height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover">
    </el-image>
  </el-col>
  <el-col :xs="12" :sm="6" :md="6" :lg="4">
    <el-image
      style="height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover">
    </el-image>
  </el-col>
</el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      radio1: '全部' // 初始状态，哪个被选中
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
</style>
