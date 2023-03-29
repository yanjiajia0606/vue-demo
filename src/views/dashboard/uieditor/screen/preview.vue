<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-25 16:08:41
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-12 10:33:58
 * @FilePath: /saber-admin/src/components/uieditor/screen/preview.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-row
    :gutter="margin[0]"
    class="view-container"
    ref="view"
    :style="{ '--background': screenInfo.backgroundColor }"
  >
    <el-col
      v-for="item in layout"
      :span="item.component.w"
      :h="item.component.h"
      :i="item.i"
      :key="item.i"
      :ref="item.i"
      :style="`height:${item.component.h * baseH}px;margin-bottom:${margin[1]}px;`"
    >
      <editNode :value="item.component" :styleOption="screenInfo.style"></editNode>
    </el-col>
  </el-row>
</template>

<script>
import editNode from '@/views/dashboard/uieditor/canvas/editNode.vue'
var dashboardInfo = {
  id: 'screenId_123',
  name: '仪表盘1',
  detail: {
    width: 1366,
    height: 768,
    backgroundColor: 'rgb(232 234 234)',
    backgroundImage: '',
    backgroundRepeat: 'fill',
    gridX: 24,
    gridY: 10,
    margin: [10, 10],
    compColor: '#fff',
    layoutStatus: false,
    currentGrid: 'gridOne'
  },
  component: [
    {
      name: 'lineBar',
      title: '折线-柱形图',
      imgSrc: 'lineBar.png',
      component: {
        w: 12,
        h: 10,
        name: 'lineBar',
        prop: {},
        attr: {}
      },
      i: '6459d0d4-bad8-4323-a10a-639ffdb27960'
    },
    {
      name: 'lineBar',
      title: '折线-柱形图',
      imgSrc: 'lineBar.png',
      component: {
        w: 12,
        h: 10,
        name: 'lineBar',
        prop: {},
        attr: {}
      },
      i: 'a1a12e29-421f-4e83-99eb-5109a7cfa74a'
    },
    {
      name: 'progressCom',
      title: '进度条',
      imgSrc: '',
      component: {
        w: 12,
        h: 10,
        name: 'progressCom',
        prop: null,
        attr: {}
      },
      i: 'a010996c-455a-4072-a2e9-6d585f202472'
    },
    {
      name: 'progressCom',
      title: '进度条',
      imgSrc: '',
      component: {
        w: 12,
        h: 10,
        name: 'progressCom',
        prop: null,
        attr: {}
      },
      i: '906532b8-755d-49e9-b14a-c7a006c2560c'
    }
  ]
}
export default {
  data() {
    return {
      marginY: 10,
      marginX: 10,
      baseH: 10,
      gridX: 24,
      layout: [],
      screenInfo: {}
    }
  },
  components: {
    editNode
  },
  computed: {
    margin() {
      const { margin, currentGrid } = this.screenInfo
      if (currentGrid == 'Auto') {
        return margin
      } else {
        const marginLayout = Object.values(this.layoutGrid[currentGrid].margin)
        return marginLayout
      }
    },
    style() {
      return {
        background: this.screenInfo.compColor
      }
    }
  },
  mounted() {
    // const { marginX, marginY, gridX } = this.$route.query;
    // this.marginX = marginX;
    // this.marginY = marginY;
    // this.gridX = gridX;
    this.$nextTick(() => {
      this.baseH = this.getBaseH()
    })
    this.screenInfo = dashboardInfo.detail
    this.layout = dashboardInfo.component
  },
  methods: {
    getBaseH() {
      console.log(this.$refs.view, 'this.$refs.view')
      if (this.$refs.view) {
        const el = this.$refs.view.$el
        return (el.offsetWidth / this.gridX) * 0.66
      } else {
        return 10
      }
    },
    height(h) {
      return h * this.getBaseH()
    }
  }
}
</script>
<style lang="scss" scoped>
.view-container {
  margin-left: 0px !important;
  margin-right: 0px !important;
  height: 100%;
  background: var(--background);
  padding: 10px 5px;
}
</style>
