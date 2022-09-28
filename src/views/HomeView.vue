<template>
  <div class="home">
    <layout-default>
      <main class="page">
        <div class="home-page">
          <div class="home-page__container container">
            <div class="home-page__row row">
              <aside class="home-page__sidebar sidebar">
                <aside-sidebar :asideItems="asideItems" />
              </aside>
              <div class="home-page__content content">
                <main-slider :mainSlides="mainSlides" />
                <sub-slider :subSlides="subSlides" />
              </div>
            </div>
          </div>
        </div>
        <home-catalogue :mainProducts="mainProducts" :productItem1="productItem1" @addToCart="addToCart" />
        <recent-products :mainProducts="mainProducts" />
        <page-ads />
      </main>
    </layout-default>
  </div>
</template>
<script>
import productList from '@/mock/productList'
import subSlidesList from '@/mock/slider-category'
import sidebarCategoryList from '@/mock/sidebar-category'
import cartList from '@/mock/cartList'

import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
import MainSlider from '@/components/home/MainSlider'
import SubSlider from '@/components/SubSlider'
import HomeCatalogue from '@/components/home/HomeCatalogue'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  layouts: 'default',
  created () {
    this.subSlides = subSlidesList
    this.asideItems =sidebarCategoryList
    this.productItem1 = productList.filter(item => item.category === 1)
  },
  data () {
    return {
      productItem1: null,
      asideItems: [],
      mainSlides: [
        {
          id: 1,
          url: '#',
          label: 'Dodaj do koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 2,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 3,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 4,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        }
      ],
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
    }
  },
  methods: {
    addToCart (product) {
      if(cartList.find(item => item.id === product.id)){
        console.log(1)
      } else {
        cartList.push(product)
      }
      console.log(cartList)
    }
  },
  components: {
    LayoutDefault,
    AsideSidebar,
    MainSlider,
    SubSlider,
    HomeCatalogue,
    RecentProducts,
    PageAds
  },
}
</script>
