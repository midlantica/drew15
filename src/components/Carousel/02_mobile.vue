<template>
  <carousel class="druCarousel"
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
      <img :src="image" :alt="image.slice(18,-4)">
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
      const imgPath = 'img/portfolio/02_mobile/'
      setTimeout(() => {
        this.images = [
          'img/portfolio/base.jpg',
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
