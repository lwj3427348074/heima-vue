<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <button @click="comName='Left'">Left</button>
    <button @click="comName='Right'">Right</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <Left></Left>
      <Right></Right> -->
      <!-- keep-alive 可以把内部的组件进行缓存,而不是销毁组件 
           当组件被缓存时,会自动触发组件的deactivated生命周期函数
           当组件被激活时,会自动触发组件的activated生命周期函数
      -->
      <!-- 不在include里面的组件不会被缓存 -->
      <!-- 在exclude里面的组件不会被缓存 -->
      <!-- 两个属性不能同时使用 -->
      <keep-alive include="Left,Right">
        <components :is="comName"></components>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  data() {
    return {
      comName: 'Left'
    }
  },
  components: {
    //如果在声明组件的时候,没有为组件指定name名称,则组件的名称就是默认的注册名称
    Left, Right
  },
  methods: {}
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
