import{
  RECEIVE_HOME
}from './mutations-type'

import{
  reqHome
}from '../api/index.js'

export default{
  async getHome(context){
    console.log(1)
    const result = await reqHome();
    console.log(result)
    // context.commit(RECEIVE_HOME,{})
  }
}