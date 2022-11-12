<template>
  <div class="recent-products">
    <div class="products">
      <div class="products__container container">
        <div class="products__title recent-products__title">Niedawno przeglądałeś:</div>
        <div class="products__items">
          <div class="products__item item-product"  v-for="product in recentProducts" :key="product.id">
            <router-link :to="{name: 'productItem', params: {id: product.id}}">
              <div class="item-product__body flex" @click="addToRecent(product)">
                <div class="item-product__info flex">
                  <div class="item-product__image">
                    <img :src="product.image" alt="">
                    <span v-if="product.mark">{{ product.mark }}</span>
                  </div>
                  <div class="item-product__label">{{ product.title}}</div>
                  <div class="item-product__price">{{ product.price }}</div>
                </div>
                <div class="item-product__actions actions-product flex">
                  <button @click="addToCart(product);$event.stopPropagation();$event.preventDefault()" type="button"
                    class="actions-product__button">Dodaj do koszyka</button>
                  <button type="button" class="actions-product__favorite"></button>
                </div>
              </div>
            </router-link>
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
  .recent-products{
    span{
      display none
    }
  }
</style>
<script>
export default {
  props: {
    recentProducts: {
      type: Array,
    }
  },
}
</script>
