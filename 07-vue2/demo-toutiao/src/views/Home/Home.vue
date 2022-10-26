<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="头条新闻" fixed/>

    <!-- 导入,注册,并使用ArticleInfo组件 -->
    <!-- 在使用组件的时候,如果某个属性名是'小驼峰'形式,则绑定的时候建议写成'连字符形式' -->
    <van-pull-refresh v-model="refreshing" :disabled="finished" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <ArticleInfo v-for="item in artlist" :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>

      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
// 导入request.js
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      artlist: [],
      list: [],
      // 是否正在加载下一页数据,如果loading为true则不会反复触发load事件
      // 每当下一页数据请求回来之后,千万要记得,把loading从true改为false
      loading: true,
      // 所有数据是否加载完毕,如果没有更多数据,一定要把finished改成true
      finished: false,
      refreshing: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isReflash) {
      // 发起get请求,获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // this.artlist = [旧数据在前, 新数据在后]

      if (isReflash) {
        // 证明是下拉刷新
        this.artlist = [...res, ...this.artlist]
        this.refreshing = false
      } else {
        // 证明是上拉加载更多
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    // 只要onLoad被调用,就应该请求下一页数据
    onLoad() {
      // 1.让页码值+1
      this.page++
      // 2.重新请求接口数据
      this.initArticleList()
    },
    onRefresh() {
      console.log('ok')
      // 1.让页码值+1
      this.page++
      // 重新加载数据
      this.initArticleList(1)
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container{
  padding: 46px 0 50px 0;
  .van-nav-bar{
    background-color: #007bff;
  }
  /deep/.van-nav-bar__title{
    color: #fff;
  }
}
</style>
