<template>
  <div>
    <vue-flux
      :options='vfOptions'
      :images='vfImages'
      :transitions='vfTransitions'
      :captions='vfCaptions'
      ref='slider'
    >

      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <!-- <template v-slot:caption>
        <flux-caption />
      </template> -->

      <template v-slot:controls>
        <flux-controls />
      </template>

      <!-- <template v-slot:pagination>
        <flux-pagination />
      </template> -->

      <template v-slot:index>
        <flux-index />
      </template>
    </vue-flux>
    <!-- <button @click='$refs.slider.show("next")'>NEXT</button> -->
  </div>
</template>

<script>
  const imgPath = 'img/portfolio/02_mobile/'
  import vueFluxVars from './vueFluxVars.js'

  const transitions = [{
   name: 'slide',
   options: {
      totalDuration: 700,
      easing: 'ease-out',
    }
  }]

  import {
    VueFlux,
    // FluxCaption,
    FluxControls,
    FluxIndex,
    // FluxPagination,
    FluxPreloader,
  } from 'vue-flux'

  export default {
    components: {
      VueFlux,
      // FluxCaption,
      FluxControls,
      FluxIndex,
      // FluxPagination,
      FluxPreloader,
    },
    methods: {
      requestFullscreen: true,
      exitFullscreen: false
    },
    data: () => ({
      vfOptions: vueFluxVars,
      vfImages: [
        imgPath + 'jpay/jpay_app/jpay_app_home.jpg',
        imgPath + 'jpay/jpay_app/jpay_app_home_prefs.jpg',
        imgPath + 'jpay/jpay_app/jpay_app_money.jpg',
        imgPath + 'jpay/jpay_app/jpay_app_money_prefs.jpg',
        imgPath + 'jpay/jpay_app/jpay_app_email.jpg',
        imgPath + 'mlotto/mlotto_ui_home.jpg',
        imgPath + 'mlotto/mlotto_ui_play.jpg',
        imgPath + 'mlotto/mlotto_ui_favs.jpg',
        imgPath + 'mlotto/mlotto_ui_picks.jpg',
        imgPath + 'mlotto/mlotto_ui_wallet.jpg',
        imgPath + 'jpay/jp4/jp4_unit.jpg',
        imgPath + 'jpay/jp4/jp4_home_screen.jpg',
        imgPath + 'jpay/jp4/jp4_email.jpg',
        imgPath + 'jpay/jp4/jp4_movie.jpg',
        imgPath + 'jpay/jp4/jp4_movie_parts.jpg',
        imgPath + 'jpay/jp4/jp4_music_album.jpg',
        imgPath + 'jpay/jp4/jp4_music_home.jpg',
        imgPath + 'jpay/jp4/jp4_music.jpg',
        imgPath + 'jpay/jp4/jp4_radio.jpg',
        imgPath + 'jpay/jp4/jp4_commissary.jpg'
      ],
      vfTransitions: transitions,
      vfCaptions: [
         'Caption for image 1',
         'Caption for image 2',
         'Caption for image 3',
      ],
    })
  }
</script>

<style lang="scss">
  @import '@/assets/css/_template-carousel.scss';
</style>
