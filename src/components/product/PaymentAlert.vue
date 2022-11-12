<template>
  <div class="alert-block">
    <!-- <div class="alert-block__text">{{popupOutput.title}}</div>  -->
    <div class="alert-block__buttons" :class="popupOutput.nclass === 'before-payment' ? 'before-payment' : ''">
      <router-link :to="{name: 'payment'}" @click.native="quickBuy()" class="alert-block__buy button"><span>Buy onle that</span></router-link>
      <router-link :to="{name: 'cart'}" class="alert-block__payment button"><span>Go to cart</span></router-link>
    </div>
    <div class="alert-block__buttons" :class="popupOutput.nclass === 'on-payment' ? 'on-payment' : ''">
      <router-link :to="{name: 'home/'}" @click.native="goBack()" class="alert-block__buy button"><span>Clear quick buy and go to main page</span></router-link>
      <button class="alert-block__payment button" @click="closePopup()"><span>Back to payment</span></button>
    </div>
  </div>
</template>
<style lang="stylus">
    .before-payment, .on-payment{
      display flex !important
    }
  .alert-block {
    max-width: 620px
    &__text {
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      color: #3d3d3d;
      margin-bottom: 30px;
    }
    &__buttons {
      display none
      gap: 30px
      justify-content center
    }
    &__buy {
      display inline-block
      text-align center
      background-color #fff
      border 1px solid #FF0031
      span{
        color #FF0031
      }
      &:hover{
        background-color #FF0031
        span{
          color #fff
        }
      }
    }
    &__payment {
      border 1px solid transparent
      display inline-block
      text-align center
    }
  }
</style>
<script>
export default {
  props: {
    popupOutput: {
      type: Object,
      required: true,
    }
  },
  methods: {
    quickBuy() {
      this.$emit('quickBuy');
    },
    goBack() {
      this.$emit('goBack');
    },
    closePopup() {
      this.$emit('closePopup');
    }
  }
}
</script>