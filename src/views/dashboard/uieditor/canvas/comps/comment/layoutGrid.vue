<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 10:55:32
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-10 16:16:36
 * @FilePath: /saber/src/components/uieditor/canvas/layoutPanel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout-wrap" @keyup.delete="deleteItem">
    <el-row :gutter="margin[0]" ref="container" class="container">
      <el-col
        :offset="0"
        v-for="item in list"
        :span="item.component.w"
        :key="item.i"
        :style="`height:${item.component.h * baseH}px;margin-bottom:${margin[1]}px`"
      >
        <layoutGridComp
          @select="clickComp"
          @createCom="createComp"
          :activeId="currActiveId"
          :i="item.i"
          :ref="item.i"
          :attr="item.component"
          :item="item"
          :styleOption="style"
        ></layoutGridComp>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import layoutGridComp from '@/views/dashboard/uieditor/canvas/comps/comment/layoutGridComp.vue'
// import common from "@/views/dashboard/uieditor/canvas/comps/commont/common.js";
import { guid } from '@/views/dashboard/uieditor/utils/base.js'
import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'
import { mapState } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      gridX: 24,
      baseH: 10
    }
  },
  computed: {
    ...mapState({
      layoutComsObj: (state) => state.editor.layoutGrid,
      activeId: (state) => state.editor.activeId,
      screenInfo: (state) => state.editor.screenInfo
    }),
    compList: {
      get() {
        return this.layoutComsObj[this.name].comps
      },
      set(val) {}
    },
    currActiveId: {
      get() {
        return this.activeId
      },
      set(val) {
        this.$store.commit('editor/updateActiveId', val)
      }
    },
    margin() {
      return this.layoutComsObj[this.name].margin
    },
    style() {
      return {
        background: this.screenInfo.compColor
      }
    }
  },
  components: {
    layoutGridComp
  },
  methods: {
    clickComp(val) {
      this.currActiveId = val
    },
    deleteItem() {
      if (this.activeId) {
        this.$refs[this.activeId][0] && this.$refs[this.activeId][0].delItem()
        this.$refs[this.activeId].delItem && this.$refs[this.activeId].delItem()
        this.$store.commit('editor/subLayoutComs', {
          type: this.name,
          key: this.currActiveId
        })
        this.currActiveId = ''
      }
    },
    cancelSelComp() {
      this.currActiveId = ''
    },
    createComp(val) {
      this.$store.commit('editor/updateLayoutComs', {
        type: this.name,
        data: val
      })
    },
    getBaseH() {
      if (this.$refs.container) {
        const el = this.$refs.container.$el
        return (el.offsetWidth / this.gridX) * 0.66
      } else {
        return 10
      }
    }
  },
  mounted() {
    this.baseH = this.getBaseH()
  },
  created() {
    this.$store.commit('editor/setLayoutComps', {
      type: this.name,
      data: this.list
    })
    canvasBus.on('delComp', this.deleteItem)
    canvasBus.on('cancelSelComp', this.cancelSelComp)
  },
  beforeDestroy() {
    canvasBus.off('delComp', this.deleteItem)
    canvasBus.off('cancelSelComp', this.cancelSelComp)
  }
}
</script>
<style lang="scss" scoped>
.layout-wrap {
  .container {
    // margin-left: 0px !important;
    margin-right: 0px !important;
    height: 100%;
  }
}
</style>
