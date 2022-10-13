<template>
  <div class="page-products">
    <div class="mainproducts products">
      <div class="products__container container">
        <div class="products__title"><router-link :to="{name: 'catalogList', params: {id: catalogId}}">{{productsLabel}}</router-link></div>
        <div class="products__items">
          <product-item
            v-for="product in productItem1" 
            :key="product.id" 
            :product="product"
            @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
.products {
  margin 30px 0
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 25px;
    color: #3D3D3D;
  }
  &__items {
    padding 50px 0
    margin 0 -10px
    display grid
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 40px
    @media(max-width: 560px){
      padding 20px 0
    }
  }
  &__item {
    padding 0 10px
    margin 5px 0
    min-height 100%
  }
}
</style>
<script>
import ProductItem from '@/components/ProductItem'
export default {
  props: {
    mainProducts: {
      type: Array,
    },
    productItem1: {
      type: Array,
    },
    productItem2: {
      type: Array,
    },
    productItem3: {
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
