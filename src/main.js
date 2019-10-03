//入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResurce from 'vue-resource'
Vue.use(VueResurce)


// 导入Mint-UI的组件
import {
  Header,Swipe, SwipeItem
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


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
  router
})