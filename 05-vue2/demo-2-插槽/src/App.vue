<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'red'">测试</p>

    <button @click="color = 'green'">改变color的颜色值</button>
    <Article>
      <template #title>
        <h3>一首诗</h3>
      </template>

      <!-- <template #content="scope"> -->
      <template #content="{ user: name }">
        <div>
          <p>啊,大海,全是水</p>
          <p>啊,蜈蚣,全是腿</p>
          <p>啊,辣椒,净辣嘴</p>
          <p>{{ name }}</p>
        </div>
      </template>

      <template #footer>
        <div>作者:拼多多</div>
      </template>
    </Article>
    <hr />

    <div class="box" style="display: none;">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 默认情况下,在使用组件的时候,提供的内容都会被填充到名字为default的插槽中 -->
        <!-- 如果要把内容填充到指定名称的插槽中,需要用到v-slot:这个指令 -->
        <!-- v-slot:后面要跟上插槽的名字 -->
        <!-- v-slot:指令不能直接用在元素身上,必须用在template标签上 -->
        <!-- template这个标签,他是一个虚拟的标签,只起到包裹性质的作用,但是,不会被渲染为任何实质性的html元素 -->
        <!-- v-slot:的简写是# -->
        <template #default>
          <p>这是Left里面的p标签</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Article from "@/components/Article.vue";

export default {
  data() {
    return {
      color: "blue"
    };
  },
  components: {
    Left,
    Right,
    Article
  },
  directives: {
    //定义名为color的指令,指向一个配置选项
    // color: {
    //   //当指令第一次被绑定到元素上的时候,会立即触发bind函数
    //   //形参中的el表示当前指令所绑定到的那个DOM对象
    //   bind(el, binding) {
    //     console.log('v-color的bind函数');
    //     // console.log(binding);
    //     el.style.color = binding.value
    //   },
    //   //在DOM更新的时候,会触发update函数
    //   update(el, binding) {
    //     console.log('v-color的update函数');
    //     // console.log(binding);
    //     el.style.color = binding.value
    //   }
    // }
    color(el, binding) {
      console.log("v-color的bind或update函数");
      el.style.color = binding.value;
    }
  }
};
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
