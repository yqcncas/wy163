import{
  RECEIVE_HOME,
  RECEIVE_CART,
  RECEIVE_SEARCHLIST,
  RECEIVE_SEARCH
}from './mutations-type'

export default{
  [RECEIVE_HOME](state,{homedata}){
    state.homedata = homedata
  },
  
  [RECEIVE_CART](state,{cartdata}){
    state.cartdata = cartdata
  },

  [RECEIVE_SEARCHLIST](state,{searchlistdata}){
    state.searchlist = searchlistdata
  },

  [RECEIVE_SEARCH](state,{searchdata}){
    state.searchdata = searchdata
  },

  [RECEIVE_SEARCH](state,searchkey){
    state.searchkey = searchkey
  }
}