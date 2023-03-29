<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 10:12:09
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-05 16:37:58
 * @FilePath: /saber/src/components/uieditor/compSource/lineBarChart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="edit-node">
    <component
      :is="comp"
      ref="editComp"
      :style="{ '--background': background, '--scale': scale }"
      class="comp-item"
      v-bind="$attrs"
      v-on="$listeners"
    ></component>
  </div>
</template>

<script>
import collectComps from '@/views/dashboard/uieditor/compSource/components.js'
export default {
  props: {
    value: {
      type: String,
      default() {
        return {
          name: 'imageCom'
        }
      }
    },
    styleOption: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isSel: false,
      comp: null,
      scale: 1
    }
  },
  components: {},
  computed: {
    background() {
      return this.styleOption.background || '#fff'
    }
  },
  created() {
    this.comp = collectComps[this.value.name]
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.edit-node {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  background: var(--background);
  .comp-item {
    background: var(--background);
    height: 100%;
    width: 100%;
  }
}
</style>
