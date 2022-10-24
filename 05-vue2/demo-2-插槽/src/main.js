import Vue from 'vue'
import App from './App.vue'

//删了默认等于true
Vue.config.productionTip = false

//全局自定义指令
// Vue.directive('color', {
//   bind(el, binding) {
//     el.style.color = binding.value
//   },
//   update(el, binding) {
//     el.style.color = binding.value
//   },
// })
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
}

)

new Vue({
  render: h => h(App),
}).$mount('#app')
