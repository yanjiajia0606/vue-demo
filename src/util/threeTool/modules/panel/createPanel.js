/*
 * @Author: 闫佳佳 yanjiajia@6cloudtech.com
 * @Date: 2022-08-31 14:39:36
 * @LastEditors: 闫佳佳
 * @LastEditTime: 2023-04-01 15:03:06
 * @FilePath: /vue-demo/src/util/threeTool/modules/panel/panel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as THREE from 'three'
import { CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
/**
 * 2D、3D顶牌
 */
const createPanel = (option) => {
  const { type = 'css3d' } = option
  if (type === 'css3d') {
    const { parent, position, element } = option
    const div = window.document.createElement('div')
    div.style.pointerEvents = 'none'
    div.className = 'panel-container'
    element && (div.innerHTML = element)
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ transparent: true })
    )
    const object = new CSS3DSprite(div)
    box.add(object)
    parent && parent.add(box)
    position && box.position.set(...position)
    return box
  } else if (type === 'css2d') {
    const { parent, position, element } = option
    const div = window.document.createElement('div')
    div.style.pointerEvents = 'none'
    div.className = 'panel-container'
    element && (div.innerHTML = element)
    const object = new CSS2DObject(div)
    // box.add(object)
    parent && parent.add(object)
    // // object.position.set(0, 0.1, 0)
    position && object.position.set(...position)
    return object
  }
}

export default createPanel
