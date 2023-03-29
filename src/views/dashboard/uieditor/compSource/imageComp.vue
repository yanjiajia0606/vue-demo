<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 10:12:09
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-12 14:31:03
 * @FilePath: /saber/src/components/uieditor/compSource/lineBarChart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <collectCard @clickStar="handleCollect" :isCollect="isActive">
    <imageCom></imageCom>
  </collectCard>
</template>

<script>
import collectCard from '@/views/dashboard/uieditor/collect/collectCard'
import imageCom from '@/views/dashboard/uieditor/imageCom'
import compSel from '@/views/dashboard/uieditor/static/js/compSel'
// import { mapGetters } from "vuex";
export default {
  mixins: [compSel],
  data() {
    return {
      settingVal: {
        name: 'imageCom',
        title: '图片',
        path: '@/views/dashboard/uieditor/imageCom',
        imgSrc: '',
        style: {}
      },
      isActive: false
    }
  },
  components: {
    imageCom,
    collectCard
  }
}
</script>

<style lang="scss" scoped></style>
