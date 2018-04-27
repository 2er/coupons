<template>
  <div class="coupons-container">
    <wv-flex class="flex-header">
      <wv-flex-item>
        <wv-header title="我的优惠券" :fixed="false" background-color="#F7F7F7">
          <div class="btn-back" slot="left" @click="$router.go(-1)">
            返回
          </div>
        </wv-header>
      </wv-flex-item>
    </wv-flex>
    <wv-flex class="flex-body-coupons-show">
      <wv-flex-item>
        <common-coupon v-for="(coupon, key, index) in coupons" :key="index" :cid="key" :coupon="coupon"></common-coupon>
      </wv-flex-item>
    </wv-flex>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import commonCoupon from '../../components/common/commonCoupon'
export default {
  name: 'coupons',
  data () {
    return {
    }
  },
  created: function () {
    this.getCoupons({session_id: this.sessionId, member_id: this.memberId})
  },
  components: {
    commonCoupon
  },
  computed: mapState({
    sessionId: state => state.sessionId,
    memberId: state => state.memberId,
    coupons: state => state.coupons
  }),
  methods: {
    ...mapActions([
      'getCoupons'
    ])
  }
}
</script>

<style lang="less" scoped>
  .coupons-container {
    height: 100%;
    background-color: #F7F7F7;
  }
  .coupons-container .wv-header {
    color: #000000;
  }
  .coupons-container .btn-back {
    font-size: 14px;
  }
</style>
