import Home from 'views/home/Home'


export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: '首页'
  },
  {
    path: '/newsFlash',
    component: () => import('views/informationlist/InformationList'),
    meta: '新闻政策'
  },
  {
    path: '/enInformation',
    component: () => import('views/informationlist/InformationList'),
    meta: '创业资讯'
  },
  {
    path: '/enPolicy',
    component: () => import('views/informationlist/InformationList'),
    meta: '创业政策'
  },
  {
    path: '/detail/:id',
    component: () => import('views/detail/Detail'),
    meta: '资讯详情'
  }
]