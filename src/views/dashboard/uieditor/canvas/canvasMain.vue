<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-10 18:25:23
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-02-08 18:08:45
 * @FilePath: /vue-demo/src/views/dashboard/uieditor/canvas/canvasMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="canvas-container">
    <div class="panel-container" @click="clickPanel" ref="canvasPanel">
      <SeatomRuler
        :scale="scaleVal.value"
        :translate="rulerTranslate"
        :size="rulerSize"
        ref="ruler"
      />
      <canvasPanel :style="screenInfo"></canvasPanel>
    </div>

    <div class="bottom-slider">
      <panelSlider v-model="scaleVal.value" @change="changeScale"></panelSlider>
    </div>
  </div>
</template>

<script>
import canvasPanel from '@/views/dashboard/uieditor/canvas/canvasPanel'
import panelSlider from '@/views/dashboard/uieditor/canvas/panelSlider'
import rulerLine from '@/views/dashboard/uieditor/canvas/rulerLine'
import '@/views/dashboard/uieditor/utils/shortcut.js'
import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'
// import SketchRule from 'vue-sketch-ruler'
import SeatomRuler from '@/views/dashboard/uieditor/canvas/SeatomRuler'
export default {
  data() {
    return {
      scaleVal: { value: 1 },
      startX: -96, //x轴标尺开始的坐标数值
      startY: 0,
      lines: {
        //初始化水平标尺上的参考线
        h: [],
        v: []
      },
      rendIndex: 0, //重新渲染组件
      shadow: { x: 0, y: 0 }, // 阴影大小
      isShowReferLine: true, // 显示参考线
      imgOpenData:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAbCAYAAAAOEM1uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQNSURBVHja7JdvSON1HMdfP126/shSmaZ1ntuZbTLihOnSdJlPhIquB0VR1DZM9En0wCB3qCXKVOh86mmakdGDOqyHityBidYN1HPYZqbhOZprMGTOUk/9/XryWyxvek5NIu4Lg/H+fPj8Xt/P98/n8xUkSeK/PIT7gP8GoCAI8cTQAoWAHkgFRCAA3AKmgeBRA8VkOSZgMvAy8DZQCqQf4OcFRoDPgYmzAnwdaAAuxpFlCbgGfAR4ThUwYhcE4QngExnw71FWVuax2WwBk8mkSE9PV+7t7Ymrq6vbw8PD0uDgYO7CwsK5KPc14ENJkj497FtxAwqCYAK+kvcbANXV1U6Hw6HIyMh4GlAckJHwzMzMrM1my3a5XNoo01XgPUmSdk8MCLwEfAmoAPLz872jo6OrOTk5xVGBQ0tLS575+fnt7OzsRIPBcD4pKelctL2/v3+mtrbWLIpigixfA94BNk8C+JoMlyRn7WZvb68mISEhI+IQCASmKyoq0jweT25EU6lU4aGhoZnKykpzdNzl5eWbRqPxyWAwmCZL3wJvAHeOA/iCPMsHARwOx7jdbi+JXs7t7e3lrKys1LW1NVWsJXa73ZN6vb40WltfX3cbDIZ0r9ebKUv9wLvxAhYC1+V7je7u7rG6urrn9vu1tbWNNzU1lR90KgsLC5emp6cfB5TRejgc9mg0msyoTNYDXfEAjgFmQGxpaZlobm6OBbFrMpl+dTqd+YdcLztbW1ve5ORk7X6D3++f0ul0+aFQKAXYAF6RJOn6UQGDQBrgE0VRJQjCw7EAjUbj8tTUVN4hgLubm5u3lUrlhVjG+vr6ya6ursgWaJck6fJRAW8AzwNia2vrRGNjY8xltNvtEx0dHc8eRKfX62+73W418NB+m8/nm9LpdE+Fw+FHgD+AS/Fk8CJwI7IHe3t7x2pqau7agxsbG/NqtTp3a2tLGQtwcnJyvKSk5K7JhcPhnzQaTXYwGEyVpQ+AK8c5xd9EZt/e3v59Q0ND6f5LeXFx8cfy8vILfr9fHdEUCsVOX1/fhMViqdgfOxQKzRUUFKh9Pt+JTnHk76vyPZgcqR49PT3nExMTM/+x0XZ3fePj47/Mzc2RlZVFVVVVRkpKin5/3JWVFWdRUVFeIBCInN7v5NJ55ySV5EUZ8lEArVb728jIiDcvL++ZONqo0MDAwK2ampoyURQTZXlI7ob+PI1aXAR8AegiutVqdXZ2dt6zFs/OzrosFstjLpcr+iR3A+9LkrRzKs2CrGUCV4C3on3NZrPHarX+Xlxc/MARu5nLkiRdPbVuJsa4BDQCxjj6QRH4GvgY+PksOmqF3FG/KVcc9T066s+AH86y5Y8eOXI282XQyJtkRv6d/pvk/rPz/wT41wBibRrpeMs+PAAAAABJRU5ErkJggg==', // 左上角图片
      imgClose:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAPYSURBVHja7JVPTFRXFIe/+96gGRHEhQzBFMJKSKSkLTgtGxemSXcktohW2RBmTAjUClIYZ6Cxi+fQDgOCLJgJhqTSBAtLdjaxaSqQWnDSNp2U0I6FFh0SDdV0oMx7pwuZCUXjnyZNuvBsbnLvufe7555zfleJCP+1qReQfwVRSqWmqoFDIE3A+iZXQDbGlMmmNTatP5xPn/0ohOOgLgNtIB8DOlAKvAzsBTKBP4FF4Dvge1DrzwsBaAAuAJ8CxbpuezU/P397QcFLZGVlcf/+fRYXF1lc/G3VNJM/AJ8Dw8CdZ4QoQI4AIWBXaWkpQ0ND5v79+zW73Z5+n9XVVWZnb8rExIQ2MnKZWCz2M/Dhw1d4eiTngXafz2dmZ2ebPp9P6+vrl5qaI2p8fFyi0aheUlJiHj78tpaTs0sHJB6PW4HAJ3og0I2I+AHPkyAeu91uDA4OmrW1tRpAT09vsr29XXM4ciWZTJKXl2ctLCyoHTsy1ZUro+J0OjNSWR8ZGbFcLpeeSCTOAucfBykDpvr7+7c3NjamS+bevXvJ4uIS4vE7tra2tjW/32+7ffu21Ne7rJmZb7VIJKL27Nmjp0ADAwM0NjauAW+IyM2tkAGn8/WG69e/NjVNS20iHA6vd3Z2qrq6OtMwDFswGLROnz6dcffu3WRRUZEVCARwuVzbUv6WZVmVlZXa9PT0RRFp2gq56na7Dw0ODv6jGc6cOWNdu/Zl8saNb/RgMGi1tLSo7u5uaW5u1srLK8yDBw/aursD2ubmcbtPqnA4dFVE3twKuVBeXv7e5OSkabPZ0pGEQuG/WltbicV+0Xbv3m0LBnvWW1qatbNnvclLl4b0c+c+ErfblcoLa2trptPp1CORSEBEWrdCSoBpwzB2ejyedE6Wl5fNsrIyqaiokFAopBwOh/J4PKbf79/mcDiS0WiUnJwcWyoKr9erDMNYBg6ISOxx1dWg6/pAb2+vtZF8DWBqanr96NEalUgkpKCgQJaWljRN04jH43R1dcmpU6dsgBiGobxer3qoGnz2pD5pBfx1dXWaz+czi4qKNECtrKyYY2NjVjQa1fftK7aqq99hdHRUmpqaVEdHhzU/P58xPDycAN4Hws8iK28B/tzc3LJjx96lqqrKOnCggszMzLRmPHjwQM3MzFj19fX63NwcwDJQBUymK+ApEEDtBDkOnFBKvZafv9deWFhIdnYWKysr3Lr1K0tLvydE5CvgJ1AnQZqBi88DSV1aA0qAV4CCDRX+A1gAZoEfN/w/ALqAEyAjzwvZ8mc8KukblgGqD/gCZOyxkBd//P8G8vcAMK383pmr7aEAAAAASUVORK5CYII=',
      dragSlide: false, // 拖动滚动条标记
      rulerTranslate: {
        x: 0,
        y: 0
      },
      width: 1,
      height: 1
    }
  },
  provide() {
    return {
      scale: this.scaleVal
    }
  },
  computed: {
    rulerSize() {
      return {
        width: 1920,
        height: this.height
      }
    }
  },
  components: {
    canvasPanel,
    panelSlider,
    rulerLine,
    // SketchRule,
    SeatomRuler
  },
  methods: {
    changeScale(val) {
      this.scaleVal.value = val
    },
    delItem() {
      canvasBus.emit('delComp')
    },
    clickPanel($event) {
      if ($event.target == $event.currentTarget) {
        canvasBus.emit('cancelSelComp')
      }
      // canvasBus.emit("cancelSelComp");
      canvasBus.emit('closePanel')
    },
    imgClick() {
      this.isShowReferLine = !this.isShowReferLine
    }
  },
  created() {
    this.$shortcut.bind('backspace', {
      func: this.delItem,
      params: 'delete'
    })
  },
  mounted() {
    const { height } = this.$refs.canvasPanel.getBoundingClientRect()
    // this.width = width - 20;
    this.height = height
  }
}
</script>

<style lang="scss" scoped>
.canvas-container {
  background: #2a2e34;
  position: relative;
  overflow: hidden;
  color: #000;
}
.panel-container {
  overflow: auto;
  height: calc(100% - 30px);
  width: 100%;
  position: relative;
}
.canvas-wrap {
  height: 100%;
  width: 100%;
  overflow: auto;
}
::-webkit-scrollbar {
  display: block;
  width: 4px !important;
  height: 4px !important;
  background: rgba(30, 30, 30, 0.1) !important;
}

::-webkit-scrollbar-thumb {
  background-color: #434b55 !important;
  border: 1px solid #434b55 !important;
}
.bottom-slider {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #232528;
  box-shadow: 0 -1px #000;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  z-index: 1;
  padding-left: 120px;
}
.refer-line-img {
  position: absolute;
  left: 0;
  z-index: 5;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
}
</style>
