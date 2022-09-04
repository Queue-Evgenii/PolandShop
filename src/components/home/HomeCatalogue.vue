
<template>
<div class="page-products">
  <section class="mainproducts products">
    <div class="products__container container">
      <h2 class="products__title">Akcesoria do sufitów napinanych</h2>
      <div class="products__items flex">
        <div class="products__item item-product" v-for="product in MainProducts" :key="product.id">
          <div class="item-product__body flex">
            <div class="item-product__info flex">
              <a :href="product.href" class="item-product__image"><img :src="product.image" alt=""><span v-if="product.mark">{{ product.mark }}</span></a>
              <a :href="product.href" class="item-product__label">{{ product.label }}</a>
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
  </section>
  <section class="mainproducts products">
    <div class="products__container container">
      <h2 class="products__title">Akcesoria do sufitów napinanych</h2>
      <div class="products__items flex">
        <div class="products__item item-product" v-for="product in MainProducts" :key="product.id">
          <div class="item-product__body flex">
            <div class="item-product__info flex">
              <a :href="product.href" class="item-product__image"><img :src="product.image" alt=""><span v-if="product.mark">{{ product.mark }}</span></a>
              <a :href="product.href" class="item-product__label">{{ product.label }}</a>
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
  </section>
  <page-ads />
  <section class="mainproducts products">
    <div class="products__container container">
      <h2 class="products__title">Akcesoria do sufitów napinanych</h2>
      <div class="products__items flex">
        <div class="products__item item-product" v-for="product in MainProducts" :key="product.id">
          <div class="item-product__body flex">
            <div class="item-product__info flex">
              <a :href="product.href" class="item-product__image"><img :src="product.image" alt=""><span v-if="product.mark">{{ product.mark }}</span></a>
              <a :href="product.href" class="item-product__label">{{ product.label }}</a>
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
  </section>
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
    justify-content space-between
    align-items stretch !important
    flex-wrap wrap
  }
  &__item {
    padding 0 10px
    margin 5px 0
    min-height 100%
  }
}
.item-product {
  flex: 1 1 20%
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
      .actions-product__button{
        border: 2px solid #FF0031;
        color: #FF0031
      }
    }
  }
  &__image {
    display block
    max-width 270px
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
  &__button {
    width 200px
    padding 20px 0
    text-align center
    font-size: 16px;
    border: 2px solid #000000;
    margin-right 30px
    border-radius: 10px;
    &:hover{
      background-color #FF0031;
      color: #fff !important
    }
  }
  &__favorite {
    width 28px
    height 28px
    background url('../../assets/img/main/icons/main-favorite.png') 0 0 no-repeat
    &:hover{
      background url('../../assets/img/main/icons/favorite-on-hover.png') 0 0 no-repeat
    }
  }
}
</style>
<script>
import PageAds from '@/components/PageAds'
export default {
  data () {
    return {
      MainProducts: [
        {
          id: 1,
          image: require('../../assets/img/products/product-1.png'),
          href: '#',
          mark: 'Najlepiej sprzedający się',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        },
        {
          id: 2,
          image: require('../../assets/img/products/product-2.png'),
          href: '#',
          mark: '',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        },
        {
          id: 3,
          image: require('../../assets/img/products/product-3.png'),
          href: '#',
          mark: 'Najlepiej sprzedający się',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        },
        {
          id: 4,
          image: require('../../assets/img/products/product-4.png'),
          href: '#',
          mark: '',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        }
      ]
    }
  },
  components: {
    PageAds
  }
}
</script>
