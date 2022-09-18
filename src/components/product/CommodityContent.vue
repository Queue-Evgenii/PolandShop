<template>
  <div class="commodity-page__content content-commodity">
    <div class="content-commodity__title">Profil aluminiowy uniwersalny bezuszczelkowy</div>
    <div class="content-commodity__offer">Bezpłatna dostawa z 500 Pln</div>
    <div class="content-commodity__info">
      <div class="content-commodity__info-row"><span>Numer kategorii: </span>26</div>
      <div class="content-commodity__info-row"><span>Kod EAN: </span>0723314791448</div>
    </div>
    <div class="content-commodity__price flex">
      <div class="content-commodity__new-price flex">75<span>PLN ZA M.B.</span></div>
      <div class="content-commodity__sale-price">
        <div class="content-commodity__first-price flex">95<span>PLN ZA M.B.</span></div>
        <div class="content-commodity__price-info"><span>do -7% </span>w hurcie, sprawdz cennik</div>
      </div>
    </div>
    <div class="content-commodity__actions actions-commodity">
      <div class="actions-commodity__row">
        <div class="actions-commodity__quantity quantity-product">
          <span>-</span>
          <div class="quantity-product__input">
            <input type="text" value="1">
          </div>
          <span>+</span>
        </div>
        <div class="actions-commodity__token flex">Cod Kupon: _ _  _ _   _ _  _ _ </div>
      </div>
      <div class="actions-commodity__status flex yes"><span>W magazynie - </span>Są dostępne</div>
      <div class="actions-commodity__row">
        <button type="button" class="actions-commodity__cart button"><span>Dodaj do koszyka</span></button>
        <button type="button" class="actions-commodity__buy button"><span>Kup w 1 kliknięciu</span></button>
      </div>
      <div class="actions-commodity__row">
        <button type="button" class="actions-commodity__favorite flex">Dodaj do uratowanego</button>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
  .quantity-product {
    display flex
    align-items center
    span{
      display inline-block
      font-size 32px
      color: #3D3D3D;
      padding 15px
      cursor: pointer
      &:hover{
        color: #FF0031;
      }
    }
    &__input {
      flex: 0 0 70px
      border 1px dashed #000
      input{
        background transparent
        padding: 5px 15px
        width 70px
        font-size 24px
        color: #3D3D3D;
      }
    }
  }
  .content-commodity{
    padding 0 20px
    &__title{
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      color: #3D3D3D;
      margin-bottom 30px
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
    }
    &__token{
      padding 5px 10px
      border 1px solid #FF0031
      border-radius: 3px
      color: #3D3D3D;
      font-weight 700
      &::before{
        content: ''
        display inline-block
        width 30px
        height 30px
        background url('@/assets/img/product/icon/token.png') 0 0 no-repeat
        margin-right 10px
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
  }
</style>