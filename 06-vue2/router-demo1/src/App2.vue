<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    
    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->

    <!-- 只要在项目中安装并配置了vue-router,就可以使用router-link来替代普通的a链接了 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
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
