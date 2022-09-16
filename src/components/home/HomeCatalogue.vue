
<template>
<div class="page-products">
  <div class="mainproducts products">
    <div class="products__container container">
      <div class="products__title">Akcesoria do sufitów napinanych</div>
      <div class="products__items">
        <div class="products__item item-product" v-for="product in mainProducts" :key="product.id">
          <div class="item-product__body flex">
            <div class="item-product__info flex">
              <router-link :to="product.href" class="item-product__image">
                <img :src="product.image" alt="">
                <span v-if="product.mark">{{ product.mark }}</span></router-link>
              <router-link :to="product.href" class="item-product__label">{{ product.label }}</router-link>
              <div class="item-product__price">{{ product.price }}</div>
            </div>
            <div class="item-product__actions actions-product flex">
              <button type="button" class="actions-product__button">Dodaj do koszyka</button>
              <button type="button" class="actions-product__favorite"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mainproducts products">
    <div class="products__container container">
      <div class="products__title">Akcesoria do sufitów napinanych</div>
      <div class="products__items">
        <div class="products__item item-product" v-for="product in mainProducts" :key="product.id">
          <div class="item-product__body flex">
            <div class="item-product__info flex">
              <router-link :to="product.href" class="item-product__image">
                <img :src="product.image" alt="">
                <span v-if="product.mark">{{ product.mark }}</span>
              </router-link>
              <router-link :to="product.href" class="item-product__label">{{ product.label }}</router-link>
              <div class="item-product__price">{{ product.price }}</div>
            </div>
            <div class="item-product__actions actions-product flex">
              <button type="button" class="actions-product__button">Dodaj do koszyka</button>
              <button type="button" class="actions-product__favorite"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-ads />
  <div class="mainproducts products">
    <div class="products__container container">
      <div class="products__title">Akcesoria do sufitów napinanych</div>
      <div class="products__items">
        <div class="products__item item-product" v-for="product in mainProducts" :key="product.id">
          <div class="item-product__body flex">
            <div class="item-product__info flex">
              <router-link :to="product.href" class="item-product__image">
                <img :src="product.image" alt="">
                <span v-if="product.mark">{{ product.mark }}</span>
              </router-link>
              <router-link :to="product.href" class="item-product__label">{{ product.label }}</router-link>
              <div class="item-product__price">{{ product.price }}</div>
            </div>
            <div class="item-product__actions actions-product flex">
              <button type="button" class="actions-product__button">Dodaj do koszyka</button>
              <button type="button" class="actions-product__favorite"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style lang="stylus">
.products {
  margin 30px 0
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 20px;
    color: #3D3D3D;
  }
  &__items {
    padding 50px 0
    margin 0 -10px
    display grid
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 40px
    @media(max-width: 560px){
      padding 20px 0
    }
  }
  &__item {
    padding 0 10px
    margin 5px 0
    min-height 100%
  }
}
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
    &:hover{
      box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
      border: 2px solid #FF0031;
      padding 26px 30px
      .actions-product__button{
        border: 2px solid #FF0031;
        color: #FF0031
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
import PageAds from '@/components/PageAds'
export default {
  props: {
    mainProducts: {
      type: Array,
    }
  },
  components: {
    PageAds
  }
}
</script>
