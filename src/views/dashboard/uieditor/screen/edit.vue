<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 11:12:13
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-02-08 18:36:14
 * @FilePath: /vue-demo/src/views/dashboard/uieditor/screen/edit.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="edit-container">
    <tabList></tabList>
    <div class="edit-main">
      <compPanel :class="{ '--hide': !compTabState }" class="config-panel-wp"></compPanel>
      <canvasMain class="canvas-main"></canvasMain>
      <settingPage :class="{ '--hide': !setTabState }" class="config-panel-wp"></settingPage>
    </div>
  </div>
</template>

<script>
import tabList from '@/views/dashboard/uieditor/tab/tabList'
import compPanel from '@/views/dashboard/uieditor/collect/compPanel'
import canvasMain from '@/views/dashboard/uieditor/canvas/canvasMain'
import settingPage from '@/views/dashboard/uieditor/setting/settingPage'
// import layerComp from "@/views/dashboard/uieditor/layer/layerComp";
// import layoutComp from "@/views/dashboard/uieditor/layout";
import { mapGetters } from 'vuex'

export default {
  components: {
    tabList,
    compPanel,
    canvasMain,
    settingPage
    // layoutComp,
    // layerComp,
  },
  computed: {
    ...mapGetters('editor', ['compTabState', 'setTabState', 'layerTabState', 'layoutStatus'])
  },
  beforeRouteLeave(to, from, next) {
    console.log(to.path, 'ppp')
    // this.$store.commit('editor/cleanCanvasInfo')
    next()
  }
}
</script>

<style lang="scss" scoped>
.edit-container {
  width: 100%;
  height: calc(100vh - 60px);
  background: #0c0e11;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-size: 12px;
  overflow: hidden;
}
.edit-main {
  display: flex;
  flex: 1;
  overflow: hidden;
  .canvas-main {
    flex: 1;
  }
}
.config-panel-wp {
  transition: width 0.25s ease-in-out;
  overflow: hidden;
  white-space: nowrap;
  &.--hide {
    width: 0;
  }
}
</style>
