<template>
  <div class="movie-container">
    <!-- this.$route是路由的参数对象 -->
    <!-- this.$router是路由的导航对象 -->
    <h3>Movie 组件 --- {{this.$route.params.mid}} --- {{mid}}</h3>
    <button @click="showThis">打印 this</button>
    <button @click="goback">go后退</button>
    <!-- this要省略 -->
    <button @click="$router.back()">back后退</button>
    <button @click="$router.forward()">forward前进</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  //接收props数据
  props:['mid'],
  methods:{
      showThis(){
        console.log(this);
      },
      goback(){
        //go(-1)表示后退一层
        //如果后退的层数超过上限,则原地不动
        this.$router.go(-1)
      }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
