<template>
  <div>
    <input type="text" name="username" id="usr" pattern="[0-9]+" title="格式错误" required />
    <div :contenteditable="true">111</div>
  </div>
</template>

<script>
export default {
  created() {
    const obj = {
      assetName: '172.24.20.241',
      modelName: '数据库异常',
      alarmDescTemp: '【#{modelName}】#{assetName}被用户#{groupKey} 访问了mysql数据库',
      groupKey: 'root'
    }

    const str = '【#{modelName}】#{assetName}被用户#{groupKey} 访问了mysql数据库'
    // const reg = /#\{(\S*)\}/g
    // let matchKey2 = reg.exec(str)
    // console.log(matchKey2, 'reg')
    // var str = '{Hello} world {Hello11}!'
    //查找"Hello"
    var patt = /#\{[a-zA-Z]+\}/g
    var result = patt.exec(str)
    console.log('返回值: ' + result, str.match(patt))
    var a = []
  }
}
</script>

<style lang="scss" scoped>
.three-scene-info {
  .content {
    width: 180px;
    color: #fff;
    height: 70px;
    border: 1px solid rgba(10, 113, 141, 0.3);
    background: rgba(87, 120, 154, 0.3);
    padding: 10px;
    line-height: 21px;
  }
  .title {
    // padding: 10px;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
