<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        active-text-color="#1890ff"
        @open="handleOpen"
        @close="handleClose"
        :default-openeds="defaultOpens"
        :unique-opened="true"
      >
        <el-menu-item
          v-for="item in filterRoutes"
          :key="item.path"
          :index="handlePath(item.path)"
          @click="handleLink(item.path)"
        >
          {{ item.meta.title }}
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      title: 'threeScene',
      defaultOpens: ['topo']
    }
  },
  computed: {
    ...mapGetters({
      routes: 'routes/routes'
    }),
    filterRoutes() {
      const router = this.routes.find((item) => item.path === this.title)
      return router.children
    },
    defaultActive() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  created() {},
  methods: {
    handleLink(routePath) {
      const fullPath = '/' + this.title
      if (this.$route.path !== path.resolve(fullPath, routePath)) {
        this.$router.push(path.resolve(fullPath, routePath))
      }
    },
    handlePath(routePath) {
      const fullPath = '/' + this.title
      return path.resolve(fullPath, routePath)
    },
    handleOpen() {},
    handleClose() {}
  }
}
</script>

<style lang="scss" scoped>
.tac {
  height: 100%;
  // display: flex;
  ::v-deep {
    .el-menu-item {
      min-width: 0px;
    }
    .el-col {
      height: 100%;
    }
    .el-menu {
      height: 100%;
    }
  }
}
</style>
