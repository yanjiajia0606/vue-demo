<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 10:55:32
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-12 13:55:38
 * @FilePath: /saber-admin/src/components/uieditor/canvas/layoutPanel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <div> -->
  <component :is="currentGrid"></component>
  <!-- </div> -->
</template>

<script>
import { mapState } from 'vuex'
import layoutComps from './comps'
export default {
  data() {
    return {}
  },
  components: {
    // editNode,
  },
  computed: {
    ...mapState({
      currentGrid: (state) => state.editor.screenInfo.currentGrid,
      layoutGrid: (state) => state.editor.layoutGrid
    })
  },
  methods: {
    init() {
      Object.keys(layoutComps).forEach((ele) => {
        let component = layoutComps[ele]
        Vue.component(component.name, component)
      })
    }
  },
  created() {
    this.init()
  }
}
</script>
