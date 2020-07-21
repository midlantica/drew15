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
  const imgPath = 'img/portfolio/03_kiosk/'

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
      vfOptions: {
        autoplay: true,
        enableGestures: true,
        infinite: true,
        bindKeys: true,
        delay: 3000,
        width: 98,
        toggleFullscreen: true,
        allowFullscreen: true,
        lazyLoad: true,
        autohideTime: 2500,
      },
      vfImages: [
        imgPath + 'inmate_kiosk.jpg',
        imgPath + 'inmate_kiosk_ui_home.jpg',
        imgPath + 'inmate_kiosk_ui_home_signed_in.jpg',
        imgPath + 'inmate_kiosk_ui_buy_jp3.jpg',
        imgPath + 'inmate_kiosk_ui_music.jpg',
        imgPath + 'inmate_kiosk_ui_music_songs_list.jpg',
        imgPath + 'inmate_kiosk_ui_email_inbox.jpg',
        imgPath + 'inmate_kiosk_ui_email_pic.jpg',
        imgPath + 'inmate_kiosk_ui_email_read.jpg',
        imgPath + 'inmate_kiosk_ui_buys.jpg',
        imgPath + 'inmate_kiosk_ui_manage.jpg'
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
