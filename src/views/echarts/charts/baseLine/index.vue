<template>
  <el-col :span="20" style="padding: 20px">
    <div style="font-weight: bold; margin-bottom: 20px; margin-left: 48px">基础折线图</div>
    <div class="chart-content">
      <router-view></router-view>
    </div>
  </el-col>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleBtn() {}
  }
}
</script>

<style lang="scss" scoped>
.line-content {
  height: 120px;
  box-shadow: inset 0px -1px 0px #c1c1c1;
  .chart-content {
    border: 1px solid #efefef;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    padding: 25px;
  }
}
.chart-content {
  margin-left: 48px;
  min-height: 398px;
  border: 1px solid #efefef;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  padding: 24px;
  width: 60%;
}
</style>
