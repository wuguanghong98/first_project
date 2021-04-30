import axios from 'axios'

//创建实例
const request = axios.create({
  baseURL: 'http://localhost/api',
  timeout: 4000
})
//请求拦截
request.interceptors.request.use(config => {
  return config
},error => {
  console.log(error);
})
//响应拦截
request.interceptors.response.use(response => {
  return response.data
},error => {
  console.log('da1');
  this.$message("")
  console.log(error);
})

export default request

