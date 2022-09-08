<template>
  <div class="sidebar-filter">
    <div class="sidebar-filter__title">Filtry produktów</div>
    <form action="" class="sidebar-filter__form">
      <div class="sidebar-filter__section section-filter">
        <div class="section-filter__title">Cena £</div>
        <div class="section-filter__body range-filter">
          <range-slider
            class="range-filter__slider"
            :min="filterSlider.sliderMinValue"
            :max="filterSlider.sliderMaxValue"
            v-model="filterSlider.sliderValue">
          </range-slider>
          <div class="range-filter__values flex">
            <span class="range-filter__min">{{ filterSlider.sliderMinValue }}</span>
            <span class="range-filter__max">{{ filterSlider.sliderMaxValue }}</span>
          </div>
        </div>
      </div>
      <div class="sidebar-filter__section section-filter" v-for="item in filterItems" :key="item.id">
        <div class="section-filter__title">{{ item.name }}</div>
        <ul class="section-filter__body">
          <li class="section-filter__item" v-for="input in item.filterInputs" :key="input.id">
            <input type="checkbox" :id="input.id">
            <label :for="input.id">{{ input.label }}</label>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
  import RangeSlider from 'vue-range-slider'
  // you probably need to import built-in style
  import 'vue-range-slider/dist/vue-range-slider.css'
  export default {
    data () {
      return {
        filterSlider: {
          sliderValue: 50,
          sliderMinValue: 0,
          sliderMaxValue: 350,
        },
        filterItems: [
          {
            name: 'Rodzaj produktu',
            id: 1,
            filterInputs: [
              {
                label: 'Profil',
                id: 1,
              },
              {
                label: 'Listwa wykończeniowa',
                id: 2,
              },
              {
                label: 'Termo pierścienie',
                id: 3,
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
              },
              {
                label: 'Profil',
                id: 2,
              },
              {
                label: 'Termo pierścienie',
                id: 3,
              },
            ]
          },
        ],
      }
    },
    components: {
      RangeSlider
    }
  }
</script> 
<style lang="stylus">
  .sidebar-filter{
    @media(min-width: 769px){
      margin-top: 40px
      padding-top 60px
      border-top 1px solid #8B8B8B;
    }
    &__title{
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #3D3D3D;
    }
    &__form{
      padding-top 20px
    }
  }
  .section-filter{
    padding 20px 0
    &:not(:first-child){
      border-bottom 1px solid #CACACA;
    }
    &__title{
      margin-bottom 25px
    }
  }
  .range-filter{
    &__values{
      margin-top 7px
      justify-content space-between
    }
    &__min,
    &__max{
      &::after{
        content 'pln'
        margin-left 5px
      }
    }
  }
  .range-slider{
    width 100%
    padding 0
  }
  .range-slider-rail,
  .range-slider-fill {
    background-color #000
    height: 1px;
    border-radius: 0;
  }
  .range-slider-knob {
    height: 10px;
    width: 10px;
    border: none
    background-color: #000;
  }
</style>