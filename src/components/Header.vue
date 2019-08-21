<template>
   <div class="headerBanner" v-show="isShow">
        <div class="headerBannerLeft">
          <i class="headerBanner-icon" @click="changeShow"></i>
          <i class="headerBanner-logo"></i>
          <div class="headerBannerLeft-container">
            <p>前往APP领1000元新用户现金礼包</p>
            <p>网易自营 品质生活</p>
          </div>

        </div>
        <div class="headerBannerRight">
          <a href="#" class="open-app">打开APP</a>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      isShow:true,
      scrollTop:0,
    }
  },
  methods:{
    changeShow(){
      this.isShow = false
    },
     handleScroll () {
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
       this.scrollTop = scrollTop
       if(this.isShow && scrollTop>=50){
         this.isShow=false;
       }
       if(!this.isShow&&scrollTop<1){
         this.isShow=true;
       }
      
    },
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  }

}
</script>

<style>
.headerBanner{
  width: 375px;
  height: 52px;
  background-color: #333333;
  padding-top: 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

}
.headerBanner-icon{
  width: .50667rem;
  height: .50667rem;
  background-position: 0 -2.56rem;
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png);
  background-repeat: no-repeat;
  background-size: 2.29333rem 5.6rem;
  float: left;
  margin-top: -6px;
}
.headerBanner-logo{
  width: .96rem;
  height: .96rem;
  background-position: 0 -3.65333rem;
  display: inline-block;
  vertical-align: middle;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png);
  background-repeat: no-repeat;
  background-size: 2.29333rem 5.6rem;
  float: left;
  margin-right: 5px;
}
.headerBannerLeft{
  width: 70%;
  float: left;
}
.headerBannerLeft-container{
  padding-top: 2px;
  box-sizing: border-box;
}
.headerBannerLeft-container>p{
  font-size: .32rem;
  line-height: .34667rem;
  margin: .05333rem 0 .09333rem;
  color: #fff;
}
.headerBannerRight{
  width: 69px;
  height: 30px;
}
.headerBannerRight{
  float: right;
  margin-right: 5px;
  margin-top: -5px;
}
.headerBannerRight a{
  display: inline-block;
  width: 1.84rem;
  font-size: .32rem;
  height: .69333rem;
  line-height: .69333rem;
  color: #fff;
  background: #B4282D;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  text-align: center;
  text-decoration: none;

}
</style>