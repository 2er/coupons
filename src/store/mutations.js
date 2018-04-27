import {
  GET_CARDS,
  SET_SESSION_ID,
  SET_MEMBER_ID,
  GET_COUPONS
} from './mutation-types.js'

export default {
  // 获取用户信息存入vuex
  [GET_CARDS] (state, info) {
    state.cards = info
  },
  [SET_SESSION_ID] (state, info) {
    state.sessionId = info
  },
  [SET_MEMBER_ID] (state, info) {
    state.memberId = info
  },
  [GET_COUPONS] (state, info) {
    state.coupons = info
  }
}
