<template>
     <div id="study">
          <ul class="ukalele-course-wrap">
               <li v-for="(item,index) in course" v-bind:key="index">
                  <div class="course-picture">
                        <img src="../../assets/banner/poster.jpg" width="140">
                  </div>
                  <div class="course-content">
                    <h2>第{{index+1}}课：{{item.name}}</h2>
                    <p>{{item.describe}}</p>
                    <div class="view">
                         <img src="../../assets/icon/eye.png" width="12">
                         <span>{{item.view}}</span>
                    </div>
                  </div>
               </li>
          </ul>
     </div>
</template>
<script>
export default {
      data(){
           return {
                course:[
                     {
                          name:"认识尤克里里",
                          describe:"从今天开始零基础学尤克里里",
                          view:20261
                     },
                     {
                          name:"调音",
                          describe:"在弹琴之前一定要先认真学习调音",
                          view:12738
                     },
                     {
                          name:"最基础的弹唱",
                          describe:"没错！第三节课开始学习弹唱！这节课将带你快速入门尤克里里的弹唱",
                          view:20261
                     },
                     {
                          name:"拓展练习<七里香>",
                          describe:"这节课将带你学习其他和弦",
                          view:572847
                     },
                     {
                          name:"抒情歌曲的演绎方法",
                          describe:"给大家介绍一个抒情歌曲的节奏型-琶音分解",
                          view:20261
                     },
                     {
                          name:"拓展练习<旅行的意义>",
                          describe:"每次学习完一定要练习啊",
                          view:20261
                     },
                     {
                          name:"四线谱",
                          describe:"学习尤克里里的专用谱",
                          view:20261
                     },
                     {
                          name:"旋律分解",
                          describe:"如何弹唱出包含深情的民谣歌曲，学完这个你就会懂",
                          view:20261
                     },
                ]
           }
      }
}
</script>
<style>
    .ukalele-course-wrap{
         position: relative;
         width: 100%;
         margin-bottom:54px;
         color:#898989;
         overflow: hidden;
    }
    .ukalele-course-wrap li{
         padding:10px 0;
         display: flex;
         position: relative;
    }
      .ukalele-course-wrap li:after{
         content: " ";
         position:absolute;
         left:0;
         top:0;
         width:100%;
         border-top:1px solid rgba(7,17,27,0.3);
     }
    @media screen and(-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
     .ukalele-course-wrap li:after{
         transform: scaleY(0.7);
     }
    }
    @media screen and(-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
     .ukalele-course-wrap li:after{
         transform: scaleY(0.5);
     }
    }
    .course-picture{
         flex:1;
         text-align: right;
         padding-left:10px;
    }
    .course-content{
         position: relative;
         text-align: left;
         padding: 4px 0;
         margin-left:16px;
         flex:2;
    }
    .course-content h2{
         font-size:12px;
         font-weight:bold;
         line-height:2;
    }
    .course-content p{
         width:100%;
         color:#898989;
         font-size:8px;
         white-space: nowrap;   
         text-overflow:ellipsis; 
         overflow:hidden;
    }
     .view{
          position:absolute;
          bottom:0;
          left:0;
          font-size:8px;
          
     }
     .view img,.view span{
          display: inline-block;
          vertical-align: middle;
          color:#898989;
     }
</style>