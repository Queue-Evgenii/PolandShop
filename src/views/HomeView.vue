
<template>
  <div class="home">
    <layout-default>
      <main class="main">
        <div class="great">
          <div class="container">
            <div class="great__content">
              <aside class="great__sidebar">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ipsum in necessitatibus laudantium quidem autem ab laborum asperiores, recusandae tenetur adipisci voluptatum quam similique deleniti quae est quasi incidunt atque!</p>
                <p>Qui totam optio nostrum necessitatibus laudantium deleniti incidunt voluptatum magnam sed amet dolorem repellendus vel at ad, velit eius! Aspernatur temporibus voluptatem ea fugit suscipit itaque eveniet esse architecto perferendis!</p>
                <p>Accusantium sapiente dignissimos harum ad repellendus illo sunt, error beatae ipsam eius repudiandae magnam aspernatur, molestiae quo neque officia odit omnis qui quam, impedit est ducimus labore perferendis? Perferendis, odit!</p>
                <p>Nisi tenetur nam amet, accusantium blanditiis error perspiciatis eum dolores aperiam consequatur voluptates. Dolorem nesciunt quas qui atque facilis nobis labore, aspernatur voluptatem dicta dolorum sunt porro. Omnis, aperiam suscipit?</p>
                <p>Soluta a eaque modi qui cum pariatur aliquid iure sunt vel tenetur, sed explicabo expedita nostrum consequuntur facilis ipsum numquam beatae est officia sit commodi facere distinctio! Quod, praesentium sit?</p>
              </aside>
              <div class="great__sliders">
                <div class="mainslider swiper">
                  <div class="mainslider__container swiper-wrapper">
                    <div class="mainslider__slide swiper-slide" v-for="item in mainSlides" :key="item.id">
                      <div class="mainslider__image"><img :src="item.image" alt=""></div>
                      <div class="mainslider__button"><a :href="item.url">{{ item.label }}</a></div>
                    </div>
                  </div>
                  <div class="mainslider__navs">
                      <button type='button' class="slider__navs-btn slider__navs-prev swiper-button-prev"></button>
                      <div class="mainslider__dotts swiper-pagination"></div>
                      <button type='button' class="slider__navs-btn slider__navs-next swiper-button-next"></button>
                  </div>
                </div>
                <div class="subslider"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </layout-default>
  </div>
</template>
<style lang="stylus">
  .swiper{
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding: 0;
    position: relative;
    z-index: 5;
  }
  .swiper-wrapper{
    display: flex;
    height: 100%;
    position: relative;
  }
  .swiper-slide{
    flex 0 0 100%
    height: 100%;
    position: relative;
  }
  .great{
    &__content{
    display flex
    }
    &__sidebar{
      flex: 0 0 350px
    }
    &__sliders{
      max-width: 1500px
      flex: 1 1 auto
    }
  }
  .mainslider{
    &__image{
      max-width 1500px
      height 567px
      text-align center
      img{
        width 100%
        height 100%
        object-fit cover
      }
    }
    &__dotts{
      display: inline-flex;
      align-items: center;
    }
    &__navs{
      display inline-flex
      position absolute
      bottom 45px
      right 37px
      padding 0 30px
    }
  }
  .slider__navs-btn{
    display inline-block
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
      ]
    }
  },
  components: {
    LayoutDefault
  }
}
</script>
