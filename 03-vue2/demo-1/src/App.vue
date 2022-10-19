<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <h3>测试</h3>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 以标签形式使用注册好的组件 -->
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
//导入需要使用的.vue组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  //注册组件,通过components祖册的是私有子组件
  components: {
    // 'Left': Left
    Left,
    Right
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
