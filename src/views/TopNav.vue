<template>
  <div style="height: 100%">
    <el-row class="top">
      <el-col :span="24">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-header"
          mode="horizontal"
          @select="handleSelect"
          style="color: #314659"
        >
          <el-col :span="4">
            <div style="line-height: 60px; margin-left: 10px; display: flex; align-items: center">
              <img src="../assets/logo.png" alt="" style="height: 26px" />
              <span style="font-weight: 700; margin-left: 5px">Visualizing</span>
            </div>
          </el-col>
          <el-menu-item v-for="route in routes" :index="route.path" :key="route.path">
            {{ route.meta.title }}
          </el-menu-item>
          <!-- <el-menu-item index="home">首页</el-menu-item>
          <el-menu-item index="echarts">Echarts</el-menu-item>
          <el-menu-item index="g2">G2</el-menu-item> -->
        </el-menu>
      </el-col>
    </el-row>
    <div style="position: absolute; top: 60px; width: 100%">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      routes: 'routes/routes'
    }),
    defaultActive() {
      return this.$route.path.replace('/', '').split('/')[0]
    }
  },
  created() {},
  methods: {
    handleSelect(key) {
      if ('/' + key != this.$route.path) {
        this.$router.push('/' + key)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
.el-menu-header {
  background: #fdfdfd;
  box-shadow: 0 2px 8px rgba(229, 229, 229, 0.5);
  border: 0;
}
</style>
