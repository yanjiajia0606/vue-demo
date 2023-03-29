<template>
  <div style="display: flex; justify-content: center">
    <div class="galaxy">
      <!-- <li v-for="item in list" :key="item" class="wrap-item">
        {{ item }}
      </li> -->
      <ul class="wrap">
        <li v-for="(item, index) in num" :key="list[index] + item" class="wrap-item">
          <div class="ball">{{ list[index] }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      list: ['流量异常', '指令异常', '通信协议异常']
    }
  }
}
</script>

<style lang="scss" scoped>
.galaxy {
  transform-style: preserve-3d;
}
.wrap {
  width: 500px;
  height: 500px;
  background: aquamarine;
  animation: orbit-rotate 40s linear infinite;
  transform: rotateX(90deg) rotateY(-10deg);
  border-radius: 50%;
  transform-style: preserve-3d;
  // transform: rotateX(80deg);
  .wrap-item {
    // position: absolute;
    transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate(0, -50%);
    position: absolute;
    top: 6%;
    left: 52%;
    transform-style: preserve-3d;
    .ball {
      font-size: 14px;
      min-width: 106px;
      max-width: 136px;
      height: 31px;
      line-height: 31px;
      background-color: rgba(64, 158, 255, 1);
      border: none;
      border-radius: 12px;
      box-shadow: none;
      color: #ebeef5;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      // transform: rotateY(10deg) rotateZ(10deg);
      // transform: rotateY(-110deg) rotateZ(10deg);
      animation: self-rotate 40s linear infinite;
    }
  }
}
@keyframes orbit-rotate {
  0% {
    transform: rotateX(70deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(70deg) rotateY(0deg) rotateZ(-360deg);
  }
}
@keyframes self-rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(-360deg) rotateZ(0deg);
  }
}
</style>
