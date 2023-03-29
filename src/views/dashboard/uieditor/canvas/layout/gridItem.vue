<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-11-21 16:25:51
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-30 17:34:17
 * @FilePath: /qiankun/saber-admin/src/components/uieditor/canvas/layout/gridItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-col :span="w" :offset="0" :style="style" :data_id="i">
    <!-- <Shape
      :key="item.id"
      :default-style="item.style"
      :style="getShapeStyle(item.style)"
      :active="item.id === (curComponent || {}).id"
    > -->
    <div class="grid-item" ref="gridItem" @click="select">
      <slot></slot>
      <!-- <span
        class="vue-rtl-resizable-handle"
        draggable="false"
        @mousedown="handleMouseDown"
      ></span> -->
    </div>
    <!-- </Shape> -->
  </el-col>
</template>

<script>
// import Shape from "@/views/dashboard/uieditor/canvas/layout/shape.vue";
let preX = 0,
  preY = 0
export default {
  name: 'grid-item',
  inject: ['gridX', 'scale'],
  props: {
    w: {
      type: [Number, String],
      default: 6
    },
    h: {
      type: [Number, String],
      default: 10
    },
    i: {
      type: String,
      require: true
    },
    marginY: {
      type: [Number, String],
      default: 10
    }
  },
  components: {
    // Shape,
  },
  data() {
    return {
      baseH: 10,
      down: false
    }
  },
  computed: {
    // height() {
    //   return this.h * 10 + "px";
    // },
    style() {
      return {
        // paddingLeft: "10px",
        // paddingRight: "10px",
        marginBottom: this.marginY + 'px',
        height: this.h * this.baseH + 'px'
      }
    }
  },
  methods: {
    select() {
      this.$emit('select', { i: this.i, target: this.$refs.gridItem })
    },
    handleResize(event) {
      const { clientY, clientX, target } = event
      const { width } = this.$refs.gridItem.getBoundingClientRect()
      let gridItem = this.$refs.gridItem
      gridItem.style.width = clientX - preX + gridItem.offsetWidth + 'px'
      gridItem.style.height = clientY - preY + gridItem.offsetHeight + 'px'
      preX = clientX
      preY = clientY
    },
    handleDragOver(e) {},
    handleMouseDown(e) {
      const { clientY, clientX } = e
      preX = clientX
      preY = clientY
      this.down = true
    },
    splitH() {
      if (this.$parent.$el) {
        return (this.$parent.$el.offsetWidth / this.gridX) * 0.66
      } else {
        return this.baseH
      }
    }
  },
  created() {
    // const _this = this;
    // document.addEventListener("mousemove", (e) => {
    //   if (this.down) {
    //     _this.handleResize(e);
    //   }
    // });
    // document.addEventListener("mouseup", (e) => {
    //   this.down = false;
    // });
  },
  mounted() {
    this.baseH = this.splitH()
  }
}
</script>

<style lang="scss" scoped>
.grid-item {
  position: relative;
  width: 100%;
  height: 100%;
  // border: 1px dashed #fff;
  box-sizing: border-box;
  border-radius: 6px;
  & > .vue-rtl-resizable-handle {
    color: #fff;
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAGpJREFUOE/tk7ENwCAMBO83g8miTBY2+wjJVZQCgQsKXLk6/Z9lkTxK5nGA60aPww0c2i7AA1RJbfkoAbyAOwX4lTSV0HaviKSakjCARZLSHU5XjiS9ZvvbQ8H4lW0baOGtO1yrnJ5w9Ide8O9CFc7YKGUAAAAASUVORK5CYII=');
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
    z-index: 5000;
  }
}
.selected {
  border: 2px dashed #3181ff;
}
</style>
