<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 14:02:42
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-11 16:25:28
 * @FilePath: /saber/src/components/uieditor/collect/compList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="components-list">
    <div class="components-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.components-list {
  box-sizing: border-box;
  background: #0a0b0d;
  // background: #fff;
  overflow: hidden;
  will-change: max-height;
}
.components-inner {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
