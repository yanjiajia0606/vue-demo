let category = [
  {
    name: '美育教育',
    value: 200
  },
  {
    name: '劳动教育',
    value: 300
  },
  {
    name: '生活技能',
    value: 30
  },
  {
    name: '日常起居',
    value: 800
  },
  {
    name: '综合实践',
    value: 90
  },
  {
    name: '体育教育',
    value: 10
  }
]
let yName = [] // y轴名称
let bgData = [] // 最大值用作背景显示的数据
let maxValue = category[category.length - 1].value //最大值
category.forEach((element) => {
  yName.push(element.name)
  bgData.push({
    name: element.name,
    value: maxValue,
    type: element.type
  })
})
option = {
  backgroundColor: '#000',
  xAxis: {
    max: 0,
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  grid: {
    left: 50,
    top: 20,
    right: 10,
    bottom: 0
  },
  yAxis: [
    // {
    //     // 每条图形上面的文字
    //     inverse: false,
    //     data: yName,
    //     axisLabel: {
    //         padding: [0, 0, 45, 0],
    //         inside: true,
    //         textStyle: {
    //             fontSize: 12,
    //             fontWeight: 400,
    //             color: "#B1C3DD",
    //             align: "left",
    //         },
    //         formatter: "{value}",
    //         rich: {
    //             a: {
    //                 color: "transparent",
    //                 lineHeight: 20,
    //                 fontSize: 14,
    //                 shadowColor: "rgba(0, 0, 0, 1)",
    //                 shadowBlur: 10,
    //             },
    //         },
    //     },
    //     splitLine: {
    //         show: false,
    //     },
    //     axisTick: {
    //         show: false,
    //     },
    //     axisLine: {
    //         show: false,
    //     },
    // },
    {
      // y轴最左侧的文字
      axisTick: 'none',
      axisLine: 'none',
      position: 'left',
      axisLabel: {
        padding: [0, 9, 13, 0], // 调整文字位置
        textStyle: {
          color: '#fff',
          fontSize: '12',
          fontWeight: '400'
        }
      },
      data: [6, 5, 4, 3, 2, 1]
    },
    {
      // y轴最右侧的文字
      axisTick: 'none',
      axisLine: 'none',
      type: 'category',
      axisLabel: {
        // margin: 10,
        align: 'right',
        verticalAlign: 'bottom',
        padding: [0, 0, 30, 0],
        textStyle: {
          color: 'red',
          fontSize: '24'
        },
        formatter: function (param, index) {
          // return `{a|${total}}`
          return '5888885'
        }
      },
      data: category
    }
  ],
  series: [
    // {
    //     // 背景样式
    //     name: "背景",
    //     type: "bar",
    //     barWidth: 18,
    //     stack: "总量",
    //     barGap: "-100%",
    //     symbol: "fixed",
    //     symbolRepeat: "repeat",
    //     legendHoverLink: false,
    //     itemStyle: {
    //         normal: {
    //             color: "rgba(153, 153, 153, 0)",
    //         },
    //     },
    //     data: bgData,
    //     animation: false, //关闭动画
    //     z: 0,
    // },
    {
      // name: "info",
      // 内（显示的内容）
      type: 'bar',
      barGap: '-100%',
      barWidth: 18,
      legendHoverLink: false,
      silent: true,
      data: category
    }
  ]
}
