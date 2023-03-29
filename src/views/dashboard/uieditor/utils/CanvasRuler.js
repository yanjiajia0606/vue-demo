import EventEmiter from "./event";
import Canvas from "./Canvas";
import cloneDeep from "lodash/cloneDeep";
// import throttle from 'lodash/throttle'

export default class CanvasRuler extends EventEmiter {
  constructor(container, params = {}) {
    super();
    this._container =
      container instanceof HTMLElement
        ? container
        : document.querySelector(container);
    this.defaultParams = {
      width: 300,
      height: 20,
      dpr: window.devicePixelRatio || 1,
      scale: 1,
      tickLen: 6, // 一个格子长度，px
      markTickCount: 10, // 几个格子标提示
      zeroTickCount: 10, // 零刻度是第几个格子
      isHalfTick: false, // 是否标志中间刻度提示
      direction: "h", // h:横向'horizontal'  v:纵向'vertical'
      bgColor: "#0e1013",
      markColor: "#3a4659",
      fontColor: "#90a0ae"
    };
    this.params = Object.assign(cloneDeep(this.defaultParams), params);

    this.init();
    this.draw();
  }

  init() {
    const { width, height, dpr } = this.params;

    this._canvas = new Canvas(width, height, dpr);
    this._container.appendChild(this._canvas.canvas);

    this._canvas.on("click", this._handleClick, this);
    this._canvas.on("mousemove", this._handleMouseMove, this);
    this._canvas.on("mouseleave", (e) => {
      this.emit("mouseleave", e);
    });
  }

  updateParam(params = {}) {
    this.params = Object.assign(cloneDeep(this.params), params);
    this._canvas.resize(this.params.width, this.params.height);
    this.draw();
  }

  getValueByPos(pos) {
    const { tickLen, zeroTickCount, scale } = this.params;
    const value = (pos - tickLen * zeroTickCount) / scale;
    return Math.round(value);
  }

  _handleClick({ position }) {
    const { x, y } = position;
    const clickVal = this.params.direction === "h" ? x : y;
    const value = this.getValueByPos(clickVal);
    this.emit("click", {
      value: value,
      position: position
    });
  }

  _handleMouseMove({ position }) {
    const { x, y } = position;
    const clickVal = this.params.direction === "h" ? x : y;
    const value = this.getValueByPos(clickVal);
    this.emit("mousemove", {
      value: value,
      position: position
    });
  }

  draw() {
    const {
      width,
      height,
      scale,
      tickLen,
      markTickCount,
      zeroTickCount,
      isHalfTick,
      bgColor,
      markColor,
      fontColor
    } = this.params;
    this._canvas.clear();
    this._canvas.drawBackground(bgColor);
    for (let i = tickLen + 0.5, count = 1; i < width; i += tickLen, count++) {
      if (count < zeroTickCount) continue;
      const x = i;
      const y = height;
      const remainder = (count - zeroTickCount) % markTickCount;
      const integer = Math.floor((count - zeroTickCount) / markTickCount);
      if (remainder === 0) {
        // 整刻度
        const text = `${Math.round(
          (integer * tickLen * markTickCount) / scale
        )}`;
        const tx = x + 2;
        const ty = y - height / 2 - 2;
        if (isHalfTick && integer % 2 !== 0) {
          // 中刻度
          this._canvas.drawLine(x, y, x, y - height / 2, { color: markColor });
          this._canvas.drawText(text, tx, ty, undefined, {
            textBaseline: "middle",
            color: fontColor
          });
        } else {
          // 大刻度
          this._canvas.drawLine(x, y, x, 0, { color: markColor });
          this._canvas.drawText(text, tx, ty, undefined, {
            textBaseline: "middle",
            color: fontColor
          });
        }
      } else {
        // 小刻度
        this._canvas.drawLine(x, y, x, (y * 3) / 4, { color: markColor });
      }
    }
  }
}
