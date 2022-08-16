<template>
  <div id="app">
    <div class="container">
      <nav class="navigation">
        <router-link v-for="item in mainMenu" :key="item.id" :to="item.to">{{ item.label }}</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<style lang="stylus">
@import 'assets/css/null';
body {
  font-family Arial, "Helvetica Neue", Helvetica, sans-serif
  margin 0;
  width 100%
  font-size 16px
  line-height 18px
}
.container {
  max-width: 1860px;
  padding 0 30px
  margin: 0 auto;
  overflow: hidden;
}
.flex{
  display flex
  align-items center
}
.hover-underline{
    &:hover{
        text-decoration underline
    }
}
.navigation {
  padding 10px 0
  margin: 0 -10px;
}
  .navigation a{
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
  color: #8B8B8B;
  }
</style>
<script>
export default {
  data () {
    return {
      mainMenu: [
        {
          id: 1,
          label: 'Wzmacniacz',
          to: '/'
        },
        {
          id: 2,
          label: 'O nas',
          to: '/about'
        },
        {
          id: 3,
          label: 'Łączność',
          to: '/about'
        },
        {
          id: 4,
          label: 'Sklepy',
          to: '/about'
        }
      ]
    }
  }
}
</script>
