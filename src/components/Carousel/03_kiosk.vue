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
      const imgPath = 'img/portfolio/03_kiosk/'
      setTimeout(() => {
        this.images = [
          'img/portfolio/base.jpg',
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
        ]
      }, 0)
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/_template-carousel.scss';
</style>
