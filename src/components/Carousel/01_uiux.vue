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
      data-name="MySlideName"
    >
      <img :src="image" :alt="image.slice(18,-4)" />
    </slide>
  </carousel>
</template>

<script>
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
      const imgPath = 'img/portfolio/01_uiux/'
      setTimeout(() => {
        this.images = [
          'img/portfolio/base.jpg',
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
        ]
      }, 0)
    }
  }
</script>

<style lang="scss">
  // @import '@/assets/css/main.scss';
  // @import '@/template-bourbon/assets/css/bourbon-main.scss';
  @import '@/assets/css/_template-carousel.scss';
</style>
