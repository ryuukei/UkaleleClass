<template>
      <section class="re-wrap">
              <div class="re-ad">
                  <div>
                      <router-link to="/home/hot" active-class="active">
                         <span>七月最热</span>
                      </router-link>
                  </div>
                  <div>
                      <router-link to="/home/new" active-class="active">
                         <span>最新曲谱</span>
                      </router-link>
                  </div>      
              </div>
              <transition name="fade" mode="out-in">
                 <router-view></router-view>
              </transition>
      
      </section>
</template>
<script>
    export default{
         data(){
             return {
                    
             }
         }
    }
</script>
<style>
 /*    .re-wrap{
        position:absolute;
        background: #ffffff;
        bottom:64px;
        top:264px;
        width:calc(100% - 64px);
        overflow: hidden;
        border-radius: 6px;
        left:50%;
        transform: translateX(-50%);
        margin-top:12px;
    } */
    .re-wrap{
        background: #ffffff;
        overflow: hidden;
        margin-top:14px;
    }
    .re-ad{
        display:flex;
        align-items: stretch;
        font-size:14px;
        padding:12px;
        background: #ffffff;
        
    }
    .re-ad div{
        flex:1;
        text-align: center;
    }
    .re-ad span{
        padding:0 5px 5px;
       
    }
    .active span{
         border-bottom: 2px solid #ffb713; 
    }
    .re-content{
        background: #ffffff;
        margin-bottom:80px;
    }
    .re-content li:first-child{
        padding-top:8px;
    }
    .re-content li{
        position: relative;
        width:100%;
        font-size:0;
        padding-left: 25px;
        margin-bottom:17px;
    }
    .re-content li:before{
        content:"";
        position:absolute;
        bottom:0;
        left:17px;
        border-radius: 2px;
        width:5px;
        height:12px;
        background: #ffb713;
    }
    .song_name{
        font-size:10px;
        line-height:1.5;
        border-radius: 9999em;
        font-weight: bold;
        display:inline-block;
        color:#ffffff;
        padding:0 2px;
    }
    .song_name~span{
        font-size:12px;
        display: inline-block;
        margin-left:3px;
    }
    .hot-icon{
        display:inline-block ;
        vertical-align: bottom;
        width:12px;
        height:12px;
    }
    .hot-icon img{
        max-width: 100%;
    }
    .hot-icon~span{
        color:#898989;
        font-size:12px
    }
    .fade-enter-active,.fade-leave-active{
        transition:all 0.4s ease;
    }
    .fade-enter{
        opacity: 0;
        transform:translateX(100%);
    }
    .fade-leave-to{
        opacity: 0;
        transform:translateX(-100%);
    }
      
</style>