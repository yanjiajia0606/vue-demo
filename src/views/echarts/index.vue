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
        <el-submenu v-for="item in filterRoutes" :index="item.path" :key="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :index="handlePath(child.path, item.path)"
            :key="child.path"
            @click="handleLink(child.path, item.path)"
          >
            {{ child.meta.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      title: 'echarts',
      defaultOpens: ['echarts-line']
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
    handleLink(routePath, parentPath) {
      const fullPath = '/' + this.title + '/' + parentPath
      if (this.$route.path !== path.resolve(fullPath, routePath)) {
        this.$router.push(path.resolve(fullPath, routePath))
      }
    },
    handlePath(routePath, parentPath) {
      const fullPath = '/' + this.title + '/' + parentPath
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
