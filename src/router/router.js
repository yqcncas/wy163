import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Categorize from '../pages/Categorize/Categorize'
import CategorizeHome from '../pages/Categorize/CategorizeHome'
import Identify from '../pages/Identify/Identify'
import Personal from '../pages/Personal/Personal'
import Search from '../pages/Search/Search'

export default  [
  {
    path: '/home',
    component:Home,
    meta:{
      showFooter:true,
    }
  },
  {
    path: '/cart',
    component:Cart,
    meta:{
      showFooter:true,
    }
  },
  {
    path: '/categorize',
    component:Categorize,
    meta:{
      showFooter:true,
    },
    children:[
     {
       path:"categorizehome",
       component:CategorizeHome
     }
    ]
  },
  {
    path: '/identify',
    component:Identify,
    meta:{
      showFooter:true,
    }
  },
  {
    path: '/personal',
    component:Personal,
    meta:{
      showFooter:false,
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      showFooter:false,
    }
  },
  {
    path:'/',
    redirect:'/home'
  }
]