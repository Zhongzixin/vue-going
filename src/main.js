//入口文件
import Vue from 'vue'

// 配置vue-x
// 导入包
import Vuex from 'vuex'
// 注册Vuex到Vue中
Vue.use(Vuex)
// new Vuex.Store()实例，得到一个仓储对象

//每次进入网站，肯定会调用main.js，在调用时候，把本地存储中，把购物车数据读出来，
// 放在store中
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar(state, goodsinfo) {
      //假设没有找到对应的商品
      var flag = false;

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          //return true是来结束some循环
          return true
        }
      })
      //最终循环完毕得到的flag 还是 false，则push到购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }
      //当car更新之后，把car数组，储存到本地localstorage中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateCar(state, goodsinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))

    },
    removeFromCar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    selectedChanged(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o;
    },
    getSelected(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      })
      return o
    },
    getGoodsCountAndMoney(state) {
      var o = {
        count: 0,
        money: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count;
          o.money += item.count * item.price
        }
      })
      return o
    }
  }
})





//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入格式时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
})

// 导入vue-resource
import VueResorce from 'vue-resource'
Vue.use(VueResorce)

// 配置全局变量（路径）
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
//全局设置post时候表单数据格式组织形式
Vue.http.options.emulateHTTP = true;

//导入vue-preview（图片预览插件）
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


// 导入Mint-UI的组件
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   Lazyload 
// } from 'mint-ui'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入路由
import router from './router'


// 导入app根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})