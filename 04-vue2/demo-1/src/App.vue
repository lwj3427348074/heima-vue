<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印this</button>
    <button @click="onReset">重置Left组件值为0</button>

    <hr>
    <input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef">
    <button v-else @click="showInput">展示输入框</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left ref="comLeft"></Left>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'

export default {
  data() {
    return {
      //控制输入框的展示和隐藏
      inputVisible: false
    }
  },
  // updated: {
  //   this.$refs.iptRef.focus()
  // },
  methods: {
    showThis() {
      console.log(this.$refs.comLeft);
      this.$refs.myh1.style.color = "red";
    },
    //点击按钮,重置Left按钮的count值
    onReset() {
      // this.$refs.comLeft.resetCount()
      this.$refs.comLeft.count = 0
    },
    //展示输入框
    showInput() {
      this.inputVisible = true
      //自动获取焦点
      // this.$refs.iptRef.focus()
      // console.log(this.$refs.iptRef);
      this.$nextTick(() => {
        this.$refs.iptRef.focus()
      })
    },
    showButton() {
      this.inputVisible = false
    }
  },
  components: { Left }
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
