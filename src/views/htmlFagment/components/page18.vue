<template>
  <div class="container">
    <ul class="list">
      <li class="list-item" v-for="item in list" :key="item.name">
        <div class="title">
          <el-tooltip class="item" effect="dark" :content="item.name" placement="top">
            <span>{{ item.name }}</span>
          </el-tooltip>
        </div>
        <div class="content">
          <div class="chart" :ref="item.chart"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 100,
      list: [
        {
          name: 'CPU使用效率', // 名称
          option: {},
          chart: 'cpuChart'
        },
        {
          name: '内存信息', // 名称
          option: {},
          chart: 'ramChart'
        },
        {
          name: '磁盘信息', // 名称
          option: {},
          chart: 'discChart'
        },
        {
          name: '网络流量', // 名称
          option: {},
          chart: 'netChart'
        }
      ]
    }
  },
  methods: {
    initOption(chart) {
      // 测试数据
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
            Math.round(value) + Math.random() * 100
          ]
        }
      }
      let data = []
      let now = new Date(2023, 2, 9)
      let oneDay = 1000 * 60
      let value = Math.random() * 100 + Math.random()

      for (var i = 0; i < this.max; i++) {
        data.push(randomData())
      }
      const option = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '20%',
          top: '20',
          containLabel: true
        },
        xAxis: {
          type: 'time',
          // min: 'dataMin',
          // max: 'dataMax',
          min: `${baseDate} 00:00:00`,
          // max: `${baseDate} 24:00:00`,
          max: 'dataMax',
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
            show: true,
            lineStyle: {
              color: 'rgba(0,0,0,.45)'
            }
          },
          splitLine: {
            show: false
          }
        },
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
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 50
          }
        ],
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            itemStyle: {
              color: '#4B8CE6'
            },
            data: data
          }
        ]
      }
      this.$nextTick(() => {
        const myChart = this.$echarts.init(this.$refs[chart][0])
        myChart.clear()
        myChart.setOption(option)
        myChart.resize()
        myChart.on('datazoom', (params) => {})
      })
      return option
    }
  },
  created() {
    this.list.forEach((item) => {
      item.option = this.initOption(item.chart)
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  .list {
    display: flex;
    flex-wrap: wrap;
    .list-item {
      position: relative;
      color: #888;
      background: #fff;
      flex: 1;
      // width: 100%;
      height: 300px;
      margin: 10px;
      border: 1px solid #c1c1c1;
      border-radius: 4px;
      font-size: 12px;
      flex-shrink: 0;
      .title {
        height: 30px;
        line-height: 30px;
        color: #333;
        font-size: 14px;
        padding-left: 10px;
        border-bottom: 1px solid #c1c1c1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .content {
        padding: 10px;
        line-height: 18px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        .chart {
          height: 100%;
        }
      }
    }
  }
}
</style>
