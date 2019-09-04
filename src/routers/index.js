// 路由器对象模块


// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home/Home.vue'
import Search from '@/pages/Search/Search.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Login from '@/pages/Login/Login.vue'


// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 所有的路由
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                showFooter : true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter : true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter : true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter : true
            }
        },

        // 重定向
        {
            path:'/',redirect:'/home'
        },

        {path:'/login',component:Login}
    ]
})