<template>
  <div style="background: #eee; padding: 20px; height: 1000px; float: left">
    <div class="tree" :span="4">
      <div class="tree-title">{{ title }}</div>
      <div class="tool-panel" :class="{ expanded: isSearch, unexpanded: !isSearch }">
        <div class="tool-top">
          <div class="tool-box">
            <span
              class="item"
              :class="{ active: item.typeCode === typeCode }"
              v-for="item in toolList"
              :key="item.typeCode"
              @click="handleTree(item.typeCode)"
            >
              <!-- {{ item.typeCode }} -->
              <span class="icon iconfont" :class="item.icon"></span>
            </span>
          </div>
          <div class="search" @click="isSearch = !isSearch" :class="{ active: isSearch }">
            <span class="icon iconfont iconsousuo-2"></span>
          </div>
        </div>
        <div v-show="isSearch" class="tool-search">
          <el-input class="tree-input" size="small" placeholder="查询" v-model="filterText">
            <i slot="prefix" class="icon iconfont iconsousuo-2"></i>
          </el-input>
        </div>
      </div>
      <div class="tree-list" v-loading="loading">
        <el-tree
          class="tree-container"
          v-show="typeCode === '1'"
          :data="dataList"
          :props="organizationProps"
          node-key="id"
          ref="organizationTree"
          default-expand-all
          :current-node-key="currentNode"
          :default-expanded-keys="expandedKeys"
          :check-strictly="true"
          :filter-node-method="filterNode"
          :expand-on-click-node="false"
          @node-click="nodeClick"
        >
          <template slot-scope="{ node }">
            <el-tooltip
              class="item"
              effect="dark"
              :content="node.label"
              placement="top-start"
              open-delay="150"
              :disabled="true"
            >
              <div @mouseover="onMouseOver(node.label)" class="ellipsis">
                <span class="el-tree-node__label" :ref="node.label">{{ node.label }}</span>
              </div>
            </el-tooltip>
          </template>
        </el-tree>
        <el-tree
          v-show="typeCode != '1'"
          class="tree-container"
          :data="dataList"
          :props="defaultProps"
          node-key="id"
          ref="defaultTree"
          default-expand-all
          :current-node-key="currentNode"
          :default-expanded-keys="expandedKeys"
          :check-strictly="true"
          :filter-node-method="filterNode"
          :expand-on-click-node="false"
          @node-click="nodeClick"
        >
          <template slot-scope="{ node }">
            <el-tooltip
              class="item"
              effect="dark"
              :content="node.label + node.label.length"
              placement="top-start"
              open-delay="150"
              :disabled="node.label.length < 13"
            >
              <div @mouseover="onMouseOver(node.label)" class="ellipsis">
                <span class="el-tree-node__label" :ref="node.label">{{ node.label }}</span>
              </div>
            </el-tooltip>
          </template>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
import { getdeptOtherTree, getDeptAllTree } from '@/api/tree.js'
export default {
  props: {
    defaultTypeCode: {
      type: String,
      default: () => '1'
    },
    defaultExpandedKeys: {
      type: Array,
      default: () => []
    },
    defaultCurrentNode: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      loading: true,
      filterText: '',
      toolList: [
        {
          name: '组织结构',
          icon: 'iconwangluoxitong',
          typeCode: '1'
        },
        {
          name: '设备类型',
          icon: 'iconshebeiguanli',
          typeCode: '2'
        },
        {
          name: '安全域',
          icon: 'iconquyu',
          typeCode: '3'
        },
        {
          name: '工业层级',
          icon: 'iconlayerscengji',
          typeCode: '4'
        },
        {
          name: '业务',
          icon: 'iconwangluo',
          typeCode: '5'
        },
        {
          name: '自定义',
          icon: 'iconpeizhiguanli1',
          typeCode: '6'
        }
      ],
      dataList: [],
      typeCode: '',
      expandedKeys: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      organizationProps: {
        children: 'children',
        label: 'deptName'
      },
      isSearch: false,
      currentNode: '',
      isShowTooltip: true
    }
  },
  computed: {
    title() {
      return this.toolList.find((item) => item.typeCode === this.typeCode).name
    }
  },
  created() {
    this.typeCode = this.defaultTypeCode || this.typeCode
    this.expandedKeys = [...this.defaultExpandedKeys] || this.expandedKeys
    this.currentNode = this.defaultCurrentNode || this.currentNode
    window._this = this
    this.initTree()
  },
  watch: {
    filterText(val) {
      if (this.typeCode === '1') {
        console.log(val, this.$refs.organizationTree)
        this.$refs.organizationTree.filter(val)
      } else {
        this.$refs.defaultTree.filter(val)
      }
    }
  },
  methods: {
    async initTree() {
      this.loading = true
      try {
        let res = null
        if (this.typeCode === '1') {
          res = await getDeptAllTree({ id: '1357590660078198786' })
        } else {
          res = await getdeptOtherTree(this.typeCode)
        }
        this.loading = false
        if (res.status === 200) {
          this.dataList = [res.data.data]
        } else {
          this.dataList = []
        }
      } catch {
        this.loading = false
      }
      // getdeptOtherTree(this.typeCode).then((res) => {
      //   console.log(res, 'res.data.data')
      //   if (res.status === 200) {
      //     this.dataList = [res.data.data]
      //   }
      //   // this.dataList = [res.data.data]
      //   // this.data4 = [res.data.data]
      //   // this.treeData[0].disabled = true
      //   // let lastIndex = this.data4[0].children.length - 1
      //   // if (this.data4[0].children[lastIndex].name === '未分配') {
      //   //   this.data4[0].children[lastIndex].disabled = true
      //   // }
      //   // // 根据跳转信息显示设置默认当前类型的资产列表
      //   // let currentType = this.$route.query.deviceType || ''
      //   // if (currentType) {
      //   //   let currentNode = this.treeData[0].children.filter((item) => {
      //   //     return item.name.indexOf(currentType) !== -1
      //   //   })
      //   //   this.$nextTick(() => {
      //   //     this.$refs.tree.setCurrentKey(currentNode[0].id)
      //   //     // this.nodeClick(currentNode[0])
      //   //   })
      //   // } else {
      //   //   // this.nodeClick(this.treeData[0])
      //   // }
      // })
    },
    handleTree(val) {
      this.typeCode = val
      this.initTree()
    },
    filterNode(value, data) {
      if (!value) return true
      if (this.typeCode === '1') return data.deptName.indexOf(value) !== -1
      return data.name.indexOf(value) !== -1
    },
    nodeClick(value) {
      this.$emit('nodeClick', value)
      console.log(value)
    },
    onMouseOver(str) {
      // 内容超出，显示文字提示内容
      const tag = this.$refs[str]
      const parentWidth = tag.parentNode.offsetWidth // 获取元素父级可视宽度
      const contentWidth = tag.offsetWidth // 获取元素可视宽度
      this.isShowTooltip = contentWidth <= parentWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.tree {
  width: 180px;
  background: #ffffff;
  border-radius: 8px;
  color: #333;
  height: 100%;
  font-size: 12px;
  overflow: hidden;
  .tree-title {
    // height: 32px;
    // line-height: 32px;
    padding: 10px;
    font-weight: 350;
    font-size: 14px;
    border-bottom: 1px solid #d2d2d2;
  }
  .tool-panel {
    border-bottom: 1px solid #d2d2d2;
    transition: height linear 0.3s;
    overflow: hidden;
    &.expanded {
      height: 83px;
    }
    &.unexpanded {
      height: 46px;
    }
    .tool-top {
      display: flex;
      align-items: center;
      height: 46px;
      .search {
        margin-left: 5px;
        height: 22px;
        width: 22px;
        line-height: 22px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
        &.active {
          background: #4b8ce6;
          color: #fff;
        }
        .icon {
          font-size: 14px;
        }
      }
      .tool-box {
        // width: 136px;
        padding: 2px;
        // height: 26px;
        background: #f6f6f6;
        border-radius: 4px;
        margin-left: 10px;
        .item {
          display: inline-block;
          width: 22px;
          height: 22px;
          line-height: 22px;
          border-radius: 2px;
          text-align: center;
          cursor: pointer;
          &.active {
            background: #4b8ce6;
            color: #fff;
          }
          .icon {
            font-size: 12px;
          }
        }
      }
    }
    .tool-search {
      display: flex;
      align-items: center;
      padding: 0 10px;
      margin-bottom: 10px;
      .icon {
        font-size: 14px;
      }
    }
    ::v-deep {
      .el-input__inner {
        height: 26px;
        line-height: 26px;
      }
      .el-input__prefix {
        display: flex;
        align-items: center;
      }
    }
  }
  .tree-list {
    margin-top: 9px;
    height: 100%;
    overflow: auto;
    .tree-container {
      color: #333;
      font-size: 12px;
      margin-bottom: 20px;
      ::v-deep {
        .el-tree-node__label {
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .el-tree-node__expand-icon {
          color: #333333;
        }
        .el-tree-node__expand-icon.is-leaf {
          color: transparent;
        }
      }
    }
  }
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
