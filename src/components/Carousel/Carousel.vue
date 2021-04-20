<template>
  <div class='projectBox'>
    <div class="projectBox__top">
      <a class='carouselArrow'
        v-if="backButtonView"
        @click='viewCarousel(); backButtonState();'
      >﹤ BACK</a>
      <p class='projectHead'>Projects - {{ selectedView }}</p>
    </div>

    <component :is='selectedView'>
      <div class='miniGallery'>
        <a @click='selectedView = `Uiux`; backButtonState();' >
          <div class='box Uiux'>
            <IconUiux />
            <p>UI/UX Design</p>
          </div>
        </a>
        <a @click='selectedView = `Mobile`; backButtonState();' >
          <div class='box Mobile'>
            <IconMobile />
            <p>Mobile</p>
          </div>
        </a>
        <a @click='selectedView = `Kiosk`; backButtonState();' >
          <div class='box Kiosk'>
            <IconKiosk />
            <p>Kiosk</p>
          </div>
        </a>
        <a @click='selectedView = `Graphics`; backButtonState();' >
          <div class='box Graphics'>
            <IconGraphics />
            <p>Graphics</p>
          </div>
        </a>
        <a @click='selectedView = `Print`; backButtonState();' >
          <div class='box Print'>
            <IconPrint />
            <p>Print</p>
          </div>
        </a>
        <a @click='selectedView = `Misc`; backButtonState();' >
          <div class='box Misc'>
            <IconMisc />
            <p>Misc.</p>
          </div>
        </a>
      </div>
    </component>
  </div>
</template>

<script>
  // import Carousel from '@/components/Carousel/Carousel'
  // import { defineAsyncComponent } from 'vue'
  import Uiux from '@/components/Carousel/01_uiux'
  import Mobile from '@/components/Carousel/02_mobile'
  import Kiosk from '@/components/Carousel/03_kiosk'
  import Graphics from '@/components/Carousel/04_graphics'
  import Print from '@/components/Carousel/05_print'
  import Misc from '@/components/Carousel/06_misc'

  import IconUiux from '@/components/Carousel/icons/icon-uiux'
  import IconMobile from '@/components/Carousel/icons/icon-mobile'
  import IconKiosk from '@/components/Carousel/icons/icon-kiosk'
  import IconGraphics from '@/components/Carousel/icons/icon-graphics'
  import IconPrint from '@/components/Carousel/icons/icon-print'
  import IconMisc from '@/components/Carousel/icons/icon-misc'

  export default {
    name: 'CarouselShow',
    components: {
      Uiux,
      Mobile,
      Kiosk,
      Graphics,
      Print,
      Misc,
      IconUiux,
      IconMobile,
      IconKiosk,
      IconGraphics,
      IconPrint,
      IconMisc
    },
    data() {
      return {
        selectedView: 'Carousel',
        uiux: 'UI/UX',
        mobile: 'Mobile',
        kiosk: 'Kiosk',
        graphics: 'Graphics',
        print: 'Print',
        misc: 'Misc.',
        backButtonView: false,
      }
    },
    methods: {
      carouselBack: function() {
        this.selectedView = `Carousel`
        this.backButtonView = !this.backButtonView
      },
      viewCarousel: function() {
        this.selectedView = `Carousel`
      },
      backButtonState: function() {
        this.backButtonView = !this.backButtonView
      }

    }
  }
</script>

<style lang='scss' scoped>
  @import '@/assets/css/carousel.scss';

  $mortar: .25rem;

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

  body.bourbon .projectHead,
  body.bourbon .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
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
  }

  body.groovy .box {
    height: 170px !important;
  }

  //////////
  body.techy .projectHead,
  body.techy .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.techy .box {
    height: 167px !important;
  }

  //////////
  body.corp .projectHead,
  body.corp .box p {
    font-family: cormorantGaramond-Semi-Bold, 'Times New Roman', Times, serif !important;
    letter-spacing: 0em;
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

  body.punk .miniGallery {
    margin-top: 0;
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
            top: -6px;
            transition: ease-out;
          }

          svg {
            position: relative !important;
            top: -6px !important;
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
</style>
