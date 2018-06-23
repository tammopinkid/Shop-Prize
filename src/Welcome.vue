<template>
  <div class="body">
    <header-bar />
    <div class="container">
      <slider />
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <filters />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <products />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/Header.vue'
import Products from './components/Products.vue'
import Slider from './components/Slider.vue'
import Filters from './widgets/Filters.vue'

export default {
  components: {
    HeaderBar, Products, Filters, Slider
  },
  computed: {
    msg () {
      return 'Welcome to SHOP PRIZE!!!'
    }
  }
}
</script>

<style lang="scss">
html {
  background-color: #f5f5f5;
}
.body {
  background-color: #f5f5f5;
}
.container {
  margin-top: 56px;
  .example {
    color:#f74d18;
    padding: 50px 0;
  }
}
</style>
