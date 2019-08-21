<template>
<div class="categorize">
  <div class="categorize-search">
    <div class="search">
      <i></i>
      <span>搜索商品, 共21615款好物</span>
    </div>
  </div>
  <div class="categorize-list">
    <ul class="categorize-nav">  
     <li>推荐专区</li>
     <li>推荐专区</li>
     <li>推荐专区</li>
     <li>推荐专区</li>
     <li>推荐专区</li>
    </ul>
    <div class="categorize-banner">
      <div class="categorize-banner-header">
        <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
      </div>
      <ul class="categorize-banner-item">
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <span>员工精选好物</span>
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.categorize-search{
  width: 100%;
  height: 1.17333rem;
  padding: 0 .4rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc

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


.categorize-list .categorize-nav{
  width: 2.16rem;
  height: 100%;
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
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
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
   justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;
}
.categorize-banner-item>li{
  display: flex;
  flex-direction: column;
 
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
</style>