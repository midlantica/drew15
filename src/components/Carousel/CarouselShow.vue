<template>
  <div class="projectBox">
    <a class="carouselArrow" @click.stop="selectedView = 'Carousel'">◀︎ BACK</a>
    <p class="projectHead">Projects - {{ selectedView }}</p>

    <component :is="selectedView">
      <div class="miniGallery">
        <a @click.stop="selectedView = 'Uiux'">
          <div class="box Uiux">
            <p>UI/UX Design</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Mobile'">
          <div class="box Mobile">
            <p>Mobile</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Kiosk'">
          <div class="box Kiosk">
            <p>Kiosk</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Graphics'">
          <div class="box Graphics">
            <p>Graphics</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Print'">
          <div class="box Print">
            <p>Print</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Misc'">
          <div class="box Misc">
            <p>Misc.</p>
          </div>
        </a>
      </div>
    </component>
  </div>
</template>

<script>
  // import Carousel from '@/components/Carousel/Carousel'
  import Uiux from '@/components/Carousel/01_uiux'
  const Mobile = () => import('@/components/Carousel/02_mobile')
  const Kiosk = () => import('@/components/Carousel/03_kiosk')
  const Graphics = () => import('@/components/Carousel/04_graphics')
  const Print = () => import('@/components/Carousel/05_print')
  const Misc = () => import('@/components/Carousel/06_misc')

  export default {
    layout: 'default',
    name: 'CarouselShow',
    components: {
      Uiux,
      Mobile,
      Kiosk,
      Graphics,
      Print,
      Misc
    },
    data () {
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

<style lang="scss" scoped>
  // @import '@/template-bourbon/assets/css/bourbon-main.scss';
  @import '@/assets/css/_template-carousel.scss';

  .projectBox {
    padding: 0.2em 0.3em;
    background: lighten(lightgrey, 10);
    box-shadow: 0px 2px 2px -3px black;
    border-radius: 0.25em;
    @include clearfix;
  }

  body.bourbon .projectBox{
    @include shadow;
  }

  body.corp .projectBox {
    @include box-shadow(0px, 0px, 3px, -1px, hsla(0, 0%, 0%, 0.5));
    background: #d7e7f3;
  }


  body.groovy .projectBox {
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25);
  }

  body.punk .projectBox {
    @include shadow;
    margin-top: 0.5em;
    // box-shadow: none;
  }

  // ########################

  body.bourbon .projectHead,
  body.bourbon .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.bourbon .box {
    height: 169.5px;
  }

  //////////

  body.groovy .projectHead,
  body.groovy .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.groovy .box {
    height: 158.5px !important;
  }

  //////////

  body.techy .projectHead,
  body.techy .box p {
    font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.techy .box {
    height: 159px !important;
  }

  //////////

  body.corp .projectHead,
  body.corp .box p {
    font-family: cormorantGaramond-Semi-Bold, 'Times New Roman', Times, serif !important;
    letter-spacing: 0em;
  }

  body.corp .box {
    height: 154.5px !important;
  }

  body.corp .VueCarousel.druCarousel {
    box-shadow: none;
  }

  //////////

  body.punk .projectHead,
  body.punk .box p {
    font-family: Poppins, 'Helvetica Neue', Arial, sans-serif !important;
  }

  body.punk .box {
    height: 171px !important;
  }

  //////////

  .projectHead {
    font-size: 0.9em;
    text-align: center;
    text-transform: uppercase;
    margin-right: 3.5em;
    margin: 0 4rem;

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
    border-radius: 0.25em;
    background: transparentize(white, 0.5);
    cursor: pointer;
    padding: 0.2em 0.5em 0.1em 0.25em;
    margin: 0.1em 0em 0 .2rem;
    font-family: Helvetica, Arial, sans-serif;

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
    // transition-property: background-color;
    transition-duration: 1s;
    width: 100%;

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
        justify-content: center;
        flex-direction: column;
        text-align: center;
        box-shadow: 1px 1px 0 -1px rgba(0, 0, 0, 0.5);
        margin: 0.25em 0.25em;
        height: 169.5px;
        box-shadow: 0px 2px 2px -3px black;
        background: lighten(lightgrey, 15);
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        @media (max-width: $breakThou) {
          height: 10vh !important;
        }

        &:hover {
          background: lighten(grey, 25);
          transition-duration: 0.5s;
          box-shadow: 0px 2px 2px -1px grey;
        }

        &.Uiux {
          background: url(/img/carousel/car-icon-uiux.svg) no-repeat center center;
          background-color: lighten(lightgrey, 15);
          background-size: 75% 75%;
          background-position: center 8px;
          border: 1px solid transparentize(grey, 0.5);

          &:hover {
            background: url(/img/carousel/car-icon-uiux.svg) no-repeat center
              center;
            background-color: lighten(lightgrey, 10);
            // transition-property: background-color;
            transition-duration: 0.5s;
            // background-color: lighten(lightgrey, 25);
            background-size: 75% 75%;
            background-position: center 0px;
            border: 1px solid transparentize(grey, 0.5);
            box-shadow: 0px 2px 2px -1px grey;
          }

          @media (max-width: $breakThou) {
            background-position: center 2px;
          }
        }

        &.Mobile {
          background: url(/img/carousel/car-icon-mobile.svg) no-repeat center
            center;
          background-color: lighten(lightgrey, 15);
          background-size: 75% 75%;
          background-position: center 8px;
          border: 1px solid transparentize(grey, 0.5);

          &:hover {
            background: url(/img/carousel/car-icon-mobile.svg) no-repeat center
              center;
            background-color: lighten(lightgrey, 10);
            // transition-property: background-color;
            transition-duration: 0.5s;
            // background-color: lighten(lightgrey, 25);
            background-size: 75% 75%;
            background-position: center 0px;
            border: 1px solid transparentize(grey, 0.5);
            box-shadow: 0px 2px 2px -1px grey;
          }

          @media (max-width: $breakThou) {
            background-position: center 2px;
          }
        }

        &.Kiosk {
          background: url(/img/carousel/car-icon-kiosk.svg) no-repeat center
            center;
          background-color: lighten(lightgrey, 15);
          background-size: 75% 75%;
          background-position: center 8px;
          border: 1px solid transparentize(grey, 0.5);

          &:hover {
            background: url(/img/carousel/car-icon-kiosk.svg) no-repeat center
              center;
            background-color: lighten(lightgrey, 10);
            // transition-property: background-color;
            transition-duration: 0.5s;
            // background-color: lighten(lightgrey, 25);
            background-size: 75% 75%;
            background-position: center 0px;
            border: 1px solid transparentize(grey, 0.5);
            box-shadow: 0px 2px 2px -1px grey;
          }

          @media (max-width: $breakThou) {
            background-position: center 2px;
          }
        }

        &.Graphics {
          background: url(/img/carousel/car-icon-graphics.svg) no-repeat center
            center;
          background-color: lighten(lightgrey, 15);
          background-size: 75% 75%;
          background-position: center 8px;
          border: 1px solid transparentize(grey, 0.5);

          &:hover {
            background: url(/img/carousel/car-icon-graphics.svg) no-repeat center
              center;
            background-color: lighten(lightgrey, 10);
            // transition-property: background-color;
            transition-duration: 0.5s;
            // background-color: lighten(lightgrey, 25);
            background-size: 75% 75%;
            background-position: center 0px;
            border: 1px solid transparentize(grey, 0.5);
            box-shadow: 0px 2px 2px -1px grey;
          }

          @media (max-width: $breakThou) {
            background-position: center 2px;
          }
        }

        &.Print {
          background: url(/img/carousel/car-icon-print.svg) no-repeat center
            center;
          background-color: lighten(lightgrey, 15);
          background-size: 75% 75%;
          background-position: center 8px;
          border: 1px solid transparentize(grey, 0.5);

          &:hover {
            background: url(/img/carousel/car-icon-print.svg) no-repeat center
              center;
            background-color: lighten(lightgrey, 10);
            // transition-property: background-color;
            transition-duration: 0.5s;
            // background-color: lighten(lightgrey, 25);
            background-size: 75% 75%;
            background-position: center 0px;
            border: 1px solid transparentize(grey, 0.5);
            box-shadow: 0px 2px 2px -1px grey;
          }

          @media (max-width: $breakThou) {
            background-position: center 2px;
          }
        }

        &.Misc {
          background: url(/img/carousel/car-icon-misc.svg) no-repeat center center;
          background-color: lighten(lightgrey, 15);
          background-size: 75% 75%;
          background-position: center 8px;
          border: 1px solid transparentize(grey, 0.5);

          &:hover {
            background: url(/img/carousel/car-icon-misc.svg) no-repeat center
              center;
            background-color: lighten(lightgrey, 10);
            // transition-property: background-color;
            transition-duration: 0.5s;
            // background-color: lighten(lightgrey, 25);
            background-size: 75% 75%;
            background-position: center 0px;
            border: 1px solid transparentize(grey, 0.5);
            box-shadow: 0px 2px 2px -1px grey;
          }

          @media (max-width: $breakThou) {
            background-position: center 2px;
          }
        }

        p {
          width: 100%;
          font-size: 0.85em;
          text-transform: uppercase;
          color: $grey;
          text-align: center;
          letter-spacing: 0.05em;
          margin-bottom: 1.5em;

          &:hover {
            color: $ivory;
          }

          @media (max-width: $breakThou) {
            margin-bottom: 0em;
          }
        }
      }
    }
  }
</style>

