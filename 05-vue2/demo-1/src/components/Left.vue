<template>
  <div class="left-container">
    <h3>Left 组件 --- {{ count }}</h3>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  data() {
    return {
      count: 0
    }
  },
  created() {
    console.log('Left组件被创建了');
  },
  destroyed() {
    console.log('Left组件被销毁了');
  },
  //当组件第一次被创建的时候就会执行created生命周期和activated生命周期
  //当组件被激活的时候只会执行activated生命周期
  activated() {
    console.log('Left组件被激活了 --- activated');
  },
  deactivated() {
    console.log('Left组件被缓存了 --- deactivated');
  }
}
</script> 

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
