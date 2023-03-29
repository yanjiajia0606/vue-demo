<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-12 18:04:50
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-12 17:54:21
 * @FilePath: /saber-admin/src/components/uieditor/canvas/dynamicPanel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="layout-container"
    @drop.prevent.stop="handleDrop"
    @dragover.prevent.stop="handleDragOver"
  >
    <gridLayout :gutter="margin[0]">
      <grid-item
        v-for="item in layout"
        :w="item.component.w"
        :h="item.component.h"
        :i="item.i"
        :key="item.i"
        @select="handleCompClick"
        :ref="item.i"
        :marginY="margin[1]"
      >
        <editNode
          :value="item.component"
          class="edit-container"
          :ref="`_chart_${item.i}`"
          :styleOption="style"
        ></editNode>
      </grid-item>
    </gridLayout>
  </div>
</template>

<script>
import gridItem from '@/views/dashboard/uieditor/canvas/layout/gridItem'
import gridLayout from '@/views/dashboard/uieditor/canvas/layout/gridLayout'

import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'
import _ from 'lodash'
import { guid } from '@/views/dashboard/uieditor/utils/base.js'
import editNode from '@/views/dashboard/uieditor/canvas/editNode.vue'
import { mapState } from 'vuex'

export default {
  components: {
    editNode,
    gridLayout,
    gridItem
  },
  inject: ['scale'],
  provide() {
    return {
      gridX: this.gridX
    }
  },
  data() {
    return {
      width: 6,
      height: 6,
      // marginX: 10,
      // marginY: 10,
      picked: null
      // activeId: "",
    }
  },
  computed: {
    ...mapState({
      canvasComs: (state) => state.editor.canvasComs,
      screenInfo: (state) => state.editor.screenInfo,
      activeId: (state) => state.editor.activeId
    }),
    layout: {
      get() {
        return this.canvasComs
      },
      set(data) {
        // this.$store.commit("editor/upDateCanvasComs", data);
      }
    },
    currActiveId: {
      get() {
        return this.activeId
      },
      set(val) {
        this.$store.commit('editor/updateActiveId', val)
      }
    },
    gridX() {
      return this.screenInfo.gridX
    },
    gridY() {
      return this.screenInfo.gridY
    },
    column() {
      return this.gridX / this.width
    },
    style() {
      return {
        background: this.screenInfo.compColor
      }
    },
    margin() {
      return this.screenInfo.margin
    }
  },
  mounted() {
    this.picked = new Set()
    if (this.$route.query.column) {
      const { column } = this.$route.query
      this.height = this.width = this.gridX / column
    }
    this.marginX = this.screenInfo.margin[0]
    this.marginY = this.screenInfo.margin[1]

    canvasBus.on('createComp', this.createComp)
    canvasBus.on('cancelSelComp', this.cancelSelComp)
    canvasBus.on('delComp', this.deleteItem)
    canvasBus.on('width', this.updateWidth)
    canvasBus.on('height', this.updateHeight)
    // canvasBus.on('marginX', this.updateMarginX)
    // canvasBus.on('marginY', this.updateMarginY)
    canvasBus.on('select', this.dealSelBtn)
  },
  methods: {
    // removeItem: function (val) {
    //   const index = this.layout.map((item) => item.i).indexOf(val);
    //   this.layout.splice(index, 1);
    // },
    createComp(compVal) {
      const i = guid()
      const attr = {
        w: this.width,
        h: this.height
      }
      const data = _.cloneDeep(compVal)
      data.component = { ...data.component, ...attr }
      data.i = i
      this.$store.commit('editor/addCanvasComs', data)
    },
    getComDataById(i) {
      const comp = _.find(this.layerTree, { i })
      return comp
    },
    handleCompClick(param) {
      const { i, target } = param
      this.pickedTo(i, target)
    },
    pickedTo(key, target) {
      const picked = this.picked
      if (picked.has(key)) {
        target.classList.remove('selected')
        picked.delete(key)
      } else {
        target.classList.add('selected')
        picked.add(key)
      }
    },
    //取消选择
    deSelect() {
      this.picked.forEach((i) => {
        const target = this.$refs[i][0].$refs.gridItem
        this.pickedTo(i, target)
        // this.$refs[i][0].$el.classList.remove("selected");
      })
    },
    setStyle(fn) {
      const _this = this
      this.picked.forEach((i) => {
        this.layout.forEach((item) => {
          if (i === item.i) {
            if (fn) {
              fn.call(_this, item)
            }
          }
        })
      })
    },
    /* 勿删，否则无法触发拖拽结束事件！！！！ */
    handleDragOver(e) {},
    async handleDrop(e) {
      let dragData = e.dataTransfer.getData('application/json')
      try {
        dragData = JSON.parse(dragData)
        if (!dragData || dragData.type !== 'com') return
        const compData = dragData.data

        this.createComp(compData)
      } catch (err) {
        console.error(err)
      }
    },
    cancelSelComp() {
      this.deSelect()
      // this.currActiveId = "";
    },
    deleteItem() {
      this.picked.forEach((item) => {
        this.$store.commit('editor/subCanvasComs', item)
        this.picked.delete(item)
      })
    },
    selectAll() {
      this.picked.clear()
      this.layout.forEach((item) => {
        const i = item.i
        const target = this.$refs[i][0].$refs.gridItem
        this.pickedTo(i, target)
      })
    },
    dealSelBtn(val) {
      if (val === '1') {
        this.selectAll()
      } else {
        this.deSelect()
      }
    },
    updateWidth(width) {
      this.width = width
      this.setStyle(function (item) {
        item.component.w = this.width
        this.initComp(item)
      })
    },
    updateHeight(height) {
      this.height = height
      this.setStyle(function (item) {
        item.component.h = this.height
        this.initComp(item)
      })
    },
    updateMarginX(marginX) {
      this.marginX = marginX
    },
    updateMarginY(marginY) {
      this.marginY = marginY
    },
    initComp(item) {
      const { i } = item
      const comp = this.$refs['_chart_' + item.i]
      const editComp = Array.isArray(comp) ? comp[0].$refs.editComp : comp.$refs.editComp
      editComp && editComp.init && editComp.init()
    }
    // removeItem(i) {
    //   this.$store.commit("editor/subCanvasComs", i);
    // },
  },
  beforeDestroy() {
    canvasBus.off('createComp', this.createComp)
    canvasBus.off('cancelSelComp', this.cancelSelComp)
    canvasBus.off('delComp', this.deleteItem)
    canvasBus.off('width', this.updateWidth)
    canvasBus.off('height', this.updateHeight)
    // canvasBus.off('marginX', this.updateMarginX)
    // canvasBus.off('marginY', this.updateMarginY)
    canvasBus.off('select', this.dealSelBtn)
  }
}
</script>
<style lang="scss" scoped>
.edit-container {
  pointer-events: none;
}
.layout-container {
  width: 100%;
  height: 1000px;
}
</style>
