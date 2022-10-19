<template>
  <div>
    <h5>Count 组件</h5>
    <p>Count的值是:{{count}}</p>
    <button @click="count += 1">+1</button>
    <button @click="show">打印 this</button>
  </div>
</template>

<script>
export default {

  //组件的自定义属性
  //props中的数据,可以直接在模板结构中被使用
  //props是只读的
  // props: ["init"],
  //组件的私有数据
  props: {
    init: {
      //如果外界使用Count组件的时候,没有传递init属性,则默认值生效
      default: 0,
      //init的值类型必须是数字
      type: Number,
      //必填项校验
      required: true,
    }
  },

  data() {
    return {
      count: this.init
    }
  },
  methods: {
    show() {
      console.log(this);
    }
  }
};
</script>

<style>

</style>