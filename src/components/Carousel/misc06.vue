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
      image: require('/public/img/portfolio/06_misc/booth/jpay_tradeshow_booth2.png')
    },
    {
      image: require('/public/img/portfolio/06_misc/email/jpay_email_jp4.jpg')
    },
    {
      image: require('/public/img/portfolio/06_misc/email/jpay_email.jpg')
    },
    {
      image: require('/public/img/portfolio/06_misc/mural/atlanta_tree_pro_truck.jpg')
    },
    {
      image: require('/public/img/portfolio/06_misc/mural/jpay_mural.jpg')
    },
    {
      image: require('/public/img/portfolio/06_misc/packaging/jp3_package.jpg')
    },
    {
      image: require('/public/img/portfolio/06_misc/JP3_many.jpg')
    }
  ])
</script>

<style lang="scss">
  @import '@/assets/css/carousel.scss';
</style>
