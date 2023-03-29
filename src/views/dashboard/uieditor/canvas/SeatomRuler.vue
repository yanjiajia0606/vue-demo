<template>
  <div class="seatom-ruler">
    <!-- 水平标尺 -->
    <div
      ref="hRuler"
      class="ruler-container h-ruler-container"
      :style="{
        transform: `translateX(-${translate.x}px)`,
        left: cornerSize + 'px'
      }"
    >
      <div ref="hRulerCanvas" class="ruler-canvas"></div>
      <div class="lines-wrapper">
        <seatom-drag
          direction="h"
          :leftMin="21"
          v-for="item in ruler_h_lines"
          :key="item.id"
          @dragging="handleLineDrag($event, item, 'h')"
          @dragEnd="onDragstop($event, item, 'h')"
        >
          <div
            @dblclick="handleLineDblClick(item.value, 'h')"
            title="双击删除参考线"
            class="ruler-line"
            :style="{
              left: item.value * scale + tickLen * zeroTickCount + 'px'
            }"
          >
            <span :ref="`line_val${item.id}`" class="line-value">
              {{ item.value }}
            </span>
          </div>
        </seatom-drag>
      </div>
      <div
        v-if="showIndicator_h"
        class="indicator-line"
        :style="{
          left: indicator_h_val * scale + tickLen * zeroTickCount + 'px'
        }"
      >
        <span class="value">
          {{ indicator_h_val }}
        </span>
      </div>
    </div>
    <!-- 垂直标尺 -->
    <div
      ref="vRuler"
      class="ruler-container v-ruler-container"
      :style="{
        transform: `rotate(90deg) translateX(-${translate.y}px)`
      }"
    >
      <div ref="vRulerCanvas" class="ruler-canvas"></div>
      <div class="lines-wrapper">
        <seatom-drag
          direction="v"
          :topMin="1"
          v-for="item in ruler_v_lines"
          :key="item.id"
          @dragging="handleLineDrag($event, item, 'v')"
          @dragEnd="onDragstop($event, item, 'v')"
        >
          <div
            @dblclick="handleLineDblClick(item.value, 'v')"
            title="双击删除参考线"
            class="ruler-line"
            :style="{
              top: item.value * scale + tickLen * zeroTickCount + 'px'
            }"
          >
            <span :ref="`line_val${item.id}`" class="line-value">
              {{ item.value }}
            </span>
          </div>
        </seatom-drag>
      </div>
      <div
        v-if="showIndicator_v"
        class="indicator-line"
        :style="{
          left: indicator_v_val * scale + tickLen * zeroTickCount + 'px'
        }"
      >
        <span class="value">
          {{ indicator_v_val }}
        </span>
      </div>
    </div>
    <!-- 标尺左上角 -->
    <div
      class="corner"
      :style="{
        width: cornerSize + 'px',
        height: cornerSize + 'px'
      }"
    >
      <!-- 角 -->
    </div>
  </div>
</template>

<script>
import CanvasRuler from '@/views/dashboard/uieditor/utils/CanvasRuler'
import { guid } from '@/views/dashboard/uieditor/utils/base'
import { mapState } from 'vuex'

export default {
  name: 'SeatomRuler',

  props: {
    tickLen: {
      // 一个格子长度，px
      type: Number,
      default: 6
    },
    markTickCount: {
      // 几个格子标提示
      type: Number,
      default: 10
    },
    zeroTickCount: {
      // 零刻度是第几个格子
      type: Number,
      default: 10
    },
    isHalfTick: {
      // 是否标志中间刻度提示
      type: Boolean,
      default: true
    },
    cornerSize: {
      // 左上角方格尺寸
      type: Number,
      default: 20
    },
    scale: {
      type: Number,
      default: 1
    },
    translate: {
      type: Object
    },
    size: {
      type: Object,
      default() {
        return {
          width: 1920,
          height: 1080
        }
      }
    }
  },

  watch: {
    scale(val) {
      this.canvasRuler_h.updateParam({ scale: val })
      this.canvasRuler_v.updateParam({ scale: val })
    },
    size(val) {
      this.canvasRuler_h.updateParam({ width: val.width })
      this.canvasRuler_v.updateParam({ width: val.height })
    }
  },

  computed: {
    ...mapState({
      screenInfo: (state) => state.editor.screenInfo
    })
  },

  data() {
    return {
      showIndicator_h: false,
      indicator_h_val: null,
      ruler_h_lines: [],
      showIndicator_v: false,
      indicator_v_val: null,
      ruler_v_lines: []
    }
  },

  created() {
    // this.ruler_h_lines = _.cloneDeep(this.screenInfo.config.ruler_h_lines);
    // this.ruler_v_lines = _.cloneDeep(this.screenInfo.config.ruler_v_lines);
  },

  mounted() {
    const { tickLen, markTickCount, zeroTickCount, isHalfTick, scale } = this
    const { width, height } = this.size

    this.canvasRuler_h = new CanvasRuler(this.$refs.hRulerCanvas, {
      direction: 'h',
      tickLen,
      markTickCount,
      zeroTickCount,
      isHalfTick,
      scale,
      width
    })

    this.canvasRuler_v = new CanvasRuler(this.$refs.vRulerCanvas, {
      direction: 'v',
      tickLen,
      markTickCount,
      zeroTickCount,
      isHalfTick,
      scale,
      width: height
    })

    this.canvasRuler_h.on('click', (e) => {
      this.ruler_h_lines.push({ id: guid(), value: e.value })
      this.showIndicator_h = false
      // console.log('click=====', this.ruler_h_lines);
      this.updateLines('h')
    })
    this.canvasRuler_h.on('mousemove', (e) => {
      this.indicator_h_val = e.value
      this.showIndicator_h = true
    })
    this.canvasRuler_h.on('mouseleave', (e) => {
      this.showIndicator_h = false
    })

    this.canvasRuler_v.on('click', (e) => {
      this.ruler_v_lines.push({ id: guid(), value: e.value })
      this.showIndicator_v = false
      this.updateLines('v')
    })
    this.canvasRuler_v.on('mousemove', (e) => {
      this.indicator_v_val = e.value
      this.showIndicator_v = true
    })
    this.canvasRuler_v.on('mouseleave', (e) => {
      this.showIndicator_v = false
    })
  },

  methods: {
    handleLineDblClick(value, type) {
      if (type === 'h') {
        const index = this.ruler_h_lines.findIndex((item) => item.value === value)
        if (index > -1) {
          this.ruler_h_lines.splice(index, 1)
        }
        this.updateLines('h')
      } else {
        const index = this.ruler_v_lines.findIndex((item) => item.value === value)
        if (index > -1) {
          this.ruler_v_lines.splice(index, 1)
        }
        this.updateLines('v')
      }
    },
    handleLineDrag(e, item, type) {
      // 保留问题  ：：：！！！！ 注意！！！
      // const value = this.canvasRuler_h.getValueByPos(type === 'h' ? e.left : e.top + this.cornerSize - 1);

      const value = this.canvasRuler_h.getValueByPos(type === 'h' ? e.left : e.top)
      this[`ruler_${type}_lines`].forEach((rule) => {
        if (rule.id === item.id) {
          rule.value = value
        }
      })
      this.$refs[`line_val${item.id}`][0].textContent = value
    },
    onDragstop(e, item, type) {
      this.updateLines(type)
    },
    updateLines(type) {
      this.$store.dispatch('editor/updateScreenInfo', [
        {
          key: `config.ruler_${type}_lines`,
          value: _.cloneDeep(this[`ruler_${type}_lines`])
        }
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.seatom-ruler {
  position: fixed;
  z-index: 1;
  user-select: none;
  .ruler-container {
    position: absolute;
    &.h-ruler-container {
      cursor: ew-resize;
      .indicator-line {
        top: 0;
        height: 100vh;
        border-left: 1px dashed #2681ff;
        .value {
          left: 10px;
          top: 5px;
        }
      }
      .lines-wrapper {
        .ruler-line {
          top: 0;
          height: 100vh;
          padding-left: 5px;
          border-left: 1px solid #2681ff;
        }
      }
    }
    &.v-ruler-container {
      cursor: ns-resize;
      // transform: rotate(90deg);
      transform-origin: left bottom;
      left: 0;
      .indicator-line {
        bottom: 1px;
        width: 100vw;
        border-bottom: 1px dashed #2681ff;
        transform: rotate(-90deg);
        transform-origin: 1px 100% 0;
        .value {
          transform-origin: 0 0;
          transform: rotate(90deg);
          top: 10px;
          left: 25px;
        }
      }
      .lines-wrapper {
        transform: rotate(-90deg);
        transform-origin: 0 100% 0;
        .ruler-line {
          width: 100vw;
          left: 0;
          border-top: 1px solid #2681ff;
          .line-value {
            transform: rotate(90deg);
            top: 10px;
            left: 5px;
          }
        }
      }
    }
    .ruler-canvas {
      font-size: 0;
    }
    .indicator-line {
      position: absolute;
      pointer-events: none;
      .value {
        position: absolute;
        background: #4074b4;
        border-radius: 1px;
        font-size: 12px;
        color: #fff;
        padding: 0 4px;
        user-select: none;
      }
    }
    .lines-wrapper {
      .ruler-line {
        position: absolute;
        .line-value {
          position: absolute;
          background: #4074b4;
          border-radius: 1px;
          font-size: 12px;
          color: #fff;
          padding: 0 4px;
          user-select: none;
        }
      }
    }
  }
  .corner {
    border-right: 1px solid #90a0ae;
    border-bottom: 1px solid #90a0ae;
    font-size: 16px;
    cursor: pointer;
    position: fixed;
    z-index: 999;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #90a0ae;
    background: #0e1013;
    box-sizing: border-box;
  }
}
</style>
