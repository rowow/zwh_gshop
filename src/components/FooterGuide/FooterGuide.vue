<template>
    <footer class="footer_guide border-1px">
        <!-- :class="{on:'/home'===$route.path}" : 对象语法 -->
        <a href="javascript:;" class="guide_item" :class="{on:'/home'===$route.path}" @click="goTo('/home')">
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </a>
    </footer>
</template>

<script>
export default {
    name:'footerGuide',
    methods:{
        goTo(path){
            this.$router.replace(path);
        }
    }
}
</script>

<style>

</style>
