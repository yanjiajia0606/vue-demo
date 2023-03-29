/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-11 15:36:46
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-11-18 19:09:13
 * @FilePath: /saber/src/components/uieditor/util/base.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function replaceUrl(url) {
  return require('@/views/dashboard/uieditor/assets/' + url)
}

// 生成唯一ID
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
