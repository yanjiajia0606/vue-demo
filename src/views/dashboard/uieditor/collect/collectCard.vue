<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-10 16:40:15
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-11 11:35:59
 * @FilePath: /saber/src/components/uieditor/collect/collectComp.vue
 * @Description: 收藏组件
-->
<template>
  <div class="star-container">
    <span :class="{ active: isCollect }" @click="handleCollect" class="star">
      <i :class="collectIcon" class="star-icon"></i>
      <span class="text">{{ text }}</span>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isCollect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    collectIcon() {
      return this.isCollect === false ? "el-icon-star-off" : "el-icon-star-on";
    },
    text() {
      return this.isCollect === false ? "收藏" : "已收藏";
    }
  },
  methods: {
    handleCollect() {
      this.$emit("clickStar", !this.isCollect);
      if (!this.isCollect) {
        this.$message({
          message: "收藏成功！",
          type: "success"
        });
      } else {
        this.$message({
          message: "取消收藏！",
          type: "success"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.star-container {
  position: relative;
  display: inline-block;
  .active {
    .star-icon {
      color: #eda43a;
    }
  }
  &:hover {
    .star {
      display: block;
    }
  }
  .star {
    padding: 3px 10px;
    position: absolute;
    background: #fff;
    border: 1px solid #d8dad9;
    color: #262626;
    top: 0;
    right: 0;
    display: none;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    z-index: 999;
    :hover {
    }
  }
  .text {
    display: inline-block;
    text-align: left;
    margin-left: 5px;
  }
}
</style>
