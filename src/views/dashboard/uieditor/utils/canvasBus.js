/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-13 14:28:21
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-11 19:35:04
 * @FilePath: /saber-admin/src/components/uieditor/utils/canvasBus.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 注：仅用于画布(canvas文件夹)的局部 bus，不可用在全局
// import mitt from 'mitt'
const mitt = (n) => {
  return {
    all: (n = n || new Map()),
    on: (eventName, fn) => {
      const i = n.get(eventName)
      i ? i.push(fn) : n.set(eventName, [fn])
    },
    off: (eventName, fn) => {
      var i = n.get(eventName)
      i && (fn ? i.splice(i.indexOf(fn) >>> 0, 1) : n.set(eventName, []))
    },
    emit: (eventName, info) => {
      var i = n.get(eventName)
      i &&
        i.slice().map(function (fn) {
          fn(info)
        }),
        (i = n.get('*')) &&
          i.slice().map(function (fn) {
            fn(eventName, info)
          })
    }
  }
}
const emitter = mitt()
export default emitter
