<template>
  <div class='projectBox'>
    <div class="projectBox__top">
      <transition name="bounce3" appear>
        <a class='carouselArrow flash'
          v-if="backButtonView"
          @click='viewCarousel()'
        >﹤ back</a>
      </transition>
      <p class='projectHead' @click='viewCarousel()'>Projects - {{ selectedViewTxt }}</p>
    </div>

    <component :is='selectedView'>
      <div class='miniGallery'>
        <a @click='selectCarousel(uiux01, uiux01Txt);' >
          <div class='box Uiux'>
            <IconUiux />
            <p>UI/UX Design</p>
          </div>
        </a>
        <a @click='selectCarousel(mobile02, mobile02Txt);' >
          <div class='box Mobile'>
            <IconMobile />
            <p>Mobile</p>
          </div>
        </a>
        <a @click='selectCarousel(kiosk03, kiosk03Txt);' >
          <div class='box Kiosk'>
            <IconKiosk />
            <p>Kiosk</p>
          </div>
        </a>
        <a @click='selectCarousel(graphics04, graphics04Txt);' >
          <div class='box Graphics'>
            <IconGraphics />
            <p>Graphics</p>
          </div>
        </a>
        <a @click='selectCarousel(print05, print05Txt);' >
          <div class='box Print'>
            <IconPrint />
            <p>Print</p>
          </div>
        </a>
        <a @click='selectCarousel(misc06, misc06Txt);' >
          <div class='box Misc'>
            <IconMisc />
            <p>Misc.</p>
          </div>
        </a>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">

  import { ref } from 'vue'

  import IconUiux from '@/components/Carousel/icons/iconUiux.vue'
  import IconMobile from '@/components/Carousel/icons/iconMobile.vue'
  import IconKiosk from '@/components/Carousel/icons/iconKiosk.vue'
  import IconGraphics from '@/components/Carousel/icons/iconGraphics.vue'
  import IconPrint from '@/components/Carousel/icons/iconPrint.vue'
  import IconMisc from '@/components/Carousel/icons/iconMisc.vue'

  import uiux01 from '@/components/Carousel/uiux01.vue'
  import mobile02 from '@/components/Carousel/mobile02.vue'
  import kiosk03 from '@/components/Carousel/kiosk03.vue'
  import graphics04 from '@/components/Carousel/graphics04.vue'
  import print05 from '@/components/Carousel/print05.vue'
  import misc06 from '@/components/Carousel/misc06.vue'

  let backButtonView = ref(false)
  let selectedView = ref('Carousel')
  let selectedViewTxt = ref('Select one...')

  let uiux01Txt = ref(`UI/UX`)
  let mobile02Txt = ref(`Mobile`)
  let kiosk03Txt = ref(`Kiosk`)
  let graphics04Txt = ref(`Graphics`)
  let print05Txt = ref(`Print`)
  let misc06Txt = ref(`Misc`)

  function selectCarousel(i, x) {
    selectedView.value = i
    selectedViewTxt.value = x
    backButtonView.value = true
  }

  function viewCarousel() {
    selectedView.value = `Carousel`
    selectedViewTxt.value = `Select one...`
    backButtonView.value = false
  }

</script>

<style lang='scss' scoped>
  @import '@/assets/css/carousel.scss';

  $mortar: .25rem;

  .carouselArrow {
    color: hsla(0, 0%, 100%, 1);
    background: hsla(0, 0%, 0%, 0.3);

    &:hover {
      color: hsla(0, 0%, 100%, 1);
      background: hsla(0, 0%, 0%, 0.5);
    }
  }
  .projectBox {
    background: lighten(lightgrey, 12);
    // background: transparentize($color: white, $amount: .25);
    border-radius: $mortar;
    padding: .5rem;
    position: relative;
    @include clearfix;
  }

  .projectBox__top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    height: 1.5rem;
    margin-bottom: $mortar;
    position: relative;
    z-index: 20;
  }

  body.box {
    height: 115px;

    @media (max-width: $breakThou) {
      min-height: initial;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      //
    }

  }

  body.bourbon .projectBox {
    @include box-shadow(0px, 2px, 6px, -2px, hsla(0, 0%, 0%, .9));

    @media (max-width: $breakThou) {
      // min-height: initial;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      // min-height: 386px;
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  body.groovy .projectBox {
    @include box-shadow(0px, 6px, 0px, 0px, hsla(0, 0%, 0%, 0.25));
    // padding: $mortar 0.3rem $mortar;
    // min-height: 357px;

    @media (max-width: $breakThou) {
      min-height: initial;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      // min-height: 386px;
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  body.techy .projectBox {
    @include box-shadow(0px, 2px, 6px, -2px, hsla(0, 0%, 0%, 1));

    @media (max-width: $breakThou) {
      min-height: initial;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  body.corp .projectBox {
    background: #d7e7f3;
    @include box-shadow(0px, 1px, 1px, 0px, hsla(0, 0%, 0%, 0.5), false);

    @media (max-width: $breakThou) {
      min-height: initial;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      // min-height: 386px;
    }

    @media (max-width: $breakThree) {
      //
    }

  }

  body.punk .projectBox {
    @include box-shadow(0px, 1px, 1px, 0px, hsla(0, 0%, 0%, 0.5), false);

    @media (max-width: $breakThou) {
      min-height: initial;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      // min-height: 386px;
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  // ########################

  p.projectHead {
    color: lighten($black, 20) !important;
    cursor: pointer;
  }

  body.bourbon .projectHead,
  body.bourbon .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
    // color: $black !important;
  }

  body.bourbon .box {
    height: 181.5px !important;

    @media (max-width: $breakThou) {
      min-height: initial;
    }
  }

  //////////
  body.groovy .projectHead,
  body.groovy .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
    // color: red !important;
  }

  body.groovy .box {
    height: 170px !important;
  }

  //////////
  body.techy .projectHead,
  body.techy .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
    // color: red !important;
  }

  body.techy .box {
    height: 167px !important;
  }

  //////////
  body.corp .projectHead,
  body.corp .box p {
    font-family: 'Bodoni Moda', Times, serif !important;
    letter-spacing: 0em;
    // color: red !important;
  }

  body.corp .box {
    height: 166.25px !important;
  }

  body.corp .VueCarousel.druCarousel {
    box-shadow: none;
  }

  body.corp .miniGallery a .box {
    border: none;
    &:hover {
      border: none;
    }
  }

  // .modern .projectBox >>>>>>>>
  // .modern .projectBox >>>>>>>>

  body.modern .box {
    width: 130px !important;
    height: 140px !important;
  }

  body.modern .projectBox {
    // @include box-shadow(0px, 2px, 6px, -2px, hsla(0, 0%, 0%, .9));
    background: none;
    // stroke: orange;

    @media (max-width: $breakThou) {
      // min-height: initial;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      // min-height: 386px;
    }

    @media (max-width: $breakThree) {
      //
    }

    .projectBox__top {
      margin-bottom: .5rem !important;
    }
  }
  // .modern >>>>>>>>>>>>>>>>>>
  // .modern >>>>>>>>>>>>>>>>>>
  body.modern .projectHead,
  body.modern .box p {
    font-family: 'Spartan', Helvetica, Arial, sans-serif !important;
    font-size: 1rem;
    letter-spacing: 0em !important;
    color: white !important;
    text-transform: lowercase !important;

    a {
      color: white !important;

      &:hover {
        color: white;
      }
    }


  }

  body.punk .miniGallery {
    margin-top: 0;
  }

  body.modern .miniGallery {
    background: none;
    gap: .75rem;
  }

  body.corp .VueCarousel.druCarousel {
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.29);
  }

  //////////
  body.punk .projectHead,
  body.punk .box p {
    font-family: Poppins, 'Helvetica Neue', Arial, sans-serif !important;

  }

  body.punk .box {
    height: 181.5px !important;
  }

  ///////
  .projectHead {
    font-size: 0.9em;
    text-align: center;
    text-transform: uppercase;
    // margin-right: 3.5em;
    margin: auto;
    // color: red !important;

    a {
      cursor: pointer;
    }
  }

  .miniGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    transition-duration: 1s;
    width: 100%;
    // margin-top: .3rem;

    a {
      flex-grow: 1;
      width: 125px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: $ivory;
        text-decoration: none;

        p {
          color: $black !important;

          &:hover {
            color: $black !important;
          }
        }
      }

      .box {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        align-content: center;
        justify-content: flex-end;
        //
        transition-duration: 1s;
        text-align: center;
        box-shadow: 0px 2px 2px -3px black;
        margin: auto;
        //
        padding-bottom: .5rem;
        background: hsl(0, 0%, 97%);
        border: 1px solid transparentize(grey, 0.85) !important;

        @media (max-width: $breakThou) {
          //
        }

        p {
          position: relative;
          top: 0px;
          transition: ease-out;
        }

        &:hover {
          transition: ease-out;
          border: 1px solid transparentize(grey, 0.5);
          box-shadow: 0px 2px 4px -1px hsla(0, 0%, 50%, 0.25);

          p {
            position: relative;
            top: -4px;
            transition: ease-out;
          }

          svg {
            position: relative !important;
            top: -4px !important;
            transition: ease-out;
          }
        }

        &.Uiux {
          // background: url(/img/carousel/car-icon-uiux.svg) no-repeat center center;

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Mobile {
          // background: url(/img/carousel/car-icon-mobile.svg) no-repeat center center;

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Kiosk {
          // background: url(/img/carousel/car-icon-kiosk.svg) no-repeat center center;
        }

        &.Graphics {
          // background: url(/img/carousel/car-icon-graphics.svg) no-repeat center center;
        }

        &.Print {
          // background: url(/img/carousel/car-icon-print.svg) no-repeat center center;
        }

        &.Misc {
          // background: url(/img/carousel/car-icon-misc.svg) no-repeat center center;
        }

        p {
          width: 100%;
          font-size: 0.85em;
          text-transform: uppercase;
          color: $grey;
          text-align: center;
          letter-spacing: 0.05em;
          margin-bottom: 0.5em;

          &:hover {
            color: $ivory;
          }
        }
      }


    }
  }

  @keyframes carouselFader {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(0);
      opacity: 0;
    }
    95% {
      transform: scale(1.015);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  $carouselFade: 1;

  .miniGallery a {
    //
    &:nth-of-type(1) {
      animation: carouselFader ($carouselFade * 1 + s);
    }
    &:nth-of-type(2) {
      animation: carouselFader ($carouselFade * 1.2 + s);
    }
    &:nth-of-type(3) {
      animation: carouselFader ($carouselFade * 1.3 + s);
    }
    &:nth-of-type(4) {
      animation: carouselFader ($carouselFade * 1.4 + s);
    }
    &:nth-of-type(5) {
      animation: carouselFader ($carouselFade * 1.5 + s);
    }
    &:nth-of-type(6) {
      animation: carouselFader ($carouselFade * 1.6 + s);
    }
  }

  // .modern Carousel box >>>>>>>>>>>>>
  // .modern Carousel box >>>>>>>>>>>>>
  // .modern Carousel box >>>>>>>>>>>>>
  $ruby: hsla(340, 76%, 48%, 1);
  $modernCol: $white;
  // >>>>>>
  .modern .miniGallery a .box {
    background: none !important;
    // border: 1px solid #1b171c !important;
    border: 1px solid transparent !important;
    border-radius: .75rem;

    p {
      color: $white !important;
      font-size: .85rem;
      transition: ease-out;

      &:hover {
        color: $accent-red !important;
        transition: ease-out;
      }
    }

    // &:hover {
    //   position: relative !important;
    //   top: 10px !important;
    //   transition: ease-out;
    // }

    .iconSVG {
      position: relative !important;
      top: 10px !important;
      transition: ease-out;

      &:hover {
        position: relative !important;
        top: 10px !important;
        transition: ease-out;
      }

      svg path,
      svg polygon,
      svg rect,
      svg polyline {
        stroke: $modernCol;
        // position: relative !important;
        // top: -10px !important;
        // transition: ease-out;
      }
    }


    &:hover {
      transition: ease-out;
      // border: 1px solid transparentize(grey, 0.5);
      // box-shadow: 0px 0px 4px 0px hsl(0, 0%, 100%);
      // color: yellow;
      // border: 1px solid transparentize($ruby, .2) !important;
      border-radius: .75rem;
      // background: transparentize($ruby, .9) !important;
      border: 1px solid transparentize($white, .5) !important;
      // box-shadow: 0px 0px .5rem 0px $ruby;
      box-shadow: 0px 0px 1rem 0px $ruby;

      p {
        position: relative;
        top: 0px !important;
        transition: ease-out;
        // color: $ruby !important;

        &:hover {
          color: $white !important;
          position: relative;
          top: 0px !important;
          transition: ease-out;
        }
      }

      // .brickBack {
      //   fill: $modernCol;
      //   transition: fill 10s ease-out;
      // }
      // .brickCircles {
      //   fill: $modernCol;
      //   transition: fill 10s ease-out;
      // }

      svg {
        position: relative !important;
        top: 10 !important;
        transition: ease-out;

        &:hover {
          // background: $accent-red;
          stroke: $accent-red;
          // stroke-width: 2px;
          // fill-opacity: 0.5;
          stroke-opacity: 0.8;
          position: relative !important;
          top: 10 !important;
          transition: ease-out;
        }
      }
    }

  }
</style>
