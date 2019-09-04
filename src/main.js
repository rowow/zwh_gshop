// 入口JS


import Vue from 'vue'
import App from './App.vue'

import router from './routers'

new Vue({
    el : '#app',
    render : h => h(App),
    router
})