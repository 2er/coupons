<template>
  <div class="home-container">
    <wv-flex class="flex-header">
      <wv-flex-item>
        <wv-header title="卡包" :fixed="false" background-color="#F7F7F7">
          <div class="btn-menu" slot="right">
            <span class="message">消息</span>
          </div>
        </wv-header>
      </wv-flex-item>
    </wv-flex>
    <!--<wv-flex class="flex-body-card-router">-->
      <!--<wv-flex-item>-->
        <!--<wv-group>-->
          <!--<wv-cell is-link to="/" class="cell-more-cards">-->
            <!--<img src="../../assets/images/icons/icon_card.png" alt="" slot="icon" class="cell-icon">-->
            <!--<span slot="bd" class="title">卡</span>-->
            <!--<span slot="ft" class="router">查看全部({{cards.length}})</span>-->
          <!--</wv-cell>-->
        <!--</wv-group>-->
      <!--</wv-flex-item>-->
    <!--</wv-flex>-->
    <wv-flex class="flex-body-card-show">
      <wv-flex-item>
        <common-card v-for="(card, key, index) in cards" :key="index" :card="card"></common-card>
      </wv-flex-item>
    </wv-flex>
    <wv-flex class="flex-body-coupon-router">
      <wv-flex-item>
        <wv-group>
          <wv-cell is-link to="/coupons" class="cell-more-coupons">
            <img src="../../assets/images/icons/icon_quan.png" alt="" slot="icon" class="cell-icon">
            <span slot="bd" class="title">我的优惠券</span>
          </wv-cell>
        </wv-group>
      </wv-flex-item>
    </wv-flex>
    <!--<common-footer></common-footer>-->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import commonCard from '../../components/common/commonCard'
// import commonFooter from '../../components/common/commonFooter'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  created: function () {
    let sessionId = this.$route.params.session_id
    let memberId = this.$route.params.member_id
    this.setSessionId({session_id: sessionId})
    this.setMemberId({member_id: memberId})
    this.getCards({session_id: sessionId, member_id: memberId})
  },
  components: {
    commonCard
    // commonFooter
  },
  computed: mapState({
    cards: state => state.cards
  }),
  methods: {
    ...mapActions([
      'getCards',
      'setSessionId',
      'setMemberId'
    ])
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }
  .home-container .wv-header {
    color: #000000;
  }
  .home-container .message {
    font-size: 14px;
    color: #4a4a4a;
  }
  .home-container .cell-more-cards {
    font-size: 12px;
  }
  .home-container .cell-more-cards .cell-icon {
    width: 24px;
    height: 24px;
  }
  .home-container .cell-more-cards .title {
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
  }
  .home-container .cell-more-cards .router {
    font-size: 12px;
  }
  .home-container .cell-more-coupons {
    height: 50px;
    font-size: 12px;
    font-weight: bold;
  }
  .home-container .cell-more-coupons .title {
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
  }
  .home-container .cell-more-coupons .cell-icon {
    width: 24px;
    height: 24px;
  }
</style>
