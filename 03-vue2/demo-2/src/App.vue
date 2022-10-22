<template>
  <div class="app-container">
    <h1>App 根组件 --- {{countFromSon}}</h1>
    <!-- <p>{{ count}}</p> -->
    <p>{{ userinfo }}</p>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->

      <!-- 父向子,自定义属性 -->
      <Left :msg="message" :user="userinfo"></Left>
      <!-- 子向父,自定义事件 -->
      <Right @numchange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  data() {
    return {
      message: '我是father里的message',
      userinfo: {
        name: 'wsc', age: 18
      },
      //定义countFromSon来接收子组件传递过来的数据
      countFromSon: 0
    }
  },
  methods: {
    getNewCount(val) {
      console.log('触发getnewcount事件', val);
      this.countFromSon = val
    }
  },
  components: {
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
