// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'amfe-flexible'
import PersonalHeader from './pages/Personal/components/PersonalHeader'
import './api/index'
import './mock/mock'
import './validate'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import loding from '../static/t01a0982c40d1d2fd0a.gif'
Vue.config.productionTip = false

Vue.component('PersonalHeader',PersonalHeader)

FastClick.attach(document.body);

Vue.use(VueLazyload,{
  loding
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
