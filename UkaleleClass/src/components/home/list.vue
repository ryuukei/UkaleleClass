<template>
      <section class="list">
           <ul>
               <li class="list-item">
                   <div class="list-item-icon" :style="{background:color[0]}">
                       <img src="../../assets/icon/home_guitar_icon.png" class="list-item-icon-img">
                   </div>
                   <span>尤克里里</span>
               </li>
               <li class="list-item">
                   <div class="list-item-icon" :style="{background:color[1]}">
                       <img src="../../assets/icon/home-ukalele.png" class="list-item-icon-img">
                   </div>
                   <span>吉他</span>
               </li>
               <li class="list-item">
                   <div class="list-item-icon" :style="{background:color[2]}">
                       <img src="../../assets/icon/home_guitar_icon.png" class="list-item-icon-img">
                   </div>
                   <span>卡林巴</span>
               </li>
           </ul>
      </section>
</template>
<script>
       export default{
           data(){
               return {
                   color:["#a6e5d4","#ffd66a","#f38079"]
               }
           }
       }
</script>
<style>
    .list{
        padding:10px 14px;
        border-radius:5px;
        background: #ffffff;
        font-size:0;
    }
    .list-item{
        vertical-align:top;
        font-size:10px;
        font-weight: bold;
        text-align: center;
        display:inline-block;
        margin-right: 20px;
    }
    .list-item-icon{
        position:relative;
        width:40px;
        height:40px;
        border-radius:50%;
    }
    .list-item-icon-img{
        display: block;
        position: absolute;
        top:50%;
        left:50%;
        width:60%;
        transform: translate(-50%,-50%);
    }
    .list-item span{
        display: block;
        margin-top:4px;
    }
</style>