<template>
  <div class="list">
      <div class="list-nav">
        <div class="list-nav-item">
          <p class="money">9.9超值专区首发</p>
          <p class="shop-item">180款爆品新定价</p>
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
        <div class="list-nav-item">
          <p class="money">福利社</p>
          <p class="shop-item">汇聚每日新折扣</p>
          <img src="https://yanxuan-item.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/0fe562392cd8af853a565fb5c302fe3f.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
        <div class="list-nav-item">
          <p class="money">断货补单王</p>
          <p class="shop-item">严选必买爆款</p>
          <img src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
        <div class="list-nav-item">
          <p class="money">20元内种草好物</p>
          <p class="shop-item">拔草不悔的凑单爆款</p>
          <img src="https://yanxuan-item.nosdn.127.net/d055df8965d835a012588a15d949fbdc.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>

      </div>
      <div class="hengtiao"></div>
      <div class="personalshop">
        <p>私人定制</p>
          <ul>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/2181df75cc63d89f8ab098faed332641.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>阿胶糕私享装 500克￥129</span>
            </li>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>天然酵母面包￥16</span>
            </li>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>日式和风超声波香薰机￥129</span>
            </li>
          </ul>
      </div>
      <div class="hengtiao"></div>
      <div class="timeShop">
        <div class="timeShop-box">
          <div class="timeShop-left">
            <span>限抢购</span>
            <span>00</span>
            <span>00</span>
            <span>01</span>
          </div>
          <div class="timeShop-right">
            <span>更多</span>
            <i> > </i>
          </div>
        </div>
        <ul>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/23e2ba8b86ecdc9a46ec9df99d00e86d.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="span-box">
              <span>2899</span>
              <span>￥3100</span>
            </div>

          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/d0aba28ac46db2434da3fbd8330d8e00.png?imageView&thumbnail=216x216&quality=75" alt=""> <div class="span-box">
            <span>2899</span>
            <span>￥3100</span>
          </div>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="span-box">
              <span>2899</span>
              <span>￥3100</span>
            </div>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/19dd80b9fe9b430817562665ade23c54.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="span-box">
              <span>2899</span>
              <span>￥3100</span>
            </div>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/8427b14107deadbc140e95367ae38d5e.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="span-box">
              <span>2899</span>
              <span>￥3100</span>
            </div>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/8c96757210b51606c85604813f749bd0.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="span-box">
              <span>2899</span>
              <span>￥3100</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.list{
  width: 100%;

  padding: 0 10px;
  margin-top: 20px;
  border-bottom: 10px solid #EDEDED;
}
/*list 4部分开始*/
.list .list-nav{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 10px;

}
.list .list-nav .list-nav-item{
  width: 47%;
  font-size: 14px;
  color: #333333;
  background-color: #F4F4F4;
  padding:10px 5px 0 5px;
  margin-bottom: 2px;
  box-sizing: border-box;
}
.list .list-nav .list-nav-item .money{
  font-weight: 500;
  font-size: 18px;
}
.list .list-nav .list-nav-item .shop-item{
  color: #cccccc;
  font-size: 12px;
}
.list .list-nav .list-nav-item:nth-child(odd){
  margin-left: 2px;
}
.list .list-nav .list-nav-item img{
  width: 2rem;
  height: 2rem;
}
/*list 4部分结束*/

/*私人定制开始*/
.personalshop{
  width: 100%;
  padding: 10px 0;

}
.personalshop>p{
  font-size: 16px;
  margin: 20px 0;
}
.personalshop>ul{
  display: flex;
  justify-content: space-around;

}
.personalshop>ul>li{
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.personalshop img{
  width: 2.88rem;
  height: 2.88rem;
  background-color: #F4F4F4;
}
.personalshop span{
  font-size: 12px;
}
/*私人定制结束*/

/*抢购开始*/
.timeShop{
  margin-top: 20px;
}
.timeShop-box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
.timeShop-box span{
  background-color: #000;
  color: white;
}
.timeShop-box span:first-child{
  background-color: #ffffff;
  color: black;
}
.timeShop>ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.timeShop>ul>li{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeShop>ul>li>img{
  width: 2.88rem;
  height: 2.88rem;
  background-color: #F3F3F3;
}
.timeShop>ul>li>.span-box{
  display: flex;
}
.timeShop>ul>li>.span-box span{
  font-size: 14px;
}
.timeShop>ul>li>.span-box span:nth-of-type(1){
  color: red;
}
.timeShop>ul>li>.span-box span:nth-of-type(2){
  text-decoration: line-through;
}
/*抢购结束*/

.hengtiao{
  width: 375px;
  height: 10px;
  background-color: #EDEDED;
  margin-left: -10px;
}
</style>