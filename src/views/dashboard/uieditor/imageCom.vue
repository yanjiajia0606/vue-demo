<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-07-29 11:12:17
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-02-08 18:06:01
 * @FilePath: /vue-demo/src/views/dashboard/uieditor/imageCom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <uieditorContent v-bind="$attrs" v-on="$listeners" class="container"> -->
  <el-image :src="require(`@/assets/logo.png`)" class="image-comp"></el-image>
  <!-- </uieditorContent> -->
</template>
<script>
export default {
  name: 'imagecom',
  data() {
    return {
      src: 'assets/images/image.jpeg'
    }
  },
  components: {},
  created() {}
}
</script>
<style lang="scss" scoped>
.image-comp {
  height: 100%;
  width: 100%;
}
</style>
