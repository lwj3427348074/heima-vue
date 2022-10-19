//导入vue这个包,得到vue构造函数
import Vue from 'vue'
//导入App.vue根组件,将来要把App.vue中的模板结构,渲染到HTML页面中
// import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

//创建vue的实例对象
new Vue({
  // el: '#app',
  //把render函数指定的组件渲染到html页面中
  render: h => h(Test),
}).$mount('#app')

//vue实例的$mount()方法,作用和el属性完全一样