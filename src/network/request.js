import axios from 'axios'

//创建实例
const instance = axios.create({
  baseURL: 'http://localhost/api',
  timeout: 4000
})
//请求拦截
instance.interceptors.request.use(config => {
  return config
},error => {
  console.log(error);
})
//响应拦截
instance.interceptors.response.use(responce => {
  return responce.data
},error => {
  console.log(error);
})

export default instance

