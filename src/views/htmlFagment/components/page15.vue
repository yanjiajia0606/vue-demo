<template>
  <div class="container">
    <div class="left">
      <div class="top">top</div>
      <div class="body">
        <div style="height: 800px"></div>
      </div>
    </div>
    <div class="right">right</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  background: blanchedalmond;
  width: 100%;
  height: 100%;
  // display: flex;
  .left,
  .right {
    // float: left;
  }
  .left {
    width: 20%;
    border: 1px solid saddlebrown;
    .top {
      height: 100px;
      background: #64e60e5a;
    }
    .body {
      height: 100%;
      overflow: hidden;
      background: #1f3f9f5a;
    }
  }
  .right {
    // flex: 1;
    width: 70%;
    background: #dddddd;
    height: 500px;
  }
}
.clearfix::after {
  content: '';
  display: block;
  zoom: 1;
  height: 0px;
  clear: both;
}
</style>
