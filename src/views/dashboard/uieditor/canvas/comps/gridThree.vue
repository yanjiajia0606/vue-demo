<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 10:55:32
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-10 15:18:46
 * @FilePath: /saber/src/components/uieditor/canvas/layoutPanel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout-wrap">
    <layoutGrid :name="name" :list="list"></layoutGrid>
  </div>
</template>

<script>
import { guid } from '@/views/dashboard/uieditor/utils/base.js'
import layoutGrid from '@/views/dashboard/uieditor/canvas/comps/comment/layoutGrid.vue'
import { mapState } from 'vuex'
export default {
  name: 'gridThree',
  data() {
    return {
      list: [],
      name: 'gridThree'
    }
  },
  components: {
    layoutGrid
    // editNode,
  },
  computed: {
    ...mapState({
      layoutComsObj: (state) => state.editor.layoutGrid,
      activeId: (state) => state.editor.activeId
    }),
    compList: {
      get() {
        return this.layoutComsObj[this.name].comps
      },
      set(val) {}
    }
  },
  created() {
    if (this.compList.length) {
      this.list = this.compList
      return
    }
    for (var i = 0; i < 9; i++) {
      const i = guid()
      this.list.push({
        component: { w: 8, h: 10 },
        i
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-wrap {
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
  // padding: 0 10px;
}
// .layout-wrap-top {
//   width: 100%;
//   height: 80px;
//   margin-bottom: 20px;
// }
// .layout-wrap-item {
//   width: 30%;
//   height: 300px;
//   margin: 10px 0;
// }
</style>
