<template>
  <div>
    <header-bar />
    <div class="container">
      <h1 class="example">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/Header.vue'

export default {
  components: {
    HeaderBar
  },
  computed: {
    msg () {
      return 'Hello world !'
    }
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
