<template>
  <div class="commodity-page__content content-commodity">
    <div class="content-commodity__title">{{ productItem.name }}</div>
    <!-- <div class="content-commodity__offer">{{ productItem.offer }}</div> -->
    <div class="content-commodity__info">
      <div class="content-commodity__info-row"><span>Numer kategorii: </span>{{ productItem.category_id }}</div>
      <div class="content-commodity__info-row"><span>Kod EAN: </span>{{ productItem.code }}</div>
    </div>
    <div class="content-commodity__price flex">
      <div class="content-commodity__new-price flex">{{ productItem.price }}<span>PLN ZA M.B.</span></div>
      <div class="content-commodity__sale-price">
        <div v-if="productItem.first_price" class="content-commodity__first-price flex">{{ productItem.first_price }}<span>PLN ZA M.B.</span></div>
        <div v-if="productItem.first_price" class="content-commodity__price-info"><span>do -7% </span>w hurcie, sprawdz cennik</div>
      </div>
    </div>
    <div class="content-commodity__actions actions-commodity">
      <div class="actions-commodity__row">
        <div class="actions-commodity__quantity quantity-product">
          <span @click="decrement()">-</span>
          <div class="quantity-product__input">
            <input type="text" :value="this.getQuantity" ref="productInput">
          </div>
          <span @click="increment()">+</span>
        </div>
        <div class="actions-commodity__token flex"><span>Cod Kupon:</span><input type="text" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"></div>
      </div>
      <div class="actions-commodity__status flex yes" v-if="productItem.status"><span>W magazynie - </span>{{ productItem.labelMark }}</div>
      <div class="actions-commodity__status flex no" v-else><span>W magazynie - </span>{{ productItem.labelMark }}</div>
      <div class="actions-commodity__row">
        <button type="button" class="actions-commodity__cart button" @click="addToCart(productItem);showAlert()"><span>Dodaj do koszyka</span></button>
        <button type="button" class="actions-commodity__buy button" @click="openAlertPopup"><span>Kup w 1 kliknięciu</span></button>
      </div>
      <div class="actions-commodity__row">
        <button type="button" class="actions-commodity__favorite flex">Dodaj do uratowanego</button>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
  .content-commodity{
    padding 0 20px
    &__title{
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      color: #3D3D3D;
      margin-bottom 30px
      @media(max-width: 375px) {
        font-size 25px
        margin-bottom 20px
      }
    }
    &__offer{
      display inline-block
      padding 10px 20px
      background: linear-gradient(270deg, rgba(254, 231, 255, 0.52) 3.12%, rgba(255, 168, 173, 0.52) 100%);
      color: #3D3D3D;
      border-radius: 4px
      margin-bottom 20px
    }
    &__info{
      margin -12px 0
    }
    &__info-row{
      font-size 14px
      line-height 16px
      color: #3D3D3D
      padding 6px 0
      span{
        font-weight 700
      }
    }
    &__price{
      margin 20px 0
      gap: 15px
      @media(max-width: 620px){
        flex-direction: column-reverse
        align-items start
      }
    }
    &__sale-price{

    }
    &__new-price{
      font-weight: 700;
      line-height: 57px;
      font-size 50px
      color: #3D3D3D
      gap: 15px
      span{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display inline-block
        width 80px
      }
      @media(max-width: 375px) {
        font-size 40px
        line-height 40px
        span{
          font-size 18px
        }
      }
    }
    &__first-price{
      font-weight: 700;
      font-size: 36px;
      line-height: 41px;
      color: #8B8B8B;
      gap: 15px
      padding 0 15px
      position relative
      &::after{
        content: ''
        position absolute
        width 205px
        height 2px
        background-color #FF0031;
        left 0
        transform: rotate(-2deg)
      }
      span{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
      }
      @media(max-width: 375px) {
        font-size 30px
        line-height 20px
        span{
          font-size 16px
        }
      }
    }
    &__price-info{
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      padding 0 15px
      span{
        color: #FF0031;
      }
    }
  }
  .actions-commodity{
    margin -26px 0
    &__row{
      padding 25px 0
      display flex
      align-items center
      column-gap: 20px
      row-gap: 20px
      &:last-child{
        padding-top 0
      }
      @media(max-width: 620px){
        flex-wrap: wrap
      }
    }
    &__token{
      padding 5px 10px
      border 1px solid #FF0031
      border-radius: 3px
      color: #3D3D3D;
      font-weight 700;
      &::before{
        content: ''
        display inline-block
        width 30px
        height 30px
        background url('@/assets/img/product/icon/token.png') 0 0 no-repeat
        margin-right 10px
      }
      input{
        padding 2px 10px
        margin-left 5px
        height 100%
        max-width 155px
        background-color transparent
        font-size 18px
        transition: all 0.5s ease
        letter-spacing: 4px
        &:focus{
          box-shadow: 0.2px 0.2px 5px rgba(#000, 0.2)
        }
      }
    }
    &__status{
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #FF0031;
      column-gap: 10px
      span{
        font-weight 700
      }
      &::before{
        content ''
        display inline-block
        width 26px
        height 26px
      }
    }
    &__status.yes{
      color: #FF0031;
      &::before{
        background url('@/assets/img/product/icon/true.png') 0 0 no-repeat
      }
    }
    &__status.no{
      color: #000;
      &::before{
        background url('@/assets/img/product/icon/false.png') 0 0 no-repeat
      }
    }
    &__buy{
      background-color #fff
      border 1px solid #FF0031
      span{
        color #FF0031
      }
      &:hover{
        background-color #FF0031
        span{
          color #fff
        }
      }
    }
    &__favorite{
      color: #3D3D3D;
      column-gap: 15px
      font-size 18px
      &::before{
        content: ''
        display inline-block
        width 28px
        height 28px
        background url('@/assets/img/main/icons/main-favorite.png') 0 0 no-repeat
      }
      &:hover{
        color: #FF0031
        &::before{
          background url('@/assets/img/main/icons/favorite-on-hover.png') 0 0 no-repeat
        }
      }
    }
    @media(max-width: 620px){
      &__buy,
      &__cart{
        width 100%
      }
    }
  }
  .popup{
    .content-commodity{
      max-width: 260px
      padding 0
      right 0
    }
    .content-commodity__title{
      position absolute
      top 40px
    }
    .content-commodity__info,
    .content-commodity__offer,
    .content-commodity__price-info,
    .actions-commodity__status,
    .actions-commodity__buy,{
      display none
    }
    .actions-commodity__row{
      &:first-child,
      &:last-child{
        display none
      }
    }
    .actions-commodity__cart{
      width 200px
      min-width 0 !important
      bottom 55px
      @media(max-width: 470px){
        bottom 35px
        left 50px
      }
    }
    .content-commodity__price{
      flex-direction: column-reverse
      width 200px
      bottom 100px
      @media(max-width: 1590px){
        bottom 30px
        left 50px
        flex-direction row
      }
      @media(max-width: 790px){
        .content-commodity__sale-price{
          display none
        }
      }
      @media(max-width: 470px){
        bottom 70px
      }
    }
    .actions-commodity__cart,
    .content-commodity__price{
      position absolute
      right 50px
    }
  }
</style>
<script>
  export default {
    props: {
      productItem: {
        type: Object,
        required: true,
      }
    },
    methods: {
      increment () {
        this.$refs.productInput.value++
      },
      decrement () {
        if(this.$refs.productInput.value>1){
          this.$refs.productInput.value--
        }
      },
      addToCart (product) {
        if(this.$store.state.cartList.find(item => item.id === product.id)){
          const item = this.$store.state.cartList.find(item => item.id === product.id)
          item.quantity = this.$refs.productInput.value
        } else {
          this.$store.state.cartList.push(product)
          const item = this.$store.state.cartList.find(item => item.id === product.id)
          item.quantity = this.$refs.productInput.value
        }
        console.log(product.quantity)
      },
      showAlert() {
        const block = document.querySelector('.access-alert__container')
        block.classList.add('show-access-alert')
        setTimeout(() => block.classList.remove('show-access-alert'), 1000);
      },
      openAlertPopup () {
        this.$emit('openAlertPopup', this.$refs.productInput.value)
      },
    },
    computed: {
      getQuantity () {
        if (!this.$store.state.cartList.find(item => item.id === this.productItem.id)) {
          return this.productItem.quantity
        } else {
          const item = this.$store.state.cartList.find(item => item.id === this.productItem.id)
          console.log(item)
          return item.quantity
        }
      }
    }
  }
</script>
