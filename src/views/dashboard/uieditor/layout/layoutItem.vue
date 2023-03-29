<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 20:15:50
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-05 11:11:31
 * @FilePath: /saber/src/components/uieditor/layer/layerItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="components-list-item"
    :draggable="draggable"
    @dragstart="handleDragStart"
    @click.stop="handleClick"
  >
    <div class="components-item-img" :style="{ backgroundImage: backgroundImage }"></div>
    <el-tooltip :content="title" popper-class="atooltip" :visible-arrow="false" placement="top">
      <div class="components-item-text">{{ title }}</div>
    </el-tooltip>
  </div>
</template>

<script>
import { replaceUrl } from '@/views/dashboard/uieditor/utils/base'
export default {
  name: 'layerItem',
  props: {
    draggable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: '//img.alicdn.com/tfs/TB17NeSDSf2gK0jSZFPXXXsopXa-160-116.png'
    },
    data: {
      type: Object
    }
  },

  computed: {
    backgroundImage: function () {
      let imgSrc = this.imgSrc
        ? replaceUrl(this.imgSrc)
        : '//img.alicdn.com/tfs/TB17NeSDSf2gK0jSZFPXXXsopXa-160-116.png'
      return 'url(' + imgSrc + ')'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.data)
    },
    handleDragStart(e) {
      const dragData = {
        type: 'com',
        data: this.data
      }
      e.dataTransfer.setData('application/json', JSON.stringify(dragData))
    }
  }
}
</script>

<style lang="scss" scoped>
.components-list-item {
  width: 100%;
  height: 48px;
  background: transparent;
  color: #fff;
  padding-right: 6px;
  display: flex;
  align-items: center;
  position: relative;
}
.components-item-img {
  width: 53px;
  height: 34px;
  flex: none;
  display: block;
  border: 1px solid #3a4659;
  background: #17191c;
  background-clip: content-box;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-right: 10px;
  margin-left: 6px;
}
</style>
