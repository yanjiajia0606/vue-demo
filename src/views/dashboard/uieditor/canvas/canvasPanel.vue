<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-10 18:25:59
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-11 11:32:38
 * @FilePath: /saber-admin/src/components/uieditor/canvas/canvasPanel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="canvas-content"
    :style="`--scale:${scale.value};--width:${width}px;--height:${height}px;`"
  >
    <div
      class="canvas-panel"
      :style="`--width:${width}px;--height:${height}px;backgroundColor:${backgroundColor}`"
    >
      <dynamicPanel v-if="layoutStatus"></dynamicPanel>
      <layoutPanel v-else></layoutPanel>
    </div>
  </div>
</template>

<script>
import dynamicPanel from '@/views/dashboard/uieditor/canvas/dynamicPanel'
// import dynamicPanel from "@/components/view/index";
import layoutPanel from '@/views/dashboard/uieditor/canvas/layoutPanel'

import { mapState, mapGetters } from 'vuex'
var dashboardInfo = {
  id: 'screenId_123',
  name: '仪表盘1',
  detail: {
    width: 1366,
    height: 768,
    backgroundColor: 'rgb(232 234 234)',
    backgroundImage: '',
    backgroundRepeat: 'fill',
    gridX: 24,
    gridY: 10,
    margin: [10, 10],
    compColor: '#fff',
    layoutStatus: false,
    currentGrid: 'Auto'
  },
  component: [
    {
      name: 'progressCom',
      title: '进度条',
      imgSrc: '',
      component: {
        name: 'progressCom',
        prop: null,
        attr: {},
        w: 12,
        h: 12
      },
      i: '4ce40855-d103-4487-bcd0-fda2cb7a4a93'
    },
    {
      name: 'progressCom',
      title: '进度条',
      imgSrc: '',
      component: {
        name: 'progressCom',
        prop: null,
        attr: {},
        w: 12,
        h: 12
      },
      i: 'bab0baae-dda2-4342-86b1-38a57be9c2df'
    },
    {
      name: 'lineBar',
      title: '折线-柱形图',
      imgSrc: 'lineBar.png',
      component: {
        name: 'lineBar',
        prop: {},
        attr: {},
        w: 12,
        h: 12
      },
      i: '85829bcd-fdcc-4e3e-b47b-29c811d24723'
    }
  ]
}
export default {
  name: 'canvasPanel',
  inject: ['scale'],
  data() {
    return {}
  },
  computed: {
    ...mapState({
      screenInfo: (state) => state.editor.screenInfo
    }),
    ...mapGetters('editor', ['layoutStatus']),
    // scaleVal() {
    //   return this.scale();
    // },
    width() {
      return this.screenInfo.width
    },
    height() {
      return this.screenInfo.height
    },
    backgroundColor() {
      return this.screenInfo.backgroundColor
    }
  },
  components: {
    dynamicPanel,
    layoutPanel
  },
  created() {
    const { id } = this.$route.query
    // setTimeout(() => {
    //   this.$store.commit("editor/updateScreen", dashboardInfo);
    // }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.canvas-content {
  width: var(--width);
  padding-right: 20px;
  position: absolute;
  top: 80px;
  left: 80px;
  transform: scale(var(--scale));
  transform-origin: 0 0;
  transition: all 0.2s ease-in-out;
}
.canvas-panel {
  box-sizing: border-box;
  position: absolute;
  min-height: var(--height);
  width: var(--width);
  background-color: var(--backgroundColor);
  // box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
}
</style>
