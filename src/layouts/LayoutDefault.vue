<template>
  <main class="default">
    <header class="header">
      <div class="header__top top-header">
        <div class="top-header__container container">
          <div class="top-header__content flex">
            <nav class="menu">
              <button v-bind:class="{active: burgerActive}" @click="burgerActive = !burgerActive" type="button" class="menu__icon icon-menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div v-bind:class="{active: burgerActive}" class="menu__body"></div>
            </nav>
            <a class="top-header__logo"><img src="../assets/img/header/logo.png" alt=""></a>
            <div class="top-header__phones phones-header flex">
              <button @click="activePhones = !activePhones" type="button" class="phones-header__icon"><img src="../assets/img/header/icon/phone.png" alt=""></button>
              <div class="phones-header__items" v-bind:class="{active: activePhones}">
                <a href="tel:48729216186" class="phones-header__item hover-underline">+48 729 216 186</a>
                <a href="tel:48729856998" class="phones-header__item hover-underline">+48 729 856 998</a>
              </div>
            </div>
            <form class="top-header__search search-header flex">
              <button type="button" class="search-header__button"><img src="../assets/img/header/icon/search.png" alt=""></button>
              <input-header v-if="InputHeader" />
            </form>
            <div class="top-header__actions actions-header flex">
              <div class="actions-header__favorite actions-header__item flex">
                <a href="#" class="actions-header__link hover-underline">Uratowany</a>
                <a href="#" class="actions-header__favorite-icon"><span>0</span></a>
              </div>
              <div class="actions-header__cart actions-header__item flex">
                <a href="#" class="actions-header__link hover-underline">Moje zakupy</a>
                <a href="#" class="actions-header__cart-icon"><span>0</span></a>
              </div>
              <div class="actions-header__user actions-header__item flex">
                <a href="#" class="actions-header__link hover-underline">Obszar osobisty</a>
                <a href="#" class="actions-header__user-icon"></a>
              </div>
            </div>
            <input-header v-if="!InputHeader" />
          </div>
        </div>
      </div>
      <div class="header__bottom bottom-header">
        <div class="bottom-header__container container">
          <ul class="bottom-header__content flex">
            <li v-for="item in headerMenu" :key="item.id">
              <a class="hover-underline" :href="item.url">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <slot></slot>
  </main>
</template>
<style lang="stylus">
  .header {
    position: relative;
    z-index: 2;
    width 100%
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) -53.92%, rgba(255, 0, 0, 0.5) 512.5%);
    border-bottom 1px solid #8b8b8b
    &__top{
      border-top 1px solid #cacaca
      padding 10px 0
    }
    &__bottom{
      border-top 1px solid #8b8b8b
      padding 12px 0
    }
  }
  .top-header{
    &__container {
      overflow visible !important
    }
    &__content{
      justify-content space-between
      height 120px
      column-gap: 20px
      @media(max-width: 768px){
        min-height 70px
        column-gap: 5px
        row-gap: 15px
        flex-wrap: wrap
      }
    }
    &__logo{
      display block;
      flex: 0 0 100px;
      cursor pointer
      height 81px
      img{
        width: 100%
        height: 100%
      }
      @media(max-width: 768px){
      order: 2
      height 52px
      flex: 0 0 66px
    }
    }
  }
  .phones-header{
    flex: 0 1 480px
    column-gap: 20px
    position relative
    &__icon{
    }
    &__items{
      margin 0 -20px
      transition transform 0.5s ease 0s
    }
    &__item{
      display inline-block
      font-size: 16px;
      line-height: 18px;
      color: #3D3D3D;
      padding 4px 20px
      white-space nowrap
      &:not(:first-child){
        border-left: 1px solid #D9D9D9;
      }
    }
    @media(max-width: 1320px){
        &__item:last-child{
          border none
        }
        flex: 0 1 auto;
      }
    @media(max-width: 992px){
      &__items{
        transform scale(0)
        position absolute
        background-color #fff
        border-radius: 6px
        padding 10px
        margin 0
        width 170px
        text-align center
        top: 225%;
        left: -420%;
        box-shadow 1px 1px 5px #8b8b8b
        &::before {
          content: ''
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff
          top: -15%;
          position: absolute;
          left: 42%;
        }
        &.active {
          transform scale(1)
        }
      }
      &__item {
        &:not(:last-child) {
          margin-bottom 10px
        }
        padding 0
      }
    }
  }
  .search-header{
    height 50px
    max-width: 480px
    position relative
    flex 0 1 480px
    &__button{
      height 100%
      width 45px
      @media(min-width: 769px){
        position absolute
      }
    }
    &__input{
      display block
      position absolute
      height 100%
      left 0
      right 0
      width 100%
      min-width 188px
      background inherit
      padding 0 10px 0 60px
      border: 1px solid #8B8B8B;
      border-radius: 5px;
      &:focus{
        box-shadow 3px 3px 3px #8B8B8B;
    }
    }
    @media(max-width: 768px){
      flex: 0 0 auto
      &__input{
        position relative
        flex: 1 1 100%
        order 5
        height 50px
        padding 0 15px
        // transform translate(0, -1000%)
        // visibility hidden
        // overflow hidden
        // display none
        transition all 0.5s ease 0s
      }
    }
  }
  .actions-header{
    margin: 0 -35px 0 0
    justify-content space-between
    flex 0 1 500px
    @media(min-width: 993px){
      margin: 0 -25px 0 0
    }
    @media(max-width: 768px){
      margin: 0 -25px 0 0
      order: 3
      flex: 0 1 40%;
    }
    span{
        position absolute
        top -10px
        right -10px
        border-radius 50%
        height 24px
        width 24px
        display flex
        align-items center
        justify-content center
        border: 2px solid #FFFFFF;
        font-size 12px
    }
    a{
      display: inline-block
    }
    &__item{
      padding 0 25px
      flex 1 1 auto
      justify-content flex-end
      min-width: 110px
      column-gap: 10px
      @media(max-width: 992px){
        padding 0 35px
        flex: 0 0 26px
        max-width: 26px
        min-width 0
      }
      @media(max-width: 768px){
        padding 0 25px
      }
    }
    &__favorite-icon{
      background url('../assets/img/header/icon/favorite.png') center no-repeat
      height 26px
      flex 0 0 26px
      position relative
      span{
        background: linear-gradient(270deg, #FDE2FF 0%, #B8A8FF 100%);
      }
    }
    &__cart-icon{
      background url('../assets/img/header/icon/cart.png') center no-repeat
      height 26px
      flex 0 0 26px
      position relative
      span{
        background: linear-gradient(270deg, rgba(255, 142, 68, 0.24) 0%, rgba(249, 19, 98, 0.24) 50%, rgba(53, 18, 106, 0.24) 100%);
      }
    }
    &__user-icon{
      background url('../assets/img/header/icon/user.png') center no-repeat
      height 27px
      flex 0 0 26px
    }
    &__link{
      color: #3D3D3D;
      white-space nowrap
      @media(max-width: 992px){
        display none
        visibility hidden
      }
    }
  }
  .bottom-header{
    &__content{
      height 36px
      column-gap: 2.6%
      a{
        color: #3D3D3D;
        &:hover{
          color: #FF0031;
        }
      }
    }
    @media(max-width: 768px){
      //display none
    }
  }
  .menu{
  display: none;
  @media(max-width: 992px){
    display: block;
  }
  &__body{
    position: fixed;
    width: 85%;
    height: 100%;
    background: #ead9ea;
    z-index: 2;
    transition: all 0.5s ease 0s;
    top 0
    left: -100%;
    overflow: auto;
    padding: 100px 20px 70px 20px;
    &.active{
      left: 0;
    }
  }
  &__icon {
    display: none;
    @media(max-width: 992px){
      background: transparent;
      display: block;
      position: relative;
      flex: 0 0 28px;
      width: 28px;
      height: 20px;
      cursor: pointer;
      z-index: 10;
      background-color: transparent;
      span{
        transition: all 0.5s ease 0s;
        position: absolute;
        top: calc( 50% - 1.55px);
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #3d3d3d;
        &:first-child{
          top: 0;
        }
        &:last-child{
          top: auto;
          bottom: 0;
        }
      }
      &.active{
        span{
          transform: scale(0);
          &:first-child{
            transform: rotate(-45deg);
            top: calc(50% - 2px);
          }
          &:last-child{
            transform: rotate(45deg);
            bottom: calc(50% - 1px);
          }
        }
      }
    }
  }
}
</style>
<script>
import InputHeader from '@/components/InputHeader'
export default {
  data () {
    return {
      activePhones: false,
      burgerActive: false,
      inputHeader: true,
      headerMenu: [
        {
          id: 1,
          label: 'Kategorie',
          url: '#'
        },
        {
          id: 2,
          label: 'Promocje',
          url: '#'
        },
        {
          id: 3,
          label: 'Aktualności',
          url: '#'
        },
        {
          id: 4,
          label: 'Nowości',
          url: '#'
        },
        {
          id: 5,
          label: 'Dostawa',
          url: '#'
        },
        {
          id: 6,
          label: 'Dodaj opinię o sklepie',
          url: '#'
        },
        {
          id: 7,
          label: 'Kontakt',
          url: '#'
        }
      ]
    }
  },
  components: {
    InputHeader
  },
  methods: {
  },
  computed: {
    InputHeader () {
      if (window.innerWidth <= 768) {
        console.log('false')
        return false
      } else {
        console.log('true')
        return true
      }
    }
  }
}
</script>
