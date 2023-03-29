<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-14 14:15:15
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-14 18:33:56
 * @FilePath: /saber/src/components/uieditor/setting/uploadImage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="upload-image">
    <div class="upload-wraper" @click="showDialog">
      <img v-if="thumbnail" :src="thumbnail" class="uploaded-img" />
      <div class="del" v-if="!!thumbnail" @click.stop="delPic">
        <span class="icon el-icon-close"></span>
      </div>
      <!-- <el-upload v-if="!thumbnail" class="tips"> -->
      <div v-if="!thumbnail" class="tips">{{ tips }}</div>
      <!-- </el-upload> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  props: {
    value: String,
    resourceType: {
      type: String,
      default: "picture"
    },
    locateFolderName: {
      type: String,
      default: "页面背景"
    },
    tips: {
      type: String,
      default: "选择/上传图片"
    }
  },
  components: {},
  data() {
    return {
      isResourcesDialog: false
    };
  },
  computed: {
    thumbnail: {
      get: function () {
        return this.value;
      },
      set: function (val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    selectedFile(data) {
      this.thumbnail = data.url;
    },
    showDialog() {
      this.isResourcesDialog = true;
    },
    closeDialog() {
      this.isResourcesDialog = false;
    },
    delPic() {
      this.thumbnail = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.upload-wraper {
  position: relative;
  width: 100%;
  height: 90px;
  border: 1px solid #393b4a;
  cursor: pointer;
  .uploaded-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .del {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .tips {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 12px;
  }
}
</style>
