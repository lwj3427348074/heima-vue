<template>
  <div class="home-container">
    <h3>Home 组件</h3>

    <hr>

    <button @click="gotoLk">push跳转到'洛基'页面</button>
    <button @click="gotoLk2">replace跳转到'洛基'页面</button>

    <router-link to="/main">访问后台主页</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    gotoLk(){
      // 跳到指定的hash地址,并增加一条历史记录
      this.$router.push('/movie/1')
    },
    gotoLk2(){
      // 跳到指定的hash地址,并替换当前历史记录
      this.$router.replace('/movie/1')
    },

  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
