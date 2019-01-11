<template>
  <carousel class="druCarousel"
    :perPage="1"
    :navigationEnabled="true"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayTimeout="3000"
    :autoplayHoverPause="true"
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
          imgPath + 'base.jpg',
          imgPath + 'jpay/jpay_app_home.jpg',
          imgPath + 'jpay/jpay_app_home_prefs.jpg',
          imgPath + 'jpay/jpay_app_money_prefs.jpg',
          imgPath + 'jpay/jpay_app_email.jpg',
          imgPath + 'jpay/jpay_app_logos.jpg',
          imgPath + 'jpay/jpay_app_ui_old.jpg',
          imgPath + 'mlotto/mlotto_ui_home.jpg',
          imgPath + 'mlotto/mlotto_ui_play.jpg',
          imgPath + 'mlotto/mlotto_ui_favs.jpg',
          imgPath + 'mlotto/mlotto_ui_picks.jpg',
          imgPath + 'mlotto/mlotto_ui_wallet.jpg',
          imgPath + 'jpay/jp4_unit.jpg',
          imgPath + 'jpay/jp4_home_screen.jpg',
          imgPath + 'jpay/jp4_email.jpg',
          imgPath + 'jpay/jp4_movie.jpg',
          imgPath + 'jpay/jp4_movie_parts.jpg',
          imgPath + 'jpay/jp4_music_album.jpg',
          imgPath + 'jpay/jp4_music_home.jpg',
          imgPath + 'jpay/jp4_music.jpg',
          imgPath + 'jpay/jp4_radio.jpg',
          imgPath + 'jpay/jp4_commissary.jpg',
          imgPath + 'jpay/jp3_unit.jpg',
          imgPath + 'jpay/jp3_screens.jpg'
        ]
      }, 1000)
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  // BOURBON BACKGROUND
  body.bourbon .VueCarousel.druCarousel {
    background: darken($grey, 5);
    box-shadow: 0 0 4px black, 0 3px 5px rgba(0, 0, 0, 0);
    // min-height: 358px;
    
    @media (min-width: $breakTwo) {
      min-height: 358px;
    }

    @media (max-width: 462px) {
      min-height: initial;
      // min-height: 289px;
    }
  }

  // GROOVY BACKGROUND
  body.groovy .VueCarousel.druCarousel {
    background: darken($grey, 5);
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25);
    min-height: 336px;
    
    @media (min-width: $breakThree) {
      min-height: 336px;
    }

    @media (max-width: 462px) {
      min-height: initial;
      // min-height: 289px;
    }
  }

  // TECHY BACKGROUND
  body.techy .VueCarousel.druCarousel {
    background: darken($grey, 5);
    border: 4px solid #423BA0;
    min-height: 324px;

    @media (min-width: $breakThree) {
      // min-height: 324px;
    }

    @media (min-width: $breakTwo) {
      // min-height: 324px;
    }
    
    @media (min-width: 0px) 
    and (max-width: 405px) {
      min-height: initial;
    }
  }

  // CORP BACKGROUND
  body.corp .VueCarousel.druCarousel {
    background: darken($grey, 5);
    min-height: 329px;
    
    @media (min-width: $breakThree) {
      min-height: 329px;
    }

    @media (max-width: 462px) {
      min-height: initial;
    }
  }

  // PUNK BACKGROUND
  body.punk .VueCarousel.druCarousel {
    background: darken($grey, 5);
    // margin-bottom: 1em;
    min-height: 360px;
    
    @media (min-width: $breakThree) {
      min-height: 360px;
    }

    @media (max-width: 462px) {
      min-height: initial;
    }
  }

  .VueCarousel.druCarousel {
    background: darken($grey, 5);
    border: 1px solid transparentize($black, .85);
    // margin-bottom: 1em;
    display: block;
    margin-top: .25em;
    // margin-bottom: .5em;
    @include clearfix;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      display: block;
      margin-top: .25em;
      // margin-bottom: .5em;
      grid-row-gap: 0em;
      @include clearfix;
    }

    // IPAD LANDSCAPE
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) 
    and (orientation: landscape) 
    {
      display: block;
      margin-top: .25em;
      // margin-bottom: .5em;
      grid-row-gap: 0em;
      @include clearfix;
      // background: purple;
      // border: 2px solid red;
    }

    .VueCarousel-wrapper {
      // background: lightgrey;

      .VueCarousel-inner {
        margin-bottom: -2px;
      }

    }

    img {
      width: calc(100%) !important;
      height: auto;
      background-size: cover;
      margin: 0px;
      margin-bottom: -4px;
      // @include shadow;
    }

    .VueCarousel-navigation button.VueCarousel-navigation-button.VueCarousel-navigation-next,
    .VueCarousel-navigation button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
      //
      .navvy {
        font-size: 1.75em;
        cursor: pointer;
        color: white;
        -webkit-text-stroke: 1px lighten(grey, 40);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
        // background: red !important;
        &:hover {
          color: lighten(grey, 30);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, .85);
          // background: $blue-dark;
        }
        &.leftnav {
          transform: translateY(0%) translateX(130%);
        }
        &.rightnav {
          transform: translateY(0%) translateX(-130%);
        }

      }
    }
  }

</style>
