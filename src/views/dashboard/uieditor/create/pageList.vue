<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-25 14:41:26
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-26 16:35:29
 * @FilePath: /qiankun/saber-admin/src/components/uieditor/create/pageList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div v-for="item in screenList" :key="item" class="screen-item" @click="open(item)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import canvasBus from '@/views/dashboard/uieditor/utils/canvasBus.js'
export default {
  computed: {
    ...mapState({
      screenList: (state) => state.editor.screenList
    })
  },
  components: {},
  methods: {
    open(item) {
      const { id } = item
      canvasBus.emit('preView', item)
      let routeUrl = this.$router.resolve({
        path: '/view/' + id
      })
      window.location.replace(routeUrl.href)
    }
  }
}
</script>

<style lang="scss" scoped>
.screen-item {
  width: 158px;
  height: 78px;
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: middle;
  border: 1px solid #3a4659;
  color: #fff;
  margin: 10px;
}
</style>
