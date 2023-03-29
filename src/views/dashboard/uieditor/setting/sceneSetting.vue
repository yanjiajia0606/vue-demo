<template>
  <div class="page-setting">
    <div class="page-title">
      <span class="icon el-icon-back" @click="handleBtn"></span>
      <span class="title">页面设置</span>
    </div>
    <div class="page-content">
      <el-form label-width="90px" label-position="left" size="mini">
        <el-form-item label="屏幕大小">
          <div class="content-wrap">
            <div class="input-row">
              <el-input
                v-model.number.trim="width"
                @change="(val) => changeSize('width', val)"
                class="item"
              >
                <template slot="suffix">W</template>
              </el-input>
              <el-input
                v-model.number.trim="height"
                @change="(val) => changeSize('height', val)"
                class="item"
              >
                <template slot="suffix">H</template>
              </el-input>
            </div>
          </div>
        </el-form-item>
        <!-- <el-form-item label="栅格配置" v-if="!screenInfo.layoutStatus">
          <div class="content-wrap">
            <div class="input-row">
              <el-input
                v-model.number.trim="gridX"
                @change="(val) => changeSize('gridX', val)"
                class="item"
              >
              </el-input>
              <el-input
                v-model.number.trim="gridY"
                @change="(val) => changeSize('gridY', val)"
                class="item"
              >
              </el-input>
            </div>
          </div>
        </el-form-item> -->
        <el-form-item label="画布背景色">
          <div class="input-row">
            <el-color-picker v-model="backgroundColor" show-alpha></el-color-picker>
            <el-input v-model="backgroundColor" class="item2"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="组件背景色">
          <div class="input-row">
            <el-color-picker v-model="compColor" show-alpha></el-color-picker>
            <el-input v-model="compColor" class="item2"></el-input>
          </div>
        </el-form-item>
        <!-- <el-form-item label="组件间距"> -->
        <!-- <div class="content-wrap">
            <div class="input-row">
              <el-input
                v-model.number.trim="marginLeft"
                @change="(val) => changeSize('marginLeft', val)"
                class="item"
              >
                <template slot="suffix"></template>
              </el-input>
              <el-input
                v-model.number.trim="marginTop"
                @change="(val) => changeSize('marginTop', val)"
                class="item"
              >
                <template slot="suffix"></template>
              </el-input>
            </div>
          </div>
        </el-form-item> -->
        <!-- <el-form-item label="背景图">
          <uploadImage v-model="backgroundImage" />
        </el-form-item> -->
        <!-- <el-form-item label="平铺方式">
          <el-select v-model="backgroundRepeat" class="full-w">
            <el-option
              v-for="opt in repeatOpt"
              :key="opt.id"
              :value="opt.value"
              :label="opt.label"
            ></el-option>
          </el-select>
        </el-form-item> -->
        <!-- <template> -->
        <!-- <template v-if="platform !== 'mobile'"> -->
        <!-- <el-form-item label="栅格间距">
          <el-input-number
            v-model="gridSpace"
            controls-position="right"
            class="full-w"
            :min="1"
          ></el-input-number>
        </el-form-item> -->
        <!-- <el-form-item label="缩放设置">
              <el-radio-group v-model="scaleType" class="scale-radio">
                <el-radio-button
                  v-for="opt in scaleOpt"
                  :key="opt.value"
                  :label="opt.value"
                >
                  <el-tooltip placement="bottom" :content="opt.label">
                    <i :class="opt.icon"></i>
                  </el-tooltip>
                </el-radio-button>
              </el-radio-group>
            </el-form-item> -->
        <!-- </template> -->
        <!-- <el-form-item label="封面">
            <uploadImage v-model="thumbnail" />
          </el-form-item> -->
        <!-- <el-form-item>
            <el-button
              type="primary"
              size="mini"
              @click="record"
              :loading="loading"
              >{{ loading ? "截屏中" : "截屏" }}</el-button
            >
          </el-form-item> -->
        <!-- </template> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import uploadImage from '@/views/dashboard/uieditor/setting//uploadImage'
import { mapState } from 'vuex'
export default {
  name: 'PageSetting', // 页面设置

  components: { uploadImage },
  data() {
    return {
      width: 1366,
      height: 768,
      gridX: 24,
      gridY: 10,
      marginLeft: 10,
      marginTop: 10,
      pageBackground: '',
      backgroundRepeat: 'fill',
      repeatOpt: [
        { id: 1, label: '拉伸', value: 'fill' },
        { id: 2, label: '适应', value: 'contain' },
        { id: 3, label: '填充', value: 'cover' },
        { id: 4, label: '平铺', value: 'repeat' }
      ],
      scaleOpt: [
        {
          value: 'full_screen',
          label: '全屏铺满',
          icon: 'el-icon-full-screen'
        },
        { value: 'full_width', label: '适应', icon: 'fit-width' },
        { value: 'no_scale', label: '不缩放', icon: 'Words_not_allowed' }
      ]
    }
  },
  computed: {
    ...mapState({
      screenInfo: (state) => state.editor.screenInfo
    }),
    backgroundColor: {
      get: function () {
        return this.screenInfo.backgroundColor
      },
      set: function (val) {
        this.$store.commit('editor/updateScreenInfo', {
          key: 'backgroundColor',
          value: val
        })
      }
    },
    compColor: {
      get: function () {
        return this.screenInfo.compColor
      },
      set: function (val) {
        this.$store.commit('editor/updateScreenInfo', {
          key: 'compColor',
          value: val
        })
      }
    }
  },
  watch: {},
  created() {
    const { width, height, gridX, gridY } = this.screenInfo
    this.width = width
    this.height = height
    this.gridX = gridX
    this.gridY = gridY
  },
  methods: {
    handleBtn() {
      this.$store.commit('editor/updateEditTabSelect', {
        type: 'setConfig',
        value: false
      })
    },
    changeSize(type, val) {
      this.$store.commit('editor/updateScreenInfo', {
        key: type,
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-setting {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c2025;
  overflow: auto;
  overflow-x: hidden;
  z-index: 100;
  .page-title {
    position: relative;
    font-size: 14px;
    font-weight: normal;
    color: #d8d8d8;
    height: 40px;
    line-height: 40px;
    background: #2e343c;
    border-bottom: 1px solid rgba(36, 38, 46, 0.4);
    span.icon {
      float: left;
      font-size: 16px;
      margin: 12px;
      cursor: pointer;
    }
    span.title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .page-content {
    padding: 20px 16px;
  }
  ::v-deep {
    .el-input__inner {
      background-color: rgba(204, 219, 255, 0.06);
      border: 1px solid #393b4a;
      color: #bfbfbf;
    }
    .el-color-picker__trigger {
      border: 1px solid #393b4a;
    }
    .el-form-item__label {
      font-size: 12px;
      color: #bfbfbf;
    }
    .el-radio__label {
      font-size: 12px;
      color: #bfbfbf;
    }
    .el-upload-dragger {
      width: 200px;
      height: 90px;
      border-radius: 0;
      background-color: #181b24;
      border: 1px solid #393b4a;
      .el-upload__text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
      }
      .uploaded-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        object-fit: contain;
      }
    }
  }
  .single-line ::v-deep .el-radio {
    display: block;
    line-height: 26px;
  }
  .full-w {
    width: 100%;
  }
  .input-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      width: 100px;
    }
    .item1 {
      width: 100px;
      margin-left: 10px;
    }
    .item2 {
      flex: 1;
      margin-left: 10px;
    }
  }
  .radio-group {
    .el-radio {
      margin-right: 20px;
    }
  }
  .scale-radio ::v-deep {
    .el-radio-button--mini .el-radio-button__inner {
      padding: 7px 12px;
    }
    .el-radio-button:first-child .el-radio-button__inner,
    .el-radio-button:last-child .el-radio-button__inner {
      border-radius: 0;
    }
  }
}
</style>
