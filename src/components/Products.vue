<template>
  <div class="products-container">
    <div class="row" v-if="allProducts.length > 0">
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 p-1" v-for="product in allProducts" >
        <div class="card">
          <div class="discount-label" v-if="product.discount">
            <div class="discount horizontal-label"> discount {{product.discount}}</div>
          </div>
          <img class="card-img-top" :src="`https://cf.shopee.co.th/file/${product.image}`" alt="Card image cap">
          <div class="card-body">
            <div class="cap-container">
              <a class="cap-cut" v-bind:href="product.url" target="_blank">{{ product.name }}</a>
            </div>
            <div class="price-container">
              <span class="before-discount" v-if="product.price_before_discount > 0">
            from {{ product.price_before_discount | formatPrice }}</span>
              <span style="color: orangered">{{ product.price | formatPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.card{
  border: 1px solid rgba(0,0,0,.125);
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}
.card-img-top{
	width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body{
  padding: 10px 10px 10px 10px;
  font-size: 14px;
}
.cap-container{
  height: 60px;
  a{
    color: rgb(26, 22, 22);
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
}
.price-container{
  text-align: right;
}
.discount-label{
  position: absolute;
  left: 0;
  top: 5px;
  display: flex;
  flex-direction: column;
  .discount{
    position: relative;
    left: -.3rem;
    margin-bottom: .5rem;
  }
  .horizontal-label {
    display: inline-block;
    position: relative;
    background-color: #ff5722;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    padding: .3rem .5rem;
    text-transform: capitalize;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    cursor: default;
    user-select: none;
    &:before {
      content: "";
      display: inline-block;
      position: absolute;
      border: .21rem solid transparent;
      border-bottom-color: #a92d05;
      transform: rotate(45deg);
      left: .1rem;
      bottom: -.2rem;
    }
  }
  
}

.cap-cut{
	display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
	overflow: hidden;
}

$spinner-width: 120px;
.products-container {
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
