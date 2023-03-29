<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2023-01-06 14:49:50
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-06 17:24:24
 * @FilePath: /saber-admin/src/components/uieditor/tab/layoutSetting.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout-content" v-show="show">
    <!-- <div :class="{ active: show }" class="--label">布局</div> -->
    <div class="layout-panel">
      <div class="skeleton-classify panel-border">选择模板</div>
      <div class="skeleton-list">
        <div
          class="menu-inline"
          @click="handleSelect(skeletonAuto.code)"
          :class="{ active: currentGrid == skeletonAuto.code }"
        >
          <div class="usehove empty">
            <div class="inside-img">{{ skeletonAuto.label }}</div>
            <div class="bottom-text">{{ skeletonAuto.label }}</div>
          </div>
        </div>
        <div
          v-for="item in layoutGrid"
          :key="item"
          :index="item.name"
          class="menu-inline"
          @click="handleSelect(item.name)"
          :class="{ active: currentGrid == item.name }"
        >
          <div class="usehove">
            <img :src="getImg(item.imgSrc)" class="inside-img" />
            <div class="bottom-text">{{ item.cn_name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  props: {
    show: {
      type: Boolean
    }
  },
  data() {
    return {
      skeletonAuto: {
        label: '自定义',
        code: 'Auto'
      }
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
  methods: {
    getImg(image) {
      if (image) {
        const imgSrc = require('@/views/dashboard/uieditor/assets/layout/' + image)
        return imgSrc
      } else {
        return image
      }
    },
    handleSelect(val) {
      this.$store.commit('editor/updateActiveGrid', val)
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-content {
  color: #fff;
  position: relative;

  .layout-panel {
    display: flex;
    flex-direction: column;
    width: 394px;
    min-height: 262px;
    max-height: 262px;
    overflow: hidden;
    background: #1f2430;
    box-shadow: 0px 48px 128px -16px rgba(4, 8, 16, 0.64), 0px 16px 64px -16px rgba(4, 8, 16, 0.72),
      0px 0px 1px rgba(4, 8, 16, 0.32);

    border-radius: 8px;
    user-select: none;
    z-index: 99;
    position: absolute;
    top: 10px;
    left: -10px;
    .skeleton-classify {
      color: #bcc9d4;
      display: flex;
      align-items: center;
      height: 28px;
      line-height: 28px;
      padding: 0 16px;
    }
    .panel-border {
      justify-content: space-between;
      border-bottom: 1px solid #3a4659;
    }
    .skeleton-list {
      overflow: auto;
      padding: 8px 4px;
      display: flex;
      flex-flow: row wrap; // flex 布局下超出自动换行
      color: hsla(0, 0%, 100%, 0.7);
      .usehove {
        margin: 0 4px 2px 4px;
        cursor: pointer;
        width: 120px;
        .inside-img {
          height: 65px;
          background: #526d95;
        }
        .bottom-text {
          height: 20px;
          line-height: 20px;
          text-align: center;
        }
        &.empty {
          .inside-img {
            height: 65px;
            background: #37393a;
            line-height: 65px;
            text-align: center;
          }
        }
      }
      .active {
        color: #3a7ada;
        .inside-img {
          background: #3a7ada;
        }
      }
    }
  }
}
.--label {
  cursor: pointer;
  margin-right: 5px;
  &:hover,
  &.active {
    color: #2681ff;
    border-bottom: 1px solid #2681ff;
  }
}
</style>
