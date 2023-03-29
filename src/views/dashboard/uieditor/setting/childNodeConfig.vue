<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-18 10:30:08
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-06 17:36:31
 * @FilePath: /saber/src/components/uieditor/setting/childNodeConfig.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="theme-config-root">
    <div class="theme-wrap">
      <div class="title">{{ this.config.title }}</div>
      <div class="theme-img">
        <img :src="backgroundImage" alt="" />
        <!-- <div :style="{ backgroundImage: backgroundImage }"></div> -->
      </div>
    </div>
    <div class="attributes">
      <div class="title basic-info">基本属性</div>
      <div class="info" v-if="layoutStatus">
        <div class="info-name">位置尺寸</div>
        <div class="info-content">
          <div class="content-position-xy">
            <el-input
              v-model.number.trim="left"
              controls-position="right"
              :min="0"
              size="mini"
              id="id-input-position-X"
              @focus="focusInputXY"
            >
              <template slot="suffix">X</template>
            </el-input>
            <i class="icon-placeholder"></i>
            <el-input
              v-model.number.trim="top"
              controls-position="right"
              :min="0"
              size="mini"
              id="id-input-position-Y"
              @focus="focusInputXY"
            >
              <template slot="suffix">Y</template>
            </el-input>
          </div>
          <div class="content-position-xy">
            <el-input
              v-model.number.trim="width"
              controls-position="right"
              :min="0"
              size="mini"
              id="id-input-position-W"
              @focus="focusInputWH"
            >
              <template slot="suffix">W</template>
            </el-input>
            <i class="icon-placeholder"></i>
            <!-- 此处有循环赋值问题 <i class="icon-placeholder pointer" :class="[isRelation ? 'el-icon-lock' : 'el-icon-unlock']" @click="isRelation = !isRelation"></i> -->
            <el-input
              v-model.number.trim="height"
              controls-position="right"
              :min="0"
              size="mini"
              id="id-input-position-H"
              @focus="focusInputWH"
            >
              <template slot="suffix">H</template>
            </el-input>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="info-name">透明度</div>
        <div class="info-content contant-opacity">
          <el-slider
            v-model="opacityVal"
            :min="0"
            :max="1"
            :step="0.05"
            @change="changeOpacity()"
          >
          </el-slider>
          <el-input-number
            v-model="opacityVal"
            controls-position="right"
            :min="0"
            :max="1"
            :step="0.05"
            size="mini"
            @change="changeOpacity()"
          >
          </el-input-number>
        </div>
      </div>
      <!-- <div> -->
      <el-collapse
        v-model="activeNames"
        @change="handleChange"
        class="config-base"
      >
        <el-collapse-item title="背景" name="1">
          <div class="config-control">
            <div class="config-title">显示</div>
            <el-switch v-model="showStatus"> </el-switch>
          </div>
          <div class="info">
            <div class="info-name">背景色</div>
            <div class="input-row">
              <el-color-picker
                v-model="backgroundColor"
                show-alpha
                size="mini"
              ></el-color-picker>
              <el-input
                v-model="backgroundColor"
                class="item2"
                size="mini"
              ></el-input>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- <div class="info">
        <div class="info-name" style="margin-top: 0">默认隐藏</div>
        <div class="info-content contant-opacity">
          <el-checkbox v-model="isHideDefault" style="margin-left: 4px">
          </el-checkbox>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "childNodeConfig",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    layoutStatus: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  computed: {
    backgroundImage: function () {
      let imgSrc = this.imgSrc
        ? replaceUrl(this.imgSrc)
        : "//img.alicdn.com/tfs/TB17NeSDSf2gK0jSZFPXXXsopXa-160-116.png";
      return imgSrc;
    },
    width: {
      get() {
        return this.config.attr ? this.config.attr.w : 0;
      },
      set(val) {
        this.$store.commit("editor/updateActiveComStyle", {
          key: "attr.w",
          value: val
        });
      }
    },
    height: {
      get() {
        return this.config.attr ? this.config.attr.h : 0;
      },
      set(val) {
        this.$store.commit("editor/updateActiveComStyle", {
          key: "attr.h",
          value: val
        });
      }
    },
    left: {
      get() {
        return this.config.attr ? this.config.attr.x : 0;
      },
      set(val) {
        this.$store.commit("editor/updateActiveComStyle", {
          key: "attr.x",
          value: val
        });
      }
    },
    top: {
      get() {
        return this.config.attr ? this.config.attr.y : 0;
      },
      set(val) {
        this.$store.commit("editor/updateActiveComStyle", {
          key: "attr.y",
          value: val
        });
      }
    },
    opacityVal: {
      get() {
        return this.config.config ? this.config.config.opacity : 1;
      },
      set(val) {
        this.$store.commit("editor/updateActiveComStyle", {
          key: "config.opacity",
          value: val
        });
      }
    },
    backgroundColor: {
      get() {
        return this.config.config
          ? this.config.config.background.value
          : "transpatent";
      },
      set(val) {
        this.$store.commit("editor/updateActiveComStyle", {
          key: "config.background.value",
          value: val
        });
      }
    },
    imgSrc() {
      return this.config.imgSrc || "";
    },
    showStatus: {
      get() {
        return this.config.config ? this.config.config.background.show : false;
      },
      set(val) {
        this.$store.commit("editor/updateActiveComStyle", {
          key: "config.background.show",
          value: val
        });
      }
    }
  },
  methods: {
    focusInputXY() {},
    focusInputWH() {},
    changeOpacity() {}
  }
};
</script>

<style lang="scss" scoped>
.theme-config-root {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 4px 8px;
  align-items: center;
  color: #fafafa;
}
.theme-wrap {
  .title {
    font-size: 14px;
    line-height: 30px;
  }
  .theme-img {
    width: 100%;
    height: 180px;
    padding: 10px 20px;
    background-color: #0e0e0e;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.basic-info {
  line-height: 30px;
  font-size: 13px;
  border-top: 1px solid #393b4a;
  border-bottom: 1px solid #393b4a;
}
.desc {
  display: flex;
  padding-bottom: 6px;
  color: #999;
  .name-max-width {
    max-width: 128px;
  }
}
.name-max-width {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.theme-wrap {
  .theme-img {
    width: 100%;
    height: 180px;
    padding: 10px 20px;
    background-color: #0e0e0e;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .theme-btn {
    text-align: center;
    padding: 10px 0;
  }
}
.info {
  display: flex;
  padding: 10px 0;
  .info-name {
    width: 80px;
    line-height: 24px;
    margin-top: 8px;
  }
  .info-content {
    flex: 1;
    .icon-placeholder {
      display: block;
      width: 16px;
      margin-left: 4px;
      line-height: 16px;
      text-align: center;
    }
    ::v-deep.el-slider {
      flex: 1;
    }
    ::v-deep.el-input-number--mini {
      width: 100%;
      margin-left: 4px;
      line-height: 24px;
      .el-input-number__decrease {
        top: 12px;
        height: 11px;
        line-height: 11px;
      }
      .el-input__inner {
        padding-left: 2px;
        padding-right: 18px;
        height: 24px;
        line-height: 24px;
      }
      .el-input-number__increase {
        height: 12px;
        line-height: 12px;
      }
      .el-input__suffix {
        right: 6px;
      }
    }
    .content-position-xy {
      display: flex;
      align-items: center;
      height: 24px;
      margin-top: 8px;
      ::v-deep.el-input-number__decrease {
        display: none;
      }
      ::v-deep.el-input-number__increase {
        display: none;
      }
    }
  }
  .contant-opacity {
    display: flex;
    line-height: 24px;
    align-items: center;
    ::v-deep.el-input-number--mini {
      width: 70px;
      margin-left: 12px;
      .el-input__inner {
        padding-right: 30px;
      }
    }
  }

  .config-control {
    display: flex;
    width: 100%;
    position: relative;
    padding: 4px 8px;
    align-items: center;
    .config-title {
      width: 80px;
      height: 24px;
      line-height: 24px;
      padding-right: 5px;
      color: #bfbfbf;
      font-size: 12px;
    }
  }
}
::v-deep {
  .el-input__inner {
    background-color: rgba(204, 219, 255, 0.06);
    border: 1px solid #393b4a;
    color: #bfbfbf;
    text-align: center;
  }
  .el-slider__runway {
    background-color: #393b4a;
  }
  .el-slider__button {
    width: 12px;
    height: 12px;
    border: none;
    /* border: 2px solid #409EFF; */
    background-color: #fff;
  }
  .el-input-number__increase {
    border-bottom: 1px solid #393b4a !important;
    border-left: 1px solid #393b4a;
  }
  .el-input-number__decrease {
    border-left: 1px solid #393b4a !important;
  }
  .el-checkbox__inner {
    background-color: rgba(204, 219, 255, 0.06);
    border: 1px solid #393b4a;
  }
  .el-input__suffix {
    line-height: 28px;
  }
  .el-collapse-item__header {
    color: #fff;
    height: 32px;
    line-height: 32px;
    background-color: transparent;
    font-size: 12px;
    font-weight: normal;
    border-bottom: 1px solid #393b4a;
  }
  .el-collapse {
    border-top: 1px solid #393b4a;
    border-bottom: 1px solid #393b4a;
  }
  // .el-collapse-item__wrap {
  //   background-color: transparent;
  //   border-bottom: none;
  // }
  .el-collapse-item__content {
    color: #fff;
  }
}
.config-control {
  display: flex;
  width: 100%;
  position: relative;
  padding: 4px 8px;
  align-items: center;
  .config-title {
    width: 80px;
    height: 24px;
    line-height: 24px;
    padding-right: 5px;
    color: #bfbfbf;
    font-size: 12px;
  }
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
</style>
