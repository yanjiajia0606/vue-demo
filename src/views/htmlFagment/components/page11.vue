<template>
  <div class="filter-comp" :style="{ '--background': background }">
    <div class="title">筛选器</div>
    <div class="filter-content">
      <div class="preset conetent">
        <div class="type">预置筛选器</div>

        <ul class="item-list">
          <li
            class="label"
            v-for="item in presetData"
            :key="item.id"
            :class="{ active: item.id === activeId }"
            @click.self="nodeClick(item)"
          >
            <span class="text" @click.self="nodeClick(item)">{{ item.label }}</span>
            <span class="setting">
              <i class="icon iconfont iconbianji1" @click.self="edit(item)"></i>
              <i class="icon iconfont icona-chuzhi-2" @click.self="remove(item)"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="custom conetent">
        <div class="type">我保存的筛选器</div>
        <ul class="item-list">
          <li
            class="label"
            v-for="item in customData"
            :key="item.id"
            :class="{ active: item.id === activeId }"
            @click="nodeClick(item)"
          >
            <span class="text">{{ item.label }}</span>
            <span class="setting">
              <i class="icon iconfont iconbianji1" @click.self="edit"></i>
              <i class="icon iconfont icona-chuzhi-2" @click.self="remove"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default() {
        return '#f6f6f6'
      }
    }
  },
  data() {
    return {
      activeId: '',
      presetData: [
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        },
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        },
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        },
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        }
      ],
      customData: [
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        },
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        },
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        },
        {
          id: Math.random() * 100000,
          label: '今日新增威胁告警'
        }
      ]
    }
  },
  methods: {
    nodeClick(params) {
      this.activeId = params.id
    },
    edit() {
      console.log('edit')
      this.$emit('edit')
    },
    remove() {
      console.log('remove')
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-comp {
  width: 180px;
  max-height: 100vh;
  background: var(--background);
  // background: #f6f6f6;
  border-radius: 4px;
  margin: 20px;
  color: #333;
  overflow-x: hidden;
  .title {
    border-bottom: 1px solid rgba(210, 210, 210, 0.5);
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 350px;
  }

  .filter-content {
    overflow: auto;
  }
  .conetent {
    padding: 10px;
    .type {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .item-list {
      font-size: 12px;
      color: #888;
      .label {
        height: 22px;
        border-radius: 2px;
        line-height: 22px;
        text-indent: 4px;
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        &:hover {
          background: #ecf5ff;
          .setting {
            opacity: 1;
            // display: block;
          }
        }
        &.active {
          background: #ecf5ff;
          color: #4b8ce6;
        }
        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icon {
          font-size: 12px;
          margin-right: 4px;
        }
        // margin-bottom: 10px;
      }
    }
  }
  .preset {
    border-bottom: 1px solid rgba(210, 210, 210, 0.5);
    max-height: 500px;
    overflow-y: auto;
  }
  .custom {
    max-height: 500px;
    min-height: 150px;
    overflow-y: auto;
  }
  .setting {
    // display: none;
    opacity: 0;
  }
}
</style>
