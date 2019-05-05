<template>
    <ul class="re-content">
                   <li v-for="item in songData.Hot.songs" :key="item.name">
                     <span class="song_name" style="background:#82c790" v-if="item.type===1">弹唱</span>
                     <span class="song_name" style="background:#84b2cc" v-else-if="item.type===2">指弹</span>
                     <span>{{item.name}}</span>
                     <span>-{{item.author}}</span>
                     <div class="hot-icon"><img src="../../assets/icon/hot.png"></div>
                     <span>{{item.hits}}</span>
                 </li> 
              </ul>
</template>
<script>
export default {
    data(){
        return {
             songData: {
                     Hot: {
                         name: "七月最热",
                         songs: [{
                             type: 1,
                             name: "绿色",
                             author: "陈雪凝",
                             hits: 5748
                         },
                             {
                                 type: 2,
                                 name: "小幸运-简单版",
                                 author: "田馥甄",
                                 hits: 3872
                             }, {
                                 type: 1,
                                 name: "民谣串烧",
                                 author: "群星",
                                 hits: 3504
                             }, {
                                 type: 1,
                                 name: "棉花糖",
                                 author: "至上励合",
                                 hits: 2611
                             }, {
                                 type: 1,
                                 name: "Lemon Tree",
                                 author: "王若琳",
                                 hits: 2563
                             }, {
                                 type: 1,
                                 name: "Suger",
                                 author: "Maroon5",
                                 hits: 2376
                             }, {
                                 type: 1,
                                 name: "绿色-简谱",
                                 author: "陈雪凝",
                                 hits: 1947
                             }, {
                                 type: 1,
                                 name: "我曾",
                                 author: "隔壁老樊",
                                 hits: 1909
                             }, {
                                 type: 1,
                                 name: "天空之城-入门版",
                                 author: "隔壁老铁",
                                 hits: 1682
                             }, {
                                 type: 1,
                                 name: "大碗宽面",
                                 author: "吴亦凡",
                                 hits: 1631
                             }, {
                                 type: 1,
                                 name: "出山",
                                 author: "花粥",
                                 hits: 1622
                             }, {
                                 type: 1,
                                 name: "小幸运-精简版",
                                 author: "田馥甄",
                                 hits: 1609
                             }, {
                                 type: 1,
                                 name: "突然好想你",
                                 author: "五月天",
                                 hits: 1537
                             }, {
                                 type: 1,
                                 name: "有一种悲伤",
                                 author: "A-Lin",
                                 hits: 1523
                             }, {
                                 type: 1,
                                 name: "北极星的眼泪",
                                 author: "张栋梁",
                                 hits: 1459
                             }, {
                                 type: 1,
                                 name: "红色高跟鞋",
                                 author: "蔡健雅",
                                 hits: 1438
                             }
                         ]
                     },
                     latest: {
                         name: "最新推荐",
                         songs: [{
                             type: 1,
                             name: "小冤家",
                             author: "赵薇",
                             hits: 261
                         }, {
                             type: 1,
                             name: "跟你到天边",
                             author: "吴青峰",
                             hits: 94
                         }, {
                             type: 1,
                             name: "The Advengers",
                             author: "Alan silver",
                             hits: 168
                         }, {
                             type: 1,
                             name: "仙剑奇侠传三歌曲串烧",
                             author: "群星",
                             hits: 1345
                         }, {
                             type: 1,
                             name: "风花雪月",
                             author: "林斜阳",
                             hits: 370
                         }, {
                             type: 1,
                             name: "爱是怎么一回事",
                             author: "Sweety",
                             hits: 70
                         }, {
                             type: 1,
                             name: "Main Titels",
                             author: "Ramin Dondar",
                             hits: 1083
                         }, {
                             type: 1,
                             name: "斗牛",
                             author: "华晨宇",
                             hits: 213
                         }, {
                             type: 1,
                             name: "绿色",
                             author: "陈雪凝",
                             hits: 2202
                         }, {
                             type: 1,
                             name: "无法原谅",
                             author: "李佳璐",
                             hits: 763
                         }, {
                             type: 1,
                             name: "国境四方",
                             author: "洛少爷",
                             hits: 479
                         }, {
                             type: 1,
                             name: "lemon Tree",
                             author: "王若琳",
                             hits: 2779
                         }, {
                             type: 1,
                             name: "日文歌",
                             author: "赵薇",
                             hits: 341
                         }, {
                             type: 1,
                             name: "月半小夜曲",
                             author: "李克勤",
                             hits: 2620
                         }, {
                             type: 1,
                             name: "Suger",
                             author: "Maroon5",
                             hits: 2376
                         }

                         ]
                     }

                 }
        }
    }
}
</script>
<style>

</style>

