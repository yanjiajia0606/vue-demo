<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 10:55:32
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-10 15:19:38
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
  name: 'gridSecond',
  data() {
    return {
      list: [],
      name: 'gridSecond'
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
    const id1 = guid()
    this.list.push({
      component: { w: 24, h: 3 },
      i: id1
    })
    const id2 = guid()
    this.list.push({
      component: { w: 18, h: 6 },
      i: id2
    })
    const id3 = guid()
    this.list.push({
      component: { i: id3, w: 6, h: 6 },
      i: id3
    })
    for (var i = 0; i < 6; i++) {
      const i = guid()
      this.list.push({
        component: { w: 12, h: 8 },
        i
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
