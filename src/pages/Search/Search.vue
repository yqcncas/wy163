<template>
  <div class="cateList-search">
    <div class="cateList-search-top">
        <div class="cateList-search-top-searchbox">
          <div class="cateList-search-top-searchbox-left" >
            <i></i>
            <input type="text" :placeholder = 'searchlist.defaultKeywords[suijishu].keyword' 
            v-if="searchlist.defaultKeywords" v-model="search" @keyup='toSearch' >
          </div>
          <span @click="$router.back()">取消</span>
        </div>
    </div> 
    <div class="cateList-search-main" v-show="!search">
      <div class="cateList-search-main-top">
        <p>热门搜索</p>
      </div>
      <div class="cateList-search-main-center">
        <ul>
          <li v-for="(item,index) in searchlist.hotKeywordVOList" :key="index">{{item.keyword}}</li>
          <!-- <li>中秋月饼 上新热卖</li>
          <li>9.9元超值专区</li>
          <li>酸梅汤 吃货推荐</li>
          <li>月饼</li>
          <li>中秋月饼 上新热卖</li>
          <li>中秋月饼 上新热卖</li>
          <li>中秋月饼 上新热卖</li> -->
        </ul>
      </div>
    </div>
    <div class="cateList-search-main-keyword" v-show="true">
      <ul >
        <li v-for="(item,index) in searchkey" :key="index" v-show="search">{{item}}</li>
        <!-- <li>耳机</li>
        <li>儿童鞋</li> -->
        
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { clearTimeout } from 'timers';
export default {
  computed:{
    ...mapState(['searchlist','searchkey'])
  },
  async mounted(){
   await this.$store.dispatch('getSearchList');
  //  console.log(this.searchlist);
  //  console.log(this.suijishu)
      
    await this.$store.dispatch('getSerchkey',this.search);
  },
  
  data(){
    return{
      suijishu:parseInt(Math.random()*19) ,
      search:'',
      timerId:0
    }
  },
  
 methods: {
      toSearch () {
      let timerId = ""
       timerId && clearTimeout(timerId)
        timerId = setTimeout(()=>{
          console.log(111)
            this.$store.dispatch('getSerchkey', this.search)
          }, 1000)
        }
    },
}
</script>

<style>
.cateList-search{
  padding: 0 .4rem;
  box-sizing: border-box;
}
.cateList-search-top{
  height: 1.16rem;
  background-color: #fff;

  
}

.cateList-search-top .cateList-search-top-searchbox{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cateList-search-top .cateList-search-top-searchbox .cateList-search-top-searchbox-left{
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-left: .26667rem;
  padding-bottom: 0;
  border: 0;
  background-color: #f4f4f4;
  height: .74667rem;
  border-radius: 4px;
  width: 85%;
}
.cateList-search-top .cateList-search-top-searchbox .cateList-search-top-searchbox-left>i{
    margin-right: .21333rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
}
.cateList-search-top .cateList-search-top-searchbox .cateList-search-top-searchbox-left>input{
    width: 100%;
    font-size: .37333rem;
    border: none;
    color: rgba(0,0,0,.8);
    background-color: transparent;
    outline: none;
}
.cateList-search-top-searchbox>span{
    margin-left: .4rem;
    font-size: .37333rem;
}

.cateList-search-main-top{
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .37333rem;
  color: #999;
}

.cateList-search-main-center{
  margin-right: -.4rem;
  margin-bottom: -.42667rem;
}

.cateList-search-main-center>ul{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

.cateList-search-main-center>ul>li{
    padding: 0 .2rem;
    margin-right: .42667rem;
    margin-bottom: .42667rem;
    line-height: .61333rem;
    border: 1px solid #999;
    border-radius: 4px;
    color: #333;
    font-size: 12px;
}

.cateList-search-main-keyword{
    display: block;
    padding-left: .4rem;
    background-color: #fff;
    
}
.cateList-search-main-keyword>ul{
  width: 100%;
  list-style: none;
}
.cateList-search-main-keyword>ul>li{
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .37333rem;
    border-bottom: 1px solid #ccc;
}
</style>