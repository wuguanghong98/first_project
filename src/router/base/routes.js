import Home from 'views/home/Home'
import InformationList from 'views/informationlist/InformationList'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/informationList',
    component: InformationList
  }
]