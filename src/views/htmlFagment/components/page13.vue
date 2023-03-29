<template>
  <!-- <uieditorContent v-bind="$attrs" v-on="$listeners" class="container"> -->
  <!-- <div class="demo-line"> -->
  <div>
    <div class="demo-line" ref="mychart" style="height: 380px" _isChart></div>
    <!-- <div @mousedown="handleClick">button</div> -->
  </div>
  <!-- </div> -->
  <!-- </uieditorContent> -->
</template>
<script>
// import uieditorContent from "./uieditorContent";

export default {
  name: 'lineCom',
  props: {
    dayNums: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      name: '折线图',
      path: 'components/uieditor/line.vue',
      imageSrc: 'assets/images/line.png',
      option: null,
      myChart: null,
      max: 1350
    }
  },
  components: {
    // uieditorContent,
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const date = new Date().getDate()
      const month = new Date().getMonth() + 1
      const prefix = month.toString().padStart(2, 0) + '-' + date
      let hour = 0
      let minute = 0
      let nData = {}
      for (let i = 0; i < 100; i++) {
        if (minute >= 60) {
          minute = 0
          hour++
        }
        const key = hour.toString().padStart(2, 0) + ':' + minute.toString().padStart(2, 0)
        nData[prefix + ' ' + key] = Math.random() * 100
        minute = parseInt(Math.random() * 30) + minute
      }
      const data = nData
      const option = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '20',
          top: '20',
          containLabel: true
        },
        xAxis: {
          data: Object.keys(data),
          splitNumber: 5,
          axisLabel: {
            lineStyle: {
              color: 'rgba(0,0,0,.15)'
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            color: 'rgba(0,0,0,.15)',
            lineStyle: {
              color: 'rgba(0,0,0,.15)'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0,0,0,.45)'
            }
          },
          z: 10
        },
        dataZoom: [
          {
            type: 'inside',
            // startValue: 0, // 从头开始。
            // endValue: 4, // 一次性展示5个
            start: 0,
            end: 50
          }
        ],
        yAxis: {
          max: 100,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '16px',
            itemStyle: {
              color: '#4B8CE6',
              width: '16px'
            },
            data: Object.values(data)
          }
        ]
      }
      // this.getVal.call()

      //   this.option = option;
      this.$nextTick(() => {
        this.myChart = this.$echarts.init(this.$refs.mychart)
        this.myChart.clear()
        this.myChart.setOption(option)
        this.myChart.resize()
      })
    },
    render() {},
    resize() {
      const chartInstance = this.$echarts.getInstanceByDom(this.$refs.mychart)
      chartInstance.resize()
    },
    getVal() {
      getVal()
    },
    handleClick(e) {
      console.log(e)
    }
  }
}

function getVal() {
  console.log(this, 'this')
}
</script>
<style lang="scss" scoped>
.demo-line {
  // position: absolute;
  // width: 350px;
  // height: 200px;
  background: #fff;
  width: 100%;
  height: 100%;
}
</style>
