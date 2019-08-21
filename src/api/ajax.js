import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
  
  const {methods,data} = config;
  
  if(methods.toLowerCase() === 'post' && data instanceof Object){
    config.data = qs.stringify(data);
  }
  return config
})

axios.interceptors.response.use(response =>{
  return response.data
},error =>{
  // throw new Error('请求失败');
  return new Promise( ()=>{

  })

})

export default axios;