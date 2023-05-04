/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 19:58:29
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-04-27 15:30:05
 * @FilePath: /vue-demo/src/store/modules/editor.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import _ from 'lodash'
import chartsConfig from '@/views/dashboard/uieditor/compSource/config.js'
const screenInfoVal = {
  width: 1366,
  height: 768,
  backgroundColor: 'rgb(232 234 234)', //"#2a2e34",
  backgroundImage: '',
  backgroundRepeat: 'fill',
  gridX: 24,
  gridY: 10,
  margin: [10, 10],
  compColor: '#fff',
  layoutStatus: false, // true为默认布局，false为自定义布局
  currentGrid: 'Auto'
}
const state = () => ({
  //收藏数据
  compType: {
    echarts: {
      title: '图表组件',
      open: true,
      icon: 'el-icon-star-on collect',
      children: chartsConfig.commonChars
    }
    // customComp: {
    //   title: '我的收藏',
    //   open: true,
    //   icon: 'el-icon-star-on collect',
    //   children: []
    // }
  },
  // tab栏面板数据
  editTabState: {
    // layer: {
    //   type: "layer",
    //   name: "图层",
    //   icon: "el-icon-s-operation",
    //   select: false,
    // },
    component: {
      type: 'component',
      name: '组件列表',
      icon: 'el-icon-s-data',
      select: true
    },
    setConfig: {
      type: 'setConfig',
      name: '设置',
      icon: 'el-icon-setting',
      select: false
    }
  },
  // 画布内的组件
  canvasComs: [],
  layoutGrid: {
    gridOne: {
      name: 'gridOne',
      cn_name: '布局一',
      imgSrc: 'layout-3.png',
      margin: [10, 20],
      comps: []
    },
    gridSecond: {
      name: 'gridSecond',
      cn_name: '高级排版',
      imgSrc: 'layout-3.png',
      margin: [10, 20],
      comps: []
    },
    gridThree: {
      name: 'gridThree',
      cn_name: '平均分布-3',
      imgSrc: 'layout-3.png',
      margin: [10, 20],
      comps: []
    }
  },
  // 大屏配置
  screenInfo: screenInfoVal,
  activeId: '',
  screenList: [],
  templeteList: [
    {
      name: 'empty',
      title: '空模板',
      detail: {
        width: 1366,
        height: 768,
        backgroundColor: 'rgb(232 234 234)', //"#2a2e34",
        backgroundImage: '',
        backgroundRepeat: 'fill',
        gridX: 24,
        gridY: 10,
        compColor: 'pink',
        margin: [10, 10],
        currentGrid: 'Auto'
      },
      component: []
    }
  ]
})
const getters = {
  compTabState: (state) => state.editTabState.component.select,
  setTabState: (state) => state.editTabState.setConfig.select,
  // layerTabState: (state) => state.editTabState.layer.select,
  customComp: (state) => state.compType.customComp,
  layoutStatus: (state) => state.screenInfo.currentGrid == 'Auto',
  canvasActiveComp: (state) => {
    const { currentGrid } = state.screenInfo
    if (currentGrid == 'Auto') {
      const arr = state.canvasComs.filter((item) => item.i === state.activeId)
      return arr[0]
    } else {
      const { layoutGrid } = state
      const { comps } = layoutGrid[currentGrid]
      return comps[state.activeId]
    }
  }
}

const actions = {
  getCollectComps(context, n) {
    setTimeout(() => {
      console.log(context)
      const names = ['lineBar', 'progressCom']
      context.commit('setCustomComps', names)
    }, 5000)
  }
}

const mutations = {
  updateEditTabSelect(state, obj) {
    state.editTabState[obj.type].select = !!obj.value
  },
  addCustomComp(state, name) {
    state.compType.customComp.children.push(name)
  },
  subCustomComp(state, name) {
    const { children } = state.compType.customComp
    const index = _.indexOf(children, name)
    if (index != -1) {
      children.splice(index, 1)
    }
  },
  setCustomComps(state, names) {
    const { customComp } = state.compType
    customComp.children = names
  },
  addCanvasComs(state, obj) {
    state.canvasComs.push(_.cloneDeep(obj))
  },
  subCanvasComs(state, i) {
    const { canvasComs } = state
    const index = _.findIndex(canvasComs, (item) => item.i === i)
    if (index != -1) {
      canvasComs.splice(index, 1)
    }
  },
  upDateCanvasComs(state, obj) {},
  // 修改编辑器外层配置
  updateScreenInfo(state, obj) {
    state.screenInfo[obj.key] = obj.value
  },
  // 更新当前高亮的组件id
  updateActiveId(state, val) {
    state.activeId = val
  },
  updateActiveComStyle(state, obj) {
    const { key, value } = obj
    if (state.screenInfo.currentGrid == 'Auto') {
      const arr = state.canvasComs.filter((item) => item.i === state.activeId)
      if (arr[0]) {
        _.set(arr[0], key, value)
      }
    } else {
      // const comp =
      //   state.layoutComsObj[state.screenInfo.currentGrid][state.activeId];
      const { layoutGrid } = state
      const { comps } = layoutGrid[state.screenInfo.currentGrid]
      const comp = comps.filter((item) => item.i === state.activeId)
      if (comp[0]) {
        _.set(comp[0], key, value)
      }
      // const comp = comps[state.activeId];
    }
  },
  setLayoutComps(state, obj) {
    const { type, data } = obj
    const { layoutGrid } = state
    layoutGrid[type].comps = _.cloneDeep(data)
    console.log(layoutGrid[type].comps, 'layoutGrid[type].comps')
  },
  updateLayoutComs(state, obj) {
    const { type, data } = obj
    const { i } = data
    const { layoutGrid } = state
    const { comps } = layoutGrid[type]
    const index = _.findIndex(comps, (item) => item.i === i)
    if (index != -1) {
      comps.splice(index, 1, data)
    }

    // Vue.set(comps, i, data);
  },
  subLayoutComs(state, obj) {
    const { type, key } = obj
    const { layoutGrid } = state
    const { comps } = layoutGrid[type]
    const index = _.findIndex(comps, (item) => item.i === key)
    if (index != -1) {
      const data = {
        i: key,
        component: {
          w: comps[index].component.w,
          h: comps[index].component.h
        }
      }
      comps.splice(index, 1, data)
    }
  },
  updateActiveGrid(state, val) {
    state.screenInfo.currentGrid = val
    state.activeId = ''
  },
  updateScreen(state, obj) {
    const { detail, component } = obj
    state.screenInfo = _.cloneDeep(detail)
    if (state.screenInfo.currentGrid != 'Auto') {
      const layoutIndex = state.screenInfo.currentGrid
      state.layoutGrid[layoutIndex].comps = _.cloneDeep(component)
    } else {
      state.canvasComs = _.cloneDeep(component)
    }
  },
  addScreenList(state, obj) {
    state.screenList.push(obj)
  },
  updateMargin(state, val) {
    state.screenInfo.margin = [...val]
  },
  cleanCanvasInfo(state) {
    state.screenInfo = screenInfoVal
    state.canvasComs = []
    Object.keys(state.layoutGrid).forEach((key) => {
      state.layoutGrid[key].comps = []
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
