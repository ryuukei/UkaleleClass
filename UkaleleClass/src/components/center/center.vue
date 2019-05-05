<template>
    <div id="center"> 
       <div class="header-wrap">
           <div class="header-img"></div>    
           <canvas id="myCanvas"></canvas>
       </div>
       <div  class="log-btn">一键登录</div>
       <div class="list-wrap">
       <div class="center-item-list">
           <div class="center-item">
               <img src="../../assets/icon/3-1.png">
               <span>心愿曲谱</span>
           </div>
           <div class="center-item">
               <img src="../../assets/icon/3-2.png">
               <span>我的留言</span>
           </div>
           <div class="center-item">
               <img src="../../assets/icon/3-3.png">
               <span>我的收藏</span>
           </div>
       </div>
        <div class="center-item-list">
           <div class="center-item">
               <img src="../../assets/icon/3-4.png">
               <span>我的足迹</span>
           </div>
           <div class="center-item">
               <img src="../../assets/icon/3-5.png">
               <span>最新通知</span>
           </div>
           <div class="center-item">
                  <img src="../../assets/icon/3-6.png">
               <span>建议反馈</span>
           </div>
       </div>
       </div>
    </div>
</template>
<script>
import {draw} from "../../assets/js/canvas.js"
export default {
     mounted:function(){
         draw();//canvas描绘正弦曲线
     }
}
</script>                       
<style> 
body{
    background:#f8f8f8;
}
    .header-wrap{
        position:relative;
        width:100%;
        height:162px;
        background: #f9d716;
    }
    .header-img{
        width:74px;
        height:74px;
        background:#ffffff;
        position:absolute;
        left:50%;
        bottom:0;
        transform: translateX(-50%);
        border-radius:50%;
        z-index:20;
        box-shadow: 1px 1px 2px rgba(7,17,27,.1)
    }
    #myCanvas{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:20px;
        z-index:10;
    }
    .log-btn{
        position:relative;
        margin:0 auto;
        width:40%;
        min-width:150px;
        font-weight:bold;
        text-align: center;
        height:30px;
        line-height:30px;
        border: 1px solid #e5e5e5;
        margin-top:26px;
    }
    .list-wrap{
       width:100%;
       padding:20px 0;
       font-size:12px;
    }
    .center-item-list{
        width:100%;
        display:flex;
      
    }
    .center-item{
        flex:1;
        height:90px;
        text-align:center;
    }
     .center-item span{
         display: block;
     }
     .center-item img{
         width:30px;
         height:30px;
         animation: bubble 1s ease-in-out;
     }
     @keyframes bubble {
         from{
             transform: scale(1,1)
         }
         50%{
             transform: scale(1.2,1.2)
         }
         to{
             transform: scale(1,1)
         } 
     }
    
</style>

