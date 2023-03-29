<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 11:14:28
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-12 17:56:04
 * @FilePath: /saber-admin/src/components/uieditor/tab/tabList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="tab-container">
    <div class="tab-title">
      <div class="back" @click="exit">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="label">
        {{ dashboardName }}
        <i class="el-icon-edit-outline"></i>
      </div>
    </div>
    <div class="select-container">
      <div class="btn select-btn" @click="save">
        <el-tooltip class="item" effect="dark" content="保存" placement="bottom">
          <i class="el-icon-document"></i>
        </el-tooltip>
      </div>
      <div
        class="btn select-btn"
        v-for="btn in editTabState"
        :key="btn.name"
        @click="handleBtn(btn)"
        :class="{ isActive: btn.select === true }"
      >
        <el-tooltip
          class="item"
          effect="dark"
          :content="btn.name"
          placement="bottom"
          :class="{ isActive: btn.select === true }"
        >
          <i :class="btn.icon"></i>
        </el-tooltip>
      </div>
      <div class="btn select-btn" @click="handleView">
        <el-tooltip class="item" effect="dark" content="预览" placement="bottom">
          <i class="el-icon-view"></i>
        </el-tooltip>
      </div>
    </div>
    <!-- <div class="c">预览</div> -->

    <layoutBtn></layoutBtn>

    <div class="comp__tab" v-show="layoutStatus">
      <!-- <div>全选</div>
      <div>取消选择</div> -->

      <el-radio-group
        v-model="selStatus"
        size="mini"
        class="comp__radio"
        @input="handleSelect"
        v-show="canvasComs.length"
      >
        <el-radio label="1">全选</el-radio>
        <el-radio label="0">取消选择</el-radio>
      </el-radio-group>
      <div>
        占比:
        <el-select
          v-model="percent"
          placeholder="请选择"
          size="mini"
          class="comp__input"
          @change="changePercent"
          :popper-append-to-body="false"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        <!-- 宽:<el-input
          size="mini"
          placeholder="栅格数"
          v-model.number="width"
          maxlength="2"
          max="24"
          min="2"
          class="comp__input"
          @input="changeStyle('width')"
        >
        </el-input> -->
        宽:
        <el-select
          v-model="width"
          placeholder="请选择"
          size="mini"
          class="comp__input"
          @change="changeStyle('width')"
          :popper-append-to-body="false"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        高:
        <el-select
          v-model="height"
          placeholder="请选择"
          size="mini"
          class="comp__input"
          @change="changeStyle('height')"
          :popper-append-to-body="false"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        间距:
        <el-input
          size="mini"
          placeholder=""
          v-model.number="marginX"
          maxlength="3"
          max="600"
          min="0"
          class="comp__input"
          @change="changeStyle('marginX')"
        ></el-input>
        ✖️
        <el-input
          size="mini"
          placeholder=""
          v-model.number="marginY"
          maxlength="3"
          max="600"
          min="0"
          class="comp__input"
          @change="changeStyle('marginY')"
        ></el-input>
      </div>
    </div>
    <!-- <div @click="handleView" style="margin-left: 30px; cursor: pointer">
      预览
    </div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import layoutBtn from '@/views/dashboard/uieditor/tab/layoutBtn'
import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'
window.canvasBus = canvasBus
export default {
  name: 'tabList',
  data() {
    return {
      percent: 3,
      width: 6,
      height: 3,
      marginX: 10,
      marginY: 10,
      selStatus: null,
      options: [
        {
          value: 3,
          label: '三格'
        },
        {
          value: 4,
          label: '四格'
        },
        {
          value: 5,
          label: '五格'
        },
        {
          value: 6,
          label: '六格'
        },
        {
          value: 7,
          label: '七格'
        },
        {
          value: 8,
          label: '八格'
        },
        {
          value: 9,
          label: '九格'
        },
        {
          value: 10,
          label: '十格'
        },
        {
          value: 11,
          label: '十一格'
        },
        {
          value: 12,
          label: '十二格'
        },
        {
          value: 13,
          label: '十三格'
        },
        {
          value: 14,
          label: '十四格'
        },
        {
          value: 15,
          label: '十五格'
        },
        {
          value: 16,
          label: '十六格'
        },
        {
          value: 17,
          label: '十七格'
        },
        {
          value: 18,
          label: '十八格'
        },
        {
          value: 19,
          label: '十九格'
        },
        {
          value: 20,
          label: '二十格'
        },
        {
          value: 21,
          label: '二十一格'
        },
        {
          value: 22,
          label: '二十二格'
        },
        {
          value: 23,
          label: '二十三格'
        },
        {
          value: 24,
          label: '二十四格'
        }
      ],
      dashboardName: '自定义'
    }
  },
  components: {
    layoutBtn
  },
  computed: {
    ...mapState({
      editTabState: (state) => state.editor.editTabState,
      screenInfo: (state) => state.editor.screenInfo,
      canvasComs: (state) => state.editor.canvasComs,
      // currentScreen: (state) => state.editor.currentScreen,
      layoutGrid: (state) => state.editor.layoutGrid
    }),
    ...mapGetters('editor', ['layoutStatus']),
    gridX() {
      return this.screenInfo.gridX
    },
    gridY() {
      return this.screenInfo.gridY
    }
  },
  mounted() {
    canvasBus.on('cancelSelComp', this.cancelSelComp)
    if (this.$route.query.column) {
      const { column } = this.$route.query
      this.percent = this.height = this.width = this.gridX / column
    }
  },
  methods: {
    handleBtn(btn) {
      this.$store.commit('editor/updateEditTabSelect', {
        type: btn.type,
        value: !btn.select
      })
      //   btn.select = !btn.select;
    },
    changeStyle(val) {
      switch (val) {
        case 'width':
          canvasBus.emit('width', this.width)
          break
        case 'height':
          canvasBus.emit('height', this.height)
          break
        case 'marginX':
          // canvasBus.emit('marginX', this.marginX)
          this.$store.commit('editor/updateMargin', [this.marginX, this.marginY])
          break
        case 'marginY':
          // canvasBus.emit('marginY', this.marginY)
          this.$store.commit('editor/updateMargin', [this.marginX, this.marginY])
          break
      }
    },
    handleSelect(val) {
      canvasBus.emit('select', val)
    },
    cancelSelComp() {
      console.log('canel')
      this.selStatus = null
    },
    changePercent() {
      this.height = this.percent
      this.width = this.percent
      this.changeStyle('height')
      this.changeStyle('width')
    },
    handleView() {
      this.$router.push({
        path: '/view',
        query: {}
      })
    },
    save() {
      const { id, name } = this.$route.query
      const detail = this.screenInfo
      let component = null
      const { currentGrid } = detail
      if (currentGrid == 'Auto') {
        component = this.canvasComs
      } else {
        component = this.layoutGrid[currentGrid].comps
        detail.margin = this.layoutGrid[currentGrid].margin
      }
      const data = { id, name, detail, component }
      console.log(data)
    },
    exit() {
      this.$router.go(-1)
    }
  },
  watch: {
    canvasComs: {
      handler() {
        this.selStatus = null
      }
    }
  },
  beforeDestry() {
    canvasBus.off('cancelSelComp', this.cancelSelComp)
  },
  created() {
    this.dashboardName = this.$route.query.name
  }
}
</script>

<style lang="scss" scoped>
.tab-title {
  width: 176px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100%;
  .back {
    height: 100%;
    width: 20px;
    line-height: 41px;
    font-size: 14px;
    text-align: center;
    margin-right: 5px;
    cursor: pointer;
    &:hover {
      background: #51575c;
    }
  }
  .label {
    padding: 0 10px;
  }
}
.tab-container {
  height: 41px;
  background: #212528;
  margin-bottom: 5px;
  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  // padding: 0 10px;
  white-space: nowrap;
  .select-container {
    display: flex;
    // width: 445px;
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
  }
  .comp__tab {
    margin-left: 100px;
    display: flex;
    // align-items: center;
    flex-wrap: nowrap;
    font-size: 12px;
    white-space: nowrap;
    > div {
      margin-right: 10px;
    }
    .r_30 {
      margin-right: 30px;
    }
  }
  .comp__radio {
    line-height: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 0 1px rgba(255, 235, 235, 0.1), 0 0 0 1px #181818;
    /* border: 1px solid #000; */
    padding: 0 10px;
    ::v-deep.el-radio__label {
      font-size: 12px;
    }
    ::v-deep.el-radio {
      margin-right: 10px;
      color: #fff;
    }
    ::v-deep.el-radio__inner {
      background: #454b52;
      /* border: 1px solid #DCDFE6; */
      border-radius: 100%;
      width: 14px;
      height: 14px;
      cursor: pointer;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #393b4a;
    }
    ::v-deep.el-radio__input.is-checked .el-radio__inner {
      border-color: #3181ff;
      background: #3181ff;
    }
  }
}
.comp__input {
  background: transparent;
  border: 0;
  width: 98px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  margin-left: 5px;
  ::v-deep .el-input__inner {
    background-color: rgba(204, 219, 255, 0.06);
    border: 1px solid #393b4a;
    color: #bfbfbf;
    box-shadow: inset 0 0 0 1px rgba(255, 235, 235, 0.1), 0 0 0 1px #181818;
  }
}

::v-deep .el-select-dropdown {
  background-color: rgb(28, 30, 35);
  border: 1px solid #393b4a;
  color: #bfbfbf;
}
::v-deep .el-select-dropdown__item.hover,
::v-deep .el-select-dropdown__item:hover {
  background-color: rgba(204, 219, 255, 0.06);
}
::v-deep .el-popper[x-placement^='bottom'] .popper__arrow::after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: rgb(28, 30, 35);
}
</style>
<style>
/* .el-select-dropdown {
  background-color: rgb(28, 30, 35);
  border: 1px solid #393b4a;
  color: #bfbfbf;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: rgba(204, 219, 255, 0.06);
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: rgb(28, 30, 35);
} */
</style>
