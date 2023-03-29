import { on } from "./dom";
import EventEmiter from "./event";

export default class Canvas extends EventEmiter {
  constructor(width, height, dpr) {
    super();
    this.width = width || 300;
    this.height = height || 150;
    this.dpr = dpr || window.devicePixelRatio || 1;
    this.initCanvas();
    this.initEvents();
  }

  get canvas() {
    return this._canvas;
  }

  get context() {
    return this._ctx;
  }

  initCanvas() {
    const { width, height, dpr } = this;
    const canvas = document.createElement("canvas");
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
  }

  initEvents() {
    const canvas = this._canvas;
    on(canvas, "click", (e) => {
      const xy = this.windowToCanvas(e.clientX, e.clientY);
      this.emit("click", {
        originalEvent: e,
        position: xy
      });
    });
    on(canvas, "mousemove", (e) => {
      const xy = this.windowToCanvas(e.clientX, e.clientY);
      this.emit("mousemove", {
        originalEvent: e,
        position: xy
      });
    });
    on(canvas, "mouseleave", (e) => {
      this.emit("mouseleave", {
        originalEvent: e
      });
    });
  }

  windowToCanvas(clientX, clientY) {
    const { _canvas: canvas } = this;
    const bbox = canvas.getBoundingClientRect();
    // 如果 dpr 不为 1，则需乘以 ( canvas.width / bbox.width )，获得 canvas 上坐标。
    // 如果已经对 canvas 做过 scale(dpi,dpi)，则坐标不需再乘缩放比例
    // return {
    //   x: clientX - bbox.left * (canvas.width / bbox.width),
    //   y: clientY - bbox.top * (canvas.height / bbox.height)
    // };
    return {
      x: clientX - bbox.left,
      y: clientY - bbox.top
    };
  }

  clear() {
    const { _ctx: ctx } = this;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  resize(width, height) {
    if (width) this.width = width;
    if (height) this.height = height;
    this.canvas.style.width = this.width + "px";
    this.canvas.style.height = this.height + "px";
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
  }

  drawBackground(bgColor = "rgba(0, 0, 0, 0)") {
    const { _ctx: ctx } = this;
    ctx.save();
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();
  }

  drawText(text, x, y, maxWidth, options = {}) {
    const { _ctx: ctx, dpr } = this;
    const defaultOptions = {
      font: "12px 思源黑体Medium",
      lineWidth: 1,
      textAlign: "start",
      textBaseline: "alphabetic",
      color: "#000"
    };
    const assignOptions = Object.assign({}, defaultOptions, options);

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.beginPath();
    ctx.font = assignOptions.font;
    ctx.lineWidth = assignOptions.lineWidth;
    ctx.textAlign = assignOptions.textAlign;
    ctx.textBaseline = assignOptions.textBaseline;
    ctx.fillStyle = assignOptions.color;
    ctx.fillText(text, x, y, maxWidth);
    ctx.restore();

    return this;
  }

  drawLine(x0, y0, x1, y1, options = {}) {
    const { _ctx: ctx, dpr } = this;
    const defaultOptions = {
      lineWidth: 1,
      color: "#000"
    };
    const assignOptions = Object.assign({}, defaultOptions, options);

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.beginPath();
    ctx.lineWidth = assignOptions.lineWidth;
    ctx.strokeStyle = assignOptions.color;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.restore();
  }
}
