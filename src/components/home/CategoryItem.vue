<template>
  <li class="sidebar-category__item">
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
}
</script>