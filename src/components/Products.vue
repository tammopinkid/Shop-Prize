<template>
  <div class="products-container">
    <ul class="products-list" v-if="allProducts.length > 0">
      <li v-for="product in allProducts">
        <span>{{ product.price | formatPrice }}</span>
        <a v-bind:href="product.url" target="_blank">{{ product.name }}</a>
        <span class="before-discount" v-if="product.price_before_discount > 0">
          from {{ product.price_before_discount | formatPrice }}</span>
      </li>
    </ul>
    <div class="products-list empty" v-if="allProducts.length == 0">
      <p>{{ emptyMessage }}</p>
    </div>
    <div class="spinner" v-if="productLoading"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  mounted () {
    this.getAllProducts()
  },
  computed: {
    ...mapGetters([
      'allProducts',
      'productLoading'
    ]),
    emptyMessage () {
      return 'Please select category.'
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
$spinner-width: 120px;
.products-container {
  margin-top: 50px;
}
.before-discount {
  color: grey;
  text-decoration: line-through;
}
.products-list {
  min-height: $spinner-width;
  &.empty {
    color: grey;
  }
}
.spinner {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 999;
  &:before {
    content: '';
    position: absolute;
    width: $spinner-width;
    height: $spinner-width;
    left: 50%;
    top: 50%;
    margin: -$spinner-width / 2;
    background-color: #333;

    border-radius: 100%;
    -webkit-animation: sk-scaleout 1s infinite ease-in-out;
    animation: sk-scaleout 1s infinite ease-in-out;
  }
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
