<template>
  <div class="sidebar-category">
    <div class="sidebar-category__title" @click="mobileCategory">Kategorie</div>
     <ul class="sidebar-category__list">
       <li class="sidebar-category__item" v-for="item in asideItems" :key="item.id">
         <div class="sidebar-category__item-title" ref="title" @click="categotyToggle">{{ item.label }}</div>
         <ul class="sidebar-category__sublist" ref="sublist">
            <li class="sidebar-category__subitem" v-for="link in item.asideSubItems" :key="link.id"><router-link :to="link.href">{{ link.title }}</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus">
.sidebar-category{
  overflow hidden
  transition all 0.5s ease 0s
  padding-top 30px
  &.active{
    display flex
    flex-direction column
  }
  @media(min-width: 1201px){
    padding 0
    display flex
    flex-direction column
  }
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FF0031;
    display inline-flex
    align-items center
    padding-bottom: 25px
    margin-bottom 5px
    border none
    background inherit
    @media(max-width: 1200px){
      font-size 30px
      width 100%
      justify-content space-between
      &::after{
        content ''
        display inline-block
        width 20px
        height 11px
        background url('../../assets/img/main/icons/arrow-bottom.png') center no-repeat
      }
    }
    &.active{
      border-bottom: 1px solid #888
      &::after{
        transform rotate(-90deg)
      transition: all 0.3s ease 0s
      }
    }
    @media(min-width: 1201px){
      border-bottom: 1px solid #888
    }
  }
  &__list{
      @media(max-width: 1200px){
        display none
      }
    &.active{
      display block
    }
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
      background url('../../assets/img/main/icons/arrow-bottom.png') center no-repeat
      transform rotate(-90deg)
      transition transform 0.3s ease 0s
    }
    &.active{
        &::before{
          transform rotate(0)
        }
      }
  }
  &__sublist{
    transition all 0.5s ease 0s
    max-height: 0
    opacity: 0
    visibility hidden
    &.active{
      max-height: none
      opacity 1
      visibility visible
    }
  }
  &__subitem{
    padding 0 30px
    position relative
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
        background url('../../assets/img/main/icons/arrow-on-hover.png') center no-repeat
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    asideItems: {
      type: Array,
    }
  },
  methods: {
    categotyToggle (e) {
      const title = e.target
      const list = e.target.nextSibling
      if (list.classList.contains('active')) {
        list.classList.remove('active')
        title.classList.remove('active')
      } else {
        this.$refs.sublist.forEach(element => {
          element.classList.remove('active')
          list.classList.add('active')
        })
        this.$refs.title.forEach(el => {
          el.classList.remove('active')
          title.classList.add('active')
        })
      }
    },
    mobileCategory (e) {
      const categoriesTitle = e.target
      const categoriesList = e.target.nextSibling
      if (innerWidth <= 1200) {
        categoriesTitle.classList.toggle('active')
        categoriesList.classList.toggle('active')
        categoriesTitle.parentNode.classList.toggle('active')
      }
    }
  }
}
</script>
