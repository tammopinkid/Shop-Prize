<template>
  <div>
    <header-bar />
    <div class="container">
      <h1 class="example">{{ msg }}</h1>
      <filters />
      <products />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/Header.vue'
import Products from './components/Products.vue'
import Filters from './widgets/Filters.vue'

export default {
  components: {
    HeaderBar, Products, Filters
  },
  computed: {
    msg () {
      return 'Welcome to SHOP PRIZE!!!'
    }
  }
}
</script>

<style lang="scss">
.container {
  .example {
    color:#f74d18;
    padding: 50px 0;
  }
}
</style>
