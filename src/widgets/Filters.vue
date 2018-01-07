<template>
  <div class="filters">
    <div class="categories">
      <div class="category" v-for="category in allCategories">
        <a v-bind:href="category.url" @click="onClickLink(category, $event)" target="_blank"
          :class="{ active : activeCategory == category.cat_id}">{{ category.name }}</a>
      </div>
    </div>
  </div>
</template>F

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  mounted () {
  },
  computed: {
    ...mapGetters([
      'allCategories',
      'activeCategory'
    ])
  },
  methods: {
    ...mapActions([
      'activateCategory',
      'getActiveCategory',
      'getAllProducts'
    ]),
    onClickLink (category, e) {
      this.activateCategory(category)
      this.getAllProducts()
      e.preventDefault()
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
}
</style>
