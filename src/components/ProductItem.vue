<template>
  <div class="products__item item-product">
    <div class="item-product__body flex">
      <div class="item-product__info flex">
        <router-link :to="{name: 'productItem', params: {id: product.id}}" class="item-product__image">
          <img :src="product.image" alt="">
          <span v-if="product.mark">{{ product.mark }}</span>
        </router-link>
        <router-link :to="{name: 'productItem', params: {id: product.id}}" class="item-product__label">{{ product.title
        }}</router-link>
        <div class="item-product__price">{{ product.price }}</div>
      </div>
      <div class="item-product__actions actions-product flex">
        <button @click="addToCart(product)" type="button" class="actions-product__button">Dodaj do koszyka</button>
        <button type="button" class="actions-product__favorite"></button>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
.item-product {
  &__body {
    min-height 100%
    flex-direction column
    gap: 20px
    padding 30px
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    position relative
    background-color #fff
    border 2px solid rgba(256, 256, 256, 0.1)
    transition all 0.3s ease 0s
    &:hover{
      box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
      border: 2px solid #FF0031;
      .actions-product__button{
        border: 2px solid #FF0031;
        color: #FF0031
        transition all 0.3s ease 0s
      }
    }
  }
  &__image {
    display block
    width 225px
    // max-width 270px
    height 200px
    img{
      width 100%
      height 100%
    }
    span{
      display inline-block
      width 160px
      padding 5px 0
      text-align center
      background: #FF0031;
      border-radius: 5px;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
      position absolute
      top 22px
      right 12px
    }
  }
  &__label {
    font-size 18px
    line-height: 21px;
  }
  &__price {
    width 100%
    text-align left
    font-size 33px
    &::after{
      content: 'PLN'
      font-size 24px
      margin-left: 10px
    }
  }
  &__info{
    width 100%
    flex-direction column
    flex 1 1 100%
    gap 20px
  }
  &__actions {
  }
  @media(max-width: 1400px){
    flex-basis 50%
  }
}
.actions-product {
  width 100%
  justify-content space-between
  gap 5px
  &__button {
    flex-shrink: 0
    padding 20px 30px
    text-align center
    font-size: 16px;
    border: 2px solid #000000;
    border-radius: 10px;
    &:hover{
      background-color #FF0031;
      color: #fff !important
    }
  }
  &__favorite {
    width 28px
    height 28px
    background url('@/assets/img/main/icons/main-favorite.png') 0 0 no-repeat
    &:hover{
      background url('@/assets/img/main/icons/favorite-on-hover.png') 0 0 no-repeat
    }
  }
}
</style>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  computed: {

  },
  methods: {
    addToCart(product) {
      this.$emit('addToCart', product)
    },
  },
}
</script>
