import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TopNav from '@/views/TopNav'
const Echarts = () => import('../views/echarts/index.vue')
const EchartsLineAll = () => import('../views/echarts/charts/baseLine/index.vue')
const EchartsLine1 = () => import('../views/echarts/charts/baseLine/components/Line1.vue')
const G2 = () => import('../views/g2/index.vue')
const G2LineAll = () => import('../views/g2/charts/baseLine/index.vue')
const G2Line1 = () => import('../views/g2/charts/baseLine/components/Line1.vue')
const G2Line2 = () => import('../views/g2/charts/baseLine/components/Line2.vue')
const G2Bar1 = () => import('../views/g2/charts/baseBar/components/Bar1.vue')
const HtmlFagment = () => import('../views/htmlFagment/index.vue')
const DashBoard = () => import('../views/dashboard/index.vue')
Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: TopNav,
    redirect: 'g2',
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
          icon: 'home',
          affix: true
        }
      },
      {
        path: 'echarts',
        component: Echarts,
        meta: {
          title: 'ECHARTS',
          icon: 'Echarts',
          affix: true
        },
        children: [
          {
            path: 'echarts-line',
            component: EchartsLineAll,
            meta: {
              title: '折线图',
              affix: true
            },
            children: [
              {
                path: 'line1',
                component: EchartsLine1,
                meta: {
                  title: '基础折线图',
                  affix: true
                }
              }
            ]
          }
        ]
      },
      {
        path: 'g2',
        component: G2,
        meta: {
          title: 'G2',
          icon: 'G2',
          affix: true
        },
        children: [
          {
            path: 'g2-line',
            component: G2LineAll,
            meta: {
              title: '折线图',
              affix: true
            },
            children: [
              {
                path: 'line1',
                component: G2Line1,
                meta: {
                  title: '基础折线图',
                  affix: true
                }
              },
              {
                path: 'line2',
                component: G2Line2,
                meta: {
                  title: '基础折线图_100000',
                  affix: true
                }
              }
            ]
          },
          {
            path: 'g2-bar',
            component: G2LineAll,
            meta: {
              title: '条形图',
              icon: 'home',
              affix: true
            },
            children: [
              {
                path: 'bar1',
                component: G2Bar1,
                meta: {
                  title: '基础条形图',
                  icon: 'home',
                  affix: true
                }
              }
            ]
          }
        ]
      },
      {
        path: 'element',
        component: HtmlFagment,
        meta: {
          title: 'HTML片段',
          icon: 'home',
          affix: true
        }
      },
      {
        path: 'dashboard',
        component: DashBoard,
        meta: {
          title: '仪表盘',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]

export default new Router({
  routes
})
