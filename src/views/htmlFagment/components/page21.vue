<template>
  <div class="topu">
    <div id="container_21">
      <div class="top">
        <div class="left">
          <ul>
            <li class="list border">
              <i class="icon iconfont iconzhijiegongjiyuan"></i>
              <div class="top-item">
                <div class="value">1</div>
                <div class="name">直接攻击源</div>
              </div>
            </li>
            <li class="top-item border">
              <div class="value">0</div>
              <div class="name">内网</div>
            </li>
            <li class="top-item border">
              <div class="value">1</div>
              <div class="name">外网</div>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li class="list border">
              <i class="icon iconfont iconzhijiegongjiyuan"></i>
              <div class="top-item">
                <div class="value">1</div>
                <div class="name">间接攻击源</div>
              </div>
            </li>
            <li class="top-item border">
              <div class="value">0</div>
              <div class="name">内网</div>
            </li>
            <li class="top-item border">
              <div class="value">1</div>
              <div class="name">外网</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="legend">
        <ul>
          <li class="legend-item">
            <img src="../asset/image/line.png" alt="" width="20px" />
            直接攻击
          </li>
          <li class="legend-item">
            <img src="../asset/image/dash_line.png" alt="" width="20px" />
            间接攻击
          </li>
          <li class="legend-item">
            <img src="../asset/image/engine.png" alt="" width="20px" />
            内部主机
          </li>
          <li class="legend-item">
            <img src="../asset/image/victim.png" alt="" width="20px" />
            受害者
          </li>
          <li class="legend-item">
            <img src="../asset/image/attack.png" alt="" width="20px" />
            攻击者
          </li>
        </ul>
      </div>
      <div class="zoom">
        <div class="zoom-out" @click="handlerZoomOut">
          <i class="el-icon-plus"></i>
        </div>
        <div class="zoom-in" @click="handlerZoomIn">
          <i class="el-icon-minus"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      graph: {},
      data: [],
      resizeTimer: null
    }
  },
  methods: {
    init() {
      this.registerNode()
      const data = {
        nodes: [
          {
            id: '192.168.109.200',
            // x: 0,
            // y: 100,
            label: '192.168.109.200',
            role: 'victim'
          },
          {
            id: 'node2',
            label: 'node2',
            role: 'inner'
          },
          {
            id: 'node3',
            // x: 175,
            // y: 300,
            label: 'node3',
            role: 'attack'
          },
          {
            id: 'node4',
            label: 'node4'
          }
        ],
        edges: [
          {
            source: 'node2',
            target: '192.168.109.200',
            label: '漏洞利用'
          },
          {
            source: 'node3',
            target: 'node2',
            label: '暴力破解',
            role: 'indirect'
          },
          {
            source: 'node3',
            target: '192.168.109.200',
            label: '端口扫描-端口扫描端口扫描端口扫描'
          },
          {
            source: 'node4',
            target: '192.168.109.200',
            label: '端口扫描'
          }
        ]
      }
      // const nData = this.dealNodeStyle(data)

      const width = document.getElementById('container_21').scrollWidth
      const height = document.getElementById('container_21').scrollHeight || 500
      const graph = new this.$G6.Graph({
        container: 'container_21',
        width,
        height,
        fitCenter: true,
        defaultNode: {
          type: 'asset-type-node',
          // img: require('@/views/htmlFagment/asset/image/engine.png'),
          // size: 50,
          labelCfg: {
            position: 'bottom',
            style: {
              fill: '#fff',
              fontSize: 12
            }
          }
        },
        defaultEdge: {
          style: {
            fill: '#888',
            stroke: '#888',
            endArrow: {
              path: this.$G6.Arrow.triangle(8, 8, 0),
              fill: '#888',
              lineDash: null
            }
          },
          labelCfg: {
            autoRotate: true,
            style: {
              fill: '#fff',
              fontSize: 12,
              background: {
                fill: '#b1b1b1',
                stroke: '#b1b1b1',
                padding: [3, 3, 3, 3],
                radius: 10
              }
            }
          }
        },
        layout: {
          // type: 'mds',
          // linkDistance: 200
          preset: 'mds',
          type: 'gForce',
          nodeSize: 50,
          edgeStrength: 10,
          nodeSpacing: 100,
          preventOverlap: true
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        },
        minZoom: 0.2,
        maxZoom: 10
      })

      graph.data(data)
      graph.render()
      this.graph = graph
      this.data = data
    },
    handlerZoomOut() {
      const animateCfg = { duration: 200, easing: 'easeCubic' }
      this.graph.zoom(1.2, undefined, true, animateCfg)
    },
    handlerZoomIn() {
      const animateCfg = { duration: 200, easing: 'easeCubic' }
      this.graph.zoom(0.9, undefined, true, animateCfg)
    },
    dealNodeStyle(data) {
      const attack = {
        type: 'image',
        img: require('@/views/htmlFagment/asset/image/attack.png'),
        size: 50
      }
      const victim = {
        type: 'image',
        img: require('@/views/htmlFagment/asset/image/victim.png'),
        size: 50
      }

      const { nodes, edges } = data
      const nodesFilter = nodes.map((node) => {
        if (node.role === 'attack') {
          return {
            ...node,
            ...attack
          }
        } else if (node.role === 'victim') {
          return {
            ...node,
            ...victim
          }
        }
        return {
          ...node
        }
      })
      const edgesFilter = edges.map((edge) => {
        if (edge.role === 'indirect') {
          return {
            ...edge,
            style: {
              lineDash: [2, 2]
            }
          }
        }
        return edge
      })
      return {
        nodes: nodesFilter,
        edges: edgesFilter
      }
    },
    resize() {
      const _this = this
      if (this.resizeTimer) clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(function () {
        const width = document.getElementById('container_21').scrollWidth
        const height = document.getElementById('container_21').scrollHeight || 500
        _this.graph.changeSize(width, height)
        _this.graph.fitCenter()
      }, 600)
    },
    registerNode() {
      this.$G6.registerNode('asset-type-node', {
        draw: (cfg, group) => {
          const size = 50
          const offset = 10
          const fontSize = 12
          const typeList = {
            attack: require('../asset/image/attack.png'),
            victim: require('../asset/image/victim.png'),
            inner: require('@/views/htmlFagment/asset/image/engine.png'),
            outer: require('@/views/htmlFagment/asset/image/engine.png')
          }
          const imgSrc = typeList[cfg.role] || typeList.inner
          const container = group.addShape('image', {
            attrs: {
              x: 0,
              y: 0,
              width: size,
              height: size,
              img: imgSrc
            }
          })
          group.addShape('text', {
            attrs: {
              text: cfg.label || cfg.id,
              x: size / 2,
              y: size + offset,
              fontSize: fontSize,
              textAlign: 'center',
              textBaseline: 'middle',
              fill: '#fff'
            },
            name: 'keyInfo-text-shape',
            draggable: true
          })
          return container
        },
        // 做一些预处理,和初始化设置
        setState: (name, value, item) => {
          const group = item.getContainer()
        },
        afterDraw: (cfg, group) => {
          group.on('click', (e) => {
            console.log('you click: ' + cfg.id)
          })
        }
      })
    },
    registerNode() {
      this.$G6.registerNode('asset-type-node', {
        draw: (cfg, group) => {
          const size = 50
          const offset = 10
          const fontSize = 12
          const typeList = {
            attack: require('../asset/image/attack.png'),
            victim: require('../asset/image/victim.png'),
            inner: require('@/views/htmlFagment/asset/image/engine.png'),
            outer: require('@/views/htmlFagment/asset/image/engine.png')
          }
          const imgSrc = typeList[cfg.role] || typeList.inner
          const container = group.addShape('image', {
            attrs: {
              x: 0,
              y: 0,
              width: size,
              height: size,
              img: imgSrc
            }
          })
          group.addShape('text', {
            attrs: {
              text: cfg.label || cfg.id,
              x: size / 2,
              y: size + offset,
              fontSize: fontSize,
              textAlign: 'center',
              textBaseline: 'middle',
              fill: '#fff'
            },
            name: 'keyInfo-text-shape',
            draggable: true
          })
          return container
        },
        // 做一些预处理,和初始化设置
        setState: (name, value, item) => {
          const group = item.getContainer()
        },
        afterDraw: (cfg, group) => {
          group.on('click', (e) => {
            console.log('you click: ' + cfg.id)
          })
        }
      })
    }
  },
  mounted() {
    this.init()
    // this.initPie()
    window.addEventListener('resize', this.resize)
  }
}
</script>

<style lang="scss" scoped>
.topu {
  #container_21 {
    position: relative;
    width: 50%;
    height: 540px;
    background: linear-gradient(263.09deg, #434754 -1.43%, #20222a 96.14%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.102927);
    border-radius: 10px;
  }
  .top {
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    // left: 10px;
    padding: 0 10px;
    width: 100%;
    color: #fff;
    display: flex;

    .left,
    .right {
      flex: 1;
      // margin-right: 10px;
      background: #383a41;
      border-right: 1px solid #262830;
      border-top: 1px solid #262830;
      border-bottom: 1px solid #262830;
      border-radius: 4px;
      > ul {
        display: flex;
        .list {
          width: 40%;
          height: 47px;
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            font-size: 24px;
            margin: 0 10px;
          }
        }
        .top-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          .value {
            margin-bottom: 5px;
          }
          .name {
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .border {
          border-left: 1px solid #262830;
        }
      }
    }
    .left {
      margin-right: 10px;
    }
  }
  .legend {
    box-sizing: border-box;
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 120px;
    height: 158px;
    background: rgba(241, 244, 247, 0.2);
    border-radius: 4px;
    z-index: 9;
    padding: 10px 10px 0 10px;
    .legend-item {
      display: flex;
      align-items: center;
      line-height: 18px;
      color: #fff;
      margin-bottom: 11px;
      img {
        margin-right: 10px;
      }
    }
  }
  .zoom {
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 20px;
    text-align: center;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    line-height: 20px;
    border-radius: 4px;
    z-index: 9;
    cursor: pointer;
    .zoom-out {
      border-bottom: 1px solid #717177;
    }
  }
}
</style>
