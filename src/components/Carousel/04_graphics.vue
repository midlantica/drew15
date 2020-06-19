<template>
  <carousel
    class="druCarousel"
    :perPage="1"
    :navigationEnabled="true"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayTimeout="3000"
    :autoplayHoverPause="false"
    :loop="true"
    :navigationClickTargetSize="0"
    navigationNextLabel="<div class='navvy rightnav'>▶︎</div>"
    navigationPrevLabel="<div class='navvy leftnav'>◀︎</div>"
  >
    <slide
      v-for="(image, index) in images"
      v-bind:image="image"
      v-bind:index="index"
      v-bind:key="image.id"
    >
      <img :src="image" :alt="image.slice(18,-4)" />
    </slide>
  </carousel>
</template>

<script>
  // import Spinner from '../img/spinners/AndroidLoading.gif'
  // IN PLUGINS <<<
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    components: {
      Carousel,
      Slide
    },
    data () {
      return {
        images: []
      }
    },
    mounted () {
      const imgPath = 'img/portfolio/04_graphics/'
      setTimeout(() => {
        this.images = [
          'img/portfolio/base.jpg',
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
        ]
      }, 0)
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
  @import '@/assets/css/_template-carousel.scss';
</style>
