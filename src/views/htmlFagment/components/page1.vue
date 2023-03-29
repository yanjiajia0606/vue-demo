<template>
  <div style="overflow: hidden">
    <el-col :span="24" style="padding: 20px">
      <div style="display: flex">
        <div class="item-box" v-for="item in list" :key="item.title">
          <img :src="item.icon" alt="" class="image" />
          <div class="text-content">
            <div class="title">{{ item.title }}</div>
            <div class="data">{{ item.value }}</div>
          </div>
        </div>
      </div>
      <div style="display: flex; margin-top: 30px">
        <div class="item-panel" v-for="(item, index) in moduleList" :key="item.name + index">
          <div class="label-icon"></div>
          <div class="right-content">
            <div class="node-name">{{ item.name }}</div>
            <div class="node-total">节点总数</div>
            <div class="node-count">{{ item.total }}</div>
          </div>
          <div class="left-content">
            <ul class="node-type">
              <li :class="{ healthy: item.nums[0] }">
                <span class="w-auto">{{ item.nums[0] }}</span>
                <span class="w-60">个健康节点</span>
              </li>
              <li :class="{ fault: item.nums[1] }">
                <span class="w-auto">{{ item.nums[1] || 0 }}</span>
                <span class="w-60">个故障节点</span>
              </li>
              <li :class="{ offLine: item.nums[2] }">
                <span class="w-auto">{{ item.nums[2] || 0 }}</span>
                <span class="w-60">个离线节点</span>
              </li>
              <li :class="{ maintain: item.nums[3] }">
                <span class="w-auto">{{ item.nums[3] || 0 }}</span>
                <span class="w-60">个维护节点</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import totalImage from '@/assets/icon/total_node.png'
import healthyImage from '@/assets/icon/total_node.png'
import faultImage from '@/assets/icon/fault_node.png'
import offLineImage from '@/assets/icon/off_line_node.png'
import maintainImage from '@/assets/icon/maintain_node.png'
export default {
  name: 'page1',
  data() {
    return {
      list: [
        {
          title: '全部节点',
          value: 79,
          icon: totalImage
        },
        {
          title: '健康节点',
          value: 79,
          icon: healthyImage
        },
        {
          title: '故障节点',
          value: 79,
          icon: faultImage
        },
        {
          title: '离线节点',
          value: 79,
          icon: offLineImage
        },
        {
          title: '维护节点',
          value: 79,
          icon: maintainImage
        }
      ],
      moduleList: [
        {
          name: 'ES',
          total: 13,
          nums: [13, 0, 0, 0]
        },
        {
          name: '数据库',
          total: 24,
          nums: [0, 24, 0, 0]
        },
        {
          name: '数据库',
          total: 12,
          nums: [0, 0, 12, 0]
        },
        {
          name: '数据库',
          total: 24,
          nums: [0, 0, 12, 12]
        }
      ]
    }
  },
  methods: {
    handleBtn() {
      console.log('g2/line')
    }
  }
}
</script>

<style lang="scss" scoped>
.line-content {
  height: 120px;
  box-shadow: inset 0px -1px 0px #c1c1c1;
  .chart-content {
    border: 1px solid #efefef;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    padding: 25px;
  }
}
.item-box {
  box-sizing: border-box;
  background: #f6f6f6;
  border-radius: 8px;
  font-size: 12px;
  height: 98px;
  color: #333;
  display: flex;
  align-items: center;
  width: 20%;
  margin-right: 10px;
  display: flex;
  padding: 20px 8px 18px 20px;
  // justify-content: center;
  .image {
    width: 60px;
    height: 60px;
  }
  .text-content {
    margin-left: 20px;
    .title {
      color: #888888;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .data {
      font-size: 24px;
      color: #333;
      font-weight: 700;
    }
  }
}
.item-panel {
  width: 20%;
  margin-right: 10px;
  box-sizing: border-box;
  padding: 10px 10px 0px 20px;
  height: 104px;
  border-radius: 8px;
  background: #f6f6f6;
  position: relative;
  font-size: 12px;
  color: rgba(136, 136, 136, 0.4);
  display: flex;
  .label-icon {
    position: absolute;
    width: 4px;
    height: 20px;
    left: 0px;
    top: 8px;
    background: #4b8ce6;
    border-radius: 0px 2px 2px 0px;
  }
  .right-content {
    flex: 1;
    .node-name {
      font-size: 14px;
      color: #333;
    }
    .node-total {
      margin-top: 11px;
      margin-bottom: 10px;
      color: #888;
    }
    .node-count {
      font-size: 24px;
      color: #333;
      font-weight: 700;
    }
  }
  .left-content {
    width: 88px;
    li {
      height: 18px;
      margin-bottom: 4px;
      display: flex;
      .w-60 {
        display: inline-block;
        width: 60px;
      }
      .w-auto {
        display: inline-block;
        flex: 1;
        text-align: right;
      }
    }
  }
  .healthy {
    color: #4b8ce6;
  }
  .fault {
    color: #eb5855;
  }
  .offLine {
    color: #888888;
  }
  .maintain {
    color: #fe9a00;
  }
}
</style>
