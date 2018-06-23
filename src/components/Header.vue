<template>
<nav class="navbar navbar-toggleable-md navbar-light bg-faded fixed-nav">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <img src="../../static/icon/favicon.png" alt="logo" width="30px">&nbsp;
  <a class="navbar-brand" style="color: white;" href="/">{{ title }}</a>
</nav>
</template>

<script>
export default {
  computed: {
    title () {
      return 'Shop Prize'
    }
  }
}
</script>

<style lang="scss">
.fixed-nav{
  overflow: hidden;
  position: fixed;
  width: 100%;
  background-color: orangered;
  z-index: 100;
  top: 0;
}
.nav-link{
    color: white;
  }
</style>
