import Mock from 'mockjs'
import home from './home.json'

Mock.mock('/homes',{code:200,data:home})