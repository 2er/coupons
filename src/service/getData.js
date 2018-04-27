import ajax from '../config/ajax'

/**
 * 获取首页默认地址
 */

export const getCards = (params) => ajax('', {method: 'card.cardinfo', params: params}, 'POST')

export const getCoupons = (params) => ajax('', {method: 'coupon.memcoupons', params: params}, 'POST')
