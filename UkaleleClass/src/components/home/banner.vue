<template>
    <!-- 轮播图 -->
    <section class="swipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in bannerData" :key="index">
                <a :href="img.url">
                    <img :src="img.src" alt="" class="swipe-img-item">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
     export default{
         data(){
             return {
                 bannerData:[
                     {
                         url:"#",
                         src: require('../../assets/banner/banner-1.jpg')
                     },
                     {
                         url:"#",
                         src:require('../../assets/banner/banner-2.jpg')
                     },
                     {
                         url:"#",
                         src:require('../../assets/banner/banner-3.jpg')
                     }
                 ]
             }
         },
         components:{
             "mt-swipe":Swipe,
             "mt-swipe-item":SwipeItem
         }
     }
</script>
<style>
    
     .swipe-img-item{
         width: 100%;
     }
   .mint-swipe-indicator{
          width:6px;
         height:6px;
     }
     .mint-swipe-indicator.is-active{
         background:rgb(253,188,0);
         opacity: 1;
     }
</style>