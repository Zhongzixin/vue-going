import VueRouter from 'vue-router'


// 导入组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewInfo from './components/news/NewInfo.vue'
import Photolist from './components/photos/PhotoList.vue';
import PhotoInfo from './components/photos/PhotoInfo.vue';
import GoodsList from './components/goods/GoodLists.vue';
import GoodsInfo from './components/goods/GoodsInfo.vue';
import goodsdesc from './components/goods/Goodsdesc.vue';
import goodscomments from './components/goods/Goodscomments.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newslist/:id',component:NewInfo},
    {path:'/home/photolist',component:Photolist},
    {path:'/home/photoinfo/:id',component:PhotoInfo},
    {path:'/home/goodslist',component:GoodsList},
    {path:'/home/goodsinfo/:id',component:GoodsInfo},
    {path:'/home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'},
    {path:'/home/goodscomments/:id',component:goodscomments,name:'goodscomments'}

  ],
  linkActiveClass:'mui-active'//覆盖默认路由高亮的类，默认类叫做router-link-active
})

// 把路由对象暴露出去
export default router