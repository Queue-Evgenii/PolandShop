<template>
  <div class="subslider">
    <VueSlickCarousel v-bind="settings" class="subslider__wrapper">
        <router-link  class="subslider__slide" v-for="item in subSlides" :key="item.id" :to="{name: 'catalogList', params: {id: item.id}}">
          <div class="subslider__image"><img :src="item.image" alt=""></div>
          <div class="subslider__label">{{ item.label }}</div>
        </router-link>
    </VueSlickCarousel>
  </div>
</template>
<style lang="stylus">
    .subslider{
      padding 40px 0
      display flex
      gap: 40px
      align-items center
      min-width: 0
      padding-right 150px
      position relative
      overflow-y: hidden
      @media(max-width: 768px){
        padding-right 0
        padding 20px 0 50px 0
        display block
      }
      &__wrapper{
        display flex !important
        flex: 1 1 auto
        min-width 0
        justify-content space-between
        .slick-prev{
          display none !important
        }
        .slick-next{
          right -120px
          bottom 50px
        }
        .slick-track{
          display flex !important
          gap 15px
          min-height: 181px
        }
        .slick-slide{
        }
      }
      &__slide{
        min-height: 200px
        display flex !important
        flex-direction column
        align-items center
        justify-content center
        gap 15px
        padding 20px
        cursor: pointer
        text-align: center;
        background: linear-gradient(117.13deg, #FFFFFF -11.73%, #D5D5D5 105.48%);
      }
      &__image{
        max-width 174px
        height 90px
      }
      &__label{
        font-weight: 700;
        font-size: 20px;
      }
    }
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  data () {
    return {
      settings: {
        "dots": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "touchThreshold": 5,
        "responsive": [
          {
            "breakpoint": 1590,
            "settings": {
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 1350,
            "settings": {
              "slidesToShow": 2
            }
          },
          {
            "breakpoint": 1200,
            "settings": {
              "slidesToShow": 4
            }
          },
          {
            "breakpoint": 1130,
            "settings": {
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 920,
            "settings": {
              "slidesToShow": 2
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 2,
              "dots": true
            }
          },
          {
            "breakpoint": 520,
            "settings": {
              "slidesToShow": 1,
              "dots": true
            }
          }
        ]
      }
    }
  },
  props: {
    subSlides: {
      type: Array,
    }
  },
  components: { VueSlickCarousel },
}
</script>
