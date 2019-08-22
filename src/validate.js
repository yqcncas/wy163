import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN' //翻译成中文
Vue.use(VeeValidate) // 内部定义一个全局指令: validate

//将需要的信息变成自己设置的值，转成中文
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    name: '用户名',
    phone: '手机号',
    keyword: '密码',
    zhanghao:'邮箱',
    duanxin:'短信'
  }
})
//使用自定义的验证规则
VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'  //失败的提示信息，field对应标签中的name值
})

VeeValidate.Validator.extend('zhanghaoyz', {
  validate: value => {
    return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(value)
  },
  getMessage: field => field + '格式不正确'  //失败的提示信息，field对应标签中的name值
})

