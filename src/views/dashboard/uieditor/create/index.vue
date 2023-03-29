<!-- 新建 -->
<template>
  <basic-container>
    <avue-crud
      :option="option"
      class="notice"
      :table-loading="loading"
      :data="data"
      :page.sync="page"
      ref="crud"
      @row-del="rowDel"
      v-model="form"
      :permission="permissionList"
      @row-update="rowUpdate"
      @row-save="rowSave"
      @search-change="searchChange"
      @search-reset="searchReset"
      @selection-change="selectionChange"
      @current-change="currentChange"
      @size-change="sizeChange"
      @refresh-change="refreshChange"
      @on-load="onLoad"
    >
      <template slot="menu" slot-scope="{ row }">
        <el-button
          type="text"
          icon="el-icon-view"
          size="mini"
          @click="editPanel(row)"
          >编辑</el-button
        >
        <el-button type="text" icon="el-icon-view" size="mini">复制</el-button>
        <el-button
          type="text"
          icon="el-icon-view"
          @click="viewDetail(row)"
          size="mini"
          >预览</el-button
        >
        <el-button type="text" icon="el-icon-view" size="mini">修改</el-button>
        <el-button type="text" icon="el-icon-view" size="mini">删除</el-button>
      </template>
      <template slot="sort" slot-scope="{ row }">
        <el-input-number
          v-model="row.sort"
          @change="sortChange(row)"
          :min="1"
          :max="100"
          size="mini"
          class="min-number"
        ></el-input-number>
      </template>
      <template slot="status" slot-scope="{ row }">
        <el-switch
          v-model="row.status"
          active-color="#13ce66"
          :active-value="1"
          :inactive-value="0"
        ></el-switch>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters, mapState } from 'vuex'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      form: {},
      query: {},
      loading: true,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      defaultColumn: 2,
      selectionList: [],
      option: {
        height: 'auto',
        addBtnText: '新增仪表盘',
        calcHeight: 80,
        dialogWidth: 650,
        tip: false,
        searchShow: true,
        searchSpan: 6,
        searchMenuSpan: 6,
        border: true,
        index: true,
        viewBtn: false,
        editBtn: false,
        delBtn: false,
        menu: true,
        addBtn: true,
        indexLabel: '序号',
        selection: false,
        dialogClickModal: false,
        searchMenuPosition: 'right',
        menuWidth: 400,
        column: [
          {
            label: '名称',
            prop: 'name',
            search: true,
            rules: [
              {
                required: true,
                message: '请输入名称',
                trigger: 'blur'
              }
            ]
            // width: 200,
          },
          {
            label: '类别',
            prop: 'business',
            type: 'select',
            search: true,
            addDisabled: true,
            dicData: [
              {
                label: '系统默认',
                value: 1
              },
              {
                label: '自定义',
                value: 2
              }
            ]
          },
          {
            label: '状态',
            prop: 'status',
            type: 'radio',
            search: true,
            dataType: 'number',
            // width: 100,
            rules: [
              {
                required: true,
                message: '请选择状态',
                trigger: 'blur'
              }
            ],
            dicData: [
              {
                label: '启用',
                value: 1
              },
              {
                label: '禁用',
                value: 0
              }
            ]
          },

          {
            label: '页面排序',
            prop: 'sort',
            type: 'number',
            // span: 24,
            slot: true,
            rules: [
              {
                required: true,
                message: '请输入排序',
                trigger: 'blur'
              }
            ]
          }
        ]
      },
      data: []
    }
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(['permission']),
    ...mapState({ templeteList: (state) => state.editor.templeteList }),
    ids() {
      let ids = []
      this.selectionList.forEach((ele) => {
        ids.push(ele.id)
      })
      return ids.join(',')
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchReset() {
      this.query = {}
      this.onLoad(this.page)
    },
    // 搜索
    searchChange(params, done) {
      this.query = params
      this.page.currentPage = 1
      this.onLoad(this.page, params)
      done()
    },
    // 勾选
    selectionChange(list) {
      this.selectionList = list
    },
    // 清除
    selectionClear() {
      this.selectionList = []
      this.refs.crud.toggleSelection()
    },
    // 条数切换
    currentChange(currentPage) {
      this.page.currentPage = currentPage
    },
    // 条数切换
    sizeChange(pageSize) {
      this.page.pageSize = pageSize
    },
    // 刷新
    refreshChange() {
      this.onLoad(this.page, this.query)
    },
    // 初始化
    onLoad(page, params = {}) {
      this.loading = false
      this.data = [
        { name: '仪表盘1', business: 1, status: 1, index: 1, sort: 2 }
      ]
      // 以上是为了展示数据，使用时将上面代码删除掉使用该注释下面的代码 接口名称自己定义并引用
      // let values = {
      //   ...params
      // }
      // this.loading = true
      // (
      //   page.currentPage,
      //   page.pageSize,
      //   Object.assign(values, this.query)
      // ).then(res => {
      //   const data = res.data.data
      //   this.page.total = data.total
      //   this.data = data.records
      //   this.loading = false
      //   this.selectionClear()
      // })
    },
    rowSave(form, done) {
      done(form)
      this.submit(form)
    },
    submit(row) {
      const id = 'screenId_' + 123
      const { detail, component } = this.templeteList[0]
      let info = Object.assign({ id, name: this.nameVal, detail, component })
      this.$store.commit('editor/addScreenList', info)
      this.$store.commit('editor/updateScreen', info)
      this.$store.commit('editor/createScreenId', { id, name: this.nameVal })

      // this.$router.push({
      //   path: "/editor/" + id,
      //   query: {
      //     column: this.defaultColumn,
      //   },
      // });
    },
    editPanel(row) {
      const id = 'screenId_' + 123
      this.$router.push({
        path: '/editor',
        query: {
          id,
          name: row.name,
          column: this.defaultColumn
        }
      })
    },
    viewDetail(row) {
      const id = 'screenId_' + 123
      this.$router.push({
        path: '/preview',
        query: {
          id,
          name: row.name,
          column: this.defaultColumn
        }
      })
    },
    sortChange(row) {}
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.min-number {
  // width: 110px;
}
::v-deep .el-input-number--mini {
  width: 110px;
}
</style>
