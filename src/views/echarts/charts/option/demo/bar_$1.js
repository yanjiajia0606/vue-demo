const xAxis = ['核心资产', '重要资产', '一般资产']
const data = [
  {
    name: '危急',
    value: [10, 3, 4]
  },

  {
    name: '高危',
    value: [3, 3, 4]
  },
  {
    name: '中危',
    value: [7, 3, 4]
  },
  {
    name: '信息',
    value: [10, 3, 4]
  }
]
const color = ['#AE221F', '#EB5855', '#F1B75B', '#88E088', '#C1C1C1', '#E1E1E1']
const barBg = '#233b4c'
const series = data.map((item, index) => {
  const length = data.length
  let barBorderRadius = [0, 0, 0, 0]
  const barRadiusList = [
    [10, 10, 10, 10],
    [10, 0, 0, 10],
    [0, 10, 10, 0]
  ]
  if (length > 1 && index === 0) {
    barBorderRadius = barRadiusList[1]
  } else if (length > 1 && index === length - 1) {
    barBorderRadius = barRadiusList[2]
  }
  if (length === 1) {
    barBorderRadius = barRadiusList[0]
  }
  const { name, value } = item
  const singleSeries = {
    name,
    type: 'bar',
    stack: 'truck',
    barWidth: 10,
    showBackground: true,
    backgroundStyle: {
      color: barBg,
      barBorderRadius: [10, 10, 10, 10]
    },
    itemStyle: {
      borderColor: barBg,
      barBorderRadius
    },
    label: {
      show: false
    },
    data: value
  }
  return singleSeries
})

option = {
  backgroundColor: 'rgba(30, 34, 48, 1)',
  color,
  legend: {
    show: false,
    bottom: '3%',
    itemWidth: 10,
    itemHeight: 8,
    itemGap: 15,
    textStyle: {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 14,
      color: 'rgba(178, 175, 173, 1)'
    },
    data: data.map((item) => item.name)
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    top: '10%',
    right: '5%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    show: false
  },
  yAxis: [
    {
      type: 'category',
      data: xAxis,
      interval: true,
      axisLabel: {
        padding: [0, 0, 25, 0],
        inside: true,
        align: 'left',
        verticalAlign: 'bottom',
        textStyle: {
          fontSize: 14,
          fontWeight: 400,
          color: '#B1C3DD'
        },
        formatter: '{value}',
        rich: {
          a: {
            lineHeight: 30,
            fontSize: 14
          }
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '12'
        },
        align: 'right',
        verticalAlign: 'bottom',
        padding: [0, 0, 25, 0],
        formatter: function (param, index) {
          const arr = []
          data.forEach((item) => {
            const { value } = item
            arr.push(value[index])
          })
          const total = arr.reduce((pre, val) => pre * 1 + val * 1)
          return `{a|${total}}`
        },
        rich: {
          a: {
            color: '#fff',
            fontSize: '14'
          }
        }
      },
      data: xAxis
    }
  ],
  series
}
