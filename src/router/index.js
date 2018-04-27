import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: 'home/:session_id/:member_id',
    component: r => require.ensure([], () => r(require('../page/home')), 'home'),
    meta: {
      title: '我的卡包'
    }
  }, {
    path: 'coupons',
    component: r => require.ensure([], () => r(require('../page/home/coupons')), 'coupons'),
    meta: {
      title: '我的优惠券'
    }
  }, {
    path: 'card',
    component: r => require.ensure([], () => r(require('../page/home/card')), 'card'),
    meta: {
      title: '会员卡'
    }
  }, {
    path: 'cardetail',
    component: r => require.ensure([], () => r(require('../page/home/cardetail')), 'cardetail'),
    meta: {
      title: '会员卡详情'
    }
  }, {
    path: 'coupon/:coupon_id',
    component: r => require.ensure([], () => r(require('../page/home/coupon')), 'coupon'),
    meta: {
      title: '优惠券'
    }
  }, {
    path: 'coudetail/:coupon_id',
    component: r => require.ensure([], () => r(require('../page/home/coudetail')), 'coudetail'),
    meta: {
      title: '优惠券详情'
    }
  }]
}]
