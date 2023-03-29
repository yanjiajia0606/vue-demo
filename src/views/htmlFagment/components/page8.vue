<template>
  <div style="background: #eee; width: 1000px; float: left; height: 1000px; padding: 10px">
    <el-col :span="20" class="top">
      <span class="icon iconfont icontishi" @click="isShowTip === true"></span>
      <!-- <div style="height: 100%; display: flex; position: absolute; top: 0; align-items: center"> -->
      <div class="top-card">
        <div class="top-content">
          <div class="size_20 value dark-red weight_500">200</div>
          <div class="title">风险资产统计</div>
        </div>
        <div class="top-content">
          <div class="size_16 value dark weight_50">3</div>
          <div class="title">今日新增</div>
        </div>
        <div class="top-content left">
          <div class="title">风险等级：</div>
          <ul>
            <li>
              <p class="dark size_16 weight_500 lh_24">351</p>
              <p class="lh_18 dark-red">已失陷</p>
            </li>
            <li>
              <p class="dark size_16 weight_500 lh_24">351</p>
              <p class="lh_18 light-red">高危</p>
            </li>
            <li>
              <p class="dark size_16 weight_500 lh_24">351</p>
              <p class="lh_18 gold">中危</p>
            </li>
            <li>
              <p class="dark size_16 weight_500 lh_24">351</p>
              <p class="lh_18 green">低危</p>
            </li>
          </ul>
        </div>
        <div class="top-content left">
          <div class="title">重要性：</div>
          <ul>
            <li>
              <p class="dark size_16 weight_500 lh_24">351</p>
              <p class="lh_18 blue">核心</p>
            </li>
            <li>
              <p class="dark size_16 weight_500 lh_24">351</p>
              <p class="lh_18 light-blue">重要</p>
            </li>
            <li>
              <p class="dark size_16 weight_500 lh_24">351</p>
              <p class="lh_18">一般</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- </div> -->
    </el-col>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.weight_500 {
  font-weight: 500;
}
.size_20 {
  font-size: 20px;
}
.size_16 {
  font-size: 16px;
}
.dark-red {
  color: #ae221f;
}
.light-red {
  color: #eb5855;
}
.gold {
  color: #f1b75b;
}
.green {
  color: #a3cc35;
}
.dark {
  color: #333;
}
.lh_24 {
  line-height: 24px;
}
.lh_18 {
  line-height: 18px;
}
.bule {
  color: #4b8ce6;
}
.light-blue {
  color: #80bdfd;
}
.top {
  height: 80px;
  border-radius: 8px;
  padding: 8px 10px;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  border-radius: 8px;
  .icon {
    position: absolute;
    top: 8px;
    left: 8px;
    color: #4b8ce6;
    font-size: 12px;
    cursor: pointer;
  }
  .top-card {
    text-align: center;
    font-size: 12px;
    color: #888888;
    display: flex;
    align-items: center;
    .top-content {
      overflow: hidden;
      white-space: nowrap;
      margin: 0 10px;
      .value {
        line-height: 30px;
      }
      .title {
        line-height: 18px;
      }
    }
    .left {
      display: flex;
      align-items: center;
      flex: 1;
      margin-right: 0;
      .title {
        margin-right: 10px;
      }
      ul {
        // padding: 10px 20px;
        background: #f6f6f6;
        border-radius: 4px;
        height: 64px;
        display: flex;
        align-items: center;
        flex: 1;
        li {
          flex: 1;
        }
      }
    }
  }
}
</style>
