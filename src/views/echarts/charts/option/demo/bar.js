var dataAxis = [
  '06-30 01:00',
  '06-30 02:00',
  '06-30 03:00',
  '06-30 04:00',
  '06-30 05:00',
  '06-30 06:00',
  '06-30 07:00'
]
var data = [10, 20, 10, 50, 40, 10, 0, 10]
var yMax = 100
var dataShadow = []

const option = {
  xAxis: {
    data: dataAxis,
    axisLabel: {
      // inside: true,// 显示在内部
      lineStyle: {
        color: 'rgba(0,0,0,.15)'
      },
      textStyle: {
        // color: '#fff'
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
      start: 0,
      end: 100
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
      data: data
    }
  ]
}
