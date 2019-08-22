<template>
<div class="categorize">
  <div class="categorize-header">
    <div class="categorize-header-top">
      <div class="header-top-left"> 
        <i></i>
      </div>
      <div class="header-top-center">
        <span @click="$router.push('/categorize')">发现</span>
        <span @click="goToCategorizeHome">甄选家</span>
      </div>
      <div class="header-top-right">
        <i></i>
        <i></i>
      </div>
    </div>
    <div class="categorize-header-main">
      <ul class="categorize-header-main-ul">
        <li>盛夏特别版</li>
        <li>推荐</li>
        <li>好货内部价</li>
        <li>回购榜</li>
        <li>晒单</li>
        <li>开发者日记</li>
        <li>达人</li>
        <li>HOME</li>
      </ul>
    </div>
    <div class="categorize-header-bottom">
      <div class="header-top-left">
        <i></i>
      </div>
      <div class="header-top-center">
        <i></i>
        
      </div>
      <div class="header-top-right">
        <i></i>
        <i></i>
       </div>
    </div>
  </div>
  <router-view></router-view>
    <div class="categorize-main">
    <div class="categorize-main-first">
      <img src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
    </div>
    <div class="categorize-main-second">
      <img src="https://yanxuan.nosdn.127.net/15656868015315337.jpg">
    </div>
    <div class="categorize-main-three">
      <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
    </div>

    <div class="categorize-main-banner">
     <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/15640224029953333.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/15656878289625347.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://mimg.127.net/hz/uploader/20190802/15647346338570519.jpg" alt="">
          </div>
        </div>

     </div>
    </div>

<div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-thumbs" id="thumbs">
	<div class="swiper-wrapper" style="transition-duration: 0ms;">
		<div class="swiper-slide blue-slide swiper-slide-visible swiper-slide-active" >
			slider1</div>
		<div class="swiper-slide red-slide swiper-slide-visible swiper-slide-next" >
			slider2</div>
		<div class="swiper-slide orange-slide swiper-slide-visible" >
			slider3</div>
		<div class="swiper-slide blue-slide swiper-slide-visible swiper-slide-thumb-active" >
			slider4</div>
	</div>
<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

    <div class="categorize-main-four">
      <img src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt="">
    </div>
    <div class="categorize-main-five">
      <div class="categorize-main-five-top">
        <img src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt="">
      </div>
      <div class="categorize-main-five-main">
        <ul>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
            <div class="categorize-main-five-main-list">
              <p>6包/提  谷风一木3层软抽面巾纸</p>
              <p>新人专享价</p>
              <span>$16</span>
              <span>16.9</span>
              <a href="#">立即抢购</a>
            </div>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
            <div class="categorize-main-five-main-list">
              <p>6包/提  谷风一木3层软抽面巾纸</p>
              <p>新人专享价</p>
              <span>$16</span>
              <span>16.9</span>
              <a href="#">立即抢购</a>
            </div>
          </li>
          <li>
            <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
            <div class="categorize-main-five-main-list">
              <p>6包/提  谷风一木3层软抽面巾纸</p>
              <p>新人专享价</p>
              <span>$16</span>
              <span>16.9</span>
              <a href="#">立即抢购</a>
            </div>
          </li>
          <li>
            <p>查看更多</p>
            <i></i>
          </li>
        </ul>
      </div>
    </div>

    </div>
</div>


</template>

<script>
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
export default {
 mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    spaceBetween: 10,
    thumbs: {
      swiper: {
        el: '#thumbs',
        spaceBetween: 10,
        slidesPerView: 3,
        watchSlidesVisibility: true,/*避免出现bug*/
      },
    }
  })
   const myScroll = new BScroll('.categorize-header-main',{
      scrollX:true
    })        
  },
  methods:{
    goToCategorizeHome(){
      this.$router.push("/categorize/categorizehome");
    }
  }
}

</script>

<style>
/* 头部 */
.categorize-header{
  width: 100%;
  position: fixed;
  z-index: 999;
}

.categorize-header-top{
    height: 1rem;
    background-color: #fafafa;
    box-sizing: border-box;
    border-bottom: .01rem solid #d9d9d9;
    padding: 0 13px 0 12px;
    display: flex;
    position: relative;
    justify-content: space-between;
}

.header-top-left>i{
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=);
  background-size: .46rem .46rem;
  width: .46rem;
  height: 1rem;
}
.header-top-center{
    width: 3.2rem;
    height: 100%;
    margin: 0 auto;
    line-height: 1rem;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.categorize-header-top .header-top-center>span:nth-child(1){
  padding: 0 .16rem;
  vertical-align: middle;
  font-size: .5rem;
  color: #b4282d;
  font-weight: bold;
  line-height: 1rem;
}
.categorize-header-top .header-top-center>span:nth-child(2){
  padding: 0 .16rem;
  vertical-align: middle;
  line-height: 1rem;
  text-align: center;
  font-size: .4rem;
  color: #999;
}

.header-top-right>i:nth-child(1){
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC);
    background-size: .46rem .46rem;
    width: .62rem;
    height: 1rem;
    background-position: center;
    background-repeat: no-repeat;
}
.header-top-right>i:nth-child(2){
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=);
    background-size: .46rem .46rem;
    width: .49rem;
    height: 1rem;
}

.categorize-header-main{
  width: 375px;
  height: .72rem;
  padding-bottom: .2rem;  
  white-space: nowrap;
  overflow-x:hidden;
  overflow-y: hidden;
  background-color: #fafafa;
}
.categorize-header-main-ul{
  display: inline-block;
  list-style: none;
}
.categorize-header-main-ul>li{
    display: inline-block;
    width: 60px;
    height: .72rem;
    line-height: .72rem;
    text-align: center;
    box-sizing: border-box;
    font-size: .28rem;
    color: #7F7F7F;
    padding: 0 .08rem;
    margin: 0 .2rem;
    vertical-align: middle;
}
.categorize-header-bottom{
    height: 1rem;
    background-color: #fafafa;
    box-sizing: border-box;
    border-bottom: .01rem solid #d9d9d9;
    padding: 0 13px 0 12px;
    display: flex;
    position: relative;
    justify-content: space-between;
}
.categorize-header-bottom .header-top-center i{
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAlCAMAAADybBJ0AAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFBQAAAAAAAAAAAAAAAAAAAAAAABOTk4AAAAWBoTQAAAAEHRSTlMAXCZJOLvM9hRw3IaaqukOEs79agAABSpJREFUWMO1mNuW2yAMRc39Duf/v7aWAYMDzbjtqh4yxAZpIyGJzPHXwlnKiv/JAiF+muIisy+1SRdVKPt39nypDUiyfEV2KvMA9PJK8CcgwF6ou83rJ2Hhkp2mMkiM1zSKXzSVRnaLWaZ45JmIAXx1x0QWUkMDMo3cYyqrVnR0Qtr2wK1OYYyFqLQ3jQpapeAcE1Isc4HciCKv38uyTRgVTrB8g6UIT9RhMR89vJiJdxGJw2HRCV7kl7Bp4usYZzAkzDrpJgNCPRK8qnSA+HT30xhbZ9BD2jKTtsVftn2WFD+94+AbH9kM5MF87I5BcEKWQyG1BKl23eZADEAuJLHINYVce5arvuZBrgH/TFFulB3bMpYA/flYsqjY7ObUB+E+GbYC2tXdzkoWriwyZXemZ8Xq3q4NBsjhY8L0PSGeihNMC2ic9cRuvGEzcvQecKSk8V58AbTO+xtQugxoVj7nTMM7N1WKgVJqvFPdcUBLswD1DdCnwO4stvtSFY0R6gbMyIF/r9AwWQXhkJZXBNhSwxStaJgQfg8YyiMfduWPqZNJHOkGTOK3RVc2vbrtOO4AXdScTp4+rDaMgs5+B5g/sthsnEHRoo3GDjjUWMEeRV8bc7GHzI9vgEc6uQK9tBqhAPx3Zd2ATWVdIx+rqNYdBmCh+SyojFslQxd5TjGyRzrs9LGLkv6ehB4avurYl5nav9qh9rv8EOUYgJYBU7+7N+h9dILVdE3yPoputEk5ARJXiwQ3ddEWsIwk1impPNr/iskTMm2kSfZeK639w0XpoaDwgBRiam1STYDkZfjb+aEP5OpuwEcmbb8eLX3EhdOEzqbVIpWoC/DfJPtlIVSmtmSIfwAeqeNYwMgBuBKq44uk28PR0Ta+Sctz3S8BKgbHmBBScs6t5XehFuTe3DuRQxuJDaD1MOLj3hrmB6J2Yv7qBlsNOOrc5wJZiIM+hwxABg+kWuqigdoDWg0j+7hfHJ/ITJLpV4AK6fE1C4I2bAWsnwE0EsjlHLELUCx8cJI5uu6ZO11uwiGBbP0k8UO/h1ruSyS+YqmjePjW+TSyXQG5xyTGU7h5oTNh1ivcz4QB0PwRcHF98h2ghyTKRGWV1/a0AMqM7jbF6OaoqzIqZuuV0L743aNh3MSrK2a5AzYAQzWh5OnA2NzP5ROQGSieIuMJYG1O6Pm/pPow/EPOp9JoahflUzRc715CGl2LNN20rlHJxj7u6jb13abGxVrBKSf4kp3+O9i8ldhHuq71A7/09uqVHdu4S/AMyLKJvB9t1zqOt/t7f6In74S01DWtPEjoQV+1AErcqkcvtDMgZ608FQXDekGsxOrTXRJk5J2UjNhOo2iL1eeNe9ou8+JpiK11sBUQ3ZdxwC1hk28BI4XBRuTIu9GRXtlfNid14umJxbTIvTCkG/5UXj5TOL7lc5dxPvdED10xSvvRxuf9fgcMQGhU9ytrEJ5B8zfxm0oYx9xRbI3W2ve7mdgDrsGTGprffGHY4Gt/eCVcg8RfP6LnECR/NdCsg11+/XYYaQuhT4BBBTmy1I0sTM9TQOxvRCYAOfWrbFbRiW0H9ztAUZdty61Vl+v5NiF4hnrnP0ZO4u3HQ9KmX4O7O8dEvQC2x9g6Q3pkeU2Ql/v1R5Zr+z5BxPPalvy4fmulEkmkV3sFQu8AA3IozYDWeBopivjeimJrdIRTBkO8+6qO+bBQBzGxnpKewU/2+FcpIubqxih/nPvdXPr4d1BKlf7fRYbk5L+rsZoC+p/lF1unTyA9Gy6xAAAAAElFTkSuQmCC);
  background-size: 1.6rem .37rem;
  width: 1.6rem;
  height: .37rem
}
/* 头部 */

/* 内容 */
.categorize-main{
  width: 100%;
  padding-top: 102px;
  margin-bottom: 60px;
}
.categorize-main .categorize-main-first{
  width: 100%;
  height: 2.42rem;
}
.categorize-main-first>img{
  width: 100%;
  height: 100%;
}
.categorize-main-second{
  width: 100%;
  height: 3.44rem;
}
.categorize-main-second img{
  width: 100%;
  height: 100%;
}
.categorize-main-three{
  width: 100%;
  height: 1.7rem;
}
.categorize-main-three img{
  width: 100%;
  height: 100%;
}

.categorize-main-banner{
  width: 100%;
  height: 4.5rem;
  overflow: hidden;
}

.categorize-main-banner .swiper-container{
  height: 100%;
  list-style: none;
}
.categorize-main-banner .swiper-slide{
  width: 100%;
  height: 100%;
}
.categorize-main-banner .swiper-slide>img{
  width: 100%;
}

.categorize-main-four{
  height: 1.7rem;
  width: 100%;
}
.categorize-main-four>img{
  width: 100%;
  height: 100%;
}

.categorize-main-five-top{
  width: 100%;
  height: 88px;
}
.categorize-main-five-top>img{
  width: 100%;
}

.categorize-main-five-main{
  background-color: #95d0a2;
  padding: .15rem .1rem;
  box-sizing: border-box;
  border-bottom-left-radius: .2rem;
  border-bottom-right-radius: .2rem;
}
.categorize-main-five-main>ul{
  display: flex;
  justify-content: space-around;
}
.categorize-main-five-main>ul>li{
  display: inline-block;
    width: 2.3rem;
    box-sizing: border-box;
    text-align: center;
    background-color: #fff;
    border-radius: .04rem;
    overflow: hidden;
    margin-right: .1rem;
    vertical-align: middle;
    display: flex;
    flex-direction: column;

    align-items: center;
}
.categorize-main-five-main>ul>li>img{
    display: block;
    width: 100%;
    height: 2rem;
    margin: auto;
}
.categorize-main-five-main>ul>li .categorize-main-five-main-list{
    width: 100%;
    height: 94px;
    padding-top: .15rem;
    padding-bottom: .25rem;
}
.categorize-main-five-main>ul>li .categorize-main-five-main-list>p:nth-of-type(1){
    display: block;
    width: 2rem;
    height: .35rem;
    line-height: .35rem;
    font-size: .24rem;
    color: #3b3b3b;
    padding: 0 .1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.categorize-main-five-main>ul>li .categorize-main-five-main-list>p:nth-of-type(2){
    color: #e98c29;
    border-color: #f8bc59;
    display: inline-block;
    height: .34rem;
    line-height: .34rem;
    font-size: .16rem;
    color: #e36843;
    border: 1px solid #e36843;
    padding: 0 .05rem;
    margin: 0 .03rem;
    vertical-align: middle;
    position: relative;
    top:-6px;
}

.categorize-main-five-main>ul>li .categorize-main-five-main-list>span{
  position: relative;
  top: -20px;
}
.categorize-main-five-main>ul>li .categorize-main-five-main-list>span:nth-of-type(1){
    font-size: .5rem;
    line-height: .4rem;
    color: #d83535;
    font-weight: 700;
}
.categorize-main-five-main>ul>li .categorize-main-five-main-list>span:nth-of-type(2){
    font-size: .22rem;
    line-height: .4rem;
    color: #9b9b9b;
    padding-left: .04rem;
    text-decoration: line-through;
}
.categorize-main-five-main>ul>li .categorize-main-five-main-list>a{
    display: inline-block;
    width: 1.6rem;
    height: .43rem;
    line-height: .43rem;
    border-radius: .43rem;
    font-size: .24rem;
    color: #fff;
    background-color: #dc4516;
    text-decoration: none;
     position: relative;
      top: -36px;
}
.categorize-main-five-main>ul>li:last-child{
  background-color: rgb(71, 121, 83);
  width: 86px;

}
.categorize-main-five-main>ul>li:last-child>p{
    width: .6rem;
    height: 1.4rem;
    font-size: .26rem;
    white-space: normal;
    text-align: center;


}
/* 内容 */

</style>