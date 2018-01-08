<template>
  <div class="filters">
    <div class="categories">
      <div class="category" v-for="category in allCategories">
        <a v-bind:href="category.url" @click="onClickLink(category, $event)" target="_blank"
          :class="{ active : activeCategory == category.cat_id}">{{ category.name }}</a>
      </div>
    </div>
    <div class="sliderC row" v-if="activeCategory != null">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-3">{{ sliderData.label }}</div>
          <div class="col-md-8">
            <vue-slider v-bind="sliderData" v-model="sliderData.value" @drag-end="onSliderDragEnd" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vueSlider from 'vue-slider-component'

export default {
  mounted () {
  },
  components: {
    vueSlider
  },
  computed: {
    ...mapGetters([
      'allCategories',
      'productLoading',
      'activeCategory',
      'sliderData'
    ])
  },
  methods: {
    ...mapActions([
      'activateCategory',
      'getActiveCategory',
      'getProductsByRange',
      'getAllProducts',
      'addPriceRange'
    ]),
    onClickLink (category, e) {
      this.activateCategory(category)
      this.getAllProducts()
      e.preventDefault()
    },
    onSliderDragEnd () {
      this.addPriceRange(this.sliderData.value)
      this.getProductsByRange()
    }
  }
}
</script>

<style lang="scss">
.filters {
  .categories {
    .category {
      display: inline-block;
      margin: 5px 5px 0 0;
    }

    a {
      display: block;
      padding: 5px;
      border: 1px solid gray;
      &.active {
        background-color: lightgreen;
      }
    }
  }

  .sliderC {
    margin-top: 50px;
  }
}
</style>
