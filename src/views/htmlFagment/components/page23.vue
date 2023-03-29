<template>
  <div style="background: #0d1e33; height: 500px; width: 100%">
    <div class="moudle-title">
      <div class="text">
        <span class="value">{{ title }}</span>
        <span class="border"></span>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moudleTitle',
  props: {
    title: {
      type: Object,
      default() {
        return '风险雷达分布'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.moudle-title {
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: flex-end;
  .text {
    display: flex;
    flex-direction: column;
    line-height: 21px;
    .value {
      margin: 0 0 4px 0;
    }
    .border {
      width: 100%;
      height: 4px;
      display: inline-block;
      background: #6bc5f8;
    }
  }
  .line {
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    margin: 0 0 1px 0;
  }
}
</style>
