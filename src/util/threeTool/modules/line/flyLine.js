import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import _ from 'lodash'
import { getVCenter, getLenVcetor } from '../util/index.js'
/**
 * 有高度的弧线
 */
const flyLine = (options) => {
  if (!options.points || options.points.length < 2) return
  const [v0, v3] = options.points
  const defaultOptions = {
    angle: 1,
    pointsNum: 50,
    height: v0.distanceTo(v3) / 2.5 || 50,
    color: '#6bc5f8',
    width: 10
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
  const geometry = new LineGeometry()
  const points = curve.getPoints(options.pointsNum)
  const positions = []
  for (let j = 0; j < points.length; j++) {
    positions.push(points[j].x, points[j].y, points[j].z)
  }
  geometry.setPositions(positions)
  const matLine = new LineMaterial({
    linewidth: options.width / 10000,
    color: options.color,
    dashed: false
  })

  return new Line2(geometry, matLine)
}
export default flyLine
