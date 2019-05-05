<template>
     <section class="search">
          <div class="search-icon"></div>
          <input type="text" value="搜索歌曲">
     </section>
</template>
<script>
    export default{

    }
</script>
<style>
    .search{
         width:100%;
         position:relative;
    }
    .search input{
        position:relative;
        width:100%;
        height:28px;
        border-radius:5px;
        font-size:12px;
        color:#898989;
        outline:none;
        background: #ffffff;
        border:1px solid #c7c7c7;
        margin-top:15px;
        padding-left: 30px;
        box-sizing: border-box;
    }
    .search-icon {
         position: absolute;
         left: 12px;
         top:50%;
         width:16px;
         height:16px;
         background: url("./search.png");
         background-size: cover;
         z-index:10;
    }
</style>