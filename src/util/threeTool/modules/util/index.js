/*
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-09-27 09:57:07
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-04-13 18:25:15
 * @FilePath: /vue-demo/src/util/threeTool/modules/util/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as THREE from 'three'
import _ from 'lodash'
/**
 * 计算包围盒
 * @param {*} group
 * @returns
 */
export const getBoundingBox = (group) => {
  var box3 = new THREE.Box3()
  box3.expandByObject(group)
  var size = new THREE.Vector3()
  box3.getSize(size)
  var center = new THREE.Vector3()
  box3.getCenter(center)
  return {
    box3,
    center,
    size
  }
}

/**
 * 计算包围盒
 */
export const screenToXYZ = (x, y, id, camera) => {
  const container = document.getElementById(id)
  var vector = new THREE.Vector3()
  var target = new THREE.Vector3()
  let PX =
    ((x - container.getBoundingClientRect().left) / container.getBoundingClientRect().width) * 2 - 1
  let PY =
    -((y - container.getBoundingClientRect().top) / container.getBoundingClientRect().height) * 2 +
    1
  vector.set(PX, PY, 1)
  vector.unproject(camera)
  vector.sub(camera.position).normalize()
  var distance = (1 - camera.position.z) / vector.z

  target.copy(camera.position).add(vector.multiplyScalar(distance))

  return target
}
/**
 * 计算中心点
 */
export const getVCenter = (v1, v2) => {
  let v = v1.add(v2)
  return v.divideScalar(2)
}
/**
 * 计算向量
 */
export const getLenVcetor = (v1, v2, len) => {
  let v1v2Len = v1.distanceTo(v2)
  return v1.lerp(v2, len / v1v2Len)
}

/**
 * 计算飞线点
 */
export const getFlyLinePoints = (options) => {
  if (!options.points || options.points.length < 2) return
  const [v0, v3] = options.points
  const defaultOptions = {
    angle: 1,
    pointsNum: 50,
    height: v0.distanceTo(v3) / 2.5 || 50
  }
  options = _.merge(defaultOptions, options)

  // 夹角
  let angle = (v0.angleTo(v3) * options.angle) / Math.PI / 0.1 // 0 ~ Math.PI
  let aLen = angle * 0.4,
    hLen = angle * angle * 12
  let p0 = new THREE.Vector3(0, 5, 0)
  // 法线向量
  let temp = new THREE.Vector3()
  let rayLine = new THREE.Ray(p0, getVCenter(v0.clone(), v3.clone()))
  // 顶点坐标
  let vtop = rayLine.at(hLen / rayLine.at(1, temp).distanceTo(p0), temp)
  // 控制点坐标
  let v1 = getLenVcetor(v0.clone(), vtop, aLen)
  v1.y = options.height + v1.y
  let v2 = getLenVcetor(v3.clone(), vtop, aLen)
  v2.y = options.height + v2.y
  const v = getVCenter(v1.clone(), v2.clone())
  v.y = v.y * 1.2
  // 绘制三维三次贝赛尔曲线
  const curve = new THREE.QuadraticBezierCurve3(v0, v, v3)
  const points = curve.getPoints(options.pointsNum)
  const positions = []
  for (let j = 0; j < points.length; j++) {
    positions.push(points[j].x, points[j].y, points[j].z)
  }
  return {
    points,
    positions
  }
}

export default {
  getBoundingBox,
  screenToXYZ,
  getVCenter,
  getLenVcetor,
  getFlyLinePoints
}
