/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-17 16:47:54
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-01-11 19:55:55
 * @FilePath: /saber-admin/src/components/uieditor/utils/shortcut.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import keymaster from './keymaster'

const bindKeyHandler = ({ func, params = '' }) => {
  return () => {
    func(params)
    return false
  }
}

export const shortcut = {
  bind: (seed, func) => keymaster(seed, bindKeyHandler(func)),
  ...keymaster
}

Vue.prototype.$shortcut = shortcut
