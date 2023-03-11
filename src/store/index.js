import Vue from 'vue'
import Vuex from 'vuex'
import categoryModules from './modules/category.modules'
import productModules from './modules/product.modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    quickBuy: [],
    recentList: [],
    isQuickBuy: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categoryModules,
    productModules,
  }
})
