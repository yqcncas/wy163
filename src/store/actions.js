import{
  RECEIVE_HOME,
  RECEIVE_CART,
  RECEIVE_SEARCHLIST,
  RECEIVE_SEARCH
}from './mutations-type'

import{
  reqHome,
  reqCart,
  reqSearchList,
  reqSearchKey
}from '../api/index.js'


export default{
// 首页导航
  async getHome(context){
    const result = await reqHome();
    const homedata = result.data
    context.commit(RECEIVE_HOME,{homedata})
    
  },
// 分类列表
  async getCart(context){
    const result = await reqCart();
    const cartdata = result.data;
    // console.log(cartdata)
    context.commit(RECEIVE_CART,{cartdata})
  },
// 搜索页列表
  async getSearchList(context){
    const result = await reqSearchList();
    // console.log(result)
    const searchlistdata = result.data;
    context.commit(RECEIVE_SEARCHLIST,{searchlistdata})
  },
// 搜索
  async getSerchkey(context,searchkey){
    const result = await reqSearchKey(searchkey)
    // console.log(result)
    context.commit(RECEIVE_SEARCH,result.data)
  }
}