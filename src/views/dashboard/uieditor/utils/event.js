/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-20 15:23:22
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-10-20 15:30:02
 * @FilePath: /saber/src/components/uieditor/utils/event.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class EventEmiter {
  constructor() {
    this._events = {};
  }

  on(event, cb, context) {
    context = context || this;
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.on(event[i], cb, context);
      }
    } else {
      (this._events[event] || (this._events[event] = [])).push({
        callback: cb,
        context: context
      });
    }
    return this;
  }

  once(event, cb, context) {
    context = context || this;
    var self = this;

    function on() {
      self.off(event, on, context);
      cb.apply(context, arguments);
    }
    on.fn = cb;
    this.on(event, on, context);
    return this;
  }

  off(event, cb, context) {
    context = context || this;
    if (!arguments.length) {
      this._events = Object.create(null);
      return this;
    }
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.off(event[i], cb, context);
      }
      return this;
    }
    if (!cb) {
      this._events[event] = null;
      return this;
    }
    if (cb) {
      const cbs = this._events[event] || [];
      let i = cbs.length;
      while (i--) {
        if (
          (cb === cbs[i].callback || cb === cbs[i].fn) &&
          context === cbs[i].context
        ) {
          cbs.splice(i, 1);
          break;
        }
      }
      return this;
    }
  }

  emit(event) {
    const cbs = this._events[event];
    const args = Array.prototype.slice.call(arguments, 1);
    if (cbs) {
      for (let i = 0, l = cbs.length; i < l; i++) {
        cbs[i].callback.apply(cbs[i].context || this, args);
      }
    }
  }
}
