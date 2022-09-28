<template>
  <div class="payment">
    <layout-default>
      <main class="page">
        <div class="page__payment payment-page">
          <div class="payment-page__container container">
            <div class="payment-page__content">
              <div class="payment-page__title">Zapłata za towary</div>
              <div class="payment-page__columns">
                <payment-form />
                <div class="payment-page__preview preview-payment">
                  <div class="preview-payment__content">
                    <div class="preview-payment__row flex">
                      <div class="preview-payment__title">Podsumowanie zamowienia</div>
                      <div class="preview-payment__qtty">
                        <img src="@/assets/img/header/icon/cart.png" alt="">
                        {{ productPreview.length }}
                        <span>produkty</span>
                      </div>
                    </div>
                    <small-product :Items="productPreview" />
                    <div class="preview-payment__delivery-price flex">
                      <span class="preview-payment__label">Koszt przesyłki</span>
                      <span>5 PLN</span>
                    </div>
                    <div class="preview-payment__total-price flex">
                      <span class="preview-payment__label">Całkowity</span>
                      <span>655 PLN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <page-ads />
      </main>
    </layout-default>
  </div>
</template>
<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import PaymentForm from '@/components/payment/PaymentForm'
import SmallProduct from '@/components/SmallProduct'
import PageAds from '@/components/PageAds.vue'
export default {
  name: 'CatalogView',
  layouts: 'default',
  components: {
    LayoutDefault,
    PaymentForm,
    SmallProduct,
    PageAds,
  },
  data() {
    return {
      productPreview: [
        {
          id: 1,
          image: require('@/assets/img/products/product-1.png'),
          title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: '500',
          quantity: '3',
        },
        {
          id: 2,
          image: require('@/assets/img/products/product-2.png'),
          title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
          price: '150',
          quantity: '1',
        },
      ],
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
    }
  },
}
</script>
<style lang="stylus">
  .payment{
    color: #3D3D3D;
  }
  .payment-page{
    &__title{
      font-size: 30px;
      line-height: 34px;
      text-align center
      padding 70px 0
    }
    &__columns{
      display flex
      justify-content space-around
    }
    &__content{
      margin-bottom 150px
    }
  }
  .payment-page__preview {
}
.preview-payment {
  position relative
  @media(max-width: 992px){
    display none
  }
  &__content {
    position sticky;
    top: 10px
    background: linear-gradient(179.99deg, rgba(217, 217, 217, 0) -53.9%, rgba(255, 0, 0, 0.2) 280.91%);
    padding 25px 15px
    max-width: 375px
    transition: all 0.5s ease 0s
    &:hover{
      box-shadow: 1px 1px 30px rgba(#FF0031,0.3)
    }
  }
  &__row {
    justify-content space-between
    gap 10px
    font-weight: 700;
  }
  &__title {
  }
  &__qtty {
  }
  &__delivery-price {
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    justify-content space-between
    gap: 10px
    padding 15px 0
  }
  &__label {
  }
  &__total-price {
    font-weight: 700;
    justify-content space-between
    gap: 10px
    padding 17px 0
    border-top 1px solid rgba(#8B8B8B, 0.3)
  }
}
</style>