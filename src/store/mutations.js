import{
  RECEIVE_HOME
}from './mutations-type'

export default{
  [RECEIVE_HOME](state,{homedata}){
    state.homedata = homedata
  }
}