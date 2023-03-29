<template>
  <!-- <uieditorContent v-bind="$attrs" v-on="$listeners" class="container"> -->
  <div class="demo-line" ref="mychart"></div>
  <!-- </uieditorContent> -->
</template>
<script>
// import uieditorContent from "./uieditorContent";
export default {
  name: 'dashBoard',
  data() {
    return {}
  },
  components: {
    // uieditorContent,
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const option = {
        series: [
          {
            name: '内部进度条',
            type: 'gauge',
            // center: ['20%', '50%'],
            radius: '61%',
            data: [
              {
                value: 0
              }
            ],
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [80 / 100, '#6297f7'],
                  [1, '#f2f4f7']
                ],
                width: 5
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            pointer: {
              show: false
            },
            detail: {
              show: false
            }
          },
          {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '85%',
            min: 0, // 最小刻度
            max: 100, // 最大刻度
            splitNumber: 10, // 刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 0.5,
                color: [[1, 'rgba(0,0,0,0)']]
              }
            },
            data: [
              {
                value: 1
              }
            ],
            // 仪表盘轴线
            axisLabel: {
              show: true,
              color: '#6297f7',
              distance: 15,
              fontSize: 8
            }, // 刻度标签。
            axisTick: {
              show: true,
              splitNumber: 5,
              lineStyle: {
                color: '#6297f7', // 用颜色渐变函数不起作用
                width: 0.5
              },
              length: -5
            }, // 刻度样式
            splitLine: {
              show: true,
              length: -10,
              lineStyle: {
                color: '#6297f7', // 用颜色渐变函数不起作用
                width: 0.5
              }
            }, // 分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          },
          /* 内部 */
          {
            type: 'pie',
            radius: ['0', '35%'],
            center: ['50%', '50%'],
            z: 8,
            hoverAnimation: false,
            data: [
              {
                name: '优',
                value: '80',
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                },
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: '#6297f7',
                        align: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                      },
                      b: {
                        color: '#6297f7',
                        align: 'center',
                        fontSize: 12,
                        fontWeight: 'bold'
                      }
                    },
                    formatter: '{a|{c}}\n{b|{b}}',
                    // formatter: function (params) {
                    //   return '{a|' + params.value + '}'
                    // },
                    position: 'center',
                    show: true
                  }
                },
                labelLine: {
                  show: false
                }
              }
            ]
          }
          // /* 外一层 */
          // {
          //   type: 'pie',
          //   radius: '40%',
          //   startAngle: 220,
          //   endAngle: -40,
          //   hoverAnimation: false,
          //   center: ['50%', '50%'],
          //   avoidLabelOverlap: false,
          //   label: {
          //     show: false
          //   },
          //   labelLine: {
          //     show: false
          //   },
          //   data: [
          //     {
          //       value: 1
          //     }
          //   ],
          //   itemStyle: {
          //     normal: {
          //       color: '#93b7f6'
          //     }
          //   }
          // },
          // // 外二层圈
          // {
          //   type: 'pie',
          //   radius: '45%',
          //   center: ['50%', '50%'],
          //   avoidLabelOverlap: false,
          //   z: 0,
          //   hoverAnimation: false,
          //   label: {
          //     show: false
          //   },
          //   labelLine: {
          //     show: false
          //   },
          //   data: [
          //     {
          //       value: 1
          //     }
          //   ],
          //   itemStyle: {
          //     normal: {
          //       color: '#b7cef6'
          //     }
          //   }
          // },
          // // 最外层圈
          // {
          //   type: 'pie',
          //   radius: '50%',
          //   center: ['50%', '50%'],
          //   avoidLabelOverlap: false,
          //   z: 0,
          //   hoverAnimation: false,
          //   label: {
          //     show: false
          //   },
          //   labelLine: {
          //     show: false
          //   },
          //   data: [
          //     {
          //       value: 1
          //     }
          //   ],
          //   itemStyle: {
          //     normal: {
          //       color: {
          //         type: 'linear',
          //         x: 0,
          //         y: 0,
          //         x2: 0,
          //         y2: 1,
          //         colorStops: [
          //           {
          //             offset: 0,
          //             color: 'rgba(69, 161, 255,0.3)'
          //           },
          //           {
          //             offset: 1,
          //             color: 'rgba(69, 161, 255,0)'
          //           }
          //         ]
          //       }
          //     }
          //   }
          // }
        ]
      }
      let color = [
        [70 / 100, '#6297f7'],
        [1, '#f2f4f7']
      ]
      option.series[0].axisLine.lineStyle.color = color
      option.series[2].data[0].value = 70
      option.series[2].data[0].name = '高危'
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
