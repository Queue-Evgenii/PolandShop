<template>
  <li class="sidebar-category__item"
    @click="onSelected(item.id)"
  >
     <div class="sidebar-category__item-title" ref="title">{{ item.label }}</div>
     <ul class="sidebar-category__sublist" ref="sublist">
        <li class="sidebar-category__subitem" v-for="link in item.asideSubItems" :key="link.id">
          <router-link :to="link.href">{{ link.title }}</router-link>
        </li>
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    onSelected (id) {
      this.$emit('onSelected', id)
    }
  },
}
</script>
<style lang="stylus">
.sidebar-category__item.active{
  .sidebar-category__item-title{
    &::before{
      transform rotate(0)
    }
  }
  .sidebar-category__sublist{
      max-height: none
      opacity 1
      visibility visible
  }
}
</style>