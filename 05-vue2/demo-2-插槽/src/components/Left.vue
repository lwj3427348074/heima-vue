<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>

    <!-- 声明一个插槽区域 -->
    <!-- 每个slot插槽都要有一个name名称,如果省略了slot的name属性,则有一个默认名称叫default -->
    <slot name="default">
      <!-- 官方:后备内容 -->
      <h6>这是default插槽的默认内容</h6>

    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
