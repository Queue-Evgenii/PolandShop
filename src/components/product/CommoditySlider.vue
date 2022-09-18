<template>
  <div class="commodity-page__images commodity-images">
    <div class="commodity-images__wrapper">
      <VueSlickCarousel 
        ref="thumb" 
        v-bind="settingsThumbs" 
        :asNavFor="slider"
        class="commodity-images__thumbs thumbs-commodity"
      >
        <div class="thumbs-commodity__slide" v-for="item in commoditySlides" :key="item.id">
          <div class="thumbs-commodity__image"><img :src="item.image" alt=""></div>
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel ref="slider" v-bind="settings" :asNavFor="thumb"
        class="commodity-images__carousel carousel-commodity">
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
export default {
  data() {
    return {
      slider: undefined,
      thumb: undefined,
      settings: {
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
      },
      settingsThumbs: {
        "dots": false,
        "arrows": false,
        "focusOnSelect": true,
        "infinite": true,
        "centerMode": true,
        "centerPadding": "2px",
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "vertical": true,
        "verticalSwiping": true,
        "responsive": [
          {
            "breakpoint": 1590,
            "settings": {
              "vertical": false,
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 1520,
            "settings": {
              "vertical": false,
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 1460,
            "settings": {
              "slidesToShow": 4,
              "vertical": false,
            }
          },
          {
            "breakpoint": 1200,
            "settings": {
              "slidesToShow": 3,
              "vertical": false,
            }
          },
          {
            "breakpoint": 1080,
            "settings": {
              "slidesToShow": 2,
              "vertical": false,
            }
          },
          {
            "breakpoint": 992,
            "settings": {
              "slidesToShow": 4,
              "vertical": false,
            }
          },
          {
            "breakpoint": 678,
            "settings": {
              "slidesToShow": 3,
              "vertical": false,
            }
          },
          // {
          //   "breakpoint": 500,
          //   "settings": {
          //     "slidesToShow": 2,
          //     "vertical": false,
          //   }
          // }
        ]
      },
    }
  },
  mounted() {
    this.slider = this.$refs.slider
    this.thumb = this.$refs.thumb
  },
  props: {
    commoditySlides: {
      type: Array,
      required: true,
    }
  },
  components: { VueSlickCarousel },
} 
</script>
<style lang="stylus">
  .commodity-images{
    &__wrapper{
      display grid
      grid-template-columns: 140px minmax(200px, 1fr)
      column-gap 25px
      row-gap: 10px
      overflow: hidden
      @media(max-width: 1590px){
        grid-template-columns: minmax(200px, 1fr)
      }
    }
    &__thumbs,
    &__carousel{
      min-width 0
      max-height 562px
      @media(max-width: 1590px) {
        height auto !important
      }
    }
    &__thumbs{
      @media(max-width: 1590px){
        order 2
      }
    }
    &__carousel{
    }
  }
  .thumbs-commodity{
    .slick-track{
    }
    .slick-slide{
      padding 0 5px
    }
    &__slide{
      
      
    }
    &__image{
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color #fff
      min-width 140px
      height 130px
      position relative
      img{
        padding 8px
        position absolute
        width 100%
        height 100%
        object-fit: contain
      }
      @media(max-width: 500px) {
        min-width 80px
        height 80px
      }
    }
  }
  .carousel-commodity{
    position relative
    max-width 610px
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
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    &__image{
      // max-width 610px
      height 558px
      position relative
      img{
        padding 80px
        position absolute
        width 100%
        height 100%
        object-fit: contain
        @media(max-width: 1590px) {
          padding 20px
        }
      }
      @media(max-width: 1590px) {
        height 410px !important
      }
    }
    @media(max-width: 1460px){
      max-width:1200px
    }
  }
</style>