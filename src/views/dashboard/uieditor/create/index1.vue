<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-24 14:54:08
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-11-15 19:02:25
 * @FilePath: /qiankun/saber-admin/src/components/uieditor/create/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="create-screen">
    <!-- <createPage></createPage> -->
    {{ dialogVisible }}
    <div class="add-screen" @click="openPanel">新建首页</div>
    <panelInfo v-model="dialogVisible"></panelInfo>
    <pageList></pageList>
  </div>
</template>

<script>
// import createPage from "@/views/dashboard/uieditor/create/createPage";
import panelInfo from '@/views/dashboard/uieditor/create/panelInfo'
import pageList from '@/views/dashboard/uieditor/create/pageList'

export default {
  name: 'createScreen',
  data() {
    return {
      dialogVisible: false
    }
  },
  components: {
    // createPage,
    panelInfo,
    pageList
  },
  methods: {
    openPanel() {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.create-screen {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background: #171b22;
  .add-screen {
    margin: 20px 0 10px 0;
    width: 258px;
    height: 78px;
    padding: 0 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
    border: 1px solid #00baff;
    color: #8eeeff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    position: relative;
    cursor: pointer;
    background-image: -webkit-gradient(
      linear,
      right top,
      left top,
      color-stop(0, rgba(0, 222, 255, 0.39)),
      to(rgba(0, 174, 255, 0.19))
    );
    background-image: linear-gradient(
      -90deg,
      rgba(0, 222, 255, 0.39) 0,
      rgba(0, 174, 255, 0.19) 100%
    );
    box-shadow: 0 0 10px 0 rgba(55, 224, 255, 0.3);
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
