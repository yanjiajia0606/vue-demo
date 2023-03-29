<template>
  <div class="content">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  height: 300px;
  line-height: 300px;
  div {
    flex: 1;
    background: #888;
    margin: 5px;
    font-size: 24px;
    color: #fff;
    text-align: center;
  }
}
</style>
