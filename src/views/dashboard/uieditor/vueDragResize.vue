<template>
  <div
    class="vue-drag-resize"
    :class="{
      enable: enabled,
      lock: lock,
      rotate: rotate % 360 !== 0,
      'is-handle-rect': isHandleRect,
    }"
    :style="style"
    @click.shift.prevent.exact="elementCtrlClick"
    @click.prevent.exact="elementClick"
    @mousedown.stop.prevent="elementMouseDown"
    @touchstart.stop.prevent="elementTouchStart"
    @dblclick="elementDblClick"
    @mouseup="elementMouseUp"
  >
    <!-- 导航线 -->
    <div class="navigator-line" v-if="isHandleRect && enabled && isHanding">
      <div
        class="navigator-line-left"
        :style="{ width: `${Math.round(left / scale + 80)}px` }"
      ></div>
      <div
        class="navigator-line-top"
        :style="{ height: `${Math.round(top / scale + 80)}px` }"
      ></div>
      <div
        class="navigator-line-account"
        :style="{
          fontSize: `${14 / scale}px`,
          left: `-12px`,
          top: `-12px`,
        }"
      >
        {{ `${Math.round(left)},   ${Math.round(top)}` }}
      </div>
    </div>
    <!-- 变换盒 -->
    <div
      class="transform-box"
      :class="{ 'box-lock': lock }"
      :style="transformStyle"
    >
      <template v-if="(isHandleRect && enabled) || lock">
        <div
          class="handle-rotate"
          :style="rotateStyle"
          v-if="!lock"
          @mousedown.stop.prevent="handleRotate"
          @touchstart.stop.prevent="handleRotate"
        >
          <hz-icon name="rotate"></hz-icon>
        </div>
        <div
          class="handle-event"
          v-if="!lock && !isMutiSelect"
          :style="eventStyle"
          @touchstart.stop.prevent="handleEvent"
          @mousedown.stop.prevent="handleEvent"
        >
          <hz-icon name="add-event"></hz-icon>
        </div>
        <div
          v-for="item in handles"
          :key="item"
          :class="['handle', 'handle-' + item, { 'handle-lock': lock }]"
          :style="getHandleStyle(item)"
          @touchstart.stop.prevent="handleDown(item, $event)"
          @mousedown.stop.prevent="handleDown(item, $event)"
        ></div>
        <div
          v-if="!isHandleRect"
          @click="handleUnLock"
          class="handle-rt-lock"
        ></div>
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import canvasBus from "@/utils/canvasBus";
// import {
//   degTo360,
//   calculateRotatedPointCoordinate,
//   getCenterPoint,
// } from "@/utils/translate";
// import { CLICKTIME } from "@/common/constants";

// export default {
//   name: "DragResizeRotate",
//   props: {
//     id: {
//       type: [Number, String],
//     },
//     isHandleRect: {
//       // 区分是普通矩形(无法编辑的)还是可以编辑的矩形（拖拽、放大、缩小、旋转）
//       type: Boolean,
//       default: false,
//     },
//     handleRectCom: Object,
//     active: {
//       type: Boolean,
//       default: false,
//     },
//     lock: {
//       type: Boolean,
//       default: false,
//     },
//     w: {
//       type: Number,
//       default: 0,
//       validator: (val) => {
//         return val >= 0;
//       },
//     },
//     h: {
//       type: Number,
//       default: 0,
//       validator: (val) => {
//         return val >= 0;
//       },
//     },
//     r: {
//       type: Number,
//       default: 0,
//     },
//     scale: {
//       type: Number,
//       default: 1,
//     },
//     minWidth: {
//       type: Number,
//       default: 0,
//       validator: (val) => val >= 0,
//     },
//     minHeight: {
//       type: Number,
//       default: 0,
//       validator: (val) => val >= 0,
//     },
//     maxWidth: {
//       type: Number,
//       default: Infinity,
//       validator: (val) => val >= 0,
//     },
//     maxHeight: {
//       type: Number,
//       default: Infinity,
//       validator: (val) => val >= 0,
//     },
//     x: {
//       type: Number,
//       default: 0,
//     },
//     y: {
//       type: Number,
//       default: 0,
//     },
//     zIndex: {
//       type: Number,
//     },
//     parent: {
//       type: Boolean,
//       default: false,
//     },
//     parentEl: {
//       type: HTMLElement,
//       default() {
//         return null;
//       },
//     },
//     isMutiSelect: {
//       type: Boolean,
//       default: false,
//     },
//   },

//   data() {
//     return {
//       handles: ["lt", "t", "rt", "r", "rb", "b", "lb", "l"],
//       initialAngle: {
//         // 每个点对应的初始角度
//         lt: -45,
//         t: 0,
//         rt: 45,
//         r: 90,
//         rb: 135,
//         b: 180,
//         lb: -135,
//         l: -90,
//       },
//       left: this.x,
//       top: this.y,
//       width: _.clamp(this.w, this.minWidth, this.maxWidth),
//       height: _.clamp(this.h, this.minHeight, this.maxHeight),
//       rotate: this.r,

//       resizing: false,
//       dragging: false,
//       rotating: false,

//       enabled: this.isHandleRect ? true : !this.lock && this.active,
//       isClick: true, // 是否是点击事件
//     };
//   },

//   computed: {
//     style() {
//       const { zIndex, left, top, width, height } = this;
//       return {
//         width: width + "px",
//         height: height + "px",
//         transform: `translate(${left}px, ${top}px)`,
//         zIndex,
//       };
//     },
//     transformStyle() {
//       const { rotate } = this;
//       return {
//         transform: `rotate(${rotate}deg)`,
//       };
//     },
//     rotateStyle() {
//       const { scale } = this;
//       return {
//         top: -34 / scale + "px",
//         width: 20 / scale + "px",
//         height: 20 / scale + "px",
//       };
//     },
//     eventStyle() {
//       const { scale } = this;
//       return {
//         right: -34 / scale + "px",
//         width: 16 / scale + "px",
//         height: 16 / scale + "px",
//       };
//     },
//     isHanding() {
//       return this.resizing || this.dragging || this.rotating;
//     },
//   },

//   watch: {
//     x(v) {
//       this.left = v;
//       this.$emit("sizeChange");
//     },
//     y(v) {
//       this.top = v;
//       this.$emit("sizeChange");
//     },
//     r(v) {
//       this.rotate = v;
//       this.$emit("sizeChange");
//     },
//     w(v) {
//       this.width = _.clamp(v, this.minWidth, this.maxWidth);
//       this.$emit("sizeChange");
//     },
//     h(v) {
//       this.height = _.clamp(v, this.minHeight, this.maxHeight);
//       this.$emit("sizeChange");
//     },
//     enabled(v) {
//       if (v) {
//         this.$emit("activated");
//       } else {
//         this.$emit("deactivated");
//       }
//     },
//   },

//   created() {
//     if (!this.isHandleRect && this.$parent && this.$parent.componentList) {
//       this.$parent.componentList.push(this);
//     }
//   },

//   mounted() {
//     // document.addEventListener('mousedown', this.deselect);
//     // const computedStyle = window.getComputedStyle(this.$el);
//     // this.width = _.clamp(parseInt(computedStyle.width, 10), this.minWidth, this.maxWidth);
//     // this.height = _.clamp(parseInt(computedStyle.height, 10), this.minHeight, this.maxHeight);
//   },

//   beforeDestroy() {
//     if (this.$parent && this.$parent.componentList) {
//       const index = this.$parent.componentList.indexOf(this);
//       if (index > -1) {
//         this.$parent.componentList.splice(index, 1);
//       }
//     }
//     // document.removeEventListener('mousedown', this.deselect);
//   },

//   methods: {
//     deselect() {
//       this.enabled = false;
//       // this.$emit('update:active', false);
//     },
//     select() {
//       this.enabled = true;
//       // this.$emit('update:active', true);
//     },
//     elementClick() {
//       if (!this.isClick) return;
//       if (this.lock) return;
//       if (this.isHandleRect) return;
//       this.selectComp = true;
//       this.$emit("clickComp", this);
//     },
//     elementCtrlClick() {
//       if (this.lock) return;
//       if (this.isHandleRect) return;
//       this.enabled ? this.deselect() : this.select();
//       this.$emit("mutiSelect", this);
//     },
//     elementTouchStart(e) {
//       this.isClick = true;
//       this.elementClick();
//       if (this.lock || !this.enabled) return;
//       const startTime = +new Date();
//       const touch = e.touches[0];
//       const startX = touch.clientX;
//       const startY = touch.clientY;
//       // 注：此处始终将 this 指向外包矩形，保证拖动的是外包矩形。(为了事件图标可用，外包矩形事件被禁止)
//       const self = this.handleRectCom || this;
//       const startStyle = {
//         left: self.left,
//         top: self.top,
//         width: self.width,
//         height: self.height,
//         rotate: self.rotate,
//       };
//       self.$emit("dragStart", { com: self });
//       const move = (e) => {
//         const touch = e.touches[0];
//         const curX = touch.clientX;
//         const curY = touch.clientY;
//         const moveX = (curX - startX) / self.scale;
//         const moveY = (curY - startY) / self.scale;
//         if (self.parent) {
//           const { minLeft, maxLeft, minTop, maxTop } =
//             self.calcDragResizeLimits(null, startStyle);
//           self.left = _.clamp(moveX + startStyle.left, minLeft, maxLeft);
//           self.top = _.clamp(moveY + startStyle.top, minTop, maxTop);
//         } else {
//           self.left = moveX + startStyle.left;
//           self.top = moveY + startStyle.top;
//         }
//         self.dragging = true;
//         self.$emit("dragging", {
//           com: self,
//           ...self.getOffsetStyle(startStyle),
//         });
//         // 等更新完当前组件的样式并绘制到屏幕后再判断是否需要吸附
//         // 如果不使用 $nextTick，吸附后将无法移动
//         self.$nextTick(() => {
//           // 触发元素移动事件，用于显示标线、吸附功能
//           // 后面两个参数代表鼠标移动方向
//           // curY - startY > 0 true 表示向下移动 false 表示向上移动
//           // curX - startX > 0 true 表示向右移动 false 表示向左移动
//           const param = { isDownward: moveY > 0, isRightward: moveX > 0 };
//           canvasBus.emit("move", param);
//           self.$emit("dragging", {
//             com: self,
//             ...self.getOffsetStyle(startStyle),
//           });
//         });
//       };
//       const up = (e) => {
//         const curTime = +new Date();
//         // 根据时间差判断是否是点击还是拖拽
//         if (curTime - startTime < CLICKTIME) {
//           this.isClick = true;
//         } else {
//           this.isClick = false;
//           self.$emit("dragEnd", { com: self }); // 注：解决点击还会触发组件更新
//         }
//         document.removeEventListener("touchmove", move);
//         document.removeEventListener("touchend", up);
//         self.dragging = false;
//         // self.$emit('dragEnd', { com: self });
//         // 触发元素停止移动事件，用于隐藏标线
//         canvasBus.emit("unmove");
//       };
//       document.addEventListener("touchmove", move);
//       document.addEventListener("touchend", up);
//     },
//     elementMouseDown(e) {
//       this.isClick = true;
//       if (this.lock || !this.enabled) return;
//       const startTime = +new Date();
//       const startX = e.clientX;
//       const startY = e.clientY;
//       // 注：此处始终将 this 指向外包矩形，保证拖动的是外包矩形。(为了事件图标可用，外包矩形事件被禁止)
//       const self = this.handleRectCom || this;
//       const startStyle = {
//         left: self.left,
//         top: self.top,
//         width: self.width,
//         height: self.height,
//         rotate: self.rotate,
//       };
//       self.$emit("dragStart", { com: self });
//       const move = (e) => {
//         const curX = e.clientX;
//         const curY = e.clientY;
//         const moveX = (curX - startX) / self.scale;
//         const moveY = (curY - startY) / self.scale;
//         if (self.parent) {
//           const { minLeft, maxLeft, minTop, maxTop } =
//             self.calcDragResizeLimits(null, startStyle);
//           self.left = _.clamp(moveX + startStyle.left, minLeft, maxLeft);
//           self.top = _.clamp(moveY + startStyle.top, minTop, maxTop);
//         } else {
//           self.left = moveX + startStyle.left;
//           self.top = moveY + startStyle.top;
//         }
//         self.dragging = true;
//         self.$emit("dragging", {
//           com: self,
//           ...self.getOffsetStyle(startStyle),
//         });
//         // 等更新完当前组件的样式并绘制到屏幕后再判断是否需要吸附
//         // 如果不使用 $nextTick，吸附后将无法移动
//         self.$nextTick(() => {
//           // 触发元素移动事件，用于显示标线、吸附功能
//           // 后面两个参数代表鼠标移动方向
//           // curY - startY > 0 true 表示向下移动 false 表示向上移动
//           // curX - startX > 0 true 表示向右移动 false 表示向左移动
//           const param = { isDownward: moveY > 0, isRightward: moveX > 0 };
//           canvasBus.emit("move", param);
//           self.$emit("dragging", {
//             com: self,
//             ...self.getOffsetStyle(startStyle),
//           });
//         });
//       };
//       const up = (e) => {
//         const curTime = +new Date();
//         // 根据时间差判断是否是点击还是拖拽
//         if (curTime - startTime < CLICKTIME) {
//           this.isClick = true;
//         } else {
//           this.isClick = false;
//           self.$emit("dragEnd", { com: self }); // 注：解决点击还会触发组件更新
//         }
//         document.removeEventListener("mousemove", move);
//         document.removeEventListener("mouseup", up);
//         self.dragging = false;
//         // self.$emit('dragEnd', { com: self });
//         // 触发元素停止移动事件，用于隐藏标线
//         canvasBus.emit("unmove");
//       };
//       document.addEventListener("mousemove", move);
//       document.addEventListener("mouseup", up);
//     },
//     elementDblClick(e) {
//       // 组件双击事件
//       this.$emit("elementDblClick", this);
//     },
//     elementMouseUp(e) {
//       canvasBus.emit("updateEventComId", this.id);
//     },
//     handleDown(point, e) {
//       // 中心点
//       const center = {
//         x: (this.left + this.width / 2) * this.scale,
//         y: (this.top + this.height / 2) * this.scale,
//       };
//       // 画布
//       const parentRect = this.$el.parentNode.getBoundingClientRect();
//       // 当前点击坐标
//       const curPoint = this.getStartPos(point, center);
//       // 对称点坐标
//       const symmetricPoint = {
//         x: center.x - (curPoint.x - center.x),
//         y: center.y - (curPoint.y - center.y),
//       };
//       // 保存拖拽起始状态
//       const startStyle = {
//         left: this.left,
//         top: this.top,
//         width: this.width,
//         height: this.height,
//         rotate: this.rotate,
//       };
//       let isFirst = true;
//       const startTime = +new Date();
//       this.$emit("resizeStart", { com: this });
//       const move = (e) => {
//         // 第一次点击时也会触发 move，所以会有“刚点击组件但未移动，组件的大小却改变了”的情况发生
//         // 因此第一次点击时不触发 move 事件
//         if (isFirst) {
//           isFirst = false;
//           return;
//         }
//         const curPositon = {
//           x: (e.clientX || e.touches[0].clientX) - parentRect.left,
//           y: (e.clientY || e.touches[0].clientY) - parentRect.top,
//         };
//         const newStyle = this.calculateResizeNewStyle(
//           point,
//           curPoint,
//           center,
//           symmetricPoint,
//           curPositon,
//           startStyle
//         );
//         this.left = newStyle.left;
//         this.top = newStyle.top;
//         this.width = newStyle.width;
//         this.height = newStyle.height;
//         this.resizing = true;
//         this.$emit("resizing", {
//           point,
//           com: this,
//           ...this.getOffsetStyle(startStyle),
//         });
//       };
//       const up = (e) => {
//         const curTime = +new Date();
//         if (curTime - startTime < CLICKTIME) {
//           this.isClick = true;
//         } else {
//           this.isClick = false;
//           this.$emit("resizeStop", { com: this }); // 注：解决点击还会触发组件更新
//         }
//         if (e instanceof TouchEvent) {
//           document.removeEventListener("touchmove", move);
//           document.removeEventListener("touchend", up);
//         } else {
//           document.removeEventListener("mousemove", move);
//           document.removeEventListener("mouseup", up);
//         }
//         this.resizing = false;
//         // this.$emit('resizeStop', { com: this });
//       };
//       if (e instanceof TouchEvent) {
//         document.addEventListener("touchmove", move);
//         document.addEventListener("touchend", up);
//       } else {
//         document.addEventListener("mousemove", move);
//         document.addEventListener("mouseup", up);
//       }
//     },
//     handleRotate(e) {
//       const startX = e.clientX || e.touches[0].clientX;
//       const startY = e.clientY || e.touches[0].clientY;
//       const startRotate = this.rotate;
//       const rect = this.$el.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;

//       // 旋转前的角度
//       const rotateDegreeBefore =
//         Math.atan2(startY - centerY, startX - centerX) / (Math.PI / 180);
//       const startTime = +new Date();
//       this.$emit("rotateStart", { com: this });
//       const move = (e) => {
//         const curX = e.clientX || e.touches[0].clientX;
//         const curY = e.clientY || e.touches[0].clientY;
//         // 旋转后的角度
//         const rotateDegreeAfter =
//           Math.atan2(curY - centerY, curX - centerX) / (Math.PI / 180);
//         // 获取旋转的角度值
//         this.rotate = degTo360(
//           startRotate + rotateDegreeAfter - rotateDegreeBefore
//         );
//         this.rotating = true;
//         this.$emit("rotating", { rotate: this.rotate, com: this });
//       };

//       const up = () => {
//         const curTime = +new Date();
//         if (curTime - startTime < CLICKTIME) {
//           this.isClick = true;
//         } else {
//           this.isClick = false;
//           this.$emit("rotateStop", { com: this }); // 注：解决点击还会触发组件更新
//         }
//         if (e instanceof TouchEvent) {
//           // 如果是touch事件
//           document.removeEventListener("touchmove", move);
//           document.removeEventListener("touchend", up);
//         } else {
//           document.removeEventListener("mousemove", move);
//           document.removeEventListener("mouseup", up);
//         }
//         this.rotating = false;
//         // this.$emit('rotateStop', { com: this });
//       };
//       if (e instanceof TouchEvent) {
//         // 如果是touch事件
//         document.addEventListener("touchmove", move);
//         document.addEventListener("touchend", up);
//       } else {
//         document.addEventListener("mousemove", move);
//         document.addEventListener("mouseup", up);
//       }
//     },
//     getHandleStyle(point) {
//       const roate = degTo360(this.initialAngle[point] + this.rotate);
//       const { scale } = this;
//       let cursor;
//       if ((roate > 337 && roate <= 360) || (roate >= 0 && roate <= 23)) {
//         cursor = "n";
//       } else if (roate > 23 && roate <= 68) {
//         cursor = "ne";
//       } else if (roate > 68 && roate <= 113) {
//         cursor = "e";
//       } else if (roate > 113 && roate <= 158) {
//         cursor = "se";
//       } else if (roate > 158 && roate <= 203) {
//         cursor = "s";
//       } else if (roate > 203 && roate <= 248) {
//         cursor = "sw";
//       } else if (roate > 248 && roate <= 293) {
//         cursor = "w";
//       } else if (roate > 293 && roate <= 337) {
//         cursor = "nw";
//       }
//       return {
//         cursor: cursor ? `${cursor}-resize` : "pointer",
//         width: 10 / scale + "px",
//         height: 10 / scale + "px",
//       };
//     },
//     getOffsetStyle(startStyle) {
//       return {
//         offsetLeft: this.left - startStyle.left,
//         offsetTop: this.top - startStyle.top,
//         offsetWidth: this.width - startStyle.width,
//         offsetHeight: this.height - startStyle.height,
//       };
//     },
//     getStartPos(point, center) {
//       let { left, top, width, height, rotate } = this;
//       left *= this.scale;
//       top *= this.scale;
//       width *= this.scale;
//       height *= this.scale;
//       let curPoint;
//       switch (point) {
//         case "lt":
//           curPoint = {
//             x: left,
//             y: top,
//           };
//           break;
//         case "t":
//           curPoint = {
//             x: left + width / 2,
//             y: top,
//           };
//           break;
//         case "rt":
//           curPoint = {
//             x: left + width,
//             y: top,
//           };
//           break;
//         case "r":
//           curPoint = {
//             x: left + width,
//             y: top + height / 2,
//           };
//           break;
//         case "rb":
//           curPoint = {
//             x: left + width,
//             y: top + height,
//           };
//           break;
//         case "b":
//           curPoint = {
//             x: left + width / 2,
//             y: top + height,
//           };
//           break;
//         case "lb":
//           curPoint = {
//             x: left,
//             y: top + height,
//           };
//           break;
//         case "l":
//           curPoint = {
//             x: left,
//             y: top + height / 2,
//           };
//           break;
//         default:
//           throw new Error("未传入当前点类型，无法计算当前点坐标！");
//       }
//       return calculateRotatedPointCoordinate(curPoint, center, rotate);
//     },
//     calculateResizeNewStyle(
//       point,
//       startPoint,
//       centerPoint,
//       symmetricPoint,
//       curPoint,
//       startStyle
//     ) {
//       const { minWidth, maxWidth, minHeight, maxHeight, scale } = this;
//       const {
//         rotate,
//         left: startLeft,
//         top: startTop,
//         width: startWidth,
//         height: startHeight,
//       } = startStyle;
//       let newLeft = startLeft * scale;
//       let newTop = startTop * scale;
//       let newWidth = startWidth * scale;
//       let newHeight = startHeight * scale;
//       const newCenterPoint = getCenterPoint(curPoint, symmetricPoint);
//       const newCurPoint = calculateRotatedPointCoordinate(
//         curPoint,
//         newCenterPoint,
//         -rotate
//       );
//       const newRotatedCurPoint = calculateRotatedPointCoordinate(
//         curPoint,
//         startPoint,
//         -rotate
//       );
//       const dx = Math.abs(newCenterPoint.x - newCurPoint.x);
//       const dy = Math.abs(newCenterPoint.y - newCurPoint.y);
//       let rotatedTopBottomMiddlePoint,
//         topBottomCenter,
//         rotatedLeftRightMiddlePoint,
//         leftRightCenter;
//       switch (point) {
//         case "lt":
//           newWidth = dx * 2;
//           newHeight = dy * 2;
//           newLeft = newCurPoint.x;
//           newTop = newCurPoint.y;
//           break;
//         case "t":
//         case "b":
//           rotatedTopBottomMiddlePoint = calculateRotatedPointCoordinate(
//             {
//               x: startPoint.x,
//               y: newRotatedCurPoint.y,
//             },
//             startPoint,
//             rotate
//           );
//           topBottomCenter = {
//             x:
//               rotatedTopBottomMiddlePoint.x -
//               (rotatedTopBottomMiddlePoint.x - symmetricPoint.x) / 2,
//             y:
//               rotatedTopBottomMiddlePoint.y +
//               (symmetricPoint.y - rotatedTopBottomMiddlePoint.y) / 2,
//           };
//           newHeight = Math.sqrt(
//             (rotatedTopBottomMiddlePoint.x - symmetricPoint.x) ** 2 +
//               (rotatedTopBottomMiddlePoint.y - symmetricPoint.y) ** 2
//           );
//           newLeft = topBottomCenter.x - newWidth / 2;
//           newTop = topBottomCenter.y - newHeight / 2;
//           break;
//         case "rt":
//           newWidth = dx * 2;
//           newHeight = dy * 2;
//           newLeft = newCurPoint.x - newWidth;
//           newTop = newCurPoint.y;
//           break;
//         case "r":
//         case "l":
//           rotatedLeftRightMiddlePoint = calculateRotatedPointCoordinate(
//             {
//               x: newRotatedCurPoint.x,
//               y: startPoint.y,
//             },
//             startPoint,
//             rotate
//           );
//           leftRightCenter = {
//             x:
//               rotatedLeftRightMiddlePoint.x -
//               (rotatedLeftRightMiddlePoint.x - symmetricPoint.x) / 2,
//             y:
//               rotatedLeftRightMiddlePoint.y +
//               (symmetricPoint.y - rotatedLeftRightMiddlePoint.y) / 2,
//           };
//           newWidth = Math.sqrt(
//             (rotatedLeftRightMiddlePoint.x - symmetricPoint.x) ** 2 +
//               (rotatedLeftRightMiddlePoint.y - symmetricPoint.y) ** 2
//           );
//           newTop = leftRightCenter.y - newHeight / 2;
//           newLeft = leftRightCenter.x - newWidth / 2;
//           break;
//         case "rb":
//           newWidth = dx * 2;
//           newHeight = dy * 2;
//           newLeft = newCurPoint.x - newWidth;
//           newTop = newCurPoint.y - newHeight;
//           break;
//         case "lb":
//           newWidth = dx * 2;
//           newHeight = dy * 2;
//           newLeft = newCurPoint.x;
//           newTop = newCurPoint.y - newHeight;
//           break;
//       }
//       newWidth /= scale;
//       newHeight /= scale;
//       newLeft /= scale;
//       newTop /= scale;
//       if (this.parent) {
//         const limits = this.calcDragResizeLimits(point, startStyle);
//         const [parentWidth, parentHeight] = this.getParentSize();
//         let newRight = parentWidth - newLeft - newWidth;
//         let newBottom = parentHeight - newTop - newHeight;
//         newLeft = _.clamp(newLeft, limits.minLeft, limits.maxLeft);
//         newTop = _.clamp(newTop, limits.minTop, limits.maxTop);
//         newRight = _.clamp(newRight, limits.minRight, limits.maxRight);
//         newBottom = _.clamp(newBottom, limits.minBottom, limits.maxBottom);
//         newWidth = _.clamp(
//           parentWidth - newLeft - newRight,
//           minWidth,
//           maxWidth
//         );
//         newHeight = _.clamp(
//           parentHeight - newTop - newBottom,
//           minHeight,
//           maxHeight
//         );
//       }
//       return {
//         left: newLeft,
//         top: newTop,
//         width: newWidth,
//         height: newHeight,
//         rotate: rotate,
//       };
//     },
//     getParentSize() {
//       let style;
//       if (this.parentEl) {
//         style = window.getComputedStyle(this.parentEl, null);
//       } else if (this.$el && this.$el.parentNode) {
//         style = window.getComputedStyle(this.$el.parentNode, null);
//       }
//       return style
//         ? [
//             parseInt(style.getPropertyValue("width"), 10),
//             parseInt(style.getPropertyValue("height"), 10),
//           ]
//         : [null, null];
//     },
//     calcDragResizeLimits(point, startStyle) {
//       const { minWidth, minHeight } = this;
//       const { left, top, width, height } = startStyle;
//       const [parentWidth, parentHeight] = this.getParentSize();
//       // 默认为 drag 时范围
//       const limits = {
//         minLeft: 0,
//         maxLeft: parentWidth - width,
//         minTop: 0,
//         maxTop: parentHeight - height,
//         minRight: 0,
//         maxRight: parentWidth - width,
//         minBottom: 0,
//         maxBottom: parentHeight - height,
//       };
//       switch (point) {
//         case "lt":
//           limits.maxLeft = left + (width - minWidth);
//           limits.maxTop = top + (height - minHeight);
//           limits.minRight = limits.maxRight = parentWidth - left - width;
//           limits.minBottom = limits.maxBottom = parentHeight - top - height;
//           break;
//         case "t":
//           limits.minLeft = limits.maxLeft = left;
//           limits.maxTop = top + (height - minHeight);
//           limits.minRight = limits.maxRight = parentWidth - left - width;
//           limits.minBottom = limits.maxBottom = parentHeight - top - height;
//           break;
//         case "rt":
//           limits.minLeft = limits.maxLeft = left;
//           limits.maxTop = top + (height - minHeight);
//           limits.maxRight = parentWidth - left - minWidth;
//           limits.minBottom = limits.maxBottom = parentHeight - top - height;
//           break;
//         case "r":
//           limits.minLeft = limits.maxLeft = left;
//           limits.minTop = limits.maxTop = top;
//           limits.maxRight = parentWidth - left - minWidth;
//           limits.minBottom = limits.maxBottom = parentHeight - top - height;
//           break;
//         case "rb":
//           limits.minLeft = limits.maxLeft = left;
//           limits.minTop = limits.maxTop = top;
//           limits.maxRight = parentWidth - left - minWidth;
//           limits.maxBottom = parentHeight - top - minHeight;
//           break;
//         case "b":
//           limits.minLeft = limits.maxLeft = left;
//           limits.minTop = limits.maxTop = top;
//           limits.minRight = limits.maxRight = parentWidth - left - width;
//           limits.maxBottom = parentHeight - top - minHeight;
//           break;
//         case "lb":
//           limits.maxLeft = left + (width - minWidth);
//           limits.minTop = limits.maxTop = top;
//           limits.minRight = limits.maxRight = parentWidth - left - width;
//           limits.maxBottom = parentHeight - top - minHeight;
//           break;
//         case "l":
//           limits.maxLeft = left + (width - minWidth);
//           limits.minTop = limits.maxTop = top;
//           limits.minRight = limits.maxRight = parentWidth - left - width;
//           limits.minBottom = limits.maxBottom = parentHeight - top - height;
//           break;
//       }
//       return limits;
//     },
//     handleUnLock() {
//       this.$store.dispatch(
//         "editor/updateScreenCom",
//         [this.id].map((id) => ({
//           id,
//           keyValPairs: [{ key: "attr.lock", value: false }],
//         }))
//       );
//     },
//     handleEvent(e) {
//       const startX = e.clientX || e.touches[0].clientX;
//       const startY = e.clientY || e.touches[0].clientY;
//       const { scale } = this;

//       const rect = this.$el.parentNode.getBoundingClientRect();
//       const lineStartX = (startX - rect.x) / scale;
//       const lineStartY = (startY - rect.y) / scale;
//       this.$emit("connectionStart", { lineStartX, lineStartY });

//       const move = (e) => {
//         const curX = ((e.clientX || e.touches[0].clientX) - rect.x) / scale;
//         const curY = ((e.clientY || e.touches[0].clientY) - rect.y) / scale;
//         this.$emit("connectionMove", { curX, curY });
//       };

//       const up = (e) => {
//         this.$emit("connectionEnd");
//         if (e instanceof TouchEvent) {
//           document.removeEventListener("touchmove", move);
//           document.removeEventListener("touchend", up);
//         } else {
//           document.removeEventListener("mousemove", move);
//           document.removeEventListener("mouseup", up);
//         }
//       };
//       if (e instanceof TouchEvent) {
//         document.addEventListener("touchmove", move);
//         document.addEventListener("touchend", up);
//       } else {
//         document.addEventListener("mousemove", move);
//         document.addEventListener("mouseup", up);
//       }
//     },
//   },
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vue-drag-resize {
  position: absolute;
  left: 0;
  top: 0;
  will-change: transform;
  transform-origin: center center;
  user-select: none;
  cursor: pointer;
  &.lock {
    pointer-events: none;
    // &:not(.is-handle-rect)::after {
    //   position: absolute;
    //   content: '';
    //   left: 0;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
    //   background: rgba(22, 28, 40, 0.82) url('../../../assets/img/lock.svg') center center no-repeat;
    //   background-size: 64px 64px;
    //   z-index: 1;
    //
    .handle-rt {
      display: none;
    }
  }
  &.enable {
    z-index: 999 !important;
    cursor: move;
  }
  &.is-handle-rect {
    pointer-events: none;
  }
  &.enable,
  &:hover:not(.lock) {
    &::after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -1;
    }
    &.rotate:not(.is-handle-rect)::after {
      outline: 1px dashed #1f71ff;
    }
    .transform-box {
      outline: 1px solid #1f71ff;
    }
    .box-lock {
      outline: 1px solid #4e5463;
    }
  }
  .box-lock {
    outline: 1px solid #4e5463;
  }
  .navigator-line {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: content-box;
    .navigator-line-left {
      position: absolute;
      border-top: 1px dashed #2483ff;
      height: 0;
      top: 0;
      transform: translateX(-100%);
    }
    .navigator-line-top {
      position: absolute;
      border-left: 1px dashed #2483ff;
      width: 0;
      left: 0;
      transform: translateY(-100%);
    }
    .navigator-line-account {
      position: absolute;
      transform: translate(-100%, -100%);
      color: #2483ff;
      white-space: nowrap;
    }
  }
  .transform-box {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform-origin: center center;
  }
  .handle-rotate {
    position: absolute;
    top: -34px;
    left: 50%;
    transform: translateX(-50%);
    cursor: grab;
    // background: url('../../../assets/img/rotate.svg') center center no-repeat;
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
    pointer-events: auto;
    background: #1f71ff;
    display: flex;
    color: #fff;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    &:active {
      cursor: grabbing;
    }
  }
  .handle-event {
    position: absolute;
    right: -34px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: #1f71ff;
    color: #1f71ff;
    pointer-events: auto;
    cursor: pointer;
    border-radius: 2px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .handle {
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border: 1px solid #1f71ff;
    border-radius: 50%;
    background: #fff;
    z-index: 1;
    user-select: none;
    pointer-events: auto;
    transform: translate(-50%, -50%);
    &.handle-lt {
      left: 0;
      top: 0;
    }
    &.handle-t {
      left: 50%;
      top: 0;
    }
    &.handle-rt {
      left: 100%;
      top: 0;
    }
    &.handle-r {
      left: 100%;
      top: 50%;
    }
    &.handle-rb {
      left: 100%;
      top: 100%;
    }
    &.handle-b {
      left: 50%;
      top: 100%;
    }
    &.handle-lb {
      left: 0;
      top: 100%;
    }
    &.handle-l {
      left: 0;
      top: 50%;
    }
  }
  .handle-lock {
    background: #34405c;
    border: 1px solid #ccced4;
    pointer-events: none;
  }
  .handle-rt-lock {
    position: absolute;
    // background: url("../../../assets/img/svg/lock.svg");
    height: 20px;
    width: 20px;
    border-radius: 50%;
    left: 100%;
    top: 0;
    transform: translate(-10px, -10px);
    z-index: 10010;
    pointer-events: auto;
  }
  .drag-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: transparent;
  }
}
</style>
