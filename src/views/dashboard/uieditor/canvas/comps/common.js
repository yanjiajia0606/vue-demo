/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-19 18:23:27
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-02 14:34:26
 * @FilePath: /saber/src/components/uieditor/canvas/comps/common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      gridX: 24,
      baseH: 10
    }
  },
  computed: {
    ...mapState({
      layoutComsObj: (state) => state.editor.layoutGrid,
      activeId: (state) => state.editor.activeId
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
    }
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
    createCom(val) {
      // const { id, data } = val;
      this.$store.commit('editor/addLayoutComs', {
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
  created() {
    canvasBus.on('delComp', this.deleteItem)
    canvasBus.on('cancelSelComp', this.cancelSelComp)
  },
  beforeDestroy() {
    canvasBus.off('delComp', this.deleteItem)
    canvasBus.off('cancelSelComp', this.cancelSelComp)
  }
}
