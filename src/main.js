import Vue from 'vue'
import Welcome from './Welcome.vue'
import store from './store/index'

Vue.filter('formatPrice', function (value) {
  if (value) {
    let bath = value / 100000
    let text = bath.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `${text} THB`
  }
})

new Vue({
  el: '#app',
  store,
  template: '<Welcome/>',
  components: {
    Welcome
  }
})
