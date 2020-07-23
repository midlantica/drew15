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
  const imgPath = 'img/portfolio/01_uiux/'

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
      toggle() {
        console.log(this.$refs.slider.$children[0].Display.toggleFullScreen())
        console.log(this.$refs.slider.Display.toggleFullScreen())
        this.$refs.slider.Display.toggleFullScreen()
      }
    },
    data: () => ({
      vfOptions: {
        autoplay: true,
        enableGestures: true,
        infinite: true,
        bindKeys: true,
        delay: 3000,
        width: 98,
        // toggleFullscreen: true,
        // allowFullscreen: true,
        lazyLoad: true,
        autohideTime: 2500,
      },
      vfImages: [
        imgPath + 'tdoe/tn_doc_01.jpg',
        imgPath + 'tdoe/tn_doc_02.jpg',
        imgPath + 'civicinc/civicinc_bridge_01.jpg',
        imgPath + 'civicinc/civicinc_bridge_02.jpg',
        imgPath + 'civicinc/civicinc_bridge_03.jpg',
        imgPath + 'civicinc/civicinc_funding_01.jpg',
        imgPath + 'civicinc/civicinc_funding_02.jpg',
        imgPath + 'civicinc/civicinc_land_01.jpg',
        imgPath + 'civicinc/civicinc_land_02.jpg',
        imgPath + 'jpay/jpay_com/jpay_web_home.jpg',
        imgPath + 'jpay/jpay_com/jpay_web_signed_in.jpg',
        imgPath + 'jpay/jpay_com/jpay_web_money.jpg',
        imgPath + 'jpay/jpay_com/jpay_web_email.jpg',
        imgPath + 'jpay/jpay_com/jpay_web_stamps.jpg',
        imgPath + 'jpay/jpayinc/jpayinc_website_old.jpg',
        imgPath + 'jpay/jpayinc/jpayinc_website.jpg',
        imgPath + 'jpay/jpayinc/jpayinc_website_responsive.jpg',
        imgPath + 'prisonride/prisonride_home.jpg',
        imgPath + 'prisonride/prisonride_profile.jpg',
        imgPath + 'mlotto_web.jpg',
        imgPath + 'valentina_website.jpg',
        imgPath + 'tinsley_website.jpg'
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

  .fullScreen {
    cursor: pointer;
  }
</style>
