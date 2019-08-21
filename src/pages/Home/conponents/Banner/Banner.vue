<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
         <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'
export default {
  mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
  })        
  }
}
</script>

<style>
  .swiper-container{
    padding-top: 100px;
    box-sizing: border-box
  }
  img{
    width: 100%;
    height: 185px;
  }
</style>