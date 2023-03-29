import Vue from 'vue'
import Vuex from 'vuex'
import routes from './modules/routes'
import editor from './modules/editor'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    routes,
    editor
  }
})
