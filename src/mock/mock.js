import Mock from 'mockjs'
import home from './home.json'
import category from './category'
Mock.mock('/home', {code:200,data:home})
Mock.mock('/cart',{code:200,data:category})