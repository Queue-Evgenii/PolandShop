<template>
  <div class="home home-page">
    <layout-default>
      <main class="main">
        <div class="great">
          <div class="container">
            <div class="great__content">
              <aside class="great__sidebar"><aside-sidebar /></aside>
              <div class="great__sliders">
                <main-slider />
                <sub-slider />
              </div>
            </div>
          </div>
        </div>
        <home-catalogue />
        <recent-products />
        <page-ads />
      </main>
    </layout-default>
  </div>
</template>
<style lang="stylus">
  .great{
    &__content{
    display flex
    column-gap: 60px
    }
    &__sidebar{
      flex: 0 0 350px
    }
    &__sliders{
      max-width: 1500px
      min-width: 0
      flex: 1 1 1500px
      display flex
      flex-wrap wrap
    }
    @media(max-width: 1200px){
      &__content{
        flex-wrap wrap
      }
      &__sliders{
        order: 0
        flex-basis: 100%
      }
      &__sidebar{
        order: 1
        flex-basis: 100%
      }
    }
  }
</style>
<script>
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
  data () {
    return {
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
  }
}
</script>
