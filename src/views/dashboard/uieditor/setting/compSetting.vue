<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 11:04:18
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-18 19:25:25
 * @FilePath: /saber/src/components/uieditor/setting/settingPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-setting">
    <div>
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="config-tab">
        <el-tab-pane label="样式" name="config">
          <childNodeConfig
            :config="canvasActiveComp"
            :layoutStatus="layoutStatus"
          ></childNodeConfig>
        </el-tab-pane>
        <el-tab-pane label="数据" name="data">数据</el-tab-pane>
        <el-tab-pane label="交互" name="interact">交互</el-tab-pane>
      </el-tabs> -->
      <div class="page-title">
        <span class="icon el-icon-back" @click="handleBtn"></span>
        <span class="title">组件设置</span>
      </div>
      <childNodeConfig :config="canvasActiveComp" :layoutStatus="layoutStatus"></childNodeConfig>
    </div>
  </div>
</template>

<script>
import childNodeConfig from '@/views/dashboard/uieditor/setting/childNodeConfig'
import { mapGetters } from 'vuex'
export default {
  name: 'compSetting',
  computed: {
    ...mapGetters('editor', ['canvasActiveComp', 'layoutStatus'])
  },
  components: {
    childNodeConfig
  },
  data() {
    return {
      activeName: 'config'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleBtn() {
      this.$store.commit('editor/updateEditTabSelect', {
        type: 'setConfig',
        value: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.config-manager {
  width: 332px;
  height: 100%;
  transition: 0.25s ease-in-out;
  user-select: none;
  overflow: hidden;
  .config-tab ::v-deep {
    > .el-tabs__header {
      .el-tabs__nav {
        width: 100%;
      }
      .el-tabs__active-bar {
        bottom: unset;
      }
      .el-tabs__item {
        width: 33.33%;
        text-align: center;
        color: #bfbfbf;
        padding: 0;
        background: #2e343c;
        &.is-active {
          background-color: #22242b;
          color: #2681ff;
        }
      }
      .el-tabs__nav-wrap::after {
        display: none;
      }
    }
    > .el-tabs__content {
      height: calc(100% - 130px);
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
  ::v-deep .child-plane-style {
    position: relative;
    display: block;
    left: 0;
    transition: all 0.25s ease-in-out;
    &.--hide {
      display: none;
      left: 332px;
    }
    .chid-comp-attributes {
      display: inline-block;
      padding-top: 0;
      .title {
        line-height: 30px;
        display: flex;
        justify-items: center;
        font-size: 14px;
        justify-content: space-between;
        i {
          margin-right: 4px;
          cursor: pointer;
        }
      }
      .desc {
        display: flex;
        padding-bottom: 6px;
        color: #999;
      }
    }
  }
}

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
