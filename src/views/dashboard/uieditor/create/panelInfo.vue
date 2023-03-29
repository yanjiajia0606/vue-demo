<template>
  <div>
    <el-dialog
      class="dialog"
      title="提示"
      :visible.sync="value"
      :modal="true"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      :before-close="close"
      width="450px"
    >
      <div class="screen-name">
        名称
        <span>*</span>
        ：
        <el-input placeholder="首页名称" v-model="nameVal" size="small" class="name">
          <i slot="suffix" class="el-input__icon"></i>
        </el-input>
      </div>
      <div>
        <span>
          选择模板名称
          <span>*</span>
          ：
        </span>
        <div class="temp-list">
          <div
            class="temp-item"
            v-for="(item, index) in templeteList"
            :key="item"
            :class="{ active: activeIndex === index }"
            @click="getOption(item, index)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="value = false">取 消</el-button> -->
        <el-button type="primary" @click="submit" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { guid } from '@/views/dashboard/uieditor/utils/base.js'
import { mapState } from 'vuex'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({ templeteList: (state) => state.editor.templeteList })
  },
  data() {
    return {
      nameVal: '',
      activeIndex: null,
      info: null
    }
  },
  methods: {
    getOption(item, index) {
      this.activeIndex = index
      this.info = item
    },
    close() {
      this.$emit('input', false)
    },
    submit() {
      const id = 'screenId_' + guid()
      const { config } = this.info
      let info = Object.assign({ id, name: this.nameVal, config })
      this.$store.commit('editor/addScreenList', info)
      this.$store.commit('editor/updateScreen', info)
      let routeUrl = this.$router.resolve({
        path: '/editor/' + id
      })
      window.location.replace(routeUrl.href)
      this.close()
    }
  }
  //   data() {
  //     return {
  //       value: false,
  //     };
  //   },
}
</script>
<style lang="scss" scoped>
.dialog {
  z-index: 2005;
  position: absolute;
  .screen-name {
    margin-bottom: 15px;
    .name {
      width: 350px;
    }
  }
  .temp-item {
    margin: 10px;
    width: 30%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .active {
    border: 1px solid rgb(18, 153, 237);
  }
}
</style>
