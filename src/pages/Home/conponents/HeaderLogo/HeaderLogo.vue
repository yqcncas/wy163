<template>
  <div class="headerNav-box">
   <div class="header-main" >
        <a href="#" class="logo" @click="refresh"></a>
        <div class="search">
          <i></i>
          <span>搜索商品, 共21615款好物</span>
        </div>
        <div class="loginBtn" @click="goToPersonal">登录</div>
      </div>
       <div class="header-nav">
        <ul class="tabWrap" v-show="!on">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
        </ul>
        <div class="tabWrap-all" v-show="on">
          <div class="tabWrap-all-top">
            <p>全部频道</p>
          </div>
          <div class="tabWrap-all-main">
            <ul>
              <li class="tabWrap-all-active">推荐</li>
              <li>居家生活</li>
              <li>居家生活</li>
              <li>居家生活</li>
              <li>居家生活</li>
              <li>居家生活</li>
              <li>居家生活</li>
              <li>居家生活</li>
              <li>居家生活</li>
            </ul>
          </div>
        </div>
        <div class="header-nav-menu-box" @click="showList" :class="{on:on}">
         <span class="header-nav-menu" ></span>
        </div>
      </div>
    <div class="mask" v-show="on" @click="maskClick"></div>
    </div>


</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return{
     on:false
    }
  },
  mounted(){
    const myScroll = new BScroll('.header-nav',{
      scrollX:true
    });
  },
  methods:{
    goToPersonal(){
     this.$router.replace('/personal')
   },
   refresh(){
     this.$router.go(0)
   },
   showList(){
     this.on = !this.on;
   },
   maskClick(){
     this.on = false;
   }
  }
}
</script>

<style>
.headerNav-box{
  position: fixed;
  z-index: 999;
  width: 375px;
}
.header-main{
  padding: 16px 20px;
  height: 56px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FDFDFE;
  position: relative;
  z-index: 999;
}
.header-main .logo{
  display: inline-block;
  width: 1.84rem;
  height: .53333rem;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
  margin-right: .26667rem;
  background-size: cover;
  background-position: center;
}
.header-main .search{
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ededed;
  background-color: #ededed;
  border-radius: .10667rem;
  padding: 6px 10px;
  box-sizing: border-box;
}
.header-main .search i{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: .37333rem;
  height: .37333rem;
  margin-right: .13333rem;
}
.header-main .search span{
  color: #666;
  font-size: 14px;
}
.header-main .loginBtn{
  width: .98667rem;
  height: .53333rem;
  line-height: .53333rem;
  text-align: center;
  color: #b4282d;
  border: 1px solid #b4282d;
  border-radius: .10667rem;
  margin-left: .21333rem;
  font-size: .32rem;
}
.header-nav{
  /* width: 375px;
  height: 40px;
  background-color: #FDFDFE;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden; */

   width:375px;
   overflow: hidden;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
}

.header-nav .tabWrap{
  /* height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  display: flex; */

   height: 40px;
   background-color: #fff;
   /*由子元素自动撑开宽度*/
   display: inline-block;
   /*子元素不换行, 直到遇到<br/>*/
   white-space: nowrap;
   position: relative;
  
}
.header-nav .tabWrap .active{
  color: #b4282d;
  border-bottom: 2px solid #b4282d;
  box-sizing: border-box;
}
.header-nav .tabWrap li{
  /* white-space: nowrap;
  width: 60px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-left: 15px;
  padding: 0 5px;
  color: #999;
  box-sizing: border-box; */

   display: inline-block;
   text-align: center;
   width: 60px;
   height: 40px;
   font-size: 14px;
   line-height: 40px;
   margin-left: 15px;
   padding: 0 5px;
   color: #999;
   box-sizing: border-box;
}
.header-nav-menu-box{
  width: 50px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top:50%;
  z-index: 3;
  text-align: center;
  transform: translateY(-50%)
}
.header-nav .header-nav-menu{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: .4rem;
  height: .4rem;
  line-height: .4rem;
  transition: all .5s;
  /* position: relative; */
  /* top: 7px; */
  text-align: center;
 
}
.on{
  transform: rotate(180deg);
  top: 3px;
}

.tabWrap-all{
    position: relative;
    z-index: 2;
    background: #fff;
    margin-top: -.01333rem;
}
.tabWrap-all-top{
    height: 40px;
    line-height: 40px;
    padding-left: .4rem;
    font-size: .37333rem;
}
.tabWrap-all-main{
    padding-top: .32rem;
    overflow: hidden;
    background: #fff;
}
.tabWrap-all-main>ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  flex: 1;
}
.tabWrap-all-main>ul>li{
    width: 2rem;
    height: .74667rem;
    line-height: .74667rem;
    text-align: center;
    float: left;
    margin-bottom: .53333rem;
    margin-left: .4rem;
    background: #FAFAFA;
    border: 1px solid #CCC;
    border-radius: .05333rem;
    font-size: 12px;
}
.tabWrap-all-active{
    border: 1px solid #b4282d !important;
    color: #b4282d;
}
.mask{
    position: fixed;
    z-index: 1;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>