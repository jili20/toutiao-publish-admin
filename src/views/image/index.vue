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
        <el-radio-group class="action-head" @change="onCollectChange" v-model="collect" size="mini">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
          <el-button type="success" size="mini"
                     @click="dialogUploadVisible = true"
          >上传素材
          </el-button>
        </el-radio-group>
      </div>
      <!-- 素材列表 -->
      <!-- 每列间隔 10像素 :gutter="10" -->
      <el-row :gutter="10">
        <!-- <el-col :xs="12" :sm="6" :md="6" :lg="4">-->
        <el-col :xs="12"
                :sm="6"
                :md="6"
                :lg="4"
                v-for="(img, index) in images"
                :key="index">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
          <el-image
            style="height: 200px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
        </el-col>
      </el-row>
    </el-card>

    <!-- 上传表单对话框 -->
    <!-- 1、让对话框显示在遮罩的上层 :append-to-body="true"
         2、<el-upload 组件本身就支付请求提交上传操作，使用它不用自己去发请求，它自己发。
         3、请求方法：默认就是 POST
         4、请求路径：action 必须写完整的请求路径
         5、请求头：headers  data 中获取请求头 uploadHeaders
         6、上传文件字段名 name="image"
         7、上传成功调用的回调函数 :on-success="onUploadSuccess"
         8、关闭对话框自动销毁数据 v-if="dialogUploadVisible"
    -->
    <el-dialog
      title="提示"
      :visible.sync="dialogUploadVisible"
      width="30%"
      :append-to-body="true">
      <el-upload
        v-if="dialogUploadVisible"
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        drag="" multiple=""
        :headers="uploadHeaders"
        name="image"
        :on-success="onUploadSuccess">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  </div>
</template>
<script>
import { getImages } from '@/api/image'

export default {
  name: '',
  data () {
    // 拖拽上传需要的请求头
    const user = JSON.parse(window.localStorage.getItem('user'))
    return {
      collect: false, // 初始状态，哪个被选中
      images: [], // 图片素材列表
      dialogUploadVisible: false, // 拖拽上传对话框
      uploadHeaders: { // 拖拽上传获取请求头
        Authorization: `Bearer ${user.token}`
      }
    }
  },
  created () {
    this.loadImage(false)
  },
  methods: { // 给默认值，不传参 查所有
    loadImage (collect = false) { // 根据 collect 的参数指定查询全部还是收藏的素材
      getImages({
        collect
      }).then(res => {
        this.images = res.data.data.results
      })
    },
    // 监听单选框的点击事件：查询全部还是收藏的
    onCollectChange (value) {
      // console.log(value)
      this.loadImage(value)
    },
    // 上传图片成功调用的回调函数
    onUploadSuccess () {
      // 关闭对话框
      this.dialogUploadVisible = false
      // 更新素材列表 查询全部
      this.loadImage(false)
    }
  }
}
</script>
<style lang="less" scoped>
.action-head {
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between; // 靠两边
}
</style>
