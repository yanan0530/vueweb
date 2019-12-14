import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
//  调试工具,开发环境使用，上线关闭
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})

export default store
