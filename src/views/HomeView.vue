<template>
  <div class="home home-page">
    <layout-default>
      <main class="main">
        <div class="great">
          <div class="container">
            <div class="great__content">
              <aside class="great__sidebar">
                <aside-sidebar :asideItems="asideItems" />
              </aside>
              <div class="great__sliders">
                <main-slider :mainSlides="mainSlides" />
                <sub-slider :subSlides="subSlides" />
              </div>
            </div>
          </div>
        </div>
        <home-catalogue :mainProducts="mainProducts" />
        <recent-products :mainProducts="mainProducts" />
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
      asideItems: [
        {
          id: 1,
          label: 'Akcesoria do sufitów napinanych',
          asideSubItems: [
            {
              id: 1,
              title: 'Profile',
              href: '#'
            },
            {
              id: 2,
              title: 'Listwa wykończeniowa',
              href: '#'
            },
            {
              id: 3,
              title: 'Platformy',
              href: '#'
            },
            {
              id: 4,
              title: 'Termo pierścienie',
              href: '#'
            },
            {
              id: 5,
              title: 'Termo kwadraty',
              href: '#'
            },
            {
              id: 6,
              title: 'Świecące szpilki',
              href: '#'
            },
            {
              id: 7,
              title: 'Katalogi',
              href: '#'
            },
            {
              id: 8,
              title: 'Pozostałe',
              href: '#'
            }
          ]
        },
        {
          id: 2,
          label: 'Folia do sufitów napinanych',
          asideSubItems: [
            {
              id: 1,
              title: 'Termo kwadraty',
              href: '#'
            },
            {
              id: 2,
              title: 'Listwa wykończeniowa',
              href: '#'
            },
            {
              id: 3,
              title: 'Platformy',
              href: '#'
            },
            {
              id: 4,
              title: 'Termo pierścienie',
              href: '#'
            },
            {
              id: 5,
              title: 'Profile',
              href: '#'
            },
            {
              id: 6,
              title: 'Katalogi',
              href: '#'
            },
            {
              id: 7,
              title: 'Pozostałe',
              href: '#'
            },
            {
              id: 8,
              title: 'Świecące szpilki',
              href: '#'
            }
          ]
        },
        {
          id: 3,
          label: 'Oprawy sufitowe',
          asideSubItems: [
            {
              id: 1,
              title: 'Profile',
              href: '#'
            },
            {
              id: 2,
              title: 'Listwa wykończeniowa',
              href: '#'
            },
            {
              id: 3,
              title: 'Platformy',
              href: '#'
            },
            {
              id: 4,
              title: 'Termo pierścienie',
              href: '#'
            },
            {
              id: 5,
              title: 'Termo kwadraty',
              href: '#'
            },
            {
              id: 6,
              title: 'Świecące szpilki',
              href: '#'
            },
            {
              id: 7,
              title: 'Katalogi',
              href: '#'
            },
            {
              id: 8,
              title: 'Pozostałe',
              href: '#'
            }
          ]
        },
        {
          id: 4,
          label: 'LED akcesoria',
          asideSubItems: [
            {
              id: 1,
              title: 'Profile',
              href: '#'
            },
            {
              id: 2,
              title: 'Listwa wykończeniowa',
              href: '#'
            },
            {
              id: 3,
              title: 'Platformy',
              href: '#'
            },
            {
              id: 4,
              title: 'Termo pierścienie',
              href: '#'
            },
            {
              id: 5,
              title: 'Termo kwadraty',
              href: '#'
            },
            {
              id: 6,
              title: 'Świecące szpilki',
              href: '#'
            },
            {
              id: 7,
              title: 'Katalogi',
              href: '#'
            },
            {
              id: 8,
              title: 'Pozostałe',
              href: '#'
            }
          ]
        },
        {
          id: 5,
          label: 'Elektryka i akcesoria',
          asideSubItems: [
            {
              id: 1,
              title: 'Termo kwadraty',
              href: '#'
            },
            {
              id: 2,
              title: 'Listwa wykończeniowa',
              href: '#'
            },
            {
              id: 3,
              title: 'Platformy',
              href: '#'
            },
            {
              id: 4,
              title: 'Termo pierścienie',
              href: '#'
            },
            {
              id: 5,
              title: 'Profile',
              href: '#'
            },
            {
              id: 6,
              title: 'Katalogi',
              href: '#'
            },
            {
              id: 7,
              title: 'Pozostałe',
              href: '#'
            },
            {
              id: 8,
              title: 'Świecące szpilki',
              href: '#'
            }
          ]
        }
      ],
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
      subSlides: [
        {
          id: 1,
          label: 'Akcesoria do sufitów napinanych',
          image: require('@/assets/img/main/slider/subslide-bg.png')
        },
        {
          id: 2,
          label: 'Folia do sufitów napinanych',
          image: require('@/assets/img/main/slider/subslide-bg.png')
        },
        {
          id: 3,
          label: 'Akcesoria do sufitów napinanych',
          image: require('@/assets/img/main/slider/subslide-bg.png')
        },
        {
          id: 4,
          label: 'Polia do sufitów napinanych',
          image: require('@/assets/img/main/slider/subslide-bg.png')
        },
        {
          id: 5,
          label: 'polia do sufitów napinanych',
          image: require('@/assets/img/main/slider/subslide-bg.png')
        }
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
