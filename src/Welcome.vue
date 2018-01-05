<template>
  <h1 class="example">{{ msg }}</h1>
</template>

<script>
export default {
  computed: {
    msg () {
      return 'Hello world !'
    }
  }
}
</script>

<style>
.example {
  color: red;
  padding: 50px;
}
</style>
