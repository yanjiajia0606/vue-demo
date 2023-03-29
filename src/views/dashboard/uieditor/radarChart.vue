<template>
  <!-- <uieditorContent v-bind="$attrs" v-on="$listeners" class="container"> -->
  <div class="demo-line" ref="mychart"></div>
  <!-- </uieditorContent> -->
</template>
<script>
// import uieditorContent from "./uieditorContent";
export default {
  name: "RadarChart",
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
        tooltip: {
          //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true //鼠标是否可以移动到tooltip区域内
        },
        radar: {
          name: {
            textStyle: {
              color: "#aeaeae",
              fontSize: 12
            }
          },
          shape: "polygon",
          center: ["50%", "50%"],
          radius: "80%",
          startAngle: 120,
          scale: true,
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#ccc" // 设置网格的颜色
            }
          },
          indicator: [
            {
              name: "资产漏洞",
              max: 100
            },
            {
              name: "事件",
              max: 100
            },
            {
              name: "监控告警",
              max: 100
            },
            {
              name: "事件",
              max: 100
            },
            {
              name: "风险端口",
              max: 100
            },
            {
              name: "基线检查",
              max: 100
            }
          ],
          splitArea: {
            show: false
          }
        },
        grid: {
          position: "center"
        },
        polar: {
          center: ["50%", "50%"], // 默认全局居中
          radius: "0%"
        },
        angleAxis: {
          min: 0,
          interval: 5,
          clockwise: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          min: 0,
          interval: 20,
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "个人雷达图",
            type: "radar",
            symbol: "circle", // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 5, // 拐点的大小
            itemStyle: {
              normal: {
                color: "#4b8ce6"
              }
            },
            areaStyle: {
              normal: {
                color: "#eee",
                opacity: 0.5
              }
            },
            lineStyle: {
              width: 2,
              color: "#ddd"
            },
            label: {
              normal: {
                show: true,
                formatter: (params) => {
                  return params.value;
                },
                color: "#fff"
              }
            },
            data: [
              {
                value: [20, 50, 60, 60, 90, 80]
              }
            ]
          }
        ]
      };

      //   this.option = option;
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
