
<template>
  <div class="home">
    <layout-default>
      <main class="main">
        <div class="great">
          <div class="container">
            <div class="great__content">
              <aside class="great__sidebar sidebar">
                <h2 class="sidebar__title">Kategorie</h2>
                <ul class="sidebar__list">
                  <li class="sidebar__item" v-for="item in asideItems" :key="item.id">
                    <h3 class="sidebar__item-title">{{ item.label }}</h3>
                    <ul class="sidebar__sublist">
                      <li class="sidebar__subitem" v-for="link in item.asideSubItems" :key="link.id"><a :href="link.href">{{ link.title }}</a></li>
                    </ul>
                  </li>
                </ul>
              </aside>
              <div class="great__sliders">
                <div class="mainslider swiper swiper-container">
                  <div class="mainslider__wrapper swiper-wrapper">
                    <div class="mainslider__slide swiper-slide" v-for="item in mainSlides" :key="item.id">
                      <div class="mainslider__image"><img :src="item.image" alt=""></div>
                      <div class="mainslider__button"><a :href="item.url">{{ item.label }}</a></div>
                    </div>
                  </div>
                  <div class="mainslider__navs">
                    <button type='button' class="slider__navs-btn mainslider__navs-prev swiper-button-prev"></button>
                    <div class="mainslider__dotts swiper-pagination"></div>
                    <button type='button' class="slider__navs-btn mainslider__navs-next swiper-button-next"></button>
                  </div>
                </div>
                <div class="subslider swiper swiper-container">
                  <div class="subslider__wrapper swiper-wrapper">
                    <div class="subslider__slide swiper-slide" v-for="item in subSlides" :key="item.id">
                      <div class="subslider__image"><img :src="item.image" alt=""></div>
                      <p class="subslider__label">{{ item.label }}</p>
                    </div>
                  </div>
                  <button type="button" class="slider__navs-btn subslider-btn-next"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </layout-default>
  </div>
</template>
<style lang="stylus">
.sidebar{
  padding 50px 0
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FF0031;
    display block
    padding-bottom: 25px
    margin-bottom 15px
    border-bottom: 1px solid #888
  }
  &__item {
    display block
    padding 5px 0
  }
  &__item-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 50px;
    color: #3D3D3D;
    position relative
    &::before{
      content ''
      width 20px
      height 11px
      position absolute
      right 0
      top 43%
      background url('../assets/img/main/icons/arrow-bottom.png') center no-repeat
      transform rotate(-90deg)
      &._active{
        transform rotate(0)
      }
    }
  }
  &__subitem{
    padding 0 30px
    position relative
    display none
    &.active{
      display block
    }
    a{
      color: #3d3d3d
      font-size: 20px;
      line-height: 40px;
      &:hover{
        color: #FF0031;
      }
    }
    &:hover{
      &::before{
        content ''
        position absolute
        left 0
        top 33%
        width 20px
        height 14px
        background url('../assets/img/main/icons/arrow-on-hover.png') center no-repeat
      }
    }
  }
}
  .swiper{
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding: 0;
    position: relative;
    z-index: 5;
    width: 100%;
  }
  .swiper-wrapper{
    position: relative;
    width: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-slide{
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .great{
    &__content{
    display flex
    gap: 60px
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
  }
  .mainslider{
    height 567px
    &__image{
      max-width 1500px
      height 567px
      text-align center
      img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        // object-fit: cover;
        // position: absolute;
        // width: 100%;
        // height: 100%;
        // top: 0;
        // left: 0;
      }
    }
    &__slide{
      flex 1 0 100%
    }
    &__dotts{
      display: inline-flex;
      align-items: center;
      flex 0 0 auto
      align-self center
    }
    &__navs{
      position absolute
      z-index 5
      bottom 45px
      right 37px
      padding 0 30px
      display flex
      justify-content space-between
    }
    &__button{
      display inline-flex
      justify-content center
      align-items center
      position absolute
      width 198px
      height 58px
      bottom 138px
      left 164px
      background: #FFFFFF;
      border: 1px solid #000000;
      box-shadow: 0px 4px 100px #FF0000;
      border-radius: 5px;
      // text
      color: #FF0000;
      font-weight 700
    }
  }
  .slider__navs-btn{
    flex: 0 0 75px
    width 75px
    height 75px
    background: rgba(255, 255, 255, 0.7);
    border-radius 50%
    position relative
    &:first-child{
      transform rotate(180deg)
    }
    &::before, &::after{
      content ''
      position absolute
      width 22.5px
      height 2px
      background-color #000
    }
    &::before{
      transform rotate(45deg)
      top: 28.5px
      left: 28.5px
    }
    &::after{
      transform rotate(-45deg)
      bottom: 28.5px
      left: 28.5px
    }
  }
  .swiper-pagination-bullet{
    display inline-block
    width 13.5px
    height 13.5px
    background-color rgba(255, 255, 255, 0.6)
    border-radius 50%
    margin 0 10px
    cursor pointer
  }
  .swiper-pagination-bullet-active{
    width 22px
    height 22px
  }
  .subslider{
    max-width: 1350px
    padding 40px 0
    position relative
    display flex
    gap: 40px
    align-items center
    min-width: 0
    &__wrapper{
      flex: 1 1 auto
      gap: 30px
    }
    &__slide{
      flex: 0 0 250px
      display flex
      flex-direction column
      align-items center
      justify-content center
      gap 15px
      padding 20px
      cursor: pointer
    }
    &__image{
      max-width 174px
      height 90px
    }
    &__label{
    }
  }
  .swiper-slide-thumb-active{
    border 1px solid #FF0031
  }
  .subslider-btn-next{
    flex: 0 0 75px
    position relative
    border: 1px solid rgba(0, 0, 0, 0.5);
    z-index 5
  }
</style>
<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  layouts: 'default',
  data () {
    return {
      mainSlides: [
        {
          id: 1,
          url: '#',
          label: 'Dodaj do koszyka',
          image: require('../assets/img/main/slide-bg.png')
        },
        {
          id: 2,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('../assets/img/main/slide-bg.png')
        },
        {
          id: 3,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('../assets/img/main/slide-bg.png')
        },
        {
          id: 4,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('../assets/img/main/slide-bg.png')
        }
      ],
      subSlides: [
        {
          id: 1,
          label: 'Akcesoria do sufitów napinanych',
          image: require('../assets/img/main/subslide-bg.png')
        },
        {
          id: 2,
          label: 'Folia do sufitów napinanych',
          image: require('../assets/img/main/subslide-bg.png')
        },
        {
          id: 3,
          label: 'Akcesoria do sufitów napinanych',
          image: require('../assets/img/main/subslide-bg.png')
        },
        {
          id: 4,
          label: 'Polia do sufitów napinanych',
          image: require('../assets/img/main/subslide-bg.png')
        }
      ],
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
      ]
    }
  },
  components: {
    LayoutDefault
  }
}
</script>
