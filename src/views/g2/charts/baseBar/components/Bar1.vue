<template>
  <div id="mountNode" ref="mountNode"></div>
</template>

<script>
export default {
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const G2 = this.$G2
      var data = [
        {
          year: '1951 年',
          sales: 38
        },
        {
          year: '1952 年',
          sales: 52
        },
        {
          year: '1956 年',
          sales: 61
        },
        {
          year: '1957 年',
          sales: 145
        },
        {
          year: '1958 年',
          sales: 48
        },
        {
          year: '1959 年',
          sales: 38
        },
        {
          year: '1960 年',
          sales: 38
        },
        {
          year: '1962 年',
          sales: 38
        }
      ]
      var chart = new G2.Chart({
        container: 'mountNode',
        forceFit: true,
        height: 300,
        width: 800
      })
      chart.source(data)
      chart.scale('sales', {
        tickInterval: 20
      })
      chart.interval().position('year*sales')
      chart.render()
    }
  }
}
</script>

<style></style>
