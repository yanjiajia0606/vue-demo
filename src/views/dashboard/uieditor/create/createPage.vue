<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-24 14:53:49
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-24 17:17:11
 * @FilePath: /qiankun/saber-admin/src/components/uieditor/create/createPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="add-screen">新建首页</div>
</template>

<script>
export default {
  name: "createPage"
};
</script>

<style lang="scss" scoped>
.add-screen {
  margin: 20px 0 10px 0;
  width: 258px;
  height: 78px;
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: middle;
  border: 1px solid #00baff;
  color: #8eeeff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    color-stop(0, rgba(0, 222, 255, 0.39)),
    to(rgba(0, 174, 255, 0.19))
  );
  background-image: linear-gradient(
    -90deg,
    rgba(0, 222, 255, 0.39) 0,
    rgba(0, 174, 255, 0.19) 100%
  );
  box-shadow: 0 0 10px 0 rgba(55, 224, 255, 0.3);
  font-size: 14px;
  cursor: pointer;
}
</style>
