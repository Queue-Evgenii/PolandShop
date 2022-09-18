<template>
  <div class="wrapper">
    <layout-default>
      <main class="page">
        <div class="page__product product-page">
          <div class="product-page__container container">
            <div class="product-page__row row">
              <aside class="product-page__sidebar sidebar">
                <aside-sidebar :asideItems="asideItems" v-if="SidebarWidth" />
              </aside>
              <div class="product-page__content content">
                <div class="product-page__commodity commodity-page">
                  <commodity-slider :commoditySlides="commoditySlides" />
                  <commodity-content />
                </div>
                <div class="product-page__info info-product">
                  <about-product />
                  <table-product :tableProductItems="tableProductItems" />
                  <gallery-product :commoditySlides="commoditySlides" />
                  <reviews-product :ReviewsProductItems="ReviewsProductItems" />
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
  .product-page {
    padding-bottom 70px
  }
  .commodity-page{
    padding 20px 0
    display flex
    gap: 20px
    &__images{
      max-width: 800px
      flex: 1 1 800px
    }
    &__content{
      flex: 0 0 550px
    }
    @media(min-width: 1201px)&&(max-width: 1460px){
      flex-wrap: wrap
      &__content{
        flex: 1 1 100%
      }
      &__images{
        max-width: 1200px
      }
    }
    @media(max-width: 992px){
      flex-wrap: wrap
      &__content{
        flex: 1 1 100%
      }
      &__images{
        max-width: 1200px
      }
    }
  }
  .info-product{
    &__title {
      font-weight 700
      font-size: 30px;
      line-height: 34px;
      color: #3D3D3D;
      margin-bottom 25px
    }
    &__block {
      width: 100%
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding 45px 55px
      background-color: #fff
      &:not(:last-child) {
        margin-bottom: 45px
      }
    }
  }
</style>
<script>
import subSlidesList from '@/mock/slider-category'
import sidebarCategoryList from '@/mock/sidebar-category'

import ReviewsProduct from '@/components/product/ReviewsProduct.vue'
import TableProduct from '@/components/product/TableProduct'
import GalleryProduct from '@/components/product/GalleryProduct'
import AboutProduct from '@/components/product/AboutProduct.vue'

import CommodityContent from '@/components/product/CommodityContent'
import CommoditySlider from '@/components/product/CommoditySlider'

import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
export default {
  name: 'CatalogView',
  layouts: 'default',
  created () {
    this.subSlides = subSlidesList
    this.asideItems =sidebarCategoryList
  },
  components: {
    LayoutDefault,
    AsideSidebar,
    RecentProducts,
    PageAds,
    CommoditySlider,
    CommodityContent,
    AboutProduct,
    TableProduct,
    GalleryProduct,
    ReviewsProduct
  },
  data () {
    return {
      asideItems: [],
      subSlides: [],
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
      commoditySlides: [
        {
          id: 1,
          image: require('@/assets/img/product/product-img-1.png')
        },
        {
          id: 2,
          image: require('@/assets/img/product/product-img-2.png')
        },
        {
          id: 3,
          image: require('@/assets/img/product/product-img-3.png')
        },
        {
          id: 4,
          image: require('@/assets/img/product/product-img-4.png')
        },
        
        {
          id: 5,
          image: require('@/assets/img/product/product-img-2.png')
        },
      ],
      tableProductItems: [
        {
          id: 1,
          th: "Waga:",
          td: "160 g/m.b."
        },
        {
          id: 2,
          th: "Możliwość włożenia uszczelki:",
          td: "Tak"
        },
        {
          id: 3,
          th: "Materiał:",
          td: "Biały"
        },
        {
          id: 4,
          th: "Długość:",
          td: "PCV"
        },
        {
          id: 5,
          th: "Waga:",
          td: "2,0 m"
        },
        {
          id: 6,
          th: "Waga:",
          td: "160 g/m.b."
        },
        {
          id: 7,
          th: "Waga:",
          td: "160 g/m.b."
        },
      ],
      ReviewsProductItems: [
        {
          id: 1,
          username: 'Tatiana',
          text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
        },
        {
          id: 2,
          username: 'Jewgienij',
          text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
        },
        {
          id: 3,
          username: 'Tatiana',
          text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
        },
        {
          id: 4,
          username: 'Jewgienij',
          text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
        },
        {
          id: 5,
          username: 'Tatiana',
          text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
        },
        {
          id: 6,
          username: 'Jewgienij',
          text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
        },
      ]
    }
  },
  computed: {
    SidebarWidth () {
      if (window.innerWidth <= 1200) {
        return false
      } else {
        return true
      }
    },
    MobileWidth () {
      if (window.innerWidth <= 768) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>