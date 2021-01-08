<template>
  <!-- 文章管理 -->
  <div class="article-container">
    <!-- 卡片视频区域 -->
    <el-card>
      <div slot="header" class="clearfix">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>文章管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 筛选数据表单-->
      <el-form ref="form" :model="form" label-width="40px" size="mini">
<el-form-item label="状态">
  <el-radio-group v-model="form.resource">
    <!-- <el-radio :label="null">全部</el-radio>-->
    <!-- <el-radio :label="1">草稿</el-radio>-->
    <el-radio label="全部"></el-radio>
    <el-radio label="草稿"></el-radio>
    <el-radio label="待审核"></el-radio>
    <el-radio label="审核通过"></el-radio>
    <el-radio label="审核失败"></el-radio>
    <el-radio label="已删除"></el-radio>
  </el-radio-group>
</el-form-item>
        <el-form-item label="频道">
          <el-select v-model="form.region" placeholder="请选择频道">
            <el-option label="全部" :value="null"/>
            <el-option :label="channel.name" :value="channel.id"
                       v-for="(channel, index) in channels" :key="index"></el-option>
            <!--            <el-option label="区域一" value="shanghai"></el-option>-->
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            v-model="reangeDate"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="loading" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- /筛选数据表单-->
    </el-card>
    <br>
    <!-- 卡片视频区域 -->
    <el-card>
      <div slot="header" class="clearfix">
        根据筛选条件共查询到 467147 条结果：
      </div>
      <!-- 数据列表 -->
      <el-table
        stripe
        :data="tableData"
        style="width: 100%"
        size="mini">
        <el-table-column
          fixed
          prop="name"
          label="封面">
          <template>

            <!-- 拿到第1张,设置样式 宽 50,加载失败，自动显示 加载失败字样 -->
            <img class="article-cover" src="./1.jpg"/>
<!--            <el-image style="width: 50px;" src="1.jpg" fit="cover">-->
<!--              <div slot="placeholder" class="image-slot">-->
<!--                加载中<span class="dot">...</span>-->
<!--              </div>-->
<!--            </el-image>-->
          </template>
        </el-table-column>
        <el-table-column
          label="标题">
        </el-table-column>
        <el-table-column
          prop=""
          label="状态">
          <!-- 如果需要在自定义模板中获取当前遍历项数据，就在template 中声明 slot-scope="scope" -->
          <template>
            <!-- 方法一：data 中定义数据 articleStatus，这里简写 -->
            <!-- <el-tag :type="articleStatus[scope.row.status].type">{{ articleStatus[scope.row.status].text }}</el-tag>-->
            <!-- 方法二：直接判断赋值 -->
            <el-tag type="primary" circle>草稿</el-tag>
            <!-- <el-tag type="warning" v-if="scope.row.status === 0">草稿</el-tag>-->
            <!-- <el-tag type="warning" v-else-if="scope.row.status === 1">待审核</el-tag>-->
            <!--<el-tag type="success" v-else-if="scope.row.status === 2">审核通过</el-tag>-->
            <!-- <el-tag type="info" v-else-if="scope.row.status === 3">审核失败</el-tag>-->
            <!-- <el-tag type="danger" v-else-if="scope.row.status === 4">已删除</el-tag>-->
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <!-- /数据列表 -->

      <!-- 列表分页 -->
      <!-- 分页区域
          1、调用接口获取分页列表数据
          2、定义 @current-change="onCurrentChange"
          3、

          @size-change="handleSizeChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[1, 2, 5, 10]"
          :page-size="queryInfo.pagesize" -->
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :disabled="loading"
        :total="1000" background>
      </el-pagination>
      <!-- /列表分页 -->
    </el-card>
  </div>
</template>
<script>
// 操作过程
// 1、引入 API 方法
// import { getArticles } from '@/api/article'
// 2、created 中调用获取分页列表数据方法 this.loadArticles()
// 3、data 中定义 articles: [] 文章数据列表
// 4、methods 中定义 loadArticles 方法，获取分页数据列表
// 5、把需要展示的数组列表数据绑定给 table 组件的 data 属性 :data="articles",不用去遍历，它自己会遍历
// 6、设置表格列 <el-table-column ，label="" 设置列的标题，prop="" 设定要渲染的列表项数据字段
//    自定义模板以后，prop属性就没有用了 删除
// 简化显示状态数据的方法：
// 1、data 中定义
export default {
  name: 'ArticleIndex',
  components: {},
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }],
      articles: [], // 文章数据列表
      articleStatus: [
        {
          status: 0,
          text: '草稿',
          type: 'primary'
        },
        {
          status: 1,
          text: '待审核',
          type: 'warning'
        },
        {
          status: 2,
          text: '审核通过',
          type: 'success'
        },
        {
          status: 3,
          text: '审核失败',
          type: 'danger'
        },
        {
          status: 4,
          text: '已删除',
          type: 'info'
        }
      ]
    }
  },
  created () {
    // this.loadArticles()
  },
  methods: {
    // loadArticles () {
    //   getArticles().then(res => {
    //     // console.log(res)
    //     this.articles = res.data.data.results
    //   })
    // },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style lang="less" scoped>
// 封面图片
.article-cover {
  width: 50px;
  background-size: cover;
  border-radius: 2px;
}
</style>
