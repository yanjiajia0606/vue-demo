<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 19:40:19
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-07 14:03:35
 * @FilePath: /saber/src/components/uieditor/layer/layerComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layer-container">
    <div class="layer-top">
      布局
      <i class="el-icon-arrow-left icon-btn" @click="handleBtn"></i>
    </div>
    <div class="layer-wrap">
      <layerItem
        v-for="item in canvasComs"
        :title="item.title"
        :imgSrc="item.imgSrc"
        :key="item"
        :data="item"
      ></layerItem>
    </div>
    <div class="bottom-slider"></div>
  </div>
</template>

<script>
import layoutItem from '@/views/dashboard/uieditor/layout/layoutItem'
import { mapState } from 'vuex'

export default {
  name: 'layoutComp',
  computed: {
    ...mapState({
      canvasComs: (state) => state.editor.canvasComs
    })
  },
  components: {
    layoutItem
  },
  methods: {
    handleBtn() {
      this.$store.commit('editor/updateEditTabSelect', {
        type: 'layer',
        value: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layer-container {
  position: relative;
  width: 200px;
  background: #1d1f26;
  margin-right: 1px;
  .layer-top {
    background: #2e343c;
    text-indent: 10px;
    height: 30px;
    color: #bcc9d4;
    line-height: 30px;
    position: relative;
    user-select: none;
    .icon-btn {
      position: absolute;
      right: 5px;
      line-height: 30px;
      cursor: pointer;
    }
  }
  .bottom-slider {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #232528;
    box-shadow: 0 -1px #000;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    z-index: 1;
    padding-left: 120px;
  }
}
</style>
