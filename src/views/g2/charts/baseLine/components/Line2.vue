<template>
  <div id="mountNode"></div>
</template>

<script>
export default {
  data() {
    return {
      max: 1000
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const G2 = this.$G2
      const _this = this
      const data = []
      let value = 10
      for (let i = 0; i <= this.max; i++) {
        value = value + Math.random() * 21 - 10
        data.push({
          year: i,
          value: value
        })
      }

      const chart = new G2.Chart({
        container: 'mountNode',
        forceFit: true,
        height: 380
      })
      chart.source(data)
      chart.scale('value', {
        // min: 0,
        tickCount: 5,
        max: this.max
      })
      chart.scale('year', {
        range: [0, 1],
        ticks: Array.from({ length: 11 }, (i, idx) => idx * (this.max / 10))
      })
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      chart.line().position('year*value')

      // chart
      //   .point()
      //   .position('year*value')
      //   .size('year', function (val) {
      //     if (val % (_this.max / 10) === 0) {
      //       return 4
      //     }
      //     return 0
      //   })
      //   .shape('circle')
      //   .label(
      //     'year*value',
      //     function (val) {
      //       if (val % (_this.max / 10) === 0) {
      //         return val
      //       }
      //       return ''
      //     },
      //     {
      //       textStyle: {
      //         fill: '#7a7a7a',
      //         fontSize: 12,
      //         stroke: 'white',
      //         lineWidth: 2,
      //         fontWeight: 300
      //       }
      //     }
      //   )
      //   .style({
      //     lineWidth: 2
      //   })

      chart.render()
    }
  }
}
</script>

<style></style>
