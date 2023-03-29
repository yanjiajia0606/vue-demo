<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 11:06:54
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2023-01-05 16:46:18
 * @FilePath: /saber/src/components/uieditor/collect/collectPanel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="collect-container">
    <div class="wrapper-right-tree">
      <div class="collect-top">
        组件列表
        <i class="el-icon-arrow-left icon-btn" @click="handleBtn"></i>
      </div>
      <div v-for="item in compType" :key="item.title">
        <div>
          <div @click="nodeClick(item)" class="list-title">
            <i class="icon el-icon-arrow-right" :class="{ active: item.open }"></i>
            <i class="title-icon" :class="item.icon"></i>
            <span>{{ item.title + '(' + item.children.length + ')' }}</span>
          </div>
          <compList
            :class="{
              collapseItemWrap: item.open,
              unCollapseItemWrap: !item.open
            }"
          >
            <!-- <compListItem
              v-for="comp in item.children"
              :key="comp.name + comp.title"
              :title="comp.title"
              :imgSrc="comp.imgSrc"
              :data="comp"
              :name="comp.name"
              draggable
              @click="handleItemClick(comp, $event)"
            >
            </compListItem> -->
            <compListItem
              v-for="comp in item.children"
              :key="comp"
              :name="comp"
              draggable
            ></compListItem>
          </compList>
        </div>
      </div>
    </div>
    <div class="bottom-slider"></div>
  </div>
</template>

<script>
import compList from '@/views/dashboard/uieditor/collect/compList'
import compListItem from '@/views/dashboard/uieditor/collect/compListItem'
import { mapState } from 'vuex'
export default {
  components: {
    compList,
    compListItem
  },
  data() {
    return {
      list: [
        {
          title: '我的收藏',
          open: true,
          icon: 'el-icon-star-on collect',
          child: [
            {
              name: 'lineBar',
              title: '折现-柱形图1',
              path: '@/views/dashboard/uieditor/lineBar',
              imgSrc: '',
              style: {}
            },
            {
              name: 'lineBar',
              title: '折现-柱形图2',
              path: '@/views/dashboard/uieditor/lineBar',
              imgSrc: '',
              style: {}
            },
            {
              name: 'lineBar',
              title: '折现-柱形图3',
              path: '@/views/dashboard/uieditor/lineBar',
              imgSrc: '',
              style: {}
            },
            {
              name: 'lineBar',
              title: '折现-柱形图4',
              path: '@/views/dashboard/uieditor/lineBar',
              imgSrc: '',
              style: {}
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState({
      compType: (state) => state.editor.compType
    })
  },
  methods: {
    nodeClick(item) {
      item.open = !item.open
    },
    handleBtn() {
      this.$store.commit('editor/updateEditTabSelect', {
        type: 'component',
        value: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.collect-container {
  position: relative;
  width: 176px;
  color: #bcc9d4;
}
.list-title {
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 16px;
  color: #bcc9d4;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.25);
  background: #12171b;
  > .icon {
    transition: transform 0.25s linear;
    &.active {
      transform: rotate(90deg);
    }
  }
}
.wrapper-right-tree::-webkit-scrollbar {
  display: block;
  width: 4px;
}

.wrapper-right-tree::-webkit-scrollbar-thumb {
  background: #434b55;
  border: 1px solid #434b55;
}
.title-icon {
  font-size: 20px;
  margin: 0 6px;
}
.icon {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}
.title-icon.collect {
  color: #eda43a;
}
.collapseItemWrap {
  max-height: 500px;
  transition: max-height ease-in-out 0.5s;
}
.unCollapseItemWrap {
  max-height: 0;
  transition: max-height ease-in-out 0.5s;
}
.bottom-slider {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #232528;
  box-shadow: 0 -1px #000;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  z-index: 1;
  padding-left: 120px;
}
.collect-top {
  background: #2e343c;
  text-indent: 10px;
  height: 30px;
  color: #bcc9d4;
  line-height: 30px;
  position: relative;
  user-select: none;
  .icon-btn {
    position: absolute;
    right: 5px;
    line-height: 30px;
    cursor: pointer;
  }
}
</style>
