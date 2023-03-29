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
          name: now.toString(),
          value: [
            [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()].join('/') +
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
      let oneDay = 1000 * 30
      let value = Math.random() * 1000
      for (var i = 0; i < this.max; i++) {
        data.push(randomData())
      }
      // data.push({
      //   name: '2023-02-10 00:00:00',
      //   value: ['2023-02-10 00:00:00', 0]
      // })
      const option = {
        title: {
          text: 'Dynamic Data & Time Axis'
        },
        tooltip: {
          trigger: 'axis',
          // formatter: function (params) {
          //   params = params[0]
          //   var date = new Date(params.name)
          //   return (
          //     date.getDate() +
          //     '/' +
          //     (date.getMonth() + 1) +
          //     '/' +
          //     date.getFullYear() +
          //     ' : ' +
          //     params.value[1]
          //   )
          // },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          interval: 1000 * 60 * 60 * 4,
          // max: `dataMax`,
          // min: `dataMin`,
          min: `${baseDate} 00:00:00`,
          max: `${baseDate} 24:00:00`,
          splitLine: {
            show: false
          },
          axisLabel: {
            // 格式化横轴坐标时间刻度
            show: true,
            showMaxLabel: true,
            showMinLabel: true,
            formatter: '{MM}/{dd} {HH}:{mm}',
            // formatter: {
            //   year: '{yyyy}',
            //   month: '{MMM}',
            //   day: '{HH}:{mm}',
            //   hour: '{HH}:{mm}',
            //   minute: '{HH}:{mm}',
            //   second: '{HH}:{mm}:{ss}',
            //   millisecond: '{hh}:{mm}:{ss} {SSS}',
            //   none: '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}'
            // },
            rich: {
              yearStyle: {
                // 让年度信息更醒目
                color: '#000',
                fontWeight: 'bold'
              },
              monthStyle: {
                color: '#999'
              }
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100,
            minValueSpan: 1000 * 60,
            realtime: true, //是否实时更新
            filterMode: 'filter'
          }
        ],
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
