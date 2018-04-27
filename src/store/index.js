import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  cards: [], // 会员卡列表
  sessionId: '',
  memberId: '',
  coupons: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
