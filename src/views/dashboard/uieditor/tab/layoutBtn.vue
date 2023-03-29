<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 11:18:18
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-06 19:13:19
 * @FilePath: /saber/src/components/uieditor/tab/layoutBtn.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout-main">
    <div class="layout-btn">
      <div class="btn select-btn" @click="handleLayout" :class="{ isActive: show }">
        <el-tooltip class="item" effect="dark" content="布局" placement="bottom">
          <i class="el-icon-menu"></i>
        </el-tooltip>
      </div>
      <layoutSetting :show="show" @update:show="closePanel"></layoutSetting>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import layoutSetting from '@/views/dashboard/uieditor/tab/layoutSetting.vue'
import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'

export default {
  data() {
    return {
      show: true
    }
  },
  computed: {
    ...mapState({
      layoutGrid: (state) => state.editor.layoutGrid,
      currentGrid: (state) => state.editor.screenInfo.currentGrid
    }),
    ...mapGetters('editor', ['layoutStatus']),
    activeGrid: {
      get() {
        return this.currentGrid
      }
    }
  },
  components: { layoutSetting },
  mounted() {
    canvasBus.on('closePanel', this.closePanel)
  },
  methods: {
    handleLayout() {
      this.show = !this.show
    },
    closePanel() {
      this.show = false
    }
  },
  beforeDestroy() {
    canvasBus.off('closePanel', this.closePanel)
  }
}
</script>
<style lang="scss" scoped>
.btn {
  width: 38px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  box-shadow: inset 0 0 0 1px rgba(255, 235, 235, 0.1), 0 0 0 1px #181818;
  font-size: 14px;
  cursor: pointer;
}

.select-btn {
  margin-right: 5px;
}
.isActive {
  background: #2681ff;
}
.layout-main {
  height: 100%;
  display: flex;
  align-items: center;
  .layout-btn {
    font-size: 12px;
    margin-left: 15px;
  }
}
</style>
