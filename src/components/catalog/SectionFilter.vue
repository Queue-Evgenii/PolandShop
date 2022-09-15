<template>
  <div class="sidebar-filter__section section-filter">
    <div class="section-filter__title" ref="title" >{{ item.name }}</div>
    <ul class="section-filter__body section-filter__body-line" ref="sublist">
      <li class="section-filter__item" v-for="input in item.filterInputs" :key="input.id">
        <input type="checkbox" :id="input.for">
        <label class="flex" :for="input.for">{{ input.label }}</label>
      </li>
    </ul>
  </div> 
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