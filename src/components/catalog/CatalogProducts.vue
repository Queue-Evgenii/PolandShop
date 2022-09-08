<template>
  <div class="catalog-products products">
    <div class="products__title">Akcesoria do sufitów napinanych</div>
     <div class="products__items">
      <div class="products__item item-product" v-for="product in catalogProducts" :key="product.id">
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
    <div class="products__navi navi-products">
      <div class="navi-products__button"><button type="button">Załaduj jeszcze 10 produktów</button></div>
      <paginate 
        :page-count="10"
        :page-range="1"
        :container-class="'paginate-products'"
        :page-class="'paginate-products__number'"
        :prev-class="'paginate-products__prev'"
        :next-class="'paginate-products__next'"
        :break-view-text="'●'"
        :click-handler="clickCallback"
      ></paginate>
      <!-- <pagination v-model="page" :records="pagging.total" :per-page="pagging.perPage" @paginate="paginate" /> -->
    </div>
  </div>
</template>
<script>
  import Paginate from 'vuejs-paginate'
export default {
  props: {
    catalogProducts: {
      type: Array,
    }
  },
  components: {
    Paginate,
  },
  methods: {
    clickCallback (pageNum) {
      console.log(pageNum)
    }
  },
}
</script>
<style lang="stylus">
  .navi-products{
    display flex
    flex-direction column
    row-gap: 60px
    &__button{
      margin 0 auto
      padding 20px 10px
      text-align center
      width 280px
      border 2px solid #000
      border-radius 6px
    }
  }
  .paginate-products{
    display flex
    align-items center
    justify-content space-between
    width 466px
    margin 0 auto
    &__number{
      position relative
      width 37px
      height 37px
      border-radius 50%
      z-index 3
      display flex
      align-items center
      justify-content center
      a{
        font-size: 40px;
        line-height: 46px;
        color: #9E9B9B
      }
      &.active{
        background-color: #FF0031;
        a{
          color: #FFFFFF;
          font-size: 24px;
          line-height: 28px;
        }
      }
      &.disabled{
      }
    }
    
  }
  .paginate-products__next,
  .paginate-products__prev{
    width 75px
    height 75px
    background: rgb(255, 255, 255);
    border-radius 50%
    position relative
    z-index 3
    border: 1px solid #3D3D3D;
    opacity: 0.4
    &:hover{
      background: rgb(255, 255, 255);
      opacity: 0.9
    }
    &::before, &::after{
      content ''
      position absolute
      width 22.5px
      height 2px
      background-color #000
    }
    &::before{
      transform rotate(45deg)
      top: 28.5px
      left: 28.5px
    }
    &::after{
      transform rotate(-45deg)
      bottom: 28.5px
      left: 28.5px
    }
    a{
      font-size 0
      position absolute
      width 100%
      height 100%
      z-index 2
    }
  }
  .paginate-products__prev{
    transform rotate(180deg)
  }
</style>