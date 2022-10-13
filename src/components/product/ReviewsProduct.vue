<template>
  <div class="info-product__reviews reviews-product info-product__block">
    <div class="info-product__title">Opinie klientów:</div>
    <ul class="reviews-product__items">
      <li class="reviews-product__item" v-for="item in ReviewsProductItems" :key="item.id">
        <span class="reviews-product__username">{{item.username}}</span>
        <span class="reviews-product__rating"></span>
        <p class="reviews-product__text">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      ReviewsProductItems: {
        type: Array,
        required: true,
      }
    }
  }
</script>
<style lang="stylus">
  .reviews-product{
    &__items{
      overflow-y: scroll
      max-height 475px
      padding-right 15px
    }
    &__item{
      padding 55px 0
      &:first-child{
        padding-top 0
      }
      &:not(:last-child){
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      }
    }
    &__username{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px
      color: #3D3D3D;
      margin-bottom 30px
    }
    &__text{
      color: #3D3D3D;
    }
  }
</style>