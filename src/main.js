import Vue from 'vue'

// 导入Mint-UI的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
//导入MUI的样式
import './lib/mui/css/mui.min.css'

// 导入app根组件

import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render:c => c(app)
})