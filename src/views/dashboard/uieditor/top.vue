<!--
 * @Descripttion:
 * @version:
 * @Author: 石亮亮
 * @email: shiliangliang@6cloudtech.com
 * @Date: 2021-04-20 09:58:43
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-15 14:52:32
 * @FilePath: /CdSec-Frontend/src/views/wel/cdosHomePage/components/top.vue
-->
<!-- top -->
<template>
  <el-card class="top" shadow="always">
    <div class="cardBox">
      <i
        class="iconL iconfont iconzuoyou01"
        @click="lessIndex()"
        :class="currentIndex === 0 || dataList.length <= 4 ? 'none' : 'hove'"
      ></i>
      <el-row :gutter="10">
        <el-col
          :span="4"
          class="device-probe"
          @click.native="drillDown"
          v-show="index >= currentIndex"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <el-tooltip class="item" effect="dark" placement="bottom">
            <div slot="content">
              {{ item.TypeName }}
              <br />
              在线：{{ item.Online }}
              <br />
              离线：{{ item.Offline }}
            </div>
            <div class="item">
              <div :class="'icon ' + item.ruleENName"></div>
              <!-- <div class="icon icon0"></div> -->
              <div class="text">
                <p class="title">{{ item.TypeName }}</p>
                <span class="num1">
                  在线：
                  <span>{{ item.Online }}</span>
                </span>
                <span class="num2">
                  离线：
                  <span>{{ item.Offline }}</span>
                </span>
              </div>
            </div>
          </el-tooltip>
        </el-col>
        <el-col
          :span="4"
          class="device-probe"
          @click.native="drillDown"
          v-show="index >= currentIndex"
          v-for="(item, index) in notDataLength"
          :key="index"
        >
          <div class="empty">
            <div class="icon-empty"></div>
            <div class="text">
              <p class="title">暂无探针</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <i
        class="iconR iconfont iconzuoyou02"
        :class="dataList.length - 6 - currentIndex > 0 ? 'hove' : 'none'"
        @click="addIndex()"
      ></i>
    </div>
    <!-- <span class="more el-col el-col-20">
      <a href="#/service/analysis/resources/syslog/deviceprobe"
         class="">
        <span>更多</span>
        <i class="iconfont icon icongengduo .moreBtn"></i>
      </a>
    </span> -->
  </el-card>
</template>

<script>
// import { deviceProbeOnline } from "./api";
export default {
  name: "top",
  data() {
    return {
      currentIndex: 0,
      dataList: []
    };
  },
  computed: {
    notDataLength() {
      return 6 - this.dataList.length < 0 ? 0 : 6 - this.dataList.length;
    }
  },
  //  生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //  生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getDevice();
  },
  //  方法集合
  methods: {
    lessIndex() {
      this.currentIndex -= 1;
    },
    addIndex() {
      this.currentIndex += 1;
    },
    async getDevice() {
      // let res = await deviceProbeOnline();
      let res = [
        {
          typeName: "六方云-工业审计V3_5",
          ruleENName: "",
          Online: 2,
          Offline: 0
        },
        {
          typeName: "六方云-IDS入侵检测",
          ruleENName: "",
          Online: 3,
          Offline: 3
        },
        {
          typeName: "六方云-工业防火墙",
          ruleENName: "IndustrialFirewall",
          Online: 2,
          Offline: 3
        },
        {
          typeName: "六方云-工业审计",
          ruleENName: "",
          Online: 0,
          Offline: 1
        },
        {
          typeName: "六方云-神探AI检测V2_3",
          ruleENName: "",
          Online: 1,
          Offline: 0
        },
        {
          typeName: "六方云-IDS入侵检测V3_5",
          ruleENName: "",
          Online: 2,
          Offline: 5
        },
        {
          typeName: "六方云-全流量探针",
          ruleENName: "",
          Online: 1,
          Offline: 0
        }
      ];
      let list = res.map((item) => {
        return {
          TypeName: item.typeName,
          ruleENName: item.ruleENName,
          Online: item.Online,
          Offline: item.Offline
        };
      });
      this.dataList = list;
    },
    drillDown() {
      console.log(123123);
      this.$router.push({
        path: "/service/analysis/resources/syslog/deviceprobe"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;
  /deep/.el-card__body {
    padding: 10px 15px !important;
  }
  .moreBtn {
    display: flex;
    align-items: center;
  }
  .more {
    position: absolute;
    top: 4px;
    color: #409eff;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    margin-left: 7px;
    a {
      float: right;
      display: flex;
      align-items: center;
    }
  }
  .el-col {
    margin-bottom: 0;
  }
  .cardBox {
    padding: 0 25px !important;
    box-sizing: border-box;
    overflow: hidden;
    height: 78px;
    position: relative;
    .device-probe {
      cursor: pointer;
    }
    .iconL,
    .iconR {
      position: absolute;
      top: 30px;
      font-size: 20px;
      color: #f2f4f7;
      cursor: pointer;
    }

    .iconL {
      left: 0px;
    }
    .iconR {
      right: 0px;
    }
    .none {
      cursor: not-allowed;
      pointer-events: none;
      cursor: default;
      color: #fff;
    }
    .hove {
      color: #f0f0f0;
    }
    .hove:hover {
      color: #409eff;
    }
    // .none:hover {
    //   color: #f2f4f7;
    // }
  }
  .item {
    background: #f6f6f6;
    border-radius: 8px;
    font-size: 12px;
    height: 78px;
    color: #333333;
    display: flex;
    align-items: center;
    .icon {
      margin: 20px;
      width: 36px;
      height: 30px;
      float: left;
      font-size: 40px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABRCAMAAAAaYFMCAAAA5FBMVEVHcEwnhOYnhOYnhOYnhObX4fTX4fQnhOYnhObX4fQnhOYnhOYnhOYnhObX4fTX4fQnhObX4fQnhOYnhOYnhObX4fTX4fTX4fTX4fTX4fTX4fTX4fTX4fQnhObX4fSfw/Awiee70vInhOYnhOag0f8nhObX4fT///9jqvJFl+yCvvlcouyTwfKryvBytPaRx/yYzP0uiec9kutUoe9rr/RPm+t3su/x9/1MnO5Bk+l6ufeJw/o0i+e2z/GFuvE8j+jB1fJHlekxiedSm+k2jemVvu+gxPBcpvGgyfTk8PzW6Ppqqu57dQkMAAAAJHRSTlMAEGCQIMCAwIBAoHDQMBBw4OBQQPAw8CCwYFDQoLCQmP3I1OhiM/UwAAAACXBIWXMAAAsSAAALEgHS3X78AAADNElEQVRYhe2Z2XaiQBCGQVld4hqzz8qfEZNBUDQ6msy+v//7zAHHCNrVNC1ezJz8lyD1HWrpKkqFUL0GCXXNqkpZTEvrytiP1K0KASxgPMivvgugIghYODJajICyAKAt5x83dPwR0BEgVCRDMPL9AKaIk+olK79MwHU8QBMhSKkMLHygxHlWtUxJxVaB0BnB4nimKel8AKaqKCb6jssD1IBZX0punJ9ZgBLgSeW/4zjjKLhZgDJGsvadOLhZABOuNMABrCfAE+A/A4SuoDxxQEnbAGbih9xYENCpmRuAB8xvhXTzeHxlAdrthItczN8Iao6ZAEBtp2Pg4kEU8LB+hgdQa+U0YIb5nZj9u+U6CDyAWdnKogGwvBHSEhhkA9ZjwCaLQvEsWucpDdhMGYk6WIj2zWFmHWhNjQEosJLNzUB8EICaGIfTgCFjvPYl3kBhA3yXfTCQCAKgqQRgRCQNOXcQgEqVDfCA291a+zkF3uUDNDU2YIwJs3Ln6OcCaKkvHgHAJCeADLIH/Nh10d0DPVzmBPgFBbmsEQAqTd2caVqj3oAotCFlngKAA8gpNqBzaAAZZMcZMs7mMLeL6iTAY8Y4oOqYApgdAjAEMNnujxMgyAmolAiAB0x363j62IFFASUKEBYEIINclIvoLCooyIpF9AN2mvZzp6nSaVKAvKJcVKsfGEDF4B8CqIee7JRqjQ1grTWlAJu2lgQMmT0zfx2QMWB3TARkJXAB7co2YAhMdqeKabSUkwGoV9HGLQkYMA+7XyDHoiwXlbcATgD83vloXXJ2ztkxsLTsw+7xs1sK0H2dTNPBjLFL4OwMV4CgD04Wvdq30Kz4LenV8t6VHC2Xu5zN8v6A7TnlAACuDg64wpd9ANl/EFXpL7BMecDzc9s+Io3bZ8blyxcIvnP6Oi0/DPDxOlZPPzUaadBx47S1uvmVXb5C+nR/nVRPN45X5s9bicvf3sva/5y2H6vViAC99MX7t1L6sGs+UuwgnX2vAF2cr5x0dPaseMjF5dlJKotO7IZxqrcEHuWrp+uGYf+NLztfbbthGIau6/qFkMlW9NNnhmHYvDLg6chmK+2CXSmK8gdgIwtZ/48jDgAAAABJRU5ErkJggg==)
        no-repeat;
      background-size: 100% 100%;
    }
    .IndustrialFirewall {
      // background: url("../img/IndustrialFirewall.png") no-repeat;
      background-size: 100% 100%;
    }
    .IndustrialGuard {
      // background: url("../img/IndustrialGuard.png") no-repeat;
      background-size: 100% 100%;
    }
    .APTScanEngine {
      // background: url("../img/APTScanEngine.png") no-repeat;
      background-size: 100% 100%;
    }

    // "IndustrialFirewall"
    // "IndustrialGuard"
    // "APTScanEngine"

    .text {
      padding: 10px 0;
      box-sizing: border-box;
      line-height: 20px;
      width: calc(100% - 90px);
      float: left;
      p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          font-weight: bold;
        }
      }
      .num1 {
        span {
          color: #2784e6;
        }
        margin-right: 10px;
      }
    }
  }
  .empty {
    background: #f6f6f6;
    border-radius: 8px;
    font-size: 12px;
    height: 78px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-empty {
      width: 36px;
      height: 30px;
      float: left;
      font-size: 40px;
      // background: url("../img/iconEmpty.png") no-repeat;
      background-size: 100% 100%;
    }
    .text {
      margin-left: 15px;
      color: #acacac;
      padding: 10px 0;
      box-sizing: border-box;
      line-height: 20px;
      float: left;
    }
  }
  .chartsBox {
    .charts {
      height: 65px;
    }
    p {
      width: 100%;
      font-size: 12px;
      height: 15px;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
