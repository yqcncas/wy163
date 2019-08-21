<template>
  <div class="policy">
        <ul class="policy-nav">
          <li>
            <i class="policy-nav-wy"></i>
            <span>网易自营品牌</span>
          </li>
          <li >
            <i class="policy-nav-hd"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="policy-nav-money"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.policy-nav{
  width: 100%;
  height: 36px;
  display: flex;

}
.policy-nav li{
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.policy-nav li span{
  font-size: 14px;
  color: #999;

}
.policy-nav-wy{
  display: inline-block;
  vertical-align: middle;
  background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: .42667rem;
  height: .42667rem;
}
.policy-nav-hd{
  display: inline-block;
  vertical-align: middle;
  background-image:url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: .42667rem;
  height: .42667rem;
}
.policy-nav-money{
  display: inline-block;
  vertical-align: middle;
  background-image:url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: .42667rem;
  height: .42667rem;
}
</style>