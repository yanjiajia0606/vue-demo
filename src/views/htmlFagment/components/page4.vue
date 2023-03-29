<template>
  <div class="box">
    <!-- <div class="box1">
      <div class="one">
        <div class="ball"></div>
      </div>
      <div class="two"><div class="ball">1</div></div>
      <div class="three"><div class="ball">2</div></div>
      <div class="four"><div class="ball">3</div></div>
      <div class="five"><div class="ball">4</div></div>
      <div class="six"><div class="ball">5</div></div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style>
.box {
  /* 给父盒子设置相对定位 */
  position: relative;
  width: 400px;
  height: 400px;
  margin: 100px auto;
  /* 开启3d效果， */
  transform-style: preserve-3d;
  transform: rotateX(30deg);
  /* transform: rotate(30deg); */
  /* 调用动画 */
  /* animation: move 8s linear infinite; */
}

.box1 {
  position: relative;
  width: 400px;
  height: 400px;
  transform-style: preserve-3d;
  animation: run 20s linear infinite;
}

.box div {
  /* 给子盒子设置绝对定位，方便更改其位置 */
  position: absolute;
}

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
}
/* 利用3D空间转换，将图片定位到相应位置 */

.one {
  transform: translateZ(400px);
}

.two {
  transform: translateZ(200px) translateX(400px) rotateY(60deg);
}

.three {
  transform: translateZ(200px) translateX(-400px) rotateY(-60deg);
}

.four {
  transform: translateZ(-200px) translateX(400px) rotateY(-60deg);
}

.five {
  transform: translateZ(-200px) translateX(-400px) rotateY(60deg);
}

.six {
  transform: translateZ(-400px);
}

/* 定义动画 */

@keyframes move {
  0% {
    transform: rotateX(30deg);
  }
  50% {
    transform: rotateX(-30deg);
  }
  100% {
    transform: rotateX(30deg);
  }
}

/* 定义动画 */

@keyframes run {
  100% {
    transform: rotateY(-360deg);
  }
}

.box:hover {
  animation-play-state: paused;
}

.box:hover .box1 {
  animation-play-state: paused;
}
</style>
