<template>
  <div id="app">
    <router-view></router-view>
    <div class="menu">
         <ul class="navBar">
             <li>
                 <router-link to="/home"  active-class="active" >
                   <div @click="active(0)">
                      <div class="navBar-icon">
                       <img v-if="show[0]" src="./assets/icon/nav-1.png" height="30" width="30">
                       <img v-else src="./assets/icon/nav-1-active.png" height="30" width="30">
                       </div>
                       <span>曲谱</span>
                    </div>
                 </router-link>
             </li>
             <li>
                 <router-link to="/study" >
                    <div  @click="active(1)">
                     <div class="navBar-icon">
                       <img v-if="show[1]" src="./assets/icon/nav-2.png" height="30" width="30">
                       <img v-else src="./assets/icon/nav-2-active.png" height="30" width="30">
                       </div>
                          <span>学习</span>
                    </div>
                 </router-link>
             </li>
             <li>
                 <router-link to="/center" >
                    <div @click="active(2)">
                     <div class="navBar-icon">
                       <img v-if="show[2]" src="./assets/icon/nav-3.png" height="30" width="30">
                       <img v-else src="./assets/icon/nav-3-active.png" height="30" width="30">
                       </div>
                     <span>我</span>
                    </div>
                 </router-link>
             </li>
         </ul>
     </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        show:[false,true,true]
    }
 },
 methods:{
   active:function(id){
     for(var i=0;i<this.show.length;i++){
          if(id===i){
            this.$set(this.show,id,false);
          }
          else{
            this.$set(this.show,i,true);
          }
     }
     
   } 
 }
}
</script>

<style>
     @import url("./assets/style/reset.css");
 
      .menu{
         position:fixed;
         height:57px;
         width:100%;
         left:0;
         bottom:0;
         z-index:20;
        background: #ffffff;
     }
     /*通过伪类实现1像素边框*/
     .menu:before{
         content: " ";
         position:absolute;
         left:0;
         top:0;
         width:100%;
         border-top:1px solid rgba(7,17,27,0.3);
     }
      @media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5) {
        .menu:before{
           -webkit-transform: scaleY(0.7) ;
           transform:scaleY(0.7)
        }
      }
      @media (-webkit-min-device-pixel-ratio:2.0),(min-device-pixel-ratio:2.0) {
        .menu:before{
           -webkit-transform: scaleY(0.5) ;
           transform:scaleY(0.5)
        }
      }
       .navBar{
         height: 64px;
         display:flex;
         align-items: center;
         justify-content: center;

     }
     .navBar:after{
         clear:both;
     }
    .navBar li{
          flex:1;
          display:flex;
          text-align: center;
          height:100%;
          align-items: center;
          justify-content: center;
      }
    .navBar span{
        font-weight:600;
        font-size: 12px;
        vertical-align: top;
        border:none !important;
    }
    .navBar-icon{
        display:block;
        width:30px;
        height:30px;
    }
   .active span{
      color:#f7d42e;
    }
    
</style>
c