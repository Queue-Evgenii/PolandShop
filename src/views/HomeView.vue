<template>
  <div class="wrapper">
    <layout-default>
      <main class="page">
        <div class="home-page">
          <div class="home-page__container container">
            <div class="home-page__row row">
              <aside class="home-page__sidebar sidebar">
                <aside-sidebar :asideItems="categoryItems" />
              </aside>
              <div class="home-page__content content">
                <main-slider :mainSlides="mainSlides" />
                <sub-slider :subSlides="categoryItems " />
              </div>
            </div>
          </div>
        </div>
        <home-catalogue
          catalogId='1'
          :productItem1="productItem1"
          :categoryItems="categoryItems"
          @addToCart="addToCart"
        />
        <home-catalogue
          catalogId='2'
          :productItem1="productItem1"
          :categoryItems="categoryItems"
          @addToCart="addToCart"
        />
        <page-ads />
        <home-catalogue
          catalogId='3'
          :productItem1="productItem3"
          :categoryItems="categoryItems"
          @addToCart="addToCart"
        />
        <recent-products :mainProducts="mainProducts" />
        <page-ads />
      </main>
    </layout-default>
  </div>
</template>
<script>
// import sidebarCategoryList from '@/mock/sidebar-category'

import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
import MainSlider from '@/components/home/MainSlider'
import SubSlider from '@/components/SubSlider'
import HomeCatalogue from '@/components/home/HomeCatalogue'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
export default {
  name: 'HomeView',
  layouts: 'default',
  created () {
    this.categoryItems = this.categoryList;
    this.productItem1 = this.productList.filter(item => item.category === 1);
    this.productItem2 = this.productList.filter(item => item.category === 2);
    this.productItem3 = this.productList.filter(item => item.category === 3);
  },
  computed: {
    productList () {
      return this.$store.getters.productList;
    },
    categoryList () {
      return this.$store.getters.categoryList;
    },
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
      if(this.$store.state.cartList.find(item => item.id === product.id)){
        product.quantity += 1
      } else {
        this.$store.state.cartList.push(product)
        console.log(this.$store.state.cartList)
      }
      
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
