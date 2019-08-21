<template>
    <div class="personal-header">
      <i class="personal-home" @click="goToHome"></i>
      <a href="#">
        <img src="" alt="">
      </a>
      <i class="personal-search"></i>
      <i class="personal-cart" @click="goToIdentify"></i>
    </div>
</template>

<script>
export default {
  name:'PersonalHeader',
  methods:{
    goToHome(){
      this.$router.push('/')
    },
    goToIdentify(){
      this.$router.push('/identify')
    }
  }
}
</script>

<style>
.personal-header{
  width: 100%;
  height: 1.16rem;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 12px;
  position: relative;
  
}
.personal-header .personal-home{
     width: .64rem;
    height: .58667rem;
    background-position: 0 -.98667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
}
.personal-header a{
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%); 
}
.personal-header a>img{
    width: 2.29333rem;
    height: .72rem;
    background-position: 0 -1.70667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
 
}

.personal-header .personal-search{
    width: .85333rem;
    height: .85333rem;
    background-position: 0 -4.74667rem;
    display: inline-block;  
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
    margin-right: 10px;
    margin-left: 254px;
}

.personal-header .personal-cart{
    width: .85333rem;
    height: .85333rem;
    background-position: 0 0;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
}
</style>