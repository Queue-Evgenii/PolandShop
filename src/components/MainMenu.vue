<template>
  <nav class="navigation flex">
    <router-link v-for="item in mainMenu" :key="item.id" :to="item.to">{{ item.label }}</router-link>
  </nav>
</template>
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
