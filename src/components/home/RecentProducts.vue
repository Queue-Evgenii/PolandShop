<template>
  <div class="recent-products">
    <div class="products">
    <div class="products__container container">
      <div class="products__title recent-products__title">Niedawno przeglądałeś:</div>
      <div class="products__items flex">
        <div class="products__item item-product" v-for="product in mainProducts" :key="product.id">
          <div class="item-product__body recent-product__body flex">
            <div class="item-product__info flex">
              <router-link :to="product.href" class="item-product__image">
                <img :src="product.image" alt="">
              </router-link>
              <router-link :to="product.href" class="item-product__label">{{ product.label }}</router-link>
              <div class="item-product__price">{{ product.price }}</div>
            </div>
            <div class="item-product__actions actions-product flex">
              <button type="button" class="actions-product__button recent-button">Dodaj do koszyka</button>
              <button type="button" class="actions-product__favorite recent-favorite"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="products">
    <div class="products__container container">
      <div class="products__title recent-products__title">Niedawno przeglądałeś:</div>
      <div class="products__items flex">
        <div class="products__item item-product" v-for="product in mainProducts" :key="product.id">
          <div class="item-product__body recent-product__body flex">
            <div class="item-product__info flex">
              <router-link :to="product.href" class="item-product__image">
                <img :src="product.image" alt="">
              </router-link>
              <router-link :to="product.href" class="item-product__label">{{ product.label }}</router-link>
              <div class="item-product__price">{{ product.price }}</div>
            </div>
            <div class="item-product__actions actions-product flex">
              <button type="button" class="actions-product__button recent-button">Dodaj do koszyka</button>
              <button type="button" class="actions-product__favorite recent-favorite"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style lang="stylus">
  .recent-products__title{
    width 100%
    text-align center
  }
</style>
<script>
export default {
  props: {
    mainProducts: {
      type: Array,
    }
  },
}
</script>
