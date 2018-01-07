import Vuex from 'vuex'
import Vue from 'vue'
import products from './products'
import categories from './categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    categories
  }
})
