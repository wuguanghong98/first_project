import request from 'network/request'

// 获取所有资讯信息
export function getAllInformation() {
  return request({
    url: '/getAllInformation',
    methods: "get"
  })
}

//根据当前页数获取首页部分资讯列表
export function getSomeInfoByPage(page = 1, size = 6) {
  return request({
    url: '/getSomeInforByPage',
    params: {
      page,
      size
    },
    methods: 'get'
  })
}

//获取推荐部分信息
export function getInfoRecommend() {
  return request({
    url: '/getInfoRecommend',
    methods: 'get'
  })
}

//根据资讯类型查询资讯信息
export function getInfoByType(typeId) {
  return request({
    url: '/getInformationByType/' + typeId,
    methods: 'get'
  })
}

