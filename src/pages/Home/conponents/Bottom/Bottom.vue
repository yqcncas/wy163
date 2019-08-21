<template>
   <div class="list-bottom">
      <div class="list-bottom-btn">
        <p>下载app</p>
        <p>电脑版</p>
      </div>
      <div class="list-bottom-container">
        <p>网易公司版权所有 © 1997-2019</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.list-bottom{
  width: 100%;
  height: 100px;
  background-color: #414141;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}
.list-bottom-btn{
  display: flex;
  justify-content: center;
  align-items: center;

}
.list-bottom-btn p{
  font-size: 16px;
  width: 100px;
  border: 1px solid #eee;
  text-align: center;
  margin-right: 10px;
  color: white;
}
.list-bottom-container{
  width: 100%;
  height: 50px;
  font-size: 12px;
  color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
}
</style>