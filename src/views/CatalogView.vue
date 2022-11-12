<template>
  <div class="wrapper">
    <layout-default>
      <main class="page">
        <div class="page__catalog catalog-page">
          <div class="catalog-page__container container">
            <aside-sidebar :asideItems="categoryItems " v-if="!SidebarWidth" />
            <div class="catalog-page__row row">
              <aside class="catalog-page__sidebar sidebar">
                <aside-sidebar :asideItems="categoryItems " v-if="SidebarWidth" />
                <aside-filter :filterItems="filterItems" v-if="SidebarWidth" />
              </aside>
              <div class="catalog-page__content content">
                <div class="catalog-page__slider">
                  <sub-slider :subSlides="categoryItems" />
                </div>
                <div class="catalog-page__products">
                  <catalog-products :catalogProducts="catalogList" :productsLabel="productsLabel" > 
                    <aside-filter :filterItems="filterItems" v-if="!SidebarWidth" />
                  </catalog-products>
                </div>
              </div>
            </div>
          </div>
        </div>
        <recent-products  v-if="recentList.length !== 0" :recentProducts="recentList"/>
        <page-ads />
      </main>
    </layout-default>
  </div>
</template>
<style lang="stylus">
</style>
<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
import SubSlider from '@/components/SubSlider'
import AsideFilter from '@/components/catalog/AsideFilter'
import CatalogProducts from '@/components/catalog/CatalogProducts'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
export default {
  name: 'CatalogView',
  layouts: 'default',
  created () {
    this.categoryItems = this.categoryList;
    this.fetchCatalogList();
    this.fetchCategoryItem()
  },
  components: {
    LayoutDefault,
    AsideSidebar,
    AsideFilter,
    SubSlider,
    CatalogProducts,
    RecentProducts,
    PageAds,
  },
  data () {
    return {
      catalogId: 1,
      asideItems: [],
      subSlides: [],
      filterItems: [
        {
          name: 'Rodzaj produktu',
          id: 1,
          filterInputs: [
            {
              label: 'Profil',
              id: 1,
              for: '1-1'
            },
            {
              label: 'Listwa wykończeniowa',
              id: 2,
              for: '1-2'
            },
            {
              label: 'Termo pierścienie',
              id: 3,
              for: '1-3'
            },
          ]
        },
        {
          name: 'Rodzaj produktu',
          id: 2,
          filterInputs: [
            {
              label: 'Listwa wykończeniowa',
              id: 1,
              for: '2-1'
            },
            {
              label: 'Profil',
              id: 2,
              for: '2-2'
            },
            {
              label: 'Termo pierścienie',
              id: 3,
              for: '2-3'
            },
          ]
        },
        {
          name: 'Rodzaj produktu',
          id: 3,
          filterInputs: [
            {
              label: 'Listwa wykończeniowa',
              id: 1,
              for: '3-1'
            },
            {
              label: 'Profil',
              id: 2,
              for: '3-2'
            },
            {
              label: 'Termo pierścienie',
              id: 3,
              for: '3-3'
            },
          ]
        },
        {
          name: 'Rodzaj produktu',
          id: 4,
          filterInputs: [
            {
              label: 'Listwa wykończeniowa',
              id: 1,
              for: '4-1'
            },
            {
              label: 'Profil',
              id: 2,
              for: '4-2'
            },
            {
              label: 'Termo pierścienie',
              id: 3,
              for: '4-3'
            },
          ]
        },
        {
          name: 'Rodzaj produktu',
          id: 5,
          filterInputs: [
            {
              label: 'Listwa wykończeniowa',
              id: 1,
              for: '5-1'
            },
            {
              label: 'Profil',
              id: 2,
              for: '5-2'
            },
            {
              label: 'Termo pierścienie',
              id: 3,
              for: '5-3'
            },
          ]
        },
      ],
      catalogList: [],
      categoryItem: {},
      categoryItems: [],
    }
  },
  computed: {
    currentCatId() {
      return parseInt(this.$route.params.id) || 1;
    },
    productList () {
      return this.$store.getters.productList;
    },
    categoryList () {
      return this.$store.getters.categoryList;
    },
    productsLabel() {
      return this.categoryItem.label;
    },
    recentList () {
      return this.$store.getters.recentList;
    },
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
  watch: {
    currentCatId() {
      setTimeout(() => {
        this.fetchCatalogList()
        this.fetchCategoryItem()
      }, 0)
    }
  },
  methods: {
    fetchCatalogList () {
      this.catalogList = this.productList.filter(item => item.category === this.currentCatId);
    },
    fetchCategoryItem() {
      this.categoryItem = this.categoryItems.find(item => item.id == this.currentCatId);
      
    }
  },
}
</script>