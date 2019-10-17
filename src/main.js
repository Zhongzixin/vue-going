//入口文件
import Vue from 'vue'
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
  router
})