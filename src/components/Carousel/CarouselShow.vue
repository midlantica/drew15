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
      const imgPath = 'img/portfolio/jpg/'
      setTimeout(() => {
        this.images = [
          imgPath + 'base.jpg',
          imgPath + 'TN-DOC_01.jpg',
          imgPath + 'TN-DOC_02.jpg',
          imgPath + 'CivicInc_Bridge_01.jpg',
          imgPath + 'CivicInc_Bridge_02.jpg',
          imgPath + 'CivicInc_Bridge_03.jpg',
          imgPath + 'CivicInc_Funding_01.jpg',
          imgPath + 'CivicInc_Funding_02.jpg',
          imgPath + 'CivicInc_Land_01.jpg',
          imgPath + 'CivicInc_Land_02.jpg',
          imgPath + 'jpay_web_home.jpg',
          imgPath + 'jpay_web_signed_in.jpg',
          imgPath + 'jpay_web_money.jpg',
          imgPath + 'jpay_web_email.jpg',
          imgPath + 'jpay_web_stamps.jpg',
          imgPath + 'inmate_kiosk.jpg',
          imgPath + 'inmate_kiosk_UI_home.jpg',
          imgPath + 'inmate_kiosk_UI_home_signed_in.jpg',
          imgPath + 'inmate_kiosk_UI_buy_jp3.jpg',
          imgPath + 'inmate_kiosk_UI_music.jpg',
          imgPath + 'inmate_kiosk_UI_music_songs_list.jpg',
          imgPath + 'inmate_kiosk_UI_email_inbox.jpg',
          imgPath + 'inmate_kiosk_UI_email_read.jpg',
          imgPath + 'inmate_kiosk_UI_buys.jpg',
          imgPath + 'inmate_kiosk_UI_manage.jpg',
          imgPath + 'icons_red.jpg',
          imgPath + 'jpay_app_home.jpg',
          imgPath + 'jpay_app_home_prefs.jpg',
          imgPath + 'jpay_app_money_prefs.jpg',
          imgPath + 'jpay_app_email.jpg',
          imgPath + 'jpay_app_logos.jpg',
          imgPath + 'jpay_app_UI_old.jpg',
          imgPath + 'jpayinc_website_old.jpg',
          imgPath + 'jpayinc_website.jpg',
          imgPath + 'jpayinc_website_responsive.jpg',
          imgPath + 'jpay_infographgic_cloud.jpg',
          imgPath + 'jpay_icons_doc.jpg',
          imgPath + 'icons_doc_parole.jpg',
          imgPath + 'jpay_icons_cards_kiosk.jpg',
          imgPath + 'jpay_infographic_01.jpg',
          imgPath + 'jpay_infographic_02.jpg',
          imgPath + 'jpay_inforgraphic_money.jpg',
          imgPath + 'jpay_icons_email.jpg',
          imgPath + 'mlotto_logo.jpg',
          imgPath + 'mlotto_screens.jpg',
          imgPath + 'mlotto_web.jpg',
          imgPath + 'mlotto_brochure.jpg',
          imgPath + 'mlotto_UI_home.jpg',
          imgPath + 'mlotto_UI_play.jpg',
          imgPath + 'mlotto_UI_favs.jpg',
          imgPath + 'mlotto_UI_picks.jpg',
          imgPath + 'mlotto_UI_wallet.jpg',
          imgPath + 'jp4_unit.jpg',
          imgPath + 'jp4_home_screen.jpg',
          imgPath + 'jp4_email.jpg',
          imgPath + 'jp4_movie.jpg',
          imgPath + 'jp4_movie_parts.jpg',
          imgPath + 'jp4_music_album.jpg',
          imgPath + 'jp4_music_home.jpg',
          imgPath + 'jp4_music.jpg',
          imgPath + 'jp4_radio.jpg',
          imgPath + 'jp4_commissary.jpg',
          imgPath + 'jp3_unit.jpg',
          imgPath + 'jp3_screens.jpg',
          imgPath + 'jpay_mural.jpg',
          imgPath + 'jpay_email.jpg',
          imgPath + 'newsletter_hero1.jpg',
          imgPath + 'newsletter_hero2.jpg',
          imgPath + 'prisonride_home.jpg',
          // imgPath + 'prisonride_profile.jpg',
          imgPath + 'valentina_website.jpg',
          imgPath + 'celebrity_cruise_lines.jpg'
        ]
      }, 2000)
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
    
    @media (min-width: $breakThou) {
      height: 358px;
      min-height: 358px;
    }
  }

  // GROOVY BACKGROUND
  body.groovy .VueCarousel.druCarousel {
    background: darken($grey, 5);
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25);
    
    @media (min-width: $breakThou) {
      height: 336px;
      min-height: 336px;
    }
  }

  // TECHY BACKGROUND
  body.techy .VueCarousel.druCarousel {
    background: darken($grey, 5);
    border: 4px solid #423BA0;
    
    @media (min-width: $breakThou) {
      height: 325px;
      min-height: 325px;
    }

    
  }

  // CORP BACKGROUND
  body.corp .VueCarousel.druCarousel {
    background: darken($grey, 5);
    
    @media (min-width: $breakThou) {
      height: 329px;
      min-height: 329px;
    }
  }

  // PUNK BACKGROUND
  body.punk .VueCarousel.druCarousel {
    background: darken($grey, 5);
    // margin-bottom: 1em;
    
    @media (min-width: $breakThou) {
      height: 360px;
      min-height: 360px;
    }
  }


  .VueCarousel.druCarousel {
    background: darken($grey, 5);
    border: 1px solid transparentize($black, .85);
    // margin-bottom: 1em;
    display: block;
    clear: both;
    margin-top: .25em;
    // margin-bottom: .5em;
    @include clearfix;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      display: block;
      clear: both;
      margin-top: .25em;
      // margin-bottom: .5em;
      grid-row-gap: 0em;
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
