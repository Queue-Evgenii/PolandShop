<template>
  <div class="sidebar">
    <h2 class="sidebar__title" @click="mobileCategory">Kategorie</h2>
     <ul class="sidebar__list">
       <li class="sidebar__item" v-for="item in asideItems" :key="item.id">
         <h3 class="sidebar__item-title" ref="title" @click="categotyToggle">{{ item.label }}</h3>
         <ul class="sidebar__sublist" ref="sublist">
            <li class="sidebar__subitem" v-for="link in item.asideSubItems" :key="link.id"><a :href="link.href">{{ link.title }}</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus">
.sidebar{
  margin-top 30px
  overflow hidden
  transition all 0.5s ease 0s
  &.active{
    margin-top 50px
    display flex
    flex-direction column
  }
  @media(min-width: 1201px){
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
    margin-bottom 15px
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
      ]
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
