<template>
  <div class="left-container">
    <h3> myLeft 组件</h3>
    <button @click="getInfo">发起GET请求</button>
    <button @click="btnGetBooks">获取图书列表的数据</button>

  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    async getInfo() {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    },
    async btnGetBooks() {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.left-container{
  background-color: skyblue;
  min-height: 200px;
  flex: 1;
}
</style>
