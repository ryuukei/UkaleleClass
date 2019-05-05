<template>
    <main id="main">
        <div class="main-wrap">
           <v-search></v-search>
           <v-banner></v-banner>
           <v-list></v-list>
           <v-recommend></v-recommend>
        </div>
    </main>
</template>
<script>
import banner from "./banner.vue"
import search from "./search.vue"
import list from "./list.vue"
import recommend from "./recommend.vue"

export default {
      components:{
          "v-banner":banner,
          "v-search":search,
          "v-list":list,
          "v-recommend":recommend
      }
}
</script>
<style>
    #main{
        width:100%;
    }
    .main-wrap{
        position:relative;
        margin:0 23px;
    }
      .swipe{
         width:100%;
         height:116px;
         margin:17px 0;
         overflow: hidden;
     }
     @media screen and (min-width: 735px){
       .swipe{
         width:100%;
         height:300px;
         margin:15px 0;
         overflow: hidden;
        }
     }
      .mint-swipe-items-wrap{
        border-radius:5px;
    }
</style>

