<template>
   <div class="footer">
      <div class="nav">
        <ul class="nav-list">
          <li :class="{on:$route.path === '/'}" @click="goTo('/')">
            <i class="tab-home"></i>
            <p>首页</p>
          </li>
          <li :class="{on:$route.path === '/cart'}" @click="goTo('/cart')">
            <i class="tab-cate"></i>
            <p>分类</p>
          </li>
          <li :class="{on:$route.path === '/categorize'}" @click="goTo('/categorize')">
            <i class="tab-topic"></i>
            <p>识物</p>
          </li>
          <li :class="{on:$route.path === '/identify'}" @click="goTo('/identify')">
            <i class="tab-cart"></i>
            <p>购物车</p>
          </li>
          <li :class="{on:$route.path === '/personal'}" @click="goTo('/personal')">
            <i class="tab-user"></i>
            <p>个人</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style>
.footer{
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  /* border: 1px solid #eee; */
}
.footer .nav .nav-list{
  width: 100%;
  height: 60px;
  display: flex;
  list-style: none;
}
.footer .nav .nav-list li{
  width: 20%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.on{
  color: red;
  transform: rotate(360deg) !important;
}
.tab-home{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png);
  background-repeat: no-repeat;
  background-size: .53333rem 6.53333rem;
  width: .53333rem;
  height: .53333rem;
  background-position: 0 -3.33333rem;
}
.tab-cate{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png);
  background-repeat: no-repeat;
  background-size: .53333rem 6.53333rem;
  width: .53333rem;
  height: .53333rem;
  background-position: 0 -2rem;
}
.tab-topic{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png);
  background-repeat: no-repeat;
  background-size: .53333rem 6.53333rem;
  width: .53333rem;
  height: .53333rem;
  background-position: 0 -4.66667rem;
}
.tab-cart{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png);
  background-repeat: no-repeat;
  background-size: .53333rem 6.53333rem;
  width: .53333rem;
  height: .53333rem;
  background-position: 0 -.66667rem;
}
.tab-user{
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png);
  background-repeat: no-repeat;
  background-size: .53333rem 6.53333rem;
  width: .53333rem;
  height: .53333rem;
  background-position: 0 -6rem;
}
</style>