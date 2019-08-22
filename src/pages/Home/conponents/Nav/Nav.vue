<template>
  <div class="nav-bar">
        <ul v-if="homedata.kingKongModule">
          <li v-for="(item,index) in homedata.kingKongModule.kingKongList" :key="index">
            <img :src="item.picUrl" alt="">
            <p>{{item.text}}</p>
          </li>
          <!-- <li>
            <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
            <p>居家生活</p>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="">
            <p>服饰鞋包</p>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
            <p>美食酒水</p>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
            <p>个护清洁</p>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
            <p>母婴亲子</p>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
            <p>运动旅行</p>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
            <p>数码家电</p>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
            <p>全球特色</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="">
            <p>超级会员</p>
          </li> -->
        </ul>
      </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  async mounted(){
    await this.$store.dispatch('getHome');
    console.log(this.homedata.kingKongModule)
  },
  computed:{
    ...mapState(['homedata'])
  }
}
</script>

<style>
.nav-bar{
  width: 100%;
  height: 180px;

}
.nav-bar ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 10px;
  box-sizing: border-box;
}
.nav-bar ul li{
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.nav-bar ul li img{
  width: 1.46667rem;
  height: 1.46667rem;
}
.nav-bar ul li p{
  font-size: 14px;
}
</style>