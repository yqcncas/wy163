import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Categorize from '../pages/Categorize/Categorize'
import Identify from '../pages/Identify/Identify'
import Personal from '../pages/Personal/Personal'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/categorize',
      component:Categorize
    },
    {
      path: '/identify',
      component:Identify
    },
    {
      path: '/personal',
      component:Personal
    },

  ]
})
