<template>
  <div id="asset-relationship_1" class="topo" _isChart></div>
</template>

<script>
const iconMap = {
  admin: '\uebf2',
  asset: '\ue61b'
}
export default {
  data() {
    return {
      graph: {},
      resizeTimer: null
    }
  },
  methods: {
    init() {
      this.test = 'test'
      this.registerNode()
      this.registerEdge()
      if (this.graph.destroy) {
        this.graph.clear()
        this.graph.destroy()
      }
      const data = {
        nodes: [
          {
            id: '0',
            label: '0',
            nodeType: 'asset'
          },
          {
            id: '1',
            label: '1',
            nodeType: 'admin'
          },
          {
            id: '2',
            label: '2'
          },
          {
            id: '3',
            label: '3'
          },
          {
            id: '4',
            label: '4'
          },
          {
            id: '5',
            label: '5'
          },
          {
            id: '6',
            label: '6'
          },
          {
            id: '7',
            label: '7'
          },
          {
            id: '8',
            label: '8'
          },
          {
            id: '9',
            label: '9'
          },
          {
            id: '10',
            label: '10'
          },
          {
            id: '11',
            label: '11'
          },
          {
            id: '12',
            label: '12'
          },
          {
            id: '13',
            label: '13'
          },
          {
            id: '14',
            label: '14'
          },
          {
            id: '15',
            label: '15'
          },
          {
            id: '16',
            label: '16'
          },
          {
            id: '17',
            label: '17'
          },
          {
            id: '18',
            label: '18'
          },
          {
            id: '19',
            label: '19'
          },
          {
            id: '20',
            label: '20'
          },
          {
            id: '21',
            label: '21'
          },
          {
            id: '22',
            label: '22'
          },
          {
            id: '23',
            label: '23'
          },
          {
            id: '24',
            label: '24'
          },
          {
            id: '25',
            label: '25'
          },
          {
            id: '26',
            label: '26'
          },
          {
            id: '27',
            label: '27'
          },
          {
            id: '28',
            label: '28'
          },
          {
            id: '29',
            label: '29'
          },
          {
            id: '30',
            label: '30'
          },
          {
            id: '31',
            label: '31'
          },
          {
            id: '32',
            label: '32'
          },
          {
            id: '33',
            label: '33'
          }
        ],
        edges: [
          {
            source: '0',
            target: '1',
            label: '1111111',
            eventLog: 0
          },
          {
            source: '0',
            target: '1',
            label: '2222',
            eventLog: 0
          },
          {
            source: '0',
            target: '2',
            label: '111'
          },
          {
            source: '0',
            target: '3',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '4',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '5',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '7',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '8',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '9',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '10',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '11',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '13',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '14',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '15',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '0',
            target: '16',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '2',
            target: '3',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '4',
            target: '5',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '4',
            target: '6',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '5',
            target: '6',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '7',
            target: '13',
            label: '111'
          },
          {
            source: '8',
            target: '14',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '9',
            target: '10',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '10',
            target: '22',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '10',
            target: '14',
            eventLog: null,
            label: Date.now()
          },
          {
            source: '10',
            target: '12'
          },
          {
            source: '10',
            target: '24'
          },
          {
            source: '10',
            target: '21'
          },
          {
            source: '10',
            target: '20'
          },
          {
            source: '11',
            target: '24'
          },
          {
            source: '11',
            target: '22'
          },
          {
            source: '11',
            target: '14'
          },
          {
            source: '12',
            target: '13'
          },
          {
            source: '16',
            target: '17'
          },
          {
            source: '16',
            target: '18'
          },
          {
            source: '16',
            target: '21'
          },
          {
            source: '16',
            target: '22'
          },
          {
            source: '17',
            target: '18'
          },
          {
            source: '17',
            target: '20'
          },
          {
            source: '18',
            target: '19'
          },
          {
            source: '19',
            target: '20'
          },
          {
            source: '19',
            target: '33'
          },
          {
            source: '19',
            target: '22'
          },
          {
            source: '19',
            target: '23'
          },
          {
            source: '20',
            target: '21'
          },
          {
            source: '21',
            target: '22'
          },
          {
            source: '22',
            target: '24'
          },
          {
            source: '22',
            target: '25'
          },
          {
            source: '22',
            target: '26'
          },
          {
            source: '22',
            target: '23'
          },
          {
            source: '22',
            target: '28'
          },
          {
            source: '22',
            target: '30'
          },
          {
            id: 'edge0',
            source: '22',
            target: '31',
            curveOffset: 50
          },
          {
            source: '22',
            target: '32'
          },
          {
            source: '22',
            target: '33'
          },
          {
            source: '23',
            target: '28'
          },
          {
            source: '23',
            target: '27'
          },
          {
            source: '23',
            target: '29'
          },
          {
            source: '23',
            target: '30'
          },
          {
            source: '23',
            target: '31'
          },
          {
            source: '23',
            target: '33'
          },
          {
            source: '32',
            target: '33'
            // curveOffset: 20
          }
        ]
      }
      const container = document.getElementById('asset-relationship_1')
      const width = container.scrollWidth
      const height = container.scrollHeight || 500
      const graph = new this.$G6.Graph({
        container: 'asset-relationship_1',
        width,
        height,
        fitView: true,
        layout: {
          preset: {
            type: 'fruchterman',
            gpuEnabled: true,
            gravity: 1,
            width: width,
            height: height
          },
          type: 'force2',
          animate: false,
          maxSpeed: 500,
          gravity: 1,
          nodeSize: 20,
          preventOverlap: true
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        },
        minZoom: 0.2,
        maxZoom: 10,
        defaultNode: {
          type: 'asset-relationship-node',
          size: 10
        },
        defaultEdge: {
          type: 'asset-relationship-edges',
          fill: 'red',
          labelCfg: {
            autoRotate: true,
            style: {
              background: {
                fill: '#888',
                stroke: '#888',
                padding: [3, 3, 3, 3],
                radius: 10
              }
            }
          }
        }
      })
      graph.data(data)
      graph.render()
      this.$G6.Util.processParallelEdges(
        data.edges,
        15,
        'asset-relationship-edges',
        'asset-relationship-edges'
      )
      this.graph = graph
      window.graph = graph
    },
    resize() {
      const _this = this
      if (this.resizeTimer) clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(function () {
        const width = document.getElementById('asset-relationship_1').scrollWidth
        const height = document.getElementById('asset-relationship_1').scrollHeight || 500
        _this.graph.changeSize(width, height)
        _this.graph.fitCenter()
      }, 600)
    },
    registerNode() {
      this.$G6.registerNode('asset-relationship-node', {
        draw: (cfg, group) => {
          const { size = 10, offset = 10, nodeType = 'IP' } = cfg
          const fillColor = '#4B8CE6'
          const fontSize = 12
          const iconfontText = iconMap[nodeType] || nodeType
          const container = group.addShape('circle', {
            attrs: {
              r: size,
              lineWidth: 2,
              fill: fillColor,
              stroke: fillColor,
              shadowColor: fillColor,
              shadowBlur: 4
            }
          })
          group.addShape('text', {
            attrs: {
              text: iconfontText,
              fontSize: 12,
              textAlign: 'center',
              fontFamily: 'iconfont',
              textBaseline: 'middle',
              fill: '#fff'
            },
            name: 'keyInfo-text-shape',
            draggable: true
          })
          group.addShape('text', {
            attrs: {
              text: cfg.id,
              x: size / 2,
              y: size + offset,
              fontSize: fontSize,
              textAlign: 'center',
              textBaseline: 'middle',
              fill: '#333'
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
    registerEdge() {
      const edgeTypeColorMap = ['#4B8CE6', '#EB5855']
      const defaultColor = '#888'
      const G6 = this.$G6
      this.$G6.registerEdge(
        'asset-relationship-edges',
        {
          itemType: 'asset-relationship-edge',
          style: {
            lineAppendWidth: 5,
            lineDash: [4, 2, 1, 2],
            lineDashOffset: 0,
            opacity: 1,
            labelCfg: {
              style: {
                fillOpacity: 1
              }
            }
          },
          /**
           * 绘制边
           * @override
           * @param  {Object} cfg   边的配置项
           * @param  {G.Group} group 边的容器
           * @return {G.Shape} 图形
           */
          drawShape(cfg, group) {
            const item = group.get('item')
            const shapeStyle = this.getShapeStyle(cfg, item)
            const shape = group.addShape('path', {
              className: 'edge-path',
              attrs: shapeStyle
            })
            return shape
          },
          /**
           * 获取图形的配置项
           * @internal 仅在定义这一类节点使用，用户创建和更新节点
           * @param  {Object} cfg 节点的配置项
           * @return {Object} 图形的配置项
           */
          getShapeStyle(cfg) {
            const { startPoint, endPoint } = cfg
            const deStyle = Object.assign({}, this.style)

            // 更新颜色
            const defaultStyle = {
              ...deStyle,
              lineWidth: 2,
              stroke: edgeTypeColorMap[cfg.eventLog] || defaultColor,
              startArrow: {
                path: G6.Arrow.circle(2, 30),
                d: 30,
                fill: edgeTypeColorMap[cfg.eventLog] || defaultColor,
                lineDash: [0, 0],
                lineWidth: 1
              },
              endArrow: {
                path: G6.Arrow.vee(5, 8, 30),
                d: 30,
                fill: edgeTypeColorMap[cfg.eventLog] || defaultColor,
                lineDash: [0, 0],
                lineWidth: 1
              },
              ...cfg.style
            }

            const controlPoints = this.getControlPoints(cfg)
            let points = [startPoint] // 添加起始点
            // 添加控制点
            if (controlPoints) {
              points = points.concat(controlPoints)
            }
            // 添加结束点
            points.push(endPoint)
            const path = this.getPath(points)
            const style = Object.assign(
              {},
              {
                path
              },
              cfg.style,
              defaultStyle
            )
            return style
          },
          getControlPoints(cfg) {
            let controlPoints = cfg.controlPoints // 指定controlPoints

            if (!controlPoints || !controlPoints.length) {
              const { startPoint, endPoint } = cfg
              const innerPoint = G6.Util.getControlPoint(
                startPoint,
                endPoint,
                0.5,
                cfg.curveOffset || 0
              )
              controlPoints = [innerPoint]
            }
            return controlPoints
          },
          /**
           * 获取三次贝塞尔曲线的path
           *
           * @param {array} points 起始点和两个控制点
           * @returns
           */
          getPath(points) {
            const path = []
            path.push(['M', points[0].x, points[0].y])
            path.push(['Q', points[1].x, points[1].y, points[2].x, points[2].y])
            return path
          },
          setState(name, value, item) {
            const group = item.getContainer()
            if (group.get('destroyed')) return
            const line = group.getChildByIndex(0)
            const background = group.getChildByIndex(1)
            const text = group.getChildByIndex(2)
            if (value) {
              if (name === 'inactive') {
                line.attr({
                  opacity: 0.2
                })
                background.attr({
                  opacity: 0.2
                })
                text.attr({
                  opacity: 0.2
                })
              }
              if (name === 'active') {
                let index = 0
                line.animate(
                  () => {
                    index++
                    if (index > 9) {
                      index = 0
                    }
                    const res = {
                      lineDashOffset: -index
                    }
                    // return the params for this frame
                    return res
                  },
                  {
                    repeat: true,
                    duration: 3000
                  }
                )
              }
            } else {
              line.stopAnimate()
              line.attr({
                opacity: 1
              })
              background.attr({
                opacity: 1
              })
              text.attr({
                opacity: 1
              })
            }
          }
        },
        'quadratic'
      )
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.resize)
  }
}
</script>

<style lang="scss" scoped>
.topo {
  width: 100%;
  height: 600px;
  border-radius: 10px;
}
</style>
