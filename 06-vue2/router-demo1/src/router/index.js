// src/router/index.js 就是当前项目的路由模块
//1.导入Vue和VueRouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'


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
    //需求,在Movie组件中,希望根据id的值,展示相对应电影的详情信息
    {path:'/movie/:mid',component:Movie,props:true},

    {
      path:'/about',
      component:About,
      redirect:'/about/tab1',
      children:[
        //子路由规则
        //默认子路由:如果children素组中,某个路由规则的path值为空字符串,
        // 则这条路由叫做默认子路由
        {path:'tab1',component:Tab1},
        {path:'tab2',component:Tab2}
      ]
    },

    {path:'/login',component:Login},
    {path:'/main',component:Main}
  ]
})

//为router实例对象,声明全局前置守卫导航
//只要发生了路由的跳转,必然会触发beforeeach指定的function回调函数
router.beforeEach(function(to,from,next){
  //to是 将要 访问的路由的信息对象
  // console.log(from);
  //from是将要离开的路由的信息对象
  //next是一个函数,调用next()表示放行,允许这次路由导航
  // next()


  //1.要拿到用户将要访问的hash地址
  //2.判断hash地址是否等于/main
  //2.1如果等于/main,证明需要登录之后,才能访问成功
  //2.2如果不等于/main,则不需要登录,直接放行,next()
  //3.如果访问的地址是/main.则需要读取localstorage中的token值
  //3.1如果有token,则放行
  //3.2如果没有token,则强制跳转到/login登录页

  if(to.path === '/main'){
    //要访问后台主页,要判断是否有token
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      //没有登录,强制跳转到登录页
      next('/login')
    }

  }else{
    next()
  }

})


//4.向外共享路由的实例对象
export default router