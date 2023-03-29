/*
 * @Descripttion:
 * @version:
 * @Author: 石亮亮
 * @email: shiliangliang@6cloudtech.com
 * @Date: 2021-01-22 09:41:59
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-02-09 14:36:45
 * @FilePath: /vue-demo/src/config/website.js
 */
/**
 * 全局配置文件
 */
export default {
  title: 'CDOS',
  logo: 'S',
  key: 'saber', // 配置主键,目前用于存储
  indexTitle: 'CDOS管理平台',
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  tenantId: '000000', // 管理组租户编号
  captchaMode: true, // 是否开启验证码模式
  lockPage: '/lock',
  tokenTime: 3000,
  tokenHeader: 'Blade-Auth',
  // http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  // 配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: '首页',
    value: '/wel/index',
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: false
  },
  fistPage2: {
    label: '用户管理',
    value: '/system/user',
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: false
  },
  fistPage3: {
    label: '操作审计',
    value: '/monitor/log/api',
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: false
  },
  // 配置菜单的属性
  menu: {
    iconDefault: 'iconfont icon-caidan',
    props: {
      label: 'name',
      path: 'path',
      icon: 'source',
      children: 'children'
    }
  },
  // 第三方系统授权地址
  authUrl: 'http://localhost/blade-auth/oauth/render',
  // 流程设计器地址
  flowDesignUrl: 'http://localhost:9999',
  // 报表设计器地址(cloud端口为8108,boot端口为80)
  reportUrl: 'http://localhost:8108/ureport'
}
