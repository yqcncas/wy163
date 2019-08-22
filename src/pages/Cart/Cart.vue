<template>
<div class="categorize">
  <div class="categorize-search">
    <div class="search" @click="$router.push('/search')">
      <i></i>
      <span>搜索商品, 共21615款好物</span>
    </div>
  </div>
  <div class="categorize-list">
    <div class="categorize-nav-box">
    <ul class="categorize-nav">  
     <li v-for="(item,index) in cartdata.categoryL1List" @click="changecurrentIndex(index)" :class="{bdlul:currentIndex == index}" >{{item.name}}</li>
     <!-- <li>推荐专区</li>
     <li>推荐专区</li>
     <li>推荐专区</li>
     <li>推荐专区</li> -->
    </ul>
   </div>
    <div class="categorize-banner">
      <div class="categorize-banner-box">
      <div class="categorize-banner-header">
        <img :src="cartdata.categoryL1List[currentIndex].bannerUrl" alt="" v-if="cartdata.categoryL1List">
      </div>
      <ul class="categorize-banner-item" v-if="cartdata.categoryL1List">
        <li v-for="(item,index) in cartdata.categoryL1List[currentIndex].subCateList" :key="index" >
          <img v-lazy="item.bannerUrl" alt="">
          <span>{{item.name}}</span>
        </li>
        <!-- <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <span>优选美食2件85折</span>
        </li>
         <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <span>员工精选好物</span>
        </li>
         <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <span>员工精选好物</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <span>员工精选好物</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <span>员工精选好物</span>
        </li> -->
      </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
async mounted(){
  await this.$store.dispatch('getCart');
  // console.log(this.cartdata)
  this.$nextTick(()=>{
  const myScroll = new BScroll('.categorize-nav-box',{
    scrollY:true    //配置
  });

  const myScroll2 = new BScroll('.categorize-banner',{
    scrollY:true    //配置
  });
  })
  // console.log(this.currentIndex)
},

  data(){
    return{
      currentIndex:0
    }
  },
  computed:{
    ...mapState(['cartdata'])
  },
  methods:{
    changecurrentIndex(index){
      this.currentIndex = index
    }
  }
}
</script>

<style>
.categorize{
  height: 667px;
}
.categorize-search{
  width: 100%;
  height: 1.17333rem;
  padding: 0 .4rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  position: relative;
  z-index: 999;
}
.categorize-search .search{
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #ECECEC;
  text-align: center;
  font-size: .37333rem;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: .10667rem;
  vertical-align: middle;
  color: #999
}
.categorize-search .search i{
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
    margin-right: .13333rem;
    vertical-align: middle;
    margin-top: -3px;
    box-sizing: border-box;
}

.categorize-nav-box{
  width: 2.16rem;
  height: 600px;
  background-color: #fff;
  padding: .53333rem 0;
  list-style: none;
  float: left;
  box-sizing: border-box;
}
.categorize-list .categorize-nav{
  width: 2.16rem;
  height: 800px;
  background-color: #fff;
  padding: .53333rem 0;
  list-style: none;
  float: left;
  box-sizing: border-box;
}
.categorize-list .categorize-nav>li{
    width: 100%;
    height: .66667rem;
    line-height: .66667rem;
    margin-top: 20px;
    text-align: center;
    white-space: nowrap;
    font-size: .37333rem;
    text-overflow: ellipsis;
    overflow: hidden;
}
.categorize-list .categorize-nav>li:first-child{
  margin-top: 0;
}
.categorize-banner{
    height: 667px;
    overflow: hidden;
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
    overflow: hidden;
    box-sizing: border-box;
}
.categorize-banner-box{
  width: 100%;
  height: 1000px;
}
.categorize-banner-header{
  
    width: 100%;
    height: 2.56rem;
    margin-bottom: .42667rem;
    border-radius: 4px;
}
.categorize-banner-header img{
  widows: 100%;
  height: 100%;
}
.categorize-banner-item{
  display: flex;
   /* justify-content: space-around; */
  list-style: none;
  flex-wrap: wrap;
  flex: 1;
}
.categorize-banner-item>li{
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

.categorize-banner-item>li>img{
    width: 1.92rem;
    height: 1.92rem;
}
.categorize-banner-item>li>span{
    height: .96rem;
    font-size: .32rem;
    color: #333;
    text-align: center;
    line-height: .48rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.bdlul{
  border-left: 1px solid red;
}
</style>