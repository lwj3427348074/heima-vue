<template>
  <div class="header-container">{{header}}</div>
</template>

<script>
export default {
  data() {
    return {
      header: '兰昕的购物车'
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  font-size: 12px;
  height: 45px;
  width: 100%;
  background-color: #1d7bff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
