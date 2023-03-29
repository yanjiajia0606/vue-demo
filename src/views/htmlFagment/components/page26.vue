<template>
  <div class="container">
    <ul class="legend">
      <li v-for="(item, index) in data" :key="item.name" class="item">
        <span>
          <span class="circle" :style="{ borderColor: color[index] || color[0] }"></span>
          {{ item.name }}
        </span>
        <span class="value">{{ item.value }}</span>
      </li>
    </ul>
    <ul class="bar-list">
      <li
        v-for="(item, index) in data"
        :key="item.name"
        class="bar"
        :style="style(item, index)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      if (!this.data || this.data.length === 0) {
        return 0
      }
      return this.data.reduce((pre, cur) => pre + cur.value * 1, 0)
    },
    length() {
      return this.data.length
    }
  },
  data() {
    return {
      data: [
        {
          name: '高威胁',
          value: 10
        },
        {
          name: '中威胁',
          value: 10
        },
        {
          name: '低威胁',
          value: 10
        }
      ],
      color: ['#EB5855', '#F1B75B', '#88E088'],
      barHeight: 6,
      barRadius: 3
      // total:100, // 总长度100%
    }
  },
  methods: {
    style(item, index) {
      const { value } = item
      const bgColor = this.color[index] || this.color[0]
      let style = {
        background: bgColor,
        height: this.barHeight + 'px'
      }
      let width,
        barRadius = 0
      if (this.total === 0) {
        const total = 100
        width = (total / this.length) * 100 + '%'
      }
      width = (value / this.total) * 100 + '%'
      barRadius = this.getBarRadius(index)
      style = { ...style, width, borderRadius: barRadius }
      return style
    },
    getBarRadius(index) {
      const length = this.length
      const barRadius = this.barRadius
      let radiusValue = '0px'
      const barRadiusList = [
        `${barRadius}px ${barRadius}px ${barRadius}px ${barRadius}px`,
        `${barRadius}px 0px 0px ${barRadius}px`,
        `0px ${barRadius}px ${barRadius}px 0px`
      ]
      if (length > 1 && index === 0) {
        radiusValue = barRadiusList[1]
      } else if (length > 1 && index === length - 1) {
        radiusValue = barRadiusList[2]
      }
      if (length === 1) {
        radiusValue = barRadiusList[0]
      }
      return radiusValue
    },
    legendStyle() {
      return {}
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .bar-list {
    width: 100%;
    display: flex;
    .bar {
      // height: 6px;
      // background: #333;
    }
  }
  .legend {
    display: flex;
    margin: 0 0 6px 0;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      .value {
        text-indent: 11px;
      }
    }
    .circle {
      display: inline-block;
      height: 7px;
      width: 7px;
      border-radius: 50%;
      border: 2px solid;
    }
  }
}
</style>
