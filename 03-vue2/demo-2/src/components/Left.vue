<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg 的值是 {{msg}}</p>
    <p>user 的值是 {{user}}</p>
    <button @click="msg = '123'">修改 msg</button>
    <button @click="user.name='zs'">修改 user</button>
    <hr>
    <button @click="send">把兄弟数据发给Right</button>
  </div>
</template>

<script>
//导入eventBus.js模块
import bus from './eventBus.js'

export default {
  props: ['msg', 'user'],
  data() {
    return {
      str: '我是Left里面的数据'
    }
  },
  methods: {
    send() {
      //通过eventBus来发送数据
      bus.$emit('share', this.str)
    }
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
