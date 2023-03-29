<template>
  <div
    class="components-list-item"
    :draggable="draggable"
    @dragstart="handleDragStart"
    @click.stop="handleClick"
  >
    <el-tooltip
      :content="compData.title"
      popper-class="atooltip"
      :visible-arrow="false"
      placement="top"
    >
      <div class="components-item-text">
        {{ compData.title }}
        <!-- <el-checkbox
          v-model="checked"
          class="check-box"
          size="mini"
        ></el-checkbox> -->
      </div>
    </el-tooltip>

    <div class="components-item-img" :style="{ backgroundImage: backgroundImage }"></div>
  </div>
</template>

<script>
import { replaceUrl } from '@/views/dashboard/uieditor/utils/base'
import compConfig from '@/views/dashboard/uieditor/compSource/compConfig.js'
import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'
export default {
  name: 'CompListItem',
  props: {
    draggable: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checked: false
    }
  },

  computed: {
    backgroundImage: function () {
      const { imgSrc } = this.compData
      let img = imgSrc
        ? replaceUrl(imgSrc)
        : '//img.alicdn.com/tfs/TB17NeSDSf2gK0jSZFPXXXsopXa-160-116.png'

      return 'url(' + img + ')'
    },
    compData() {
      return compConfig[this.name]
    }
  },
  methods: {
    handleClick() {
      canvasBus.emit('createComp', this.compData)
      this.checked = true
    },
    handleDragStart(e) {
      const dragData = {
        type: 'com',
        data: this.compData
      }
      e.dataTransfer.setData('application/json', JSON.stringify(dragData))

      this.checked = true
    }
  }
}
</script>

<style lang="scss" scoped>
.components-list-item {
  width: 80px;
  cursor: pointer;
  display: inline-block;
  color: #bcc9d4;
  vertical-align: top;
  user-select: none;
  flex: none;
  margin-bottom: 6px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  .components-item-text {
    font-size: 12px;
    padding: 0 5px;
    text-align: center;
    overflow: hidden;
    background: #212326;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 22px;
  }
  .components-item-img {
    overflow: hidden;
    width: 100%;
    height: 58px;
    background-clip: content-box;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #17191c;
    position: relative;
    text-align: center;
    box-sizing: content-box;
    transition: border-color 0.2s;
    pointer-events: none;
  }
  .check-box {
    margin-left: 5px;
  }
}
</style>
