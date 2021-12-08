<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    :slide-ratio="1 / 1.3"
    autoplay
    fractions
    progress
    lazy
    lazy-load-on-drag
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

  let slides = ref([
    {
      image: require('/public/img/portfolio/01_uiux/Zander_screenshot_v1.png')
    },
    {
      image: require('/public/img/portfolio/01_uiux/tdoe/tn_doc_01.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/tdoe/tn_doc_02.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/civicinc/civicinc_bridge_01.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/civicinc/civicinc_bridge_02.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/civicinc/civicinc_bridge_03.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/civicinc/civicinc_funding_01.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/civicinc/civicinc_funding_02.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/civicinc/civicinc_land_01.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/civicinc/civicinc_land_02.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_home.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_signed_in.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_money.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_email.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpay_com/jpay_web_stamps.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpayinc/jpayinc_website_old.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpayinc/jpayinc_website.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/jpay/jpayinc/jpayinc_website_responsive.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/prisonride/prisonride_home.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/prisonride/prisonride_profile.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/mlotto_web.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/valentina_website.jpg')
    },
    {
      image: require('/public/img/portfolio/01_uiux/tinsley_website.jpg')
    }
  ])
</script>

<style lang='scss'>
  @import '@/assets/css/carousel.scss';
</style>
