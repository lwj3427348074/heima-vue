<template>
  <div class="app-container">
    <Header title="购物车案例"></Header>

    <Goods v-for="item in list" :key="item.id" :title="item.goods_name" :pic="item.goods_img" :price="item.goods_price"
      :state="item.goods_state" :id="item.id" :count="item.goods_count" @state-change="getNewState">
    </Goods>

    <Footer :isfull="fullState" @full-change="getFullState" :amount="amt" :csum="sum"></Footer>


  </div>

</template>

<script>
import axios from 'axios'
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
import bus from '@/components/eventBus.js'


export default {
  data() {
    return {
      list: []
    }
  },
  //计算属性,动态计算全选的布尔值
  computed: {
    //动态计算出全选的状态是true还是false
    fullState() {
      return this.list.every(item => item.goods_state)
    },
    //已勾选商品的总价格
    amt() {
      // 先过滤, 再累加
      return this.list
        .filter(item => item.goods_state)
        .reduce((total, item) => (total += item.goods_price * item.goods_count), 0)
    },
    sum() {
      return this.list
        .filter(item => item.goods_state)
        .reduce((total, item) => (total += item.goods_count), 0)
    }
  },
  created() {
    this.initCartList()

    bus.$on('share', val => {
      // console.log(val);
      this.list.some(item => {

        if (item.id === val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  },
  components: { Header, Goods, Footer },
  methods: {
    async initCartList() {
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      //只要请求回来的数据,在页面渲染期间要用到,则必须转存到data中
      // console.log(res.list);
      if (res.status === 200) {
        this.list = res.list
      }
    },
    getNewState(e) {
      // console.log(e);
      this.list.some(item => {
        if (item.id === e.id) {
          item.goods_state = e.value
          return true
        }
      })
    },
    getFullState(e) {
      // console.log(e);
      this.list.forEach(item => {
        item.goods_state = e
      })
    }
  },

}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
