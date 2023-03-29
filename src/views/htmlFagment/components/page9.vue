<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="风险等级评定规则说明"
      :visible.sync="dialogVisible"
      width="588px"
      :before-close="handleClose"
    >
      <div class="dialog-content">
        <div class="description-box">
          <div class="title">
            <span class="icon bar"></span>
            <span class="text">评定说明</span>
          </div>
          <div class="content lh_18">
            资产风险等级根据资产自身存在脆弱性、威胁告警来评定。
            <br />
            资产风险等级的评定随当前设置的时间范围而变。
            <br />
            若需要修改评定标准可前往&lt;
            <span style="color: #4b8ce6; cursor: pointer">风险等级计算配置</span>
            &gt;，自定义配置参与计算资产风险的数据项。
          </div>
        </div>
        <div class="rules-box">
          <div class="title">
            <span class="icon bar"></span>
            <span class="text">评定规则</span>
          </div>
          <div class="content">
            <div class="left">
              <div class="title">风险等级</div>
              <ul>
                <li class="btn dark-red">失陷</li>
                <li class="btn light-red">高危</li>
                <li class="btn gold">中危</li>
                <li class="btn green">低危</li>
              </ul>
            </div>
            <div class="right">
              <div class="title">说明</div>
              <div class="text lh_18">
                资产存在: 关联的威胁告警中外连IP在威胁情报中命中C&C节点，则评定为失陷资产。
                <br />
                资产存在: 未处置的危急、高危的脆弱性，
                <br />
                或者存在未处置的危急、高危威胁告警，则评定为高危资产。
                <br />
                其中危急、高危脆弱性包括：危急漏洞、高危漏洞、高危不合规基线配置、弱密码。
                <br />
                资产存在: 未处置的中危脆弱性，
                <br />
                或者存在未处置的中危威胁告警，则评定为中危资产。
                <br />
                其中中危脆弱性包括：中危漏洞、中危不合规基线配置
                <br />
                资产存在: 未处置的低危脆弱性，
                <br />
                或者存在未处置的低危威胁告警，则评定为低危资产。
                <br />
                其中低危脆弱性包括：低危漏洞、低危不合规基线配置
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" class="confirm">
          <i class="icon iconfont iconconfirm-line"></i>
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      done()
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep {
  .el-dialog__header {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.102927);
    border-radius: 8px 8px 0px 0px;
    height: 48px;
    padding: 0 20px;
    line-height: 48px;
    border-bottom: 1px solid #d7d7d7;
    .el-dialog__title {
      color: #333;
      font-weight: 350;
      font-size: 14px;
    }
    .el-dialog__headerbtn {
      top: 12px;
      .el-dialog__close {
        color: #888;
      }
    }
  }
  .el-dialog__body {
    padding: 20px 14px 20px 28px;
  }
  .el-dialog__footer {
    /* padding: 10px 20px 20px; */
    height: 50px;
    border-radius: 0px 0px 8px 8px;
    padding: 0;
    border-top: 1px solid #d7d7d7;

    /* padding: 10px; */
  }
}
.dialog-content {
  // padding: 20px 14px 20px 28px;
  font-size: 12px;
  color: #333;
  font-weight: 350px;
  .rules-box,
  .description-box {
    margin-bottom: 20px;
  }
  .description-box {
    .content {
      padding-left: 13px;
    }
  }
  .rules-box {
    .content {
      overflow: hidden;
      padding-left: 13px;
      .title {
        color: #000000;
      }
      .right {
        float: left;
        margin-left: 20px;
      }
      .left {
        float: left;
      }
    }
  }
  .title {
    line-height: 21px;
    margin-bottom: 10px;
    .bar {
      display: inline-block;
      height: 14px;
      width: 2px;
      background: #4b8ce6;
      margin-right: 7px;
    }
    .text {
      font-weight: 350px;
      font-size: 14px;
      vertical-align: text-bottom;
    }
  }
  .btn {
    width: 60px;
    height: 24px;
    margin-bottom: 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 24px;
    color: #fff;
  }
}
.lh_18 {
  line-height: 18px;
}
.dark-red {
  background: #ae221f;
}
.light-red {
  background: #eb5855;
}
.gold {
  background: #f1b75b;
}
.green {
  background: #a3cc35;
}
.confirm {
  background: #4b8ce6;
  border-radius: 2px;
  font-size: 12px;
  height: 30px;
  margin-top: 9px;
  margin-right: 10px;
  line-height: 0;
  width: 62px;
  padding: 0;
  .size_14 {
    font-weight: 14px;
  }
}
</style>
