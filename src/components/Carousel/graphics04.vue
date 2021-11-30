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
      image: require('/public/img/portfolio/04_graphics/Wild_Card_logo_study_01.png')
    },
    {
      image: require('/public/img/portfolio/04_graphics/Wild_Card_logo_study_02.png')
    },
    {
      image: require('/public/img/portfolio/04_graphics/Tank_font.png')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_app_logos.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_infographgic_cloud.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_icons_doc.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/icons_doc_parole.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_icons_cards_kiosk.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_infographic_01.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_infographic_02.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_inforgraphic_money.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_icons_email.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/jpay_mural.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/newsletter_hero1.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/newsletter_hero2.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/celebrity_cruise_lines.jpg')
    },
    {
      image: require('/public/img/portfolio/04_graphics/bike_icons.png')
    },
  ])
</script>

<style lang='scss'>
  @import '@/assets/css/carousel.scss';
</style>
