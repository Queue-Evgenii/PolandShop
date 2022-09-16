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
                <div class="product-page__commodity commodity-page flex">
                  <commodity-slider :commoditySlides="commoditySlides" />
                  <div class="commodity-page__body"></div>
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
</style>
<script>
import subSlidesList from '@/mock/slider-category'
import sidebarCategoryList from '@/mock/sidebar-category'

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
      ],
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