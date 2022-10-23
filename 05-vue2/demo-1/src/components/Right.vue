<template>
  <div class="right-container">
    <h3>Right 组件</h3>
  </div>
</template>

<script>
export default {
  //当提供了name属性之后,组件的名称,就是name属性值
  //主键的"注册名称"的主要场景是:以标签的形式,把注册好的组件,渲染和使用到页面结构之中
  //组件声明时候的"name"名称的主要应用场景:结合<keep-alive>标签实现组件缓存功能;以及在调试工具中,看到主键的名称
  name: 'MyRight'
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
