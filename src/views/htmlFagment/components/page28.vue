<template>
  <div id="asset-relationship_2" class="topo" _isChart>
    <span></span>
  </div>
</template>

<script>
const iconMap = {
  0: '\uebf2',
  1: '\ue61b'
}
const data = {
  nodes: [
    {
      id: '0',
      label: '0',
      nodeType: 1
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
      eventLog: 1
    },
    {
      source: '0',
      target: '1',
      label: '2222',
      eventLog: 2
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
      label: Date.now(),
      eventLog: 2
    },
    {
      source: '0',
      target: '4',
      eventLog: null,
      label: Date.now(),
      eventLog: 1
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
const testData = {
  nodes: [
    {
      id: '000',
      label: '0',
      nodeType: 1
    },
    {
      id: '001',
      label: '1',
      nodeType: 'admin'
    }
  ]
}
export default {
  data() {
    return {
      graph: {},
      resizeTimer: null,
      data: {}
    }
  },
  methods: {
    init(data = { nodes: [], edges: [] }) {
      this.test = 'test'
      this.registerNode()
      this.registerEdge()

      const container = document.getElementById('asset-relationship_2')
      const width = container.scrollWidth
      const height = container.scrollHeight || 500
      const graph = new this.$G6.Graph({
        container: 'asset-relationship_2',
        width,
        height,
        // fitView: true,
        fitCenter: true,
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
          // maxSpeed: 100,
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
          type: 'asset-relationship-edge',
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
        'asset-relationship-edge'
        // 'asset-relationship-line'
      )
      this.graph = graph
    },
    resize() {
      const _this = this
      if (this.resizeTimer) clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(function () {
        const width = document.getElementById('asset-relationship_2').scrollWidth
        const height = document.getElementById('asset-relationship_2').scrollHeight || 500
        _this.graph.changeSize(width, height)
        _this.graph.fitCenter()
      }, 600)
    },
    registerNode() {
      this.$G6.registerNode('asset-relationship-node', {
        draw: (cfg, group) => {
          const COLOR_TYPE = ['#888', '#EB5855', '#4B8CE6']
          const { size = 10, offset = 10, nodeType = 'IP', eventType = 2 } = cfg
          const defaultColor = '#4B8CE6'
          const fillColor = COLOR_TYPE[eventType] || defaultColor
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
              text: iconfontText || 'IP',
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
              text: cfg.label || cfg.nodeName || cfg.id,
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
          item.getContainer()
        },
        afterDraw: () => {}
      })
    },
    registerEdge() {
      const that = this
      const COLOR_TYPE = ['#888', '#EB5855', '#4B8CE6']
      const defaultColor = '#888'
      this.$G6.registerEdge(
        'asset-relationship-edge',
        {
          itemType: 'asset-relationship-edge',
          option: {
            style: {
              // fill: defaultColor,
              stroke: defaultColor,
              endArrow: {
                path: that.$G6.Arrow.triangle(8, 8, 0),
                fill: defaultColor,
                stroke: defaultColor,
                lineDash: null
              }
            },
            labelCfg: {
              autoRotate: true,
              style: {
                fill: '#fff',
                fontSize: 12,
                textAlign: 'center',
                textBaseline: 'middle',
                background: {
                  fill: defaultColor,
                  stroke: defaultColor,
                  padding: [3, 3, 3, 3],
                  radius: 10
                }
              }
            }
          },
          getShapeStyle(cfg) {
            let { style, labelCfg } = _.cloneDeep(this.option)
            const { eventLog } = cfg
            if (typeof eventLog === 'number') {
              style = {
                ...style,
                // fill: COLOR_TYPE[eventLog] || defaultColor,
                stroke: COLOR_TYPE[eventLog] || defaultColor
              }
              style.endArrow.fill = COLOR_TYPE[eventLog] || defaultColor
              style.endArrow.stroke = COLOR_TYPE[eventLog] || defaultColor
              const { background } = labelCfg.style
              background.fill = COLOR_TYPE[eventLog] || defaultColor
              background.stroke = COLOR_TYPE[eventLog] || defaultColor
            }
            const option = { ...this.option, style, labelCfg }
            return option
          },
          drawShape(cfg, group) {
            const startPoint = cfg.startPoint
            const endPoint = cfg.endPoint
            const { style } = this.getShapeStyle(cfg)
            const shape = group.addShape('path', {
              attrs: {
                ...style,
                path: [
                  ['M', startPoint.x, startPoint.y],
                  ['L', endPoint.x, endPoint.y]
                ]
              },
              name: 'path-shape'
            })
            return shape
          },
          drawLabel(cfg, group) {
            const defaultLabelCfg = this.getShapeStyle(cfg).labelCfg
            const { style } = defaultLabelCfg
            const label = group.addShape('text', {
              attrs: {
                ...style
              },
              name: 'text-shape',
              labelRelated: false
            })
            return label
          },
          drawLabelBg(cfg, group, label) {
            const style = this.getLabelBgStyleByPosition(label, cfg, cfg.eventLog)
            var rect = group.addShape('rect', {
              name: 'text-bg-shape',
              attrs: {
                ...style
              },
              labelRelated: false
            })
            return rect
          },
          getLabelBgStyleByPosition(label, cfg, eventLog) {
            if (!label) {
              return {}
            }
            const { labelCfg } = this.getShapeStyle(cfg)
            const bbox = label.getBBox()
            const backgroundStyle = labelCfg.style && labelCfg.style.background
            if (!backgroundStyle) {
              return {}
            }
            const padding = backgroundStyle.padding
            const backgroundWidth = bbox.width + padding[1] + padding[3]
            const backgroundHeight = bbox.height + padding[0] + padding[2]
            const style = {
              ...backgroundStyle,
              ...{
                width: backgroundWidth,
                height: backgroundHeight,
                x: bbox.minX - padding[3],
                y: bbox.minY - padding[0],
                matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
              }
            }
            style.matrix = label.attr('matrix') || [1, 0, 0, 0, 1, 0, 0, 0, 1]
            return style
          }
        },
        'quadratic'
      )
      this.$G6.registerEdge(
        'asset-relationship-line',
        {
          itemType: 'asset-relationship-line',
          option: {
            style: {
              // fill: defaultColor,
              stroke: defaultColor,
              endArrow: {
                path: that.$G6.Arrow.triangle(8, 8, 0),
                fill: defaultColor,
                stroke: defaultColor,
                lineDash: null
              }
            },
            labelCfg: {
              autoRotate: true,
              style: {
                fill: '#fff',
                fontSize: 12,
                textAlign: 'center',
                textBaseline: 'middle',
                background: {
                  fill: defaultColor,
                  stroke: defaultColor,
                  padding: [3, 3, 3, 3],
                  radius: 10
                }
              }
            }
          },
          getShapeStyle(cfg) {
            let { style, labelCfg } = _.cloneDeep(this.option)
            const { eventLog } = cfg
            if (typeof eventLog === 'number') {
              style = {
                ...style,
                // fill: COLOR_TYPE[eventLog] || defaultColor,
                stroke: COLOR_TYPE[eventLog] || defaultColor
              }
              style.endArrow.fill = COLOR_TYPE[eventLog] || defaultColor
              style.endArrow.stroke = COLOR_TYPE[eventLog] || defaultColor
              const { background } = labelCfg.style
              background.fill = COLOR_TYPE[eventLog] || defaultColor
              background.stroke = COLOR_TYPE[eventLog] || defaultColor
            }
            const option = { ...this.option, style, labelCfg }
            return option
          },
          drawShape(cfg, group) {
            const startPoint = cfg.startPoint
            const endPoint = cfg.endPoint
            const { style } = this.getShapeStyle(cfg)
            const shape = group.addShape('path', {
              attrs: {
                ...style,
                path: [
                  ['M', startPoint.x, startPoint.y],
                  ['L', endPoint.x, endPoint.y]
                ],
                stroke: 'pink'
              },
              name: 'path-shape'
            })
            return shape
          },
          drawLabel(cfg, group) {
            const defaultLabelCfg = this.getShapeStyle(cfg).labelCfg
            const { style } = defaultLabelCfg
            const label = group.addShape('text', {
              attrs: {
                ...style
              },
              name: 'text-shape',
              labelRelated: false
            })
            return label
          },
          drawLabelBg(cfg, group, label) {
            const style = this.getLabelBgStyleByPosition(label, cfg, cfg.eventLog)
            var rect = group.addShape('rect', {
              name: 'text-bg-shape',
              attrs: {
                ...style
              },
              labelRelated: false
            })
            return rect
          },
          getLabelBgStyleByPosition(label, cfg, eventLog) {
            if (!label) {
              return {}
            }
            const { labelCfg } = this.getShapeStyle(cfg)
            const bbox = label.getBBox()
            const backgroundStyle = labelCfg.style && labelCfg.style.background
            if (!backgroundStyle) {
              return {}
            }
            const padding = backgroundStyle.padding
            const backgroundWidth = bbox.width + padding[1] + padding[3]
            const backgroundHeight = bbox.height + padding[0] + padding[2]
            const style = {
              ...backgroundStyle,
              ...{
                width: backgroundWidth,
                height: backgroundHeight,
                x: bbox.minX - padding[3],
                y: bbox.minY - padding[0],
                matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
              }
            }
            style.matrix = label.attr('matrix') || [1, 0, 0, 0, 1, 0, 0, 0, 1]
            return style
          }
        },
        'single-edge'
      )
    },
    changeData(data = { nodes: [], edges: [] }) {
      this.graph.clear()
      this.graph.changeData(data)
      this.$G6.Util.processParallelEdges(
        data.edges,
        15,
        'asset-relationship-edge'
        // 'asset-relationship-line'
      )
    },
    handleParseTest() {},
    async handleParse(parseParamsList) {
      parseParamsList.forEach(async (parseParams) => {
        const taskId = await this.handleExcelParse(parseParams)
        if (!taskId) return
        try {
          // 轮询获取解析结果
          const res = await this.pollingSingleTask(taskId)
          if (!res) {
            return
          }
        } catch (error) {
          this.loading = false
        }
        this.loading = false
      })
    },
    async pollingSingleTask(taskId) {
      const maxLen = 50
      const intervalTime = 1000
      let i = 0
      let stopPolling = false
      if (maxLen <= 1) {
        this.$message.error('接口超时')
        return false
      }
      while (!stopPolling && i < maxLen) {
        try {
          const res = await pollingTask({ task_id: taskId })
          const result = res.result
          if (result.status === 1) {
            stopPolling = true
            return Promise.resolve(result)
          } else if (result.status === 2) {
            stopPolling = true
            return Promise.reject(result.errstr || result.error_msg || result.errmsg)
          } else {
            i++
            await new Promise((resolve) => setTimeout(resolve, intervalTime))
          }
        } catch (error) {
          stopPolling = true
          return Promise.reject(error)
        }
      }
    },
    // 解析excel，获取taskId
    async handleExcelParse(parseParams) {
      // const res = await excelParse(parseParams)
      // if (res.status === '0') {
      //   const taskId = res.result
      //   return taskId
      // } else {
      //   return false
      // }
      return new Promise((reslove, reject) => {
        excelParse(parseParams).then((res) => {
          if (res.result) {
            reslove(res.result)
          } else {
            reject()
          }
        })
      })
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.resize)
    const that = this
    setTimeout(() => {
      that.changeData(data)
    }, 3000)
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
