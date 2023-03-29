<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 10:55:13
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-09 10:52:04
 * @FilePath: /saber/src/components/uieditor/canvas/layoutGridComp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    @drop.prevent="handleDrop"
    @dragover.prevent="handleDragOver"
    class="layout-grid-item"
    @click="clickItem"
    :class="{ active: isActive }"
  >
    <editNode
      :value="comp"
      :styleOption="styleOption"
      v-if="state === true"
      class="edit-container"
    ></editNode>
    <div class="tip-text" v-else>拖入组件</div>
  </div>
</template>

<script>
import editNode from '@/views/dashboard/uieditor/canvas/editNode.vue'
import _ from 'lodash'
export default {
  props: {
    // value: {
    //   type: Object,
    //   default() {
    //     return {};
    //   },
    // },
    activeId: {
      type: String,
      default: '123'
    },
    i: {
      type: String,
      default: '123'
    },
    attr: {
      type: Object
    },
    item: {
      type: Object
    },
    styleOption: {
      type: Object
    }
  },
  data() {
    return {
      state: false,
      comp: null
      // isActive: false,
    }
  },
  computed: {
    isActive() {
      return this.state && this.i === this.activeId
    }
  },
  components: {
    editNode
  },
  methods: {
    handleDragOver(e) {},
    handleDrop(e) {
      let dragData = e.dataTransfer.getData('application/json')
      try {
        if (this.comp && this.comp.name) return
        const i = this.i
        dragData = JSON.parse(dragData)
        if (!dragData || dragData.type !== 'com') return
        const data = _.cloneDeep(dragData.data)
        data.i = i
        data.component = { ...this.attr, ...data.component }
        // const defaultConfig = {
        //   opacity: 1,
        //   dispaly: "none",
        //   background: {
        //     show: true,
        //     type: "color",
        //     value: "#fff",
        //   },
        // };
        // if (data.config) {
        //   data.config = _.merge(defaultConfig, data.config);
        // } else {
        //   data.config = defaultConfig;
        // }
        this.$emit('select', i)
        this.$emit('createCom', data)
        this.state = true
        this.comp = data.component
      } catch (err) {
        console.error(err)
      }
    },
    clickItem() {
      if (this.state) {
        this.$emit('select', this.i)
      }
    },
    delItem() {
      this.state = false
      this.comp = null
    }
  },
  created() {
    this.comp = this.item
    if (this.comp.name) {
      this.state = true
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-grid-item {
  //   width: 300px;
  //   height: 300px;
  width: 100%;
  height: 100%;
  border: 1px dashed #fff;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    border: 1px dashed #3181ff;
  }
  &.active {
    border: 2px dashed #3181ff;
  }
  .tip-text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    color: #6b858f;
    border: 1px dashed #6a7984;
    border-radius: 6px;
  }
  .edit-container {
    pointer-events: none;
  }
}
</style>
