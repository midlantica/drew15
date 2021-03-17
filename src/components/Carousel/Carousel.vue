<template>
  <div class='projectBox'>
    <a class='carouselArrow' @click.stop='selectedView = `Carousel`'>◀︎ BACK</a>
    <p class='projectHead'>Projects - {{ selectedView }}</p>
    <component :is='selectedView'>
      <div class='miniGallery'>
        <a @click.stop='selectedView = `Uiux`'>
          <div class='box Uiux'>
            <p>UI/UX Design</p>
          </div>
        </a>
        <a @click.stop='selectedView = `Mobile`'>
          <div class='box Mobile'>
            <p>Mobile</p>
          </div>
        </a>
        <a @click.stop='selectedView = `Kiosk`'>
          <div class='box Kiosk'>
            <p>Kiosk</p>
          </div>
        </a>
        <a @click.stop='selectedView = `Graphics`'>
          <div class='box Graphics'>
            <p>Graphics</p>
          </div>
        </a>
        <a @click.stop='selectedView = `Print`'>
          <div class='box Print'>
            <p>Print</p>
          </div>
        </a>
        <a @click.stop='selectedView = `Misc`'>
          <div class='box Misc'>
            <p>Misc.</p>
          </div>
        </a>
      </div>
    </component>
  </div>
</template>

<script>
  // import Carousel from '@/components/Carousel/Carousel'
  import { defineAsyncComponent } from 'vue'

  import Uiux from '@/components/Carousel/01_uiux'
  const Mobile = defineAsyncComponent(() => import('@/components/Carousel/02_mobile'))
  const Kiosk = defineAsyncComponent(() => import('@/components/Carousel/03_kiosk'))
  const Graphics = defineAsyncComponent(() => import('@/components/Carousel/04_graphics'))
  const Print = defineAsyncComponent(() => import('@/components/Carousel/05_print'))
  const Misc = defineAsyncComponent(() => import('@/components/Carousel/06_misc'))

  // import 'vue-flux/dist-ssr/vue-flux.css'

  export default {
    name: 'CarouselShow',
    components: {
      Uiux,
      Mobile,
      Kiosk,
      Graphics,
      Print,
      Misc
    },
    data() {
      return {
        selectedView: 'Carousel',
        uiux: 'UI/UX',
        mobile: 'Mobile',
        kiosk: 'Kiosk',
        graphics: 'Graphics',
        print: 'Print',
        misc: 'Misc.'
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/assets/css/carousel.scss';

  $mortar: .25rem;

  .projectBox {
    background: lighten(lightgrey, 10);
    border-radius: $mortar;
    padding: $mortar 0.15rem $mortar;
    position: relative;
    @include clearfix;
  }

  body.box {
    height: 115px;

    @media (max-width: $breakThou) {
      min-height: initial;
      // padding: $mortar 0.3rem 0.75rem;
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
    @include box-shadow(0px, 1px, 1px, 0px, hsla(0, 0%, 0%, 0.5));
    // min-height: 386px;
    // min-height: 380px;
    padding: 0.35rem 0.3rem 0.15rem;

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
    padding: $mortar 0.3rem 0.35rem;
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
    @include box-shadow(0px, 2px, 2px, -3px, hsla(0, 0%, 0%, 1));
    padding: $mortar 0.3rem 0.5rem;
    // min-height: 353px;

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

  body.corp .projectBox {
    background: #d7e7f3;
    @include box-shadow(0px, 1px, 1px, 0px, hsla(0, 0%, 0%, 0.5), false);
    padding: $mortar 0.3rem 0.5rem;
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

  body.punk .projectBox {
    @include box-shadow(0px, 1px, 1px, 0px, hsla(0, 0%, 0%, 0.5), false);
    padding: $mortar 0.3rem 0.35rem;
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

  // ########################

  body.bourbon .projectHead,
  body.bourbon .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.bourbon .box {
    height: 174.5px !important;
    // height: 20vh !important;

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
    height: 158.25px !important;
  }

  //////////
  body.techy .projectHead,
  body.techy .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.techy .box {
    height: 156px !important;
  }

  //////////
  body.corp .projectHead,
  body.corp .box p {
    font-family: cormorantGaramond-Semi-Bold, 'Times New Roman', Times, serif !important;
    letter-spacing: 0em;
  }

  body.corp .box {
    height: 160px !important;
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

  body.corp .VueCarousel.druCarousel {
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.29);
  }

  //////////
  body.punk .projectHead,
  body.punk .box p {
    font-family: Poppins, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.punk .box {
    height: 156.5px !important;
  }

  ///////
  .projectHead {
    font-size: 0.9em;
    text-align: center;
    text-transform: uppercase;
    // margin-right: 3.5em;
    margin: $mortar 4rem 0.0rem;

    a {
      cursor: pointer;
    }
  }

  .carouselArrow {
    font-size: 0.75em;
    display: block;
    float: left;
    clear: left;
    border: 1px solid lightgrey;
    border-radius: $mortar;
    background: transparentize(white, 0.5);
    cursor: pointer;
    padding: 0.2em 0.5em 0.1em $mortar;
    margin: 0.1rem 0 0 0.2em;
    // margin: 0.1em 0em 0 .2rem;
    font-family: Helvetica, Arial, sans-serif;
    position: absolute;
    z-index: 100;

    &:hover {
      color: white;
      background: grey;
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
    margin-top: .3rem;

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
        flex-direction: column;
        text-align: center;
        margin: 0.15em 0.15em;
        box-shadow: 0px 2px 2px -3px black;
        display: flex;
        justify-content: flex-end;
        align-items: stretch;
        //
        background-color: lighten(lightgrey, 13) !important;
        background-size: 75% 75%;
        background-position: center 18px !important;
        border: 1px solid transparentize(grey, 0.75) !important;

        @media (max-width: $breakThou) {
          //
        }

        &:hover {
          background-color: lighten(lightgrey, 16) !important;
          transition: ease-in-out;
          background-size: 75% 75%;
          background-position: center 12px !important;
          border: 1px solid transparentize(grey, 0.5);
          box-shadow: 0px 2px 4px -1px hsla(0, 0%, 50%, 0.25);
        }

        &.Uiux {
          background: url(/img/carousel/car-icon-uiux.svg) no-repeat center center;

          &:hover {
            //
          }

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Mobile {
          background: url(/img/carousel/car-icon-mobile.svg) no-repeat center center;

          &:hover {
            //
          }

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Kiosk {
          background: url(/img/carousel/car-icon-kiosk.svg) no-repeat center center;

          &:hover {
            //
          }

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Graphics {
          background: url(/img/carousel/car-icon-graphics.svg) no-repeat center center;

          &:hover {
            //
          }

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Print {
          background: url(/img/carousel/car-icon-print.svg) no-repeat center center;

          &:hover {
            //
          }

          @media (max-width: $breakThou) {
            //
          }
        }

        &.Misc {
          background: url(/img/carousel/car-icon-misc.svg) no-repeat center center;

          &:hover {
            //
          }

          @media (max-width: $breakThou) {
            //
          }
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

          @media (max-width: $breakThou) {
            margin-bottom: 1rem;
          }
        }
      }

    }

    .box:hover p {
      position: relative;
      top: -6px;
      transition: ease-in-out;
    }

  }
</style>
