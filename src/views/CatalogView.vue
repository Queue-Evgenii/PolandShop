<template>
  <div class="wrapper">
    <layout-default>
      <main class="page">
        <div class="page__catalog catalog-page">
          <div class="catalog-page__container container">
            <aside-sidebar v-if="!SidebarWidth" />
            <div class="catalog-page__row row">
              <aside class="catalog-page__sidebar sidebar">
                <aside-sidebar v-if="SidebarWidth" />
                <aside-filter :filterItems="filterItems" v-if="SidebarWidth" />
              </aside>
              <div class="catalog-page__content content">
                <div class="catalog-page__slider">
                  <sub-slider :subSlides="categoryItems" />
                </div>
                <div class="catalog-page__products">
                  <catalog-products :catalogProducts="catalogProducts" :productsLabel="productsLabel" > 
                    <aside-filter :filterItems="filterItems" v-if="!SidebarWidth"></aside-filter>
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
      categoryItems: [],
      catalogProducts: [],
      productsLabel: '',
    }
  },
  computed: {
    currentCatId() {
      return parseInt(this.$route.params.id) || 1;
    },
    categoryList () {
      return this.$store.getters.categoryList;
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
        this.fetchProductsByCategoryId(this.currentCatId)
      }, 0)
    }
  },
  methods: {
    fetchProductsByCategoryId(id) {
      this.$store.dispatch('listProductsByIdCategory', id)
        .then(res => {
          this.catalogProducts = res.data.products
          this.productsLabel = res.data.name
        })
    }
  },
  mounted () {
    this.fetchProductsByCategoryId(this.currentCatId)
  }
}
</script>