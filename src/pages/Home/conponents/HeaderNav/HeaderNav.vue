<template>
  <div class="header-nav">
        <ul class="tabWrap">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
         
        </ul>
        <span class="header-nav-menu"></span>
      </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {

}
</script>

<style>
.header-nav{
  width: 375px;
  height: 40px;
  background-color: #FDFDFE;
  display: flex;
  justify-content: space-around;
  align-items: center;
 
}

.header-nav .tabWrap{
  width: 80%;
  height: 40px;
  display: flex;
  list-style: none;
  font-size: 14px;
  overflow: hidden;

}
.header-nav .tabWrap .active{
  color: #b4282d;
  border-bottom: 2px solid #b4282d;
  box-sizing: border-box;
}
.header-nav .tabWrap li{
  flex-shrink: 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-left: 15px;
  padding: 0 5px;
  color: #999;
  box-sizing: border-box;
}
.header-nav .header-nav-menu{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: .4rem;
  height: .4rem;
  transition: transform .5s;
}
</style>