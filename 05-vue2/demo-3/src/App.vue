<template>
  <div>
    <h1>APP 根组件</h1>
    <button @click="btnGetBooks">获取图书列表的数据</button>
    <hr>

    <div class="box">
      <myLeft></myLeft>
      <myRight></myRight>
    </div>

  </div>
</template>

<script>
import myLeft from '@/components/myLeft.vue'
import myRight from '@/components/myRight.vue'
export default {
  components: {
    myLeft,
    myRight
  },
  methods: {
    async btnGetBooks() {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  display:flex
}
</style>
