<template>
  <div>
    <header-bar />
    <div class="container">
      <h1 class="example">{{ msg }}</h1>
    </div>
    <ul id="example-1">
      <li v-for="product in allProducts">
        {{ product.price | formatPrice }}
        <a v-bind:href="product.url" target="_blank">{{ product.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderBar from './components/Header.vue'

export default {
  mounted () {
    this.getAllProducts()
  },
  components: {
    HeaderBar
  },
  computed: {
    ...mapGetters([
      'allProducts'
    ]),
    msg () {
      return 'Welcome to SHOP PRIZE!!!'
    }
  },
  methods: {
    ...mapActions([
      'getAllProducts'
    ])
  }
}
</script>

<style lang="scss">
.container {
  .example {
    color: red;
    padding: 50px;
  }
}
</style>
