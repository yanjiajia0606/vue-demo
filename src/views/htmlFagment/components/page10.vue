<template>
  <div style="height: 800px; padding: 10px">
    <div class="threat-alarm">
      <div class="header">威胁告警列表</div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.threat-alarm {
  width: 800px;
  .header {
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    box-shadow: inset 0px -1px 0px #c1c1c1;
    border-radius: 8px 8px 0px 0px;
    color: #333;
    font-size: 14px;
    padding: 0 10px;
  }
  .content {
    background: #ffffff;
    border-radius: 0 0 8px 8px;
    min-height: 100px;
    padding: 10px;
  }
}
</style>
