import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js'
import lodash from 'lodash'

/**
 * 初始化3D场景，基于THREE封装的类
 * @param opt 初始化场景参数 Object opt.el为必传容器
 */
class App {
  constructor(opt) {
    this.scene = new THREE.Scene()
    this.camera = null
    this.controls = null
    this.renderer = null
    this.css3DRenderer = null
    this.css2DRenderer = null
    this.composer = null
    this.axes = null
    this.gridHelper = null
    this.frameId = null
    this.defaultOption = {
      camera: {
        fov: 45, // 视角
        aspect: null, // 窗口宽高比
        near: 0.1, // 近平面距离
        far: 10000, // 远平面距离
        position: [10, 500, 10]
      },
      renderer: {
        backgroundColor: 0xb9d3ff,
        bgAlpha: 0 //背景透明度
      },
      axes: false,
      gridHelper: false,
      light: true,
      svg: false
    }
    const { container } = opt
    if (!container) return console.error('没有容器！')
    this.el = document.getElementById(container)
    this.option = lodash.merge(this.defaultOption, opt)
    this.init()
  }
  init() {
    this.initRender()
    this.initCamera()
    this.initLight()
    this.initControl()
    this.initOther()
  }
  initRender() {
    const { offsetWidth, offsetHeight } = this.el
    const option = this.option.renderer
    this.renderer = new THREE.WebGLRenderer({
      ...option,
      antialias: true,
      alpha: true
    })
    this.renderer.setPixelRatio(2) // 设备像素比
    this.renderer.setSize(offsetWidth, offsetHeight) // 设置渲染区域
    this.renderer.setClearColor(option.backgroundColor) // 设置背景色
    this.renderer.setClearAlpha(option.bgAlpha)
    this.el.appendChild(this.renderer.domElement)

    this.css3DRenderer = new CSS3DRenderer()
    this.css3DRenderer.setSize(offsetWidth, offsetHeight)
    this.css2DRenderer = new CSS2DRenderer()
    this.css2DRenderer.setSize(offsetWidth, offsetHeight)

    const domElement3D = this.css3DRenderer.domElement
    domElement3D.style = 'position:absolute;top:0px;left:0px;pointer-events:none'
    this.el.appendChild(domElement3D)
    const domElement2D = this.css2DRenderer.domElement
    domElement2D.style = 'position:absolute;top:0px;left:0px;pointer-events:none'
    this.el.appendChild(domElement2D)
  }
  initCamera() {
    const { offsetWidth, offsetHeight } = this.el
    const option = this.option.camera
    option.aspect = offsetWidth / offsetHeight
    const { fov, aspect, near, far, position } = option
    //TODO 可改善折线平整
    // var k = offsetWidth / offsetHeight; //窗口宽高比
    // var s = 150; //三维场景显示范围控制系数，系数越大，显示的范围越大
    // //创建相机对象
    // this.camera= new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 30);
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    this.camera.position.set(...position)
    this.camera.lookAt(this.scene.position)
  }
  initLight() {
    if (this.option.light) {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
      directionalLight.position.set(200, 300, 10)
      directionalLight.castShadow = false
      this.scene.add(directionalLight)
      let ambient = new THREE.AmbientLight(0x888888, 1)
      this.scene.add(ambient)
    }
  }
  initControl() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
  }
  initOther() {
    // 辅助线
    if (this.option.axes) {
      this.axes = new THREE.AxesHelper(10)
      this.scene.add(this.axes)
    }
    // 网格参考线
    if (this.option.gridHelper) {
      this.gridHelper = new THREE.GridHelper(10000, 300, 0xf1f1f1, 0xf1f1f1)
      this.gridHelper.material.opacity = 0.2
      this.gridHelper.material.transparent = true
      this.gridHelper.renderOrder = -100
      this.scene.add(this.gridHelper)
    }
  }
  resize() {
    const { offsetWidth, offsetHeight } = this.el
    this.camera.aspect = offsetWidth / offsetHeight
    this.renderer.setSize(offsetWidth, offsetHeight) // 重新获取
    this.camera.updateProjectionMatrix() // 更新相机矩阵
    this.renderer.render(this.scene, this.camera)
  }
  onresize() {
    window.addEventListener('resize', this.resize, false)
  }
  getIntersects(objectList, event) {
    event.preventDefault()
    let x =
      ((event.clientX - this.el.getBoundingClientRect().left) /
        this.el.getBoundingClientRect().width) *
        2 -
      1
    // 规范设施横坐标
    // 这里的mainCanvas是个dom元素,getBoundingClientRectangle会返回以后元素的视口大小.
    let y =
      -(
        (event.clientY - this.el.getBoundingClientRect().top) /
        this.el.getBoundingClientRect().height
      ) *
        2 +
      1
    // 规范设施纵坐标
    let standardVector = new THREE.Vector3(x, y, 1) // 规范设施坐标
    // 规范设施坐标转世界坐标
    let worldVector = standardVector.unproject(this.camera)
    // 射线投射方向单位向量(worldVector坐标减相机地位坐标)
    let ray = worldVector.sub(this.camera.position).normalize()
    // 创立射线投射器对象
    let raycaster = new THREE.Raycaster(this.camera.position, ray)
    const intersects = raycaster.intersectObjects(objectList, false)
    return intersects
  }
  destroy() {
    window.removeEventListener('resize', this.resize)
    cancelAnimationFrame(this.frameId)
    this.scene.traverse((child) => {
      if (child.geometry) {
        child.geometry.dispose()
      }
      child = null
    })

    this.renderer.forceContextLoss()
    this.renderer.dispose()
    this.scene.clear()
    this.renderer.domElement = null
    this.scene = null
    this.camera = null
    this.controls = null
    this.renderer = null
    this.css3DRenderer = null
    this.css2DRender = null
    this.axes = null
    this.gridHelper = null
  }
  render(callback) {
    callback ? callback() : ''
    this.frameId = requestAnimationFrame(() => {
      this.composer ? this.composer.render() : this.renderer.render(this.scene, this.camera)
      this.controls ? this.controls.update() : ''
      this.css2DRenderer ? this.css2DRenderer.render(this.scene, this.camera) : ''
      this.css3DRenderer ? this.css3DRenderer.render(this.scene, this.camera) : ''
      // if (this.updateTween) TWEEN.update()
      // if (this.single.css2dRenderer)
      //   this.single.css2dRenderer.cssRenderer.render(this.scene, this.camera)
      // if (this.single.css3dRenderer)
      //   this.single.css3dRenderer.cssRenderer.render(this.scene, this.camera)
      this.render(callback)
    })
  }
}
export default App
