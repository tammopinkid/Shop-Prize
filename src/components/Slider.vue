<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="image-container"><div class="image img1"></div></div>
    </swiper-slide>
    <swiper-slide>
      <div class="image-container"><div class="image img2"></div></div>
    </swiper-slide>
    <swiper-slide>
      <div class="image-container"><div class="image img3"></div></div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'slider',
    data () {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
          autoplay: true,
          onLazyImageReady: function (s) {
            if (!s.params.autoplay) {
              s.params.autoplay = 10000
              s.startAutoplay()
            }
          }
        }
      }
    },
    components: {
      swiper, swiperSlide
    }
  }
</script>
<style>
.swiper-container {
  margin: 50px auto;
  margin-top: 100px;
}
.image-container {
  width: 100%;
  padding-top: 29.5%;
  position: relative;
}
.image {
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.img1 {
  background-image: url("https://cf.shopee.co.th/file/7f358fccb4031576ae78e7f3b9ff9296")
}
.img2 {
  background-image: url("https://cf.shopee.co.th/file/a558c179ece2e0cb23e7c878b0fb067f")
}
.img3 {
  background-image: url("https://cf.shopee.co.th/file/8496aed37cfb0a5708fb8df12f04e671")
}
</style>
