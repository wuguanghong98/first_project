import Vue from 'vue'
import Vuex from 'vuex'

import state from './base/state'
import getters from './base/getters'
import mutations from './base/modules'
import actions from './base/actions'
import modules from './base/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
