// src/router/index.js 就是当前项目的路由模块
//1.导入Vue和VueRouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'


//2.调用Vue.use()函数,把VueRouter安装为Vue的插件
Vue.use(VueRouter)

//3.创建路由的实例对象
const router = new VueRouter({
  //routes是一个数组,作用:定义"hash地址"与"组件"之间的对应关系
  routes:[
    //重定向的路由规则
    {path:'/',redirect:'/home'},

    // {path:'/home',component:要展示的组件}
    //路由规则
    {path:'/home',component:Home},
    {path:'/movie',component:Movie},
    {path:'/about',component:About},
  ]
})

//4.向外共享路由的实例对象
export default router