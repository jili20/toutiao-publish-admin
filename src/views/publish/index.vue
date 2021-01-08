<template>
  <!-- 发布文章 -->
  <div class="publish-container">
    <!-- 卡片视频区域 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发布文章</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 添加表单 -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="">
          <!-- <el-input type="textarea" v-model="article.content"></el-input>-->
          <el-tiptap
            v-model="content"
            :extensions="extensions"
            height="600px"
            placeholder="请输入文章内容"
          ></el-tiptap>
        </el-form-item>
        <el-form-item label="封面">
          <el-radio-group v-model="form.resource">
            <!-- <el-radio :label="1">单图</el-radio>-->
            <!-- <el-radio :label="3">三图</el-radio>-->
            <!-- <el-radio :label="0">无图</el-radio>-->
            <!-- <el-radio :label="-1">自动</el-radio>-->
            <el-radio label="单图"></el-radio>
            <el-radio label="三图"></el-radio>
            <el-radio label="无图"></el-radio>
            <el-radio label="自动"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.region" placeholder="请选择分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onPublish(false)">发表</el-button>
          <el-button @click="onPublish(true)">保存草稿</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { addArticle } from '@/api/article'
import {
  ElementTiptap,
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  ListItem,
  Link,
  Image,
  CodeBlock,
  Blockquote,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  TextAlign,
  Indent,
  LineHeight,
  HorizontalRule,
  HardBreak,
  TrailingNode,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  FormatClear,
  TextColor,
  TextHighlight,
  Preview,
  Fullscreen,
  FontType,
  FontSize,
  CodeView
} from 'element-tiptap'
import 'element-tiptap/lib/index.css'
import { uploadImage } from '@/api/image'

export default {
  name: '',
  components: {
    'el-tiptap': ElementTiptap
  },
  props: [],
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      article: {},
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }),
        new Underline({
          bubble: true,
          menubar: false
        }),
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Image({
          // 默认会把图片生成 base64 字符串和内容存储在一起，需要自定义图片上传
          // 测试，获取到的图片，未引入和调用接口方法
          // uploadRequest (file) {
          //   console.log('uploadRequest')
          //   console.log(file)
          //   return 'xxx'
          // }
          // 引入和调用接口方法，上传图片到服务器
          uploadRequest (file) {
            // 如果接口要求 Content-Type 是 multipart/form-data，则请求体必须使用 FormData
            const fd = new FormData()
            fd.append('image', file)
            // 第1个 return 是返回 Promise 对象
            // 为什么？因为 axios 本身就是返回 Promise 对象
            return uploadImage(fd).then(res => {
              // 这个 return 是返回最后的结果
              return res.data.data.url
            })
          } // 图片的上传方法，返回一个 Promise<url>
        }),
        new Link(),
        new TextAlign(),
        new Indent(),
        new LineHeight(),
        new HorizontalRule(),
        new HardBreak(),
        new TrailingNode(),
        new History(),
        new Table(),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new FormatClear(),
        new Fullscreen(),
        new Preview(),
        new CodeBlock(),
        new Blockquote(),
        new TextColor(),
        new TextHighlight(),
        new FontType(),
        new FontSize(),
        new CodeView()
      ],
      content: 'Hello world'
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {
    onPublish (draft = false) {
      addArticle(this.article, draft).then(res => {
        console.log('submit!')
        this.$message({
          message: '发布成功！',
          type: 'success'
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
