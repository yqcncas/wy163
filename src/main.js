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
Vue.config.productionTip = false

Vue.component('PersonalHeader',PersonalHeader)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
