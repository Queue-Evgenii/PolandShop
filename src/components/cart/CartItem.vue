<template>
  <div class="cart-page__item item-cart">
    <div class="item-cart__image"><img :src="product.image" alt=""></div>
    <div class="item-cart__row">
      <div class="item-cart__info">
        <div class="item-cart__title">{{ product.title }}</div>
        <div class="item-cart__num"><span>Numer kategorii: </span>{{ product.categoryNum }}</div>
        <div class="item-cart__cod"><span>Kod EAN: </span>{{ product.cod }}</div>
        <div class="item-cart__sale"><span>Rabat</span>{{ product.sale + "%" }}</div>
      </div>
      <div class="item-cart__quantity quantity-product">
        <span>-</span>
        <div class="quantity-product__input">
          <input type="text" value="1">
        </div>
        <span>+</span>
      </div>
      <div class="item-cart__price">{{ product.price }}<span>PLN</span></div>
    </div>
    <div class="item-cart__trash"><img src="@/assets/img/main/icons/trash.png" alt=""></div>
  </div>
</template>
<script>
export default {
  props: {
    // productAbout: {
    //   type: Array,
    // }
  }
}
</script>
