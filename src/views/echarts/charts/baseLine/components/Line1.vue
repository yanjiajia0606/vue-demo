<template>
  <!-- <uieditorContent v-bind="$attrs" v-on="$listeners" class="container"> -->
  <!-- <div class="demo-line"> -->
  <div class="demo-line" ref="mychart" style="height: 380px" _isChart></div>
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
      max: 1000
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
      const data = {
        axis: [],
        value: []
      }
      var value = 10
      for (let i = 0; i <= this.max; i++) {
        value = value + Math.random() * 21 - 10
        data.axis.push(i)
        data.value.push(value)
      }

      const option = {
        xAxis: {
          type: 'category',
          data: data.axis,
          min: 'dataMin',
          max: 'dataMax',
          axisLabel: {
            // interval: Math.max(this.max / 10 - 1, 0), //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
            // rotate: -30 //-30度角倾斜显示
          }
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: 'rgb(126,199,255)'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 1,
            minValueSpan: this.max / 10,
            preventDefaultMouseMove: true
          }
        ],
        series: [
          {
            data: data.value,
            type: 'line',
            // symbol: 'none',
            label: {
              show: true
            },
            itemStyle: {
              interval: Math.max(this.max / 10 - 1, 0) //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
            }
          }
        ]
      }
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
