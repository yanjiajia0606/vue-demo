<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-12-16 14:06:02
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-16 14:12:16
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
      const color = ["#ffdc2b", "#4d8cfd", "#45e6de"];
      const datas = [
        {
          name: "服务业企业",
          value: 25
        },
        {
          name: "批发零售企业",
          value: 75
        },
        {
          name: "住宿餐饮企业",
          value: 75
        }
      ];
      let sum = 0;
      for (var i of datas) {
        sum += i.value;
      }
      const title = {
        name: "企业总数",
        value: sum,
        unit: "家"
      };
      const rich = {
        name: {
          color: "#888",
          fontSize: 12,
          align: "left",
          padding: [0, 10, 20, 0]
        },
        name1: {
          color: "#888",
          fontSize: 12,
          align: "left",
          padding: [0, 0, 0, 10]
        },
        value: {
          color: "#ccc",
          fontSize: 14,
          align: "left"
        },
        title: {
          color: "#6297f7",
          fontSize: 13
        },
        titleUnit: {
          color: "#6297f7",
          fontSize: 13,
          padding: [15, 0, 0, 0]
        },
        titleValue: {
          color: "#6297f7",
          fontSize: 20,
          padding: [15, 5, 5, 5]
        }
      };
      let option = {
        color,
        backgroundColor: "#fff",
        legend: {
          orient: "vertical",
          icon: "circle",
          x: "55%",
          y: "center",
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 20,
          width: "263",
          align: "left",
          textStyle: {
            color: "#D7E5FF",
            rich
          },
          formatter: function (name) {
            let res = datas.filter((v) => v.name === name);
            let str = "";
            str = "{name1|" + res[0].name + "}{name1|" + res[0].value + "家}";
            return str;
          }
        },

        series: [
          {
            type: "pie",
            center: ["30%", "50%"],
            radius: ["40%", "50%"],
            data: datas,
            startAngle: 180,
            label: {
              show: false
            }
          },
          {
            type: "pie",
            center: ["30%", "50%"],
            radius: ["40%", "50%"],
            data: datas,
            startAngle: 180,
            label: {
              show: true,
              position: "center",
              formatter: () =>
                `{title|${title.name}}\n{titleValue|${title.value}}{titleUnit|${title.unit}}`,
              rich
            }
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
