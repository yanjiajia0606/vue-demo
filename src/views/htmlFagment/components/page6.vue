<template>
  <div class="demo-line" ref="mychart" style="height: 380px" _isChart></div>
</template>

<script>
export default {
  data() {
    return {
      name: '折线图',
      path: 'components/uieditor/line.vue',
      imageSrc: 'assets/images/line.png',
      option: null,
      myChart: null,
      max: 135
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const baseDate = `${new Date().getFullYear()}/${
        new Date().getMonth() + 1
      }/${new Date().getDate()}`
      function randomData() {
        now = new Date(+now + oneDay)
        value = value + Math.random() * 21 - 10
        var hour = now.getHours() // 时
        var minutes = now.getMinutes() // 分
        var seconds = now.getSeconds() //秒
        if (hour >= 0 && hour <= 9) {
          hour = '0' + hour
        }
        if (minutes >= 0 && minutes <= 9) {
          minutes = '0' + minutes
        }
        if (seconds >= 0 && seconds <= 9) {
          seconds = '0' + seconds
        }
        return {
          name:
            [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()].join('-') +
            ' ' +
            hour +
            ':' +
            minutes +
            ':' +
            seconds,
          value: [
            [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()].join('-') +
              ' ' +
              hour +
              ':' +
              minutes +
              ':' +
              seconds,
            Math.round(value)
          ]
        }
      }
      let data = []
      let now = new Date(2023, 2, 9)
      let oneDay = 1000 * 60
      let value = Math.random() * 1000
      for (var i = 0; i < this.max; i++) {
        data.push(randomData())
      }
      // console.log(data)
      const one_hour = 60 * 60 * 1000
      const option = {
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100,
            minValueSpan: 60 * 1000,
            maxValueSpan: one_hour * 24
          }
        ],
        xAxis: {
          type: 'time',
          // min: 'dataMin',
          // max: 'dataMax',
          min: `${baseDate} 00:00:00`,
          max: `${baseDate} 24:00:00`,
          splitNumber: 6,
          boundaryGap: true,
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
            show: false,
            lineStyle: {
              color: 'rgba(0,0,0,.45)'
            }
          }
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
          type: 'value',
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
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: data
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
        this.myChart.on('datazoom', (params) => {
          console.log(params, 'params')
        })
      })
    },
    render() {},
    resize() {
      const chartInstance = this.$echarts.getInstanceByDom(this.$refs.mychart)
      chartInstance.resize()
    }
  }
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
