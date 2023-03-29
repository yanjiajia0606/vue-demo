/**
 * 自定义组件参考文档
 * https://cn.vuejs.org/v2/guide/components-registration.html
 */
const KEY_COMPONENT_NAME = 'html-'

export default (() => {
  let components = {}

  const requireComponent = require.context('@/views/htmlFagment/components', true, /\w+.(vue|js)$/)
  requireComponent.keys().forEach((fileName) => {
    if (fileName.includes('.vue')) {
      const cmp = requireComponent(fileName).default
      components[`${KEY_COMPONENT_NAME}${fileName.replace('.vue', '').replace('./', '')}`] = cmp
    }
  })

  return components
})()
