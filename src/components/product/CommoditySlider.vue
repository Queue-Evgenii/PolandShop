<template>
  <div class="commodity-page__images commodity-images">
    <div class="commodity-images__wrapper flex">
      <VueSlickCarousel ref="c2" v-bind="settingsThumbs" class="commodity-images__thumbs thumbs-commodity">
        <div class="thumbs-commodity__slide" v-for="item in commoditySlides" :key="item.id">
          <div class="thumbs-commodity__image"><img :src="item.image" alt=""></div>
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel ref="c1" v-bind="settings" class="commodity-images__carousel carousel-commodity">
        <div class="carousel-commodity__slide" v-for="item in commoditySlides" :key="item.id">
          <div class="carousel-commodity__image"><img :src="item.image" alt=""></div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default{
  data () {
    return {
      settings: {
        "dots": true,
        "focusOnSelect": true,
        // "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "asNavFor": this.$refs.c2
      },
      settingsThumbs: {
        "dots": false,
        "focusOnSelect": true,
        // "infinite": true,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "vertical": true,
        "verticalSwiping": true,
        "asNavFor": this.$refs.c1
      },
    }
  },
  props: {
    commoditySlides :{
      type: Array
    }
  },
  components: { VueSlickCarousel },
} 
</script>
<style lang="stylus">
  .commodity-images{
    &__wrapper{
      gap 25px
    }
    &__thumbs,
    &__carousel{
      min-width 0
      height 562px
    }
    &__thumbs{
      flex: 0 0 140px
    }
    &__carousel{
      flex: 0 0 620px
      border: 1px solid rgba(0, 0, 0, 0.2);

    }
  }
  .thumbs-commodity{
    .slick-track{
      margin -4px 0
    }
    .slick-slide{
      padding 4px 0
    }
    &__slide{
      background-color #fff
    }
    &__image{
      width 140px
      height 130px
      position relative
      img{
        padding 8px
        position absolute
        width 100%
        height 100%
        object-fit: contain
      }
    }
  }
  .carousel-commodity{
    position relative
    &::after{
      content ''
      background url('@/assets/img/header/icon/search.png') 0 0 / 100% no-repeat
      width 42px
      height 42px
      position absolute
      right 25px
      bottom 35px
    }
    .slick-arrow{
      display none !important
    }
    &__slide{
      background-color #fff
    }
    &__image{
      width 610px
      height 560px
      position relative
      img{
        padding 80px
        position absolute
        width 100%
        height 100%
        object-fit: contain
      }
    }
  }
</style>