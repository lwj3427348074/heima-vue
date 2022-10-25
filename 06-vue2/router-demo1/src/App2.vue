<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    
    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->

    <!-- 只要在项目中安装并配置了vue-router,就可以使用router-link来替代普通的a链接了 -->
    <router-link to="/home">首页</router-link>
    <!-- 注意:在哈希地址中,/后面的参数想,叫做路径参数 -->
    <!-- 在路由参数对象中,需要使用this.$route.params来访问路径参数 -->
    <!-- 注意:在哈希地址中,?后面的参数项,叫做"查询参数"  -->
    <!-- 在路由参数对象中,需要使用this.$route.query来访问查询参数--name..age.. -->
    <!-- 注意:在this.$route中,path只是路径部分,fullpath是完整的地址 -->
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?name=zs age=20">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/about">关于</router-link>
    
    <hr />

    <!-- 只要在项目中安装并配置了vue-router,就可以使用router-view这个组件了 -->
    <!-- 它的作用很单纯,占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
