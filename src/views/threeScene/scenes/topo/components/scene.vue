<template>
  <div class="scene-box">
    <div class="btn">
      <el-switch v-model="type" active-text="3D" inactive-text="2D"></el-switch>
      <test :num.sync="num"></test>
      parent:{{ num }}
    </div>
    <div
      :id="id"
      class="container scene"
      :class="{ opacity: !type }"
      @click="handlerClick"
      ref="scene"
    ></div>
    <div :id="topoId" class="container topo" :class="{ opacity: type }"></div>
  </div>
</template>

<script>
import App from '@/util/threeTool/scene.js'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import threeX from '@/util/threeTool/index'
import test from './test.vue'
let uniforms2 = {
  time: { value: 1.0 },
  texture: null
}
const clock = new THREE.Clock()
let lineArr = [],
  cylinderArr = []
const textureLoader = new THREE.TextureLoader()
const img = require('@/assets/image/arrow.png')
let texture = textureLoader.load(img)
let cylinderRadius = 0
let cylinderOpacity = 1
export default {
  data() {
    return {
      id: 'scene',
      topoId: 'container_16',
      app: {},
      scene: {},
      graph: {},
      nodeGroup: {},
      edgeGroup: {},
      type: true,
      panelWidth: 70,
      num: 1,
      show: false
    }
  },
  components: {
    test
  },
  methods: {
    init() {
      this.initTopo()
      this.initScene()
      setTimeout(() => {
        this.create3D()
      }, 500)
      this.initSky()
      this.createFence()
      this.createCone()
      this.createReflector()

      // this.loadModel()
    },
    initScene() {
      this.app = new App({
        container: this.id,
        camera: {
          position: [-873.3686713916088, 407.6786902901527, 726.163411156637]
        }
        // gridHelper: true
      })
      this.app.controls.target.set(8.068641720094071, -116.46025918035532, -32.86735005876387)
      const callBack = () => {
        const t = clock.getDelta()
        if (uniforms2) uniforms2.time.value += t * 0.9
        lineArr.forEach((line) => {
          line.material.uniforms.dashOffset.value -= 0.01
        })
        texture.offset.x -= 0.01
        this.cylinderAnimate()
      }
      this.app.render(callBack)
      this.scene = this.app.scene
      // this.app.renderer.setClearColor('#333')
      this.app.camera.lookAt(0, 0, 0)
      this.nodeGroup = new THREE.Group()
      this.edgeGroup = new THREE.Group()

      this.scene.add(this.nodeGroup)
      this.scene.add(this.edgeGroup)
      const controls = this.app.controls
      // controls.maxPolarAngle = Math.PI / 2.2
      // controls.enablePan = false
      // controls.autoRotate = false
      // controls.dampingFactor = 0.8
      // controls.maxDistance = 5000
      // controls.minDistance = 10
    },
    // 创建单个拓扑组
    createSingleBox(x, y, z, isCenter) {
      const height = isCenter ? 115 : 78
      const panelHeight = isCenter ? 113 : 88
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(this.panelWidth, 2, this.panelWidth),
        new THREE.MeshLambertMaterial({
          color: '#4d70bd' //三角面颜色
        })
      )
      box.position.set(x, y, z)
      box.renderOrder = -1
      const box1 = new THREE.Mesh(
        new THREE.BoxGeometry(this.panelWidth + 2, height + 20, this.panelWidth + 2),
        new THREE.MeshLambertMaterial({
          // color: 'transparent',
          opacity: 0.001,
          transparent: true
        })
      )
      box1.position.set(x, y + height / 2 + 10, z)
      // this.loadBox(box, isCenter)
      threeX.createPanel({
        parent: box,
        element: ` <div class="panel-box"><div class="panel">标题</div> <div class="triangle"></div></div>`,
        position: [0, panelHeight, 0]
      })
      this.loadModel(box, isCenter)
      // box1.rotateY(180)
      // box.rotateY(180)
      this.nodeGroup.add(box)
      this.nodeGroup.add(box1)
    },
    initTopo() {
      const G6 = this.$G6
      const data = {
        nodes: [
          {
            id: '0',
            label: '0',
            isCenter: true
          },
          {
            id: '1',
            label: '1',
            isCenter: false
          },
          {
            id: '2',
            label: '2',
            isCenter: false
          },
          {
            id: '3',
            label: '3',
            isCenter: false
          },
          {
            id: '4',
            label: '4'
          }
          // {
          //   id: '5',
          //   label: '5'
          // },
          // {
          //   id: '7',
          //   label: '7'
          // }
        ],
        edges: [
          {
            source: '0',
            target: '1'
          },
          {
            source: '0',
            target: '2'
          },
          {
            source: '0',
            target: '3'
          },
          {
            source: '0',
            target: '4'
          }
          // {
          //   source: '0',
          //   target: '5'
          // },
          // {
          //   source: '0',
          //   target: '7'
          // }
        ]
      }

      const container = document.getElementById(this.topoId)
      const width = container.scrollWidth
      const height = container.scrollHeight || 500
      const graph = new G6.Graph({
        container: this.topoId,
        width,
        height,
        // fitView: true,
        // fitCenter: true,
        layout: {
          // type: 'force',
          // center: [0, 0],
          // nodeSize: 50,
          // preventOverlap: true,
          // clustering: true,
          // nodeClusterBy: 'cluster',
          // clusterNodeStrength: 300
          type: 'fruchterman',
          center: [0, 0], // 可选，默认为图的中心
          clusterGravity: 0.5,
          gravity: 0.01, // 可选
          gpuEnabled: true
        }
      })
      graph.data(data)
      graph.render()
      this.graph = graph
    },
    create3D() {
      const nodes = this.graph.getNodes()
      const edges = this.graph.getEdges()
      nodes.forEach((node) => {
        const item = node.getBBox()
        window.item = item
        const { x, y } = item
        this.createSingleBox(x, 0, y, node._cfg.model.isCenter)
      })
      edges.forEach((edge) => {
        const source = edge.getSource().getBBox()
        const target = edge.getTarget().getBBox()
        const v0 = new THREE.Vector3(source.x, 120, source.y)
        const v3 = new THREE.Vector3(target.x, 98, target.y)
        const flyLine = threeX.flyLine({
          points: [v0, v3],
          width: 10
        })
        // this.edgeGroup.add(flyLine)
        const { points } = threeX.util.getFlyLinePoints({
          points: [v0, v3]
        })
        // texture.repeat.set(0.1, 0.1)
        const line = threeX.meshLine({
          type: 'meshLine',
          points: points,
          parent: this.edgeGroup,
          style: {
            color: '#6bc5f8',
            map: texture,
            lineWidth: 10,
            dashArray: 2,
            dashRatio: 0
          }
        })
        lineArr.push(line)
      })
    },
    loadModel(parent, isCenter) {
      const modelName = isCenter ? 'building1' : 'building2'
      const scale = isCenter ? 6 : 5
      let loader = new GLTFLoader()
      let _this = this
      loader.load(
        `models/${modelName}.gltf`,
        function (gltf) {
          let scene = gltf.scene
          scene.position.set(0, 0, 0)
          // scene.rotateY(180)
          _this.model = scene
          parent.add(_this.model)
          _this.model.scale.set(scale, scale, scale)
        },
        undefined,
        function (error) {
          console.error(error)
        }
      )
    },
    loadBox(parent, isCenter) {
      const height = isCenter ? 115 : 88
      const Gradient = {
        vs: `
        varying vec3 iPosition;
        void main(){
            iPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
        fs: `
        varying vec3 iPosition;
        uniform float time;
        void main(){
            vec3 color = vec3(89./255.,208./255.,255./255.);
            float height = iPosition.y + 15.;
            float num = 70.;
            float white = (distance(vec2(0.8,0.9),vec2(0.0))-6.0)/(6.0 * (sqrt(2.0)-1.0));
            float alphax = smoothstep(0.0,1.0,white );
            float alphay = smoothstep(1.0,0.0,height/num + sin(time) * 0.5 );

            gl_FragColor = vec4(color +vec3(255.,0.,0.)* alphax * 0.0008,alphay*0.2);
        }
    `
      }
      const imgUrl = require('@/assets/image/test1.png')
      textureLoader.load(imgUrl, (texture) => {
        uniforms2.texture = { value: texture }
        const geometry = new THREE.BoxGeometry(this.panelWidth, height, this.panelWidth)
        const shaderMaterial = new THREE.ShaderMaterial({
          uniforms: uniforms2,
          vertexShader: Gradient.vs,
          fragmentShader: Gradient.fs,
          side: THREE.DoubleSide,
          transparent: true
        })
        const cone = new THREE.Mesh(geometry, shaderMaterial)
        cone.position.set(0, 2 + height / 2, 0)
        cone.renderOrder = -1
        parent.add(cone)
      })
    },
    handlerClick(event) {
      const intersects = this.app.getIntersects([...this.nodeGroup.children], event)
    },
    // 创建天空盒
    initSky() {
      this.scene.background = new THREE.CubeTextureLoader()
        .setPath('images/sky/')
        .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])
    },
    // 创建镜面
    createReflector() {
      const el = this.$refs.scene
      const geometry2 = new THREE.CircleBufferGeometry(1000, 1000)
      const groundMirror2 = new Reflector(geometry2, {
        // clipBias: 0.3,
        textureWidth: el.offsetWidth * window.devicePixelRatio,
        textureHeight: el.offsetHeight * window.devicePixelRatio
        // color: 'transparent',
        // recursion: 1
      })
      groundMirror2.position.y = -2
      groundMirror2.rotateX(-Math.PI / 2)
      this.scene.add(groundMirror2)
    },
    createFence() {
      const Gradient = {
        vs: `
        varying vec3 iPosition;
        void main(){
            iPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
        fs: `
        varying vec3 iPosition;
        uniform float time;
        void main(){
          float dataY = iPosition.y;
          float heighHalf = iPosition.y*0.5
            if (dataY>heighHalf) {
              gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
            }else{
              float g = 1.0 - dataY / dataI;
              gl_FragColor = vec4(0.0, 1.0, g, 1.0);
            }
        }
    `
      }
      let geometry = new THREE.CylinderGeometry(100, 100, 50, 64)

      //加载纹理
      const imgUrl = require('@/assets/image/test1.png')
      let texture = textureLoader.load(imgUrl)
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping //每个都重复
      texture.repeat.set(1, 1)
      texture.needsUpdate = true
      uniforms2.texture = { value: texture }
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms2,
        vertexShader: Gradient.vs,
        fragmentShader: Gradient.fs,
        side: THREE.DoubleSide,
        transparent: true
      })
      let materials = [
        //圆柱侧面材质，使用纹理贴图
        shaderMaterial,
        //圆柱顶材质
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        }),
        //圆柱底材质
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        })
      ]
      let cylinderMesh = new THREE.Mesh(geometry, materials)
      cylinderMesh.position.set(0, 10, 0)
      cylinderArr.push(cylinderMesh)
      this.scene.add(cylinderMesh)
    },
    createCone() {
      let geometry = new THREE.CylinderGeometry(25, 0, 40, 4)

      //加载纹理
      const imgUrl = require('@/assets/image/test1.png')
      let texture = textureLoader.load(imgUrl)
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping //每个都重复
      texture.repeat.set(1, 1)
      texture.needsUpdate = true

      let materials = [
        //圆柱侧面材质，使用纹理贴图
        new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          opacity: 1,
          transparent: true
        }),
        //圆柱顶材质
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        }),
        //圆柱底材质
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide
        })
      ]
      let cylinderMesh = new THREE.Mesh(geometry, materials)
      cylinderMesh.position.set(0, 200, 0)
      this.scene.add(cylinderMesh)
    },
    cylinderAnimate() {
      cylinderRadius += 0.02
      cylinderOpacity -= 0.014
      if (cylinderRadius > 1.5) {
        cylinderRadius = 0
        cylinderOpacity = 1
      }
      cylinderArr.forEach((cylinderMesh) => {
        if (cylinderMesh) {
          cylinderMesh.scale.set(1 + cylinderRadius, 1, 1 + cylinderRadius) //圆柱半径增大
          cylinderMesh.material[0].opacity = cylinderOpacity //圆柱可见度减小
        }
      })
    }
  },
  mounted() {
    window._t = this
    this.init()
  },
  beforeDestroy() {
    this.app && this.app.destroy()
  }
}
</script>
<style lang="scss" scoped>
.scene-box {
  position: relative;
  background: #333;
  .scene {
    background: #05192f;
  }
  .container {
    width: 100%;
    height: 800px;
    &.opacity {
      opacity: 0;
      pointer-events: none;
    }
    &.scene {
      position: absolute;
      top: 0;
    }
    &.topo {
      position: absolute;
      top: 0;
    }
  }
  .btn {
    position: absolute;
    top: 10px;
    z-index: 99999;
    color: #fff;
  }
  .panel {
    font-size: 12px;
    color: #fff;
    scale: 0.5;
  }
}
</style>
<style>
.scene .panel {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  scale: 0.5;
}
</style>
