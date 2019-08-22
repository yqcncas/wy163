<template>
  <div class="personal">
    <PersonalHeader />
    <div class="personal-main" v-show="screen">
      <div class="personal-main-header">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="personal-main-center">
        <div class="personal-main-center-phone" @click="changeScreen">
          <i></i>
          手机号快捷登录
        </div>  
        <div class="personal-main-center-email" @click="emailLogin">
          <i></i>
          邮箱账号登录
        </div>
      </div>
      <div class="personal-main-footer">
        <div class="personal-main-footer-item">
          <i></i>
          <span>微信</span>
        </div>
        <div class="personal-main-footer-item">  
          <i></i>
          <span>微信</span>
        </div>
        <div class="personal-main-footer-item">
          <i></i>
          <span>微信</span>
        </div>
      </div>

    </div>
    <div class="personal-phone">
      <div class="personal-phone-logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="personal-phone-center" >
        <div class="personal-phone-shouji">
          <input type="text" placeholder="请输入手机号" v-model="admin" name="phone" v-validate = "'required|mobile'" v-show="isPhone">
          <input type="text" placeholder="请输入邮箱" v-model="zhanghao" name="zhanghao" v-validate = "'required|zhanghaoyz'" v-show="!isPhone" >
        </div>
        <span style="color:red" v-show="errors.has('phone')" v-if="isPhone">{{errors.first('phone')}}</span>
        <span style="color:red" v-show="errors.has('zhanghao')" v-if="!isPhone">{{errors.first('zhanghao')}}</span>
        <div class="personal-phone-duanxin">  
          <input type="text" placeholder="请输入短信验证码" v-model="duanxin" name="duanxin" v-show="isPhone" v-validate = "{regex:/^\d{6}$/}">
          <input type="text" placeholder="密码" v-model="keyword" name="keyword" v-show="!isPhone" v-validate = "'required'">
          <a href="#" v-if="isPhone">获取验证码</a>
        </div>
         <span style="color:red" v-show="isPhone">{{errors.first('duanxin')}}</span>
        <span style="color:red" v-show="!isPhone">{{errors.first('keyword')}}</span>
        <div class="personal-phone-footer">
          <div class="personal-phone-footer-top">
           <span>{{this.isPhone?'遇到问题?':'注册账号'}}</span>
           <span>{{this.isPhone?'使用密码验证登录':'忘记密码'}}</span>
          </div>
          <div class="personal-phone-footer-main">
            <a href="#">登录</a>
          </div>
          <div class="personal-phone-footer-bottom" v-if="isPhone">
            <span>
              <input type="text">
            </span>
            <span >我同意<a href="#">《服务条款》</a>和<a href="#">《网易隐私政策》</a></span>
          </div>
        </div>
       
      </div>
      <div class="personal-phone-bottom" @click="elseLogin">
        <p>其他方式登录></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'Personal',
  data(){
    return{
      screen:true,
      isPhone:true,
      admin:'',
      keyword:'',
      zhanghao:'',
      duanxin:'',
      mima:'',
    }
  },
  methods:{
    changeScreen(){
      this.screen = false;
    },
    emailLogin(){
      this.screen = false;
      this.isPhone = false;
    },
    elseLogin(){
      this.isPhone = !this.isPhone;
      
      this.admin = '';
      this.keyword = '';
      this.zhanghao = '';
      this.duanxin = '';
      this.mima = '';
    }
  }
}
</script>

<style>

.personal{
  height: 667px !important;
  overflow: hidden;
}
.personal-main{
  height: 623px;
  background: #F1F4F3;
}
.personal-main-header{
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 3.09333rem;
}
.personal-main-header>img{
    width: 3.57333rem;
    height: 1.2rem;
}

.personal-main-center{
  padding: 0 20px;
}
.personal-main-center .personal-main-center-phone{
    margin-bottom: .42667rem;
    overflow: visible;
    border-radius: 2px;
    border: 0 solid #DD1A21;
    background-color: #DD1A21;
    width: 100%;
    height: 1.25333rem;
    line-height: 1.25333rem;
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
}
.personal-main-center .personal-main-center-phone i{
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png);
    background-repeat: no-repeat;
    background-size: .53333rem 3.86667rem;
    width: .53333rem;
    height: .53333rem;
    background-position: 0 -.66667rem;
}
.personal-main-center .personal-main-center-email{
  margin-bottom: .42667rem;
  border-radius: 2px;
  color: #DD1A21;
  width: 100%;
  background-color: transparent;
  text-align: center;
  height: 1.25333rem;
  line-height: 1.25333rem;
  vertical-align: middle;
  font-size: .37333rem;
  border: 0 solid #DD1A21;
  border: 1Px solid #DD1A21;
  border-radius: 2px;
}
.personal-main-center .personal-main-center-email i{
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png);
    background-repeat: no-repeat;
    background-size: .53333rem 3.86667rem;
    width: .53333rem;
    height: .53333rem;
    background-position: 0 0; 
}

.personal-main-footer{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 1.06667rem;
    height: .53333rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.personal-main-footer-item{
    height: .53333rem;
    border-right: 1px solid #979797;
    text-align: center;
    padding: 0 .53333rem;
    display: flex;
    align-items: center;

}
.personal-main-footer .personal-main-footer-item>i{
    display: inline-block;
    width: .53333rem;
    height: .53333rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI5M0JDMTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDMDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ex4WyAAADVklEQVR42uyZfWiNURzH77VJGEqjeV+LeZu2+MNbyQh/IKFtJaKRl1IrLyWSmz+UoigarXlZIrIQeWkihVLSRC62P7D4wyUhL9ts1+dXv9Vaz3nuee59HjXdU5/O2nn7nvOc8/v9zrnheDwe6k6pR6ibpbTgtODuLjjTtmIkEpHJzYTFMA3GwkDtoxU+QxQewjV4BHFDX8EJpnOpsw62Q56hWk/IUYphFzTCQajWCQW/JRA7maweKl3EmtJobfcUpgYuGLFl+nknpjjGeLivXykYwYhdTnYWevl4Vqpgs++CESuHqcYwmXfQkKDPX/AEmh3KDsMcv1f4KPRxWnjIZUL55McM/YmVGAVTdN+2O4xXTR+9fRFMRzPI5hrqnqG8w0zVGercgJj+LYfto0OdXCj3y6ytcjcakQryFpcBV0KtHtYyNXNOqVy/pOcU7hxeIkg+6bgEbdogI0GdP10W47VOQmzzD21/iPHaUhXc6sX7JUjS1wk4DsNhARTBMBgA3+CDbp3rcIvxW7wK9iuafwzrYR5sg0EWbWTvHxBLgo5mWyvhhwu9ABvVju+3FBvSelK/HsGTbAVHUxRbp7b2jsVZMCVp9wDRxTaCb6cg9hPsgKvQP8WJ94PLavNdBVeZQkKLtAf2asjZNV2ES4Z2L9URxbr8XyZdg+iwm+OQxqeSECsn/jksdCgToSWwDE46lM9m3E3kSxzKxFsuSuSat8Ibj4JvwlJDWZ66+r6Q71A+QfMiQ/vVRrPWaaWlk3uQbSlYJlnqEvd+VWeR5VDWri7c5BVj6BmcKLx8QTbLw0q/dxkwpI4iy8VS5SQwd1YBfFSjrlcWguPqsoNI7V5uzeL3h1h0Ku72bUCCG7xcQud3sqlN6jpDuvIFMBQkth0Dd/UC6ne64kVwqQrdJ4FMR3BiuKaPVFuc4aPY33DEi2CJotbaRFF6fZLOK3wUvJuxm6wFU/mcxwF2iiOAQh/E1uq7RqBPVT81pHyWYj/iHVc4hbtBvK3F9EnrdJLtxX2XmLZhUI+B32ENTNfozYuNbnG7OoWT+ckgice8bL2NF6o1yVJ33ai3E9lCG2ALfIERpttPZujfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=) no-repeat;
    background-size: 98%;
}

.personal-main-footer .personal-main-footer-item>span{
    font-size: .37333rem;
    line-height: .53333rem;
    height: .53333rem;
    color: #7F7F7F;
    margin-left: .06667rem;
}
.personal-main-footer-item:nth-of-type(3){
  border-right:none
}

.personal-phone{
  width: 100%;
  height: 100%;
}

.personal-phone-logo{
    text-align: center;
    margin-top: .74667rem;
    margin-bottom: 0;
}

.personal-phone-logo>img{
    width: 2.56rem;
    height: .85333rem;
}

.personal-phone-center{
  padding: 10px 0.555556rem;
  box-sizing: border-box;
}
.personal-phone-center .personal-phone-shouji{
  width: 100%;
  border-bottom: 0.026667rem solid #ccc;
}
.personal-phone-center  span{
  font-size: 14px;
}
.personal-phone-duanxin{
  display: flex;
  align-items: center;
  border-bottom: 0.026667rem solid #ccc;
}
.personal-phone-center input[type=text]{
    width: 100%;
    height: 0.6rem;
    font-size: 0.375rem;
    line-height: 0.6rem;
    margin: 0.39rem 0;
    padding-left: 0;
    -webkit-tap-highlight-color: transparent;
    letter-spacing: normal;
    border: none;
    outline: none;
}
.personal-phone-duanxin>a{
    display: block;
    text-decoration: none;
    width: 3rem;
    height: 0.75rem;
    text-align: center;
    color: #333;
    font-size: 14px;
    background: #fff;
    line-height: 0.75rem;
    border: 0px solid #7F7F7F;
    border: 1Px solid #7F7F7F;
    border-radius: 2px;
    border-radius: 4px;
}
.personal-phone-footer-top{
  display: flex;
  justify-content: space-between;
}
.personal-phone-footer-top>span{
    height: 0.6rem;
    text-decoration: none;
    cursor: pointer;
    color: #7f7f7f !important;
    font-size: 0.4rem;
    line-height: 0.6rem;
}
.personal-phone-footer{
  height: 0.582rem;
  line-height: 0.582rem;
  padding: 0.5866rem 0 2.706rem;
}
.personal-phone-footer .personal-phone-footer-top>span:nth-of-type(1){
    display: inline-block;
    height: 0.6rem;
    text-decoration: none;
    cursor: pointer;
    color: #7f7f7f !important;
    font-size: 0.4rem;
    line-height: 0.6rem;
}
.personal-phone-footer .personal-phone-footer-top>span:nth-of-type(2){
    background: none;
    color: #333 !important;
    font-size: 0.4rem;
    height: 0.6rem;
    padding: 0;
    line-height: 0.6rem;
}

.personal-phone-footer-main{
    width: 100%;
    margin-top: 20px;
}
.personal-phone-footer-main>a{
    display: inline-block;
    width: 100%;
    height: 1.28rem;
    text-decoration: none;
    font-size: 0.4rem;
    line-height: 1.28rem;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    background: #DD1A21;
    color: white;
}
.personal-phone-footer-bottom{
    padding: 0px 0px 4px;
    color: #7f7f7f;
}
.personal-phone-footer-bottom>span:nth-of-type(1){
    display: inline-block;
    background: url("//yanxuan.nosdn.127.net/6830e38fbcc7c038eea164ecb53365ca.png");
    background-size: 100%;
    background-repeat: no-repeat;
    margin-right: 5px;
    width: 14px;
    margin-top: 3px;
    height: 14px;
    cursor: pointer;
    border: solid 1px #aaa;
    color: #999;
    font-size: 12px;
    position: relative;
    top:18px;
   
}
.personal-phone-footer-bottom>span>input{
    margin: 0;
    opacity: 0;

}
.personal-phone-footer-bottom>span:nth-of-type(2){
  font-size: 14px;
}
.personal-phone-footer-bottom>span:nth-of-type(2)>a{
  text-decoration: none;
  color: #007AFF;
  text-decoration: none;
}
.personal-phone-bottom{
  width: 100%;
  margin-top: 40px;
}
.personal-phone-bottom>p{
  text-align: center;
  font-size: .37333rem;
  line-height: .53333rem;
  color: #333;
}
</style>