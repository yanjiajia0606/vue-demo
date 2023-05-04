const routes = [
  {
    path: '/',
    children: [
      {
        path: 'home',
        meta: {
          title: '首页',
          icon: 'home',
          affix: true
        }
      },
      {
        path: 'echarts',
        meta: {
          title: 'ECHARTS',
          icon: 'Echarts',
          affix: true
        },
        children: [
          {
            path: 'echarts-line',
            meta: {
              title: '折线图',
              affix: true
            },
            children: [
              {
                path: 'line1',
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
        meta: {
          title: 'G2',
          icon: 'G2',
          affix: true
        },
        children: [
          {
            path: 'g2-line',
            meta: {
              title: '折线图',
              affix: true
            },
            children: [
              {
                path: 'line1',
                meta: {
                  title: '基础折线图',
                  affix: true
                }
              },
              {
                path: 'line2',
                meta: {
                  title: '基础折线图_100000',
                  affix: true
                }
              }
            ]
          },
          {
            path: 'g2-bar',
            meta: {
              title: '条形图',
              icon: 'home',
              affix: true
            },
            children: [
              {
                path: 'bar1',
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
        meta: {
          title: 'HTML片段',
          icon: 'home',
          affix: true,
          keepAlive: true
        }
      },
      {
        path: 'threeScene',
        meta: {
          title: '仪表盘',
          icon: 'scene',
          affix: true
        },
        children: [
          {
            path: 'topo',
            meta: {
              title: '3D拓扑',
              icon: 'topo',
              affix: true
            }
          }
        ]
      },
      {
        path: 'dashboard',
        meta: {
          title: '仪表盘',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]
export default routes
