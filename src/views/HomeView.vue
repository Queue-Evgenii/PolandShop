
<template>
  <div class="home">
    <layout-default></layout-default>
  </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  layouts: 'default',
  components: {
    LayoutDefault
  }
}
</script>
