<template>
  <div class="page-products">
    <div class="mainproducts products">
      <div class="products__container container">
        <div class="products__title"><router-link :to="{name: 'catalogList', params: {id: catalogId}}">{{productsLabel}}</router-link></div>
        <div class="products__items">
          <product-item
            v-for="product in productItem" 
            :key="product.id" 
            :product="product"
            @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from '@/components/ProductItem'
export default {
  props: {
    mainProducts: {
      type: Array,
    },
    productItem: {
      type: Array,
    },
    categoryItems: {
      type: Array,
    },
    catalogId: {
      type: String,
      required: true,
    }
  },
  computed: {
    productsLabel() {
      return this.categoryItem.label;
    }
  },
  created () {
    this.categoryItem = this.categoryItems.find(item => item.id == this.catalogId)
  },
  components: {
    ProductItem,
  },
  methods: {
    addToCart (product) {
      this.$emit('addToCart', product)
    },
  },
}
</script>
