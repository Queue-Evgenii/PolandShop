<template>
  <div class="catalog-products products">
    <div class="products__title">Akcesoria do sufitów napinanych</div>
    <div class="catalog-products__settings settings-products">
      <div class="settings-products__menu flex">
        <button type="button" class="settings-products__filters" @click="filtersToggle">Filtr</button>
        <button type="button" class="settings-products__order">Cena rosnąco</button>
        <div class="settings-products__view flex">
          <button type="button" class="settings-products__view-columns" ref="column" @click="filtersLayout"><img src="@/assets/img/catalog/columns.png" alt=""></button>
          <button type="button" class="settings-products__view-rows" @click="filtersLayout"><img src="@/assets/img/catalog/rows.png" alt=""></button>
        </div>
      </div>
      <div class="settings-products__body" ref="filters">
        <slot></slot>
      </div>
    </div>
     <div class="products__items" ref="products">
      <div class="products__item item-product" ref="product" v-for="product in catalogProducts" :key="product.id">
        <div class="item-product__body flex">
          <div class="item-product__info flex">
            <router-link :to="product.href" class="item-product__image">
              <img :src="product.image" alt="">
              <span v-if="product.mark">{{ product.mark }}</span></router-link>
              <div class="item-product__info-text">
                <router-link :to="product.href" class="item-product__label">{{ product.label }}</router-link>
                <div class="item-product__price">{{ product.price }}</div>
              </div>
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
    },
    filtersToggle (e) {
      const title = e.target
      const list = this.$refs.filters
      title.classList.toggle('active')
      list.classList.toggle('active')
    },
    filtersLayout (e) {
      const column = this.$refs.column,
            row = column.nextElementSibling,
            products = this.$refs.products,
            productItems = this.$refs.product
      if (column == e.target) {
        for (let index = 0; index < productItems.length; index++) {
          const productItem = productItems[index];
          productItem.classList.remove('item-product-row')
        }
        products.classList.remove('products-items-row')
      } else if (row == e.target) {
        for (let index = 0; index < productItems.length; index++) {
          const productItem = productItems[index];
          productItem.classList.add('item-product-row')
        }
        products.classList.add('products-items-row')
      }
    }
  },
}
// .products-items-row
// .item-product-row
</script>
<style lang="stylus">
  .settings-products {
    @media(min-width: 1201px){
      display none
    }
    position relative
    &__menu {
      padding 50px 0 20px 0
      justify-content space-between
      gap: 20px
    }
    &__body {
    }
    &__filters,
    &__order{
      padding 16px 5px
      border: 1px solid #000000;
      font-size: 28px;
      line-height: 16px;
      border-radius: 6px
      color: #000000;
      @media(max-width: 560px){
        border-radius 3px
        font-size 14px
        padding 12px 5px
      }
    }
    &__filters{
      width 180px
      @media(max-width: 560px){
        width 100px
      }
      &.active{
        background-color #fff  
        color: #FF0031;
      }
    }
    &__order{
      width 300px
      @media(max-width: 560px){
        width 147px
      }
    }
    &__view{
      margin 0 -20px 0 0
      button{
        display inline-block
        padding 0 20px
      }
      img{
        position relative
        z-index -1
      }
    }
    &__view-columns{
      border-right: 1px solid #000000;
    }
  }
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
    max-width 466px
    width 100%
    margin 0 auto
    position relative
    z-index 1
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
      @media(max-width: 420px) {
        a{
          font-size 24px
        }
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
      // width 22.5px
      // height 2px
      width 30%
      height 2.666%
      background-color #000
    }
    &::before{
      transform rotate(45deg)
      // top: 28.5px
      // left: 28.5px
      top 38%
      left 38%
    }
    &::after{
      transform rotate(-45deg)
      // bottom: 28.5px
      // left: 28.5px
      bottom 38%
      left 38%
    }
    a{
      font-size 0
      position absolute
      width 100%
      height 100%
      z-index 2
    }
    @media(max-width: 420px) {
      width 50px
      height 50px
    }
  }
  .paginate-products__prev{
    transform rotate(180deg)
  }
  .item-product__info-text{
    display flex
    align-items center
    flex-wrap wrap
    gap: 20px
  }
    .products-items-row{
      grid-template-columns: repeat(1, 1fr)
    }
    .item-product-row .item-product__body{
      flex-direction: row
      .item-product__image{
        flex 0 0 200px
        @media(max-width: 669px){
          flex: 0 0 100px !important
          height 100px
        }
      }
      @media(max-width: 669px){
        flex-direction: column
      }
    }
    .item-product-row .item-product__info{
      flex-direction: row
      margin-right 60px
      @media(max-width: 669px){
        margin-right 0
      }
      .item-product__info-text{
        display flex
        align-items center
        flex-wrap wrap
        gap: 20px
        position absolute
        left 250px
        right 30px
        top 80px
        @media(max-width: 768px){
          top 60px
        }
        @media(max-width: 669px){
          left 150px
          top 50px
        }
      }
      .item-product__price{
        width unset
      }
    }
    .item-product-row .item-product__actions{
      position absolute
      left 250px
      right 30px
      bottom 60px
      // align-self end
      // flex-direction: column-reverse
      // row-gap: 10px
      // align-items end
      // height 120px
      justify-content space-between
      width unset
      @media(max-width: 768px){
        bottom 30px
      }
      @media(max-width: 669px){
        position relative
        top 0
        left 0
        width 100%
      }
    }
</style>