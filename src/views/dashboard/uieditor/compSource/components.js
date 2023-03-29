/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-10-12 15:31:48
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-16 14:16:32
 * @FilePath: /saber/src/components/uieditor/compSource/compList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  lineBar: () => import('@/views/dashboard/uieditor/lineBar'),
  imageCom: () => import('@/views/dashboard/uieditor/imageCom'),
  progressCom: () => import('@/views/dashboard/uieditor/progressCom'),
  top: () => import('@/views/dashboard/uieditor/top'),
  radarChart: () => import('@/views/dashboard/uieditor/radarChart'),
  dashBoard: () => import('@/views/dashboard/uieditor/dashBoard'),
  left: () => import('@/views/dashboard/uieditor/left'),
  table: () => import('@/views/dashboard/uieditor/table'),
  pie: () => import('@/views/dashboard/uieditor/pie'),
  bilinear: () => import('@/views/dashboard/uieditor/bilinear')
}
