<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    :slide-ratio="1 / 1.3"
    autoplay
    fractions
    progress
  >
    <vueper-slide
      v-for='(slide, i) in slides' :key='i'
      :image='slide.image'
    >
      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'

  // let title = ref('')
  // const imgPath = ('/public/img/portfolio/01_uiux/')
  let slides = ref([
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_home.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_home_prefs.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_money.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_money_prefs.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jpay_app/jpay_app_email.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/mlotto/mlotto_ui_home.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/mlotto/mlotto_ui_play.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/mlotto/mlotto_ui_favs.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/mlotto/mlotto_ui_picks.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/mlotto/mlotto_ui_wallet.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_unit.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_home_screen.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_email.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_movie.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_movie_parts.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_music_album.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_music_home.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_music.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_radio.jpg')
    },
    {
      image: require('/public/img/portfolio/02_mobile/jpay/jp4/jp4_commissary.jpg')
    },
  ])
</script>

<style lang="scss">
  @import "@/assets/css/carousel.scss";
</style>
