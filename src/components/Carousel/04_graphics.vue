<template>
  <div>
    <vue-flux
      :options='vfOptions'
      :images='vfImages'
      :transitions='vfTransitions'
      :captions='vfCaptions'
      ref='slider'>

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
  const imgPath = 'img/portfolio/04_graphics/'
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
        imgPath + 'jpay_app_logos.jpg',
        imgPath + 'jpay_infographgic_cloud.jpg',
        imgPath + 'jpay_icons_doc.jpg',
        imgPath + 'icons_doc_parole.jpg',
        imgPath + 'jpay_icons_cards_kiosk.jpg',
        imgPath + 'jpay_infographic_01.jpg',
        imgPath + 'jpay_infographic_02.jpg',
        imgPath + 'jpay_inforgraphic_money.jpg',
        imgPath + 'jpay_icons_email.jpg',
        imgPath + 'jpay_mural.jpg',
        imgPath + 'newsletter_hero1.jpg',
        imgPath + 'newsletter_hero2.jpg',
        imgPath + 'celebrity_cruise_lines.jpg',
        imgPath + 'bike_icons.png'
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

<style lang='scss'>
  @import '@/assets/css/_template-carousel.scss';
</style>
