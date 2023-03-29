<template>
  <div class="container">
    <ul class="list">
      <li class="list-item" v-for="item in list" :key="item.id">
        <div class="title">
          <el-tooltip class="item" effect="dark" :content="item.name" placement="top">
            <span>{{ item.name }}</span>
          </el-tooltip>
        </div>
        <div class="content">
          <div class="info">
            <span>类型：</span>
            <span class="value">{{ item.method }}</span>
          </div>
          <div class="info">
            <span>IP：</span>
            <span class="value">{{ item.ip }}</span>
          </div>
          <div class="info">
            <span>端口：</span>
            <span class="value">{{ item.type }}</span>
          </div>
          <div class="info">
            <span>用户名：</span>
            <span class="value">{{ item.type }}</span>
          </div>
          <div class="info">
            <span>密码：</span>
            <span class="value">{{ item.type }}</span>
          </div>
        </div>
        <div class="footer">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button
              size="mini"
              icon="iconfont iconbianji1"
              @click.stop="editRow(row)"
            ></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button
              size="mini"
              icon="iconfont icona-chuzhi-2"
              @click.stop="deleteRow(row)"
            ></el-button>
          </el-tooltip>
        </div>
      </li>
      <li class="list-item">
        <div class="add-item">
          <i class="el-icon-plus"></i>
          新增凭证
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '管理凭证', // 名称
          method: 'web',
          ip: '192.168.70.21',
          type: '',
          snmp: '',
          groupName: '',
          port: '',
          username: '',
          password: '',
          url: '',
          action: 'post',
          protocol: '1',
          desc: []
        },
        {
          name: '管理凭证', // 名称
          method: 'web',
          ip: '192.168.70.21',
          type: '',
          snmp: '',
          groupName: '',
          port: '',
          username: '',
          password: '',
          url: '',
          action: 'post',
          protocol: '1',
          desc: []
        },
        {
          name: '管理凭证', // 名称
          method: 'web',
          ip: '192.168.70.21',
          type: '',
          snmp: '',
          groupName: '',
          port: '',
          username: '',
          password: '',
          url: '',
          action: 'post',
          protocol: '1',
          desc: []
        },
        {
          name: '管理凭证', // 名称
          method: 'web',
          ip: '192.168.70.21',
          type: '',
          snmp: '',
          groupName: '',
          port: '',
          username: '',
          password: '',
          url: '',
          action: 'post',
          protocol: '1',
          desc: []
        },
        {
          name: '管理凭证', // 名称
          method: 'web',
          ip: '192.168.70.21',
          type: '',
          snmp: '',
          groupName: '',
          port: '',
          username: '',
          password: '',
          url: '',
          action: 'post',
          protocol: '1',
          desc: []
        },
        {
          name: '管理凭证', // 名称
          method: 'web',
          ip: '192.168.70.21',
          type: '',
          snmp: '',
          groupName: '',
          port: '',
          username: '',
          password: '',
          url: '',
          action: 'post',
          protocol: '1',
          desc: []
        },
        {
          name: '管理凭证', // 名称
          method: 'web',
          ip: '192.168.70.21',
          type: '',
          snmp: '',
          groupName: '',
          port: '',
          username: '',
          password: '',
          url: '',
          action: 'post',
          protocol: '1',
          desc: []
        }
      ]
    }
  },
  method: {
    editRow(row) {
      console.log(row)
    },
    deleteRow(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .list {
    display: flex;
    flex-wrap: wrap;
    .list-item {
      position: relative;
      color: #888;
      background: #fff;
      width: 16%;
      height: 200px;
      margin: 10px;
      border: 1px solid #c1c1c1;
      border-radius: 4px;
      font-size: 12px;
      flex-shrink: 0;
      .title {
        height: 30px;
        line-height: 30px;
        color: #333;
        font-size: 14px;
        padding-left: 10px;
        border-bottom: 1px solid #c1c1c1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .content {
        padding: 10px;
        line-height: 18px;
        height: 110px;
        overflow-x: hidden;
        overflow-y: auto;
        .info {
          padding-bottom: 4px;
          display: flex;
          justify-content: space-between;
        }
      }
      .footer {
        margin: 0 10px 0px 0;
        text-align: right;
        ::v-deep {
          .el-button {
            width: 26px;
            height: 26px;
            margin-left: 3px;
            padding: 0;
            color: #888;
            border-color: #c1c1c1;
          }
        }
      }
      .add-item {
        color: #333;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    }
  }
}
</style>
