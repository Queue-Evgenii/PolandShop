<template>
  <div class="recent-products">
    <section class="products">
    <div class="products__container container">
      <h2 class="products__title recent-products__title">Niedawno przeglądałeś:</h2>
      <div class="products__items flex">
        <div class="products__item item-product" v-for="product in MainProducts" :key="product.id">
          <div class="item-product__body recent-product__body flex">
            <div class="item-product__info flex">
              <a :href="product.href" class="item-product__image"><img :src="product.image" alt=""></a>
              <a :href="product.href" class="item-product__label">{{ product.label }}</a>
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
  </section>
  <section class="products">
    <div class="products__container container">
      <h2 class="products__title recent-products__title">Niedawno przeglądałeś:</h2>
      <div class="products__items flex">
        <div class="products__item item-product" v-for="product in MainProducts" :key="product.id">
          <div class="item-product__body recent-product__body flex">
            <div class="item-product__info flex">
              <a :href="product.href" class="item-product__image"><img :src="product.image" alt=""></a>
              <a :href="product.href" class="item-product__label">{{ product.label }}</a>
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
  </section>
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
  }
}
</script>
