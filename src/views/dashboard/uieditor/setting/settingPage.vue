<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 16:42:44
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-11-16 15:17:37
 * @FilePath: /saber/src/components/uieditor/setting/setttingScene.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="setting-box">
    <!-- <compSetting v-if="activeId != ''"></compSetting> -->
    <sceneSetting></sceneSetting>
  </div>
</template>

<script>
import sceneSetting from '@/views/dashboard/uieditor/setting/sceneSetting'
import compSetting from '@/views/dashboard/uieditor/setting/compSetting'
import { mapState } from 'vuex'

export default {
  name: 'settingPage',
  computed: {
    ...mapState({
      activeId: (state) => state.editor.activeId
    })
  },
  components: {
    sceneSetting,
    compSetting
  }
}
</script>

<style lang="scss" scoped>
.setting-box {
  position: relative;
  width: 333px;
  color: #fff;
  background: #1a1c21;
}
</style>
