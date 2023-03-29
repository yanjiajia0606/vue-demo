import { routes } from '@/router'
const state = {
  routes: routes[0].children
}

const getters = {
  routes: (state) => state.routes
}
const mutations = {
  setAllRoutes(state, routes) {
    state.routes = routes
  }
}
export default { namespaced: true, state, getters, mutations }
