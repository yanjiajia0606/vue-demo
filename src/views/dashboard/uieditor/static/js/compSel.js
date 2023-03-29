/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-12 14:15:56
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-05 14:20:01
 * @FilePath: /saber/src/components/uieditor/static/js/compSel.js
 * @Description: 判断组件是否被收藏
 */

import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("editor", ["customComp"])
  },
  created() {
    this.isActive = this.customComp.children.some(
      (item) => item.path === this.settingVal.path
    );
  },
  methods: {
    handleCollect(val) {
      this.isActive = val;
      if (this.isActive) {
        this.$store.commit("editor/addCustomComp", this.settingVal);
      } else {
        this.$store.commit("editor/subCustomComp", this.settingVal);
      }
    }
  }
};
