<template>
  <div class="container" v-if="isDel">
    <div class="tab">
      <!-- <el-button
        :icon="collectIcon"
        size="mini"
        plain
        class="el-button"
        :class="{ active: isCollect }"
        :disabled="!isShowCollect"
        @click="handleCollect" -->
      <!-- ></el-button> -->
      <span
        :class="{ active: isCollect }"
        :disabled="!isShowCollect"
        @click="handleCollect"
      >
        <i :class="collectIcon"></i>
      </span>
      <!-- <el-button
        icon="el-icon-delete"
        size="mini"
        plain
        class="el-button"
        @click="remove"
      ></el-button> -->
      <span @click="remove"> <i class="el-icon-delete"></i> </span>
    </div>
    <!-- <div style="padding: 5px; width: 100%; height: 100%"> -->
    <slot></slot>
    <!-- </div> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isCollect: 0,
      isDel: 1,
      isShowCollect: true,
      id: null
    }
  },
  computed: {
    collectIcon() {
      return this.isCollect === 0 ? 'el-icon-star-off' : 'el-icon-star-on'
    },
    ...mapGetters({
      collectList: 'collectList'
    })
  },
  created() {
    this.id = this.guid()
    const { isShowCollect = false } = this.$attrs
    this.isShowCollect = isShowCollect
    if (!this.isShowCollect) {
      this.isCollect = 1
    }
    for (let i = 0; i < this.collectList.length; i++) {
      const { name, path } = this.collectList[i]
      if (name === this.$parent.name && path === this.$parent.path) {
        this.isCollect = 1
        break
      }
    }
  },
  methods: {
    handleCollect() {
      this.isCollect = Number(!this.isCollect)
      const { name, path, imageSrc } = this.$parent
      if (this.isCollect) {
        this.$store.dispatch('add', { name, path, imageSrc, id: this.id })
      } else {
        this.$store.dispatch('remove', { name, path, imageSrc, id: this.id })
      }
    },
    remove() {
      this.$emit('handleRemove', this.$attrs.index)
      this.isDel = 0
    },
    guid() {
      console.log('guid')
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
          return v.toString(16)
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  //   background: #f6f6f6;
  &:hover {
    .tab {
      opacity: 1;
      // display: block;
    }
  }
  .tab {
    display: flex;
    /* -webkit-box-pack: end; */
    cursor: pointer;
    -ms-flex-pack: end;
    justify-content: flex-start;
    width: 25px;
    height: 50px;
    padding: 3px;
    /* margin: 10px; */
    font-size: 16px;
    position: absolute;
    flex-direction: column;
    top: 0px;
    z-index: 100;
    transform-origin: top;
    right: -38px;
    background: #fff;
    /* transform: translate(50%, -50%); */
    color: #20222a;
    text-align: center;
    opacity: 0;
    transition: opacity 200ms ease;
    span {
      margin-top: 3px;
      margin-top: 3px;
      height: 25px;
      /* padding: 3px; */
      border: 1px solid #dcdfe6;
    }
  }
  .active {
    color: rgb(255, 204, 0);
  }
  .el-button {
    font-size: 16px;
    margin: 0 5px;
  }
}
</style>
