/**
 * 创建字体
 */
let font = null
const loadFont = () => {
  const loader = new THREE.FontLoader()
  return new Promise((resolve) => {
    loader.load('/fonts/Microsoft YaHei_Bold.json', function (res) {
      font = res
      resolve()
    })
  })
}
// 创建字体
const createText = async (params) => {
  const { parent, text = '122', align = 'center', option = {}, style } = params
  const defaultGeometryMsg = {
    size: 13, // 字体大小
    height: 0.2, // 字体深度
    curveSegments: 11, // 曲线控制点数
    bevelEnabled: false, // 斜角
    bevelThickness: 0.1, // 斜角的深度
    bevelSize: 0, // 斜角的大小
    bevelSegments: 1 // 斜角段数
  }
  const defaultStyle = {
    color: 'white',
    opacity: 1,
    shininess: 1
  }
  const matMsg = Object.assign(defaultStyle, style)
  const geometryMsg = Object.assign(defaultGeometryMsg, option)
  if (!font) {
    await loadFont()
  }
  const geometry = new THREE.TextGeometry(text, {
    font,
    ...geometryMsg
  })
  const mat = new THREE.MeshPhongMaterial({
    ...matMsg
  })
  const mesh = new THREE.Mesh(geometry, mat)
  align === 'center' && geometry.center()
  parent && parent.add(mesh)
  return mesh
}

export default createText
