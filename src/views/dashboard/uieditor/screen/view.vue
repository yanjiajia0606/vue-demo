<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-25 16:08:41
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-19 15:17:57
 * @FilePath: /saber-admin/src/components/uieditor/screen/view.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-row
    :gutter="margin[0]"
    class="view-container"
    ref="view"
    :style="{ '--background': background }"
  >
    <el-col
      v-for="item in layout"
      :span="item.component.w"
      :h="item.component.h"
      :i="item.i"
      :key="item.i"
      :ref="item.i"
      :style="`height:${item.component.h * baseH}px;margin-bottom:${margin[1]}px;`"
    >
      <editNode :value="item" :styleOption="style"></editNode>
    </el-col>
  </el-row>
</template>

<script>
import editNode from '@/views/dashboard/uieditor/canvas/editNode.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return { marginY: 10, marginX: 10, baseH: 10, gridX: 24 }
  },
  components: {
    editNode
  },
  computed: {
    ...mapState({
      canvasComs: (state) => state.editor.canvasComs,
      screenInfo: (state) => state.editor.screenInfo,
      layoutGrid: (state) => state.editor.layoutGrid
    }),
    // scaleVal() {
    //   return this.scale();
    // },
    layout: {
      get() {
        const { currentGrid } = this.screenInfo
        if (currentGrid == 'Auto') {
          return this.canvasComs
        } else {
          const layout = Object.values(this.layoutGrid[currentGrid].comps)
          return layout

          return
        }
      },
      set(data) {
        // this.$store.commit("editor/upDateCanvasComs", data);
      },
      gridX() {
        return this.screenInfo.gridX
      }
    },
    margin() {
      const { margin, currentGrid } = this.screenInfo
      if (currentGrid == 'Auto') {
        return margin
      } else {
        const marginLayout = Object.values(this.layoutGrid[currentGrid].margin)
        return marginLayout
      }
    },
    style() {
      return {
        background: this.screenInfo.compColor
      }
    },
    background() {
      return this.screenInfo.backgroundColor
    }
  },
  mounted() {
    // const { marginX, marginY, gridX } = this.$route.query;
    // this.marginX = marginX;
    // this.marginY = marginY;
    // this.gridX = gridX;
    this.baseH = this.getBaseH()
  },
  methods: {
    getBaseH() {
      if (this.$refs.view) {
        const el = this.$refs.view.$el
        return (el.offsetWidth / this.gridX) * 0.66
      } else {
        return 10
      }
    },
    height(h) {
      return h * this.getBaseH()
    }
  }
}
</script>
<style lang="scss" scoped>
.view-container {
  margin-left: 0px !important;
  margin-right: 0px !important;
  height: 100%;
  background: var(--background);
}
</style>
