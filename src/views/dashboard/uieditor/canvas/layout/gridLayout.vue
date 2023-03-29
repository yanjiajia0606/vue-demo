<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-11-21 17:46:40
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-02 13:06:37
 * @FilePath: /qiankun/saber-admin/src/components/uieditor/canvas/layout/gridLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-row :gutter="gutter"><slot></slot> </el-row>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 5
    }
  },
  name: "grid-layout",
  beforeMount() {},
  mounted() {}
};
</script>

<style></style>
