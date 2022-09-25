<template>
  <div class="cart">
    <layout-default>
      <main class="page">
        <div class="page__cart cart-page">
          <div class="cart-page__container container">
            <div class="cart-page__content flex">
              <cart-component :productAbout="productAbout" />
              <div class="cart-page__present present-cart">
                <div class="present-cart__title flex">
                  <img src="@/assets/img/main/icons/present.png" alt="">
                  <span>Darmowy prezent do zakupu</span>
                </div>
                <ul class="present-cart__body">
                  <li class="present-cart__item" v-for="item in FreeToStoreItems" :key="item.id">
                    <div class="present-cart__image"><img :src="item.image" alt=""></div>
                    <div class="present-cart__info">
                      <div class="present-cart__label">{{ item.title }}</div>
                      <div class="present-cart__price">{{ item.price }}<span>PLN</span></div>
                      <div class="present-cart__quantity"><span>Ilość:</span>{{ item.quantity }}</div>
                    </div>
                  </li>
                </ul>
                <div class="present-cart__footer flex">
                  <button class="present-cart__button"><span>Dodaj do koszyka</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <recent-products :mainProducts="mainProducts" />
        <page-ads />
      </main>
    </layout-default>
  </div>
</template>
<style lang="stylus">
.cart-page {
  &__content {
    padding-top 70px
    justify-content space-between
    column-gap: 20px
    @media(max-width: 1340px) {
      flex-wrap: wrap
    }
  }
  &__items {
    flex: 1 1 1200px
    max-width: 1200px
  }
}
.present-cart {
  box-shadow: 0px 4px 50px rgba(255, 0, 49, 0.1);
  padding 20px
  max-width 375px
  border: 1px dashed #FF0031;
  border-radius 10px
  margin-bottom 30px
  transition: all 0.5s ease 0s
  &:hover{
    box-shadow: 1px 1px 30px rgba(#FF0031,0.3)
  }
  @media(max-width: 1340px) {
    width 100%
    max-width: none
  }
  &__title {
    font-weight 700
    color: #FF0031;
    img{
      margin-right 10px
    }
  }
  &__body {
    display flex
    flex-direction column
    row-gap: 40px
    padding 40px 0
    border-bottom 1px solid rgba(#8B8B8B, 0.3)
  }
  &__item {
    display grid
    grid-template-columns: 100px 1fr
    gap: 15px
  }
  &__image {
    width 100px
    height 100px
    position relative
    border-radius 10px;
    background #fff
    img{
      position absolute
      width 100%
      height 100%
      padding 25px 5px
    }
  }
  &__info {
    display flex
    flex-direction: column
    justify-content space-between
    gap: 10px
  }
  &__label{
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #3D3D3D;
  }
  &__price {
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    span{
      font-size 16px
      margin-left 5px
    }
  }
  &__quantity {
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    span{
      margin-right 5px
    }
  }
  &__footer {
    justify-content center
    padding-top 30px
  }
  &__button {
    width 215px
    padding 15px
    background-color: #FFFFFF;
    border: 1px solid #FF0031;
    transition: all 0.5s ease 0s
    &:hover{
      box-shadow: 1px 1px 30px rgba(#FF0031,0.3)
    }
  }
}
</style>
<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import CartComponent from '@/components/cart/CartComponent'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
export default {
  name: 'CatalogView',
  layouts: 'default',
  components: {
    LayoutDefault,
    CartComponent,
    RecentProducts,
    PageAds,
  },
  data() {
    return {
      productAbout: {
        image: require('@/assets/img/product/product-img-1.png'),
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
        offer: 'Bezpłatna dostawa z 500 Pln',
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        sale: "-10",
      },
      FreeToStoreItems: [
        {
          id: 1,
          title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          image: require('@/assets/img/product/product-img-1.png'),
          price: '0',
          quantity: '1'
        },
        {
          id: 2,
          title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          image: require('@/assets/img/product/product-img-1.png'),
          price: '0',
          quantity: '1'
        },
      ],
      mainProducts: [
        {
          id: 1,
          image: require('@/assets/img/products/product-1.png'),
          href: '#',
          mark: 'Najlepiej sprzedający się',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        },
        {
          id: 2,
          image: require('@/assets/img/products/product-2.png'),
          href: '#',
          mark: '',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        },
        {
          id: 3,
          image: require('@/assets/img/products/product-3.png'),
          href: '#',
          mark: 'Najlepiej sprzedający się',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        },
        {
          id: 4,
          image: require('@/assets/img/products/product-4.png'),
          href: '#',
          mark: '',
          label: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: 75
        }
      ],
    }
  },
}
</script>