<template>
  <ul class="bottom-header__content flex">
    <li v-for="item in headerMenu" :key="item.id">
      <a class="hover-underline" :href="item.url">{{ item.label }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      headerMenu: [
        {
          id: 1,
          label: 'Kategorie',
          url: '#'
        },
        {
          id: 2,
          label: 'Promocje',
          url: '#'
        },
        {
          id: 3,
          label: 'Aktualności',
          url: '#'
        },
        {
          id: 4,
          label: 'Nowości',
          url: '#'
        },
        {
          id: 5,
          label: 'Dostawa',
          url: '#'
        },
        {
          id: 6,
          label: 'Dodaj opinię o sklepie',
          url: '#'
        },
        {
          id: 7,
          label: 'Kontakt',
          url: '#'
        }
      ]
    }
  }
}
</script>
