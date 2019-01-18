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
      const imgPath = 'img/portfolio/06_misc/'
      setTimeout(() => {
        this.images = [
          'img/portfolio/base.jpg',
          imgPath + 'booth/jpay_tradeshow_booth2.png',
          imgPath + 'email/jpay_email_jp4.jpg',
          imgPath + 'email/jpay_email.jpg',
          imgPath + 'mural/atlanta_tree_pro_truck.jpg',
          imgPath + 'mural/jpay_mural.jpg',
          imgPath + 'packaging/jp3_package.jpg',
          imgPath + 'JP3_many.jpg'
        ]
      }, 0)
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/punk-main.scss';
  @import '@/assets/css/_template-carousel.scss';

</style>
