<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 10:12:09
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-05 20:14:30
 * @FilePath: /saber/src/components/uieditor/compSource/lineBarChart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <collectCard @clickStar="handleCollect" :isCollect="isSel">
    <component :is="comp" ref="compRef" v-bind="$attrs" v-on="$listeners"></component>
  </collectCard>
</template>

<script>
import collectCard from '@/views/dashboard/uieditor/collect/collectCard'
import compConfig from '@/views/dashboard/uieditor/compSource/compConfig.js'
import collectComps from '@/views/dashboard/uieditor/compSource/components.js'
import { mapGetters } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      default: 'lineBar'
    }
  },
  data() {
    return {
      comp: null,
      config: {}
    }
  },
  components: {
    collectCard
  },
  computed: {
    ...mapGetters('editor', ['customComp']),
    isSel() {
      return this.customComp.children.includes(this.name)
    }
  },
  created() {
    //组件基础配置
    this.config = compConfig[this.name]
    const { name } = this.config.component
    //获取组件
    this.comp = collectComps[name] || ''
    //判断是否被收藏
    // this.isSel = this.customComp.children.includes(this.name);
  },
  methods: {
    handleCollect(val) {
      // this.isSel = val;
      if (!this.isSel) {
        this.$store.commit('editor/addCustomComp', this.name)
      } else {
        this.$store.commit('editor/subCustomComp', this.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
