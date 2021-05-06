import Home from 'views/home/Home'


export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: true
    }
  },
  {
    path: '/newsFlash',
    component: () => import('views/informationlist/InformationList'),
    meta: {
      title: '新闻政策',
      keepAlive: false
    }
  },
  {
    path: '/enInformation',
    component: () => import('views/informationlist/InformationList'),
    meta: {
      title: '创业资讯',
      keepAlive: false
    }
  },
  {
    path: '/enPolicy',
    component: () => import('views/informationlist/InformationList'),
    meta: {
      title: '创业政策',
      keepAlive: false
    }
  },
  {
    path: '/detail/:id',
    component: () => import('views/detail/Detail'),
    meta: {
      title: '资讯详情',
      keepAlive: false
    }
  }
]