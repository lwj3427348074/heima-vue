<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <MyCount :init="9"></MyCount>
  </div>
</template>

<script>
export default {}
</script>

// scoped 自动给每个标签加一个自定义属性,防止样式冲突
<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: red;
}

// h5 [data-v-001] {}
//deep => [data-v-001] h5 {} => 有这个属性的h5子属性

//当使用第三方组件库的时候,如果有修改组件默认样式的需求,需要用到/deep/
/deep/ h5 {
  color: pink;
}
</style>
