<template>
  <div class="container">
    <div v-for="(item, index) in components" :key="index" class="page-content">
      <div class="title">{{ index }}</div>
      <div class="content">
        <component :is="item"></component>
      </div>
    </div>
  </div>
</template>

<script>
import components from './components.js'
export default {
  components,
  data() {
    return {
      components
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #f0f2f5;
  padding: 10px;
  .page-content {
    height: 768px;
    font-size: 12px;
    color: #333;
    background: #fff;
    margin-bottom: 30px;
    border-radius: 8px;
    overflow-y: auto;
    .title {
      height: 47px;
      font-size: 14px;
      font-weight: 500;
      padding: 0 10px;
      line-height: 47px;
      border-bottom: 1px solid #c1c1c1;
    }
    .content {
      padding: 10px;
    }
  }
}
</style>
