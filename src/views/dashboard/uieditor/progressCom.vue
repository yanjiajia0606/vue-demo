<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-07-29 11:12:17
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-13 15:28:55
 * @FilePath: /saber/src/components/uieditor/progressCom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <uieditorContent v-bind="$attrs" v-on="$listeners" class="container"> -->
  <!-- <basic-container class="basic-container"> -->
  <div class="basic-container">
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="100" :format="format"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
  <!-- </basic-container> -->
  <!-- </uieditorContent> -->
</template>

<script>
// import uieditorContent from "./uieditorContent";
export default {
  name: "progressCom",
  data() {
    return {
      path: "components/uieditor/progressCom.vue",
      name: "进度条",
      imageSrc: "assets/images/progress.png"
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  },
  created() {},
  components: {
    // uieditorContent,
  }
};
</script>
<style lang="scss" scoped>
.container {
  // width: 80%;
  height: 100%;
}
.basic-container {
  width: 100%;
  height: 100%;
  padding: 0;
  background: #fff;
}
/deep/.basic-container__card {
  width: 100%;
  height: 100%;
}
</style>
