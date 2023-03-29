import request from './request'

// 获取架构树
export const getdeptOtherTree = (typeCode) => {
  return request({
    url: '/api/cdos-assets/assetgroup/custom/allTree',
    method: 'get',
    params: {
      typeCode
    }
  })
}

// 获取部门树
export const getDeptAllTree = (params) => {
  return request({
    url: '/api/cdos-assets/assetgroup/dept/allTree',
    method: 'get',
    params: {
      ...params
    }
  })
}
