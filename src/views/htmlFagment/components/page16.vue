<template>
  <div class="topu">
    <div style="color: #44dfec; cursor: pointer" @click="init">刷新</div>
    <div>{{ test }}</div>
    <div id="container_16" _isChart>
      <!-- <div class="zoom">
        <div class="zoom-out" @click="handlerZoomOut">
          <i class="el-icon-plus"></i>
        </div>
        <div class="zoom-in" @click="handlerZoomIn">
          <i class="el-icon-minus"></i>
        </div>
      </div> -->
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
      resizeTimer: null,
      card: {
        label: '123'
      },
      cardStyle: {
        left: '100px',
        top: '100px'
      }
    }
  },
  computed: {
    test: {
      get(val) {
        console.log(val, 'get')
        return this.card.label
      },
      set(val) {
        console.log(val, 'set')
        return val
      }
    }
  },
  methods: {
    init() {
      this.test = 'test'
      const _this = this
      if (this.graph.destroy) {
        this.graph.clear()
        this.graph.destroy()
      }
      const data = {
        nodes: [
          {
            id: '0',
            label: '0'
          },
          {
            id: '1',
            label: '1'
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
            target: '1'
          },
          {
            source: '0',
            target: '2'
          },
          {
            source: '0',
            target: '3'
          },
          {
            source: '0',
            target: '4'
          },
          {
            source: '0',
            target: '5'
          },
          {
            source: '0',
            target: '7'
          },
          {
            source: '0',
            target: '8'
          },
          {
            source: '0',
            target: '9'
          },
          {
            source: '0',
            target: '10'
          },
          {
            source: '0',
            target: '11'
          },
          {
            source: '0',
            target: '13'
          },
          {
            source: '0',
            target: '14'
          },
          {
            source: '0',
            target: '15'
          },
          {
            source: '0',
            target: '16'
          },
          {
            source: '2',
            target: '3'
          },
          {
            source: '4',
            target: '5'
          },
          {
            source: '4',
            target: '6'
          },
          {
            source: '5',
            target: '6'
          },
          {
            source: '7',
            target: '13'
          },
          {
            source: '8',
            target: '14'
          },
          {
            source: '9',
            target: '10'
          },
          {
            source: '10',
            target: '22'
          },
          {
            source: '10',
            target: '14'
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
      const container = document.getElementById('container_16')
      const width = container.scrollWidth
      const height = container.scrollHeight || 500
      const graph = new this.$G6.Graph({
        container: 'container_16',
        width,
        height,
        fitView: true,
        layout: {
          type: 'gForce',
          preset: 'circular',
          gravity: 1,
          // // kr: 10,
          preventOverlap: true,
          // type: 'dagre',
          // nodesep: 1,
          // ranksep: 10,
          linkDistance: 100,
          nodeStrength: 200,
          edgeStrength: 40, // 可选
          // alpha: 0.3, // 可选
          // alphaDecay: 0.028, // 可选
          // alphaMin: 0.01,
          collideStrength: 1
          // nodeSpacing: 100,
          // alpha: 0,
          // alphaDecay: 1,
          // maxPreventOverlapIteration: 600,
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        },
        minZoom: 0.2,
        maxZoom: 10,
        defaultNode: {
          size: 20
        },
        defaultEdge: {
          type: 'quadratic',
          curveOffset: -18,

          style: {
            // radius: 0,
            // offset: 1,
            // endArrow: true,
            curveOffset: 1,
            lineWidth: 1,
            stroke: '#888',
            lineDash: [3, 3]
          }
        }
      })
      graph.data(data)
      graph.render()
      this.graph = graph
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
        const width = document.getElementById('container_16').scrollWidth
        const height = document.getElementById('container_16').scrollHeight || 500
        _this.graph.changeSize(width, height)
        _this.graph.fitCenter()
      }, 600)
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.resize)
  }
}
</script>

<style lang="scss" scoped>
.topu {
  #container_16 {
    // position: relative;
    width: 100%;
    height: 600px;
    // background: linear-gradient(263.09deg, #434754 -1.43%, #20222a 96.14%);
    // box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.102927);
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
<style>
.card {
  width: 280px;
  height: 200px;
  /* background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px; */
}
</style>
