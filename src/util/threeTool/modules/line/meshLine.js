import * as THREE from 'three'
import { MeshLine, MeshLineMaterial } from '../../libs/meshLine'
const meshLine = (options) => {
  const { parent, style = {}, points = [] } = options
  let materialOpt = {
    color: 'transparent',
    useMap: true,
    lineWidth: 0.5,
    dashArray: 0, // 破折号之间的长度和间距。(0 -无破折号)
    dashRatio: 0, // 定义可见和不可见之间的比率(0 -更可见，1 -更不可见)。
    dashOffset: 0,
    transparent: true,
    sizeAttenuation: 1, //使线宽不变，不管距离(1个单位是屏幕上的1px)(0 -衰减，1 -不衰减)
    side: THREE.FrontSide,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    ...style
  }

  // materialOpt = lodash.merge(materialOpt, style)
  // materialOpt = { ...materialOpt, ...style }
  const meshLine = new MeshLine()
  meshLine.setPoints(points)
  const material = new MeshLineMaterial(materialOpt)

  const line = new THREE.Mesh(meshLine.geometry, material)
  line.name = 'meshLine'
  parent && parent.add(line)
  return line
}
export default meshLine
