import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import echarts from 'echarts'
import * as G2 from '@antv/g2'
import G6 from '@antv/g6'
import 'normalize.css/normalize.css'
import('element-ui/lib/theme-chalk/index.css')
import '@/style/common.css'

// import 'default-passive-events'
import '@/util/ployfill.js'
import '@/util/iconfont.js'
import '@/assets/iconfont/iconfont.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$G2 = G2
Vue.prototype.$G6 = G6
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
