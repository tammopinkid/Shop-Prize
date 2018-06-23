<template>
  <div class="filters">
    <div class="categories">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="label">Categories</div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="category" v-for="category in allCategories">
            <a v-bind:href="category.url" @click="onClickLink(category, $event)" target="_blank"
              :class="{ active : activeCategory == category.cat_id}">{{ category.name }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="sliderC" v-if="activeCategory != null">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2 mb-3">
          <div class="label">{{sliderData.label}}</div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4 mb-3">
          <vue-slider v-bind="sliderData" v-model="sliderData.value" @drag-end="onSliderDragEnd" />
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
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
  border-radius: 3px;
  padding: 10px;
  .categories {
    .label {
      font-size: 16pt;
      padding: 10px 10px;
      color : gray;
    }
    .category {
      display: block;
      width: 100%;
      border: 1px solid transparent;
      //margin: 5px 5px 0 0;
      &:hover {
        //border: 1px solid rgba(0, 0, 0, 0.05);
        //box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    a {
      display: block;
      color: gray;
      padding: 10px 20px;
      &:hover {
        text-decoration: none;
      }
      &.active {
        text-decoration: none;
        background-color: orangered;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
        color: #fff;
      }
    }
  }

  .sliderC {
    .label {
      font-size: 16pt;
      padding: 10px 10px;
      color : gray;
    }
  }
}
</style>
