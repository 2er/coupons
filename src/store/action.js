import {
  getCards,
  getCoupons
} from '../service/getData'
import {
  GET_CARDS,
  SET_SESSION_ID,
  SET_MEMBER_ID,
  GET_COUPONS
} from './mutation-types.js'

export default {

  async getCards ({
    commit,
    state
  }, params) {
    let resp = await getCards(params)
    if (resp.return_code === '0000') { commit(GET_CARDS, resp.data) }
  },
  setSessionId ({
    commit,
    state
  }, params) {
    commit(SET_SESSION_ID, params.session_id)
  },
  setMemberId ({
    commit,
    state
  }, params) {
    commit(SET_MEMBER_ID, params.member_id)
  },
  async getCoupons ({
    commit,
    state
  }, params) {
    let resp = await getCoupons(params)
    if (resp.return_code === '0000') { commit(GET_COUPONS, resp.data.list) }
  }
}
