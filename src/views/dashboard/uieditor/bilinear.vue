<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-12-16 14:06:02
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-16 14:20:41
 * @FilePath: /qiankun/saber-admin/src/components/uieditor/pie.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <uieditorContent v-bind="$attrs" v-on="$listeners" class="container"> -->
  <div class="demo-line" ref="mychart"></div>
  <!-- </uieditorContent> -->
</template>
<script>
// import uieditorContent from "./uieditorContent";
export default {
  name: "dashBoard",
  data() {
    return {};
  },
  components: {
    // uieditorContent,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const option = {
        backgroundColor: "#fff",
        title: {
          // text: `{a|年度费用率}`,
          textStyle: {
            rich: {
              a: {
                fontSize: 16,
                fontWeight: 600
              }
            }
          },
          top: "2%",
          left: "2%"
        },
        legend: {
          data: ["销售费用", "管理费用"],
          textStyle: {
            align: "right"
          },
          top: "2%",
          right: "2%"
        },
        grid: {
          top: "18%",
          left: "10%",
          right: "6%",
          bottom: "10%"
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00"
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              margin: 10
            },
            boundaryGap: false,
            data: [2016, 2017, 2018, 2019, 2020, 2021]
          }
        ],
        yAxis: [
          {
            type: "value",
            // min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#e3e3e3"
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              margin: 20,
              formatter: "{value} %"
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "销售费用",
            type: "line",
            data: [7.99, 7.42, 7.75, 5.67, 7, 7.25],
            itemStyle: {
              normal: {
                color: "#ff3a3a",
                lineStyle: {
                  color: "#ff3a3a"
                },
                label: {
                  show: true, //开启显示
                  color: "#ff3a3a",
                  position: "top", //在上方显示
                  formatter: function (res) {
                    if (res.value) {
                      return res.value + "%";
                    } else {
                      return 0;
                    }
                  }
                }
              }
            }
          },
          {
            name: "管理费用",
            type: "line",
            data: [14.78, 13.9, 13.28, 14.17, 14.03, 16.04],
            itemStyle: {
              normal: {
                color: "#0151BA",
                lineStyle: {
                  color: "#0151BA"
                },
                label: {
                  show: true, //开启显示
                  color: "#0151BA",
                  position: "top", //在上方显示
                  formatter: function (res) {
                    if (res.value) {
                      return res.value + "%";
                    } else {
                      return 0;
                    }
                  }
                }
              }
            }
          }
        ]
      }; //   this.option = option;
      this.$nextTick(() => {
        this.myChart = this.$echarts.init(this.$refs.mychart);
        this.myChart.clear();
        this.myChart.setOption(option);
        this.myChart.resize();
      });
    },
    render() {},
    resize() {
      const chartInstance = this.$echarts.getInstanceByDom(this.$refs.mychart);
      chartInstance.resize();
    }
  }
};
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
