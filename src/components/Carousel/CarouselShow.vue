<template>
  <div class="projectBox">
    <a class="carouselArrow" @click.stop="selectedView = 'Carousel'">◀︎ BACK</a>
    <p class="projectHead">Projects - {{ selectedView }} </p>

    <component :is="selectedView">
    
      <div class="miniGallery">

        <a @click.stop="selectedView = 'Uiux'">
          <div class="box">
            <p>UI/UX Design</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Mobile'">
          <div class="box">
            <p>Mobile</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Kiosk'">
          <div class="box">
            <p>Kiosk</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Graphics'">
          <div class="box">
            <p>Graphics</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Print'">
          <div class="box">
            <p>Print</p>
          </div>
        </a>

        <a @click.stop="selectedView = 'Misc'">
          <div class="box">
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
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  .projectBox {
    padding: 0.2em .3em;
    background: lighten(lightgrey, 10);
    box-shadow: 0px 2px 2px -3px black;
    border-radius: .25em;
    @include clearfix;
  }
  
  body.bourbon .projectBox,
  body.corp .projectBox {
    @include shadow;
  }

  body.groovy .projectBox {
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25);
  }

  body.punk .projectBox {
    @include shadow;
    // box-shadow: none;
  }

  // ########################
  // ########################
  // ########################

  body.bourbon .projectHead,
  body.bourbon .box p
  {
    font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
  }

  body.bourbon .box {
    height: 173px;
  }
  
  //////////

  body.groovy .projectHead,
  body.groovy .box p
  {
    font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
  }

  body.groovy .box {
    height: 163px !important;
  }
  
  //////////
  
  body.techy .projectHead,
  body.techy .box p
  {
    font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
  }

  body.techy .box {
    height: 163px !important;
  }
  
  //////////
  
  body.corp .projectHead,
  body.corp .box p
  {
    font-family: cormorantGaramond-Semi-Bold, "Times New Roman", Times, serif !important;
    letter-spacing: 0.05em;
  }

  body.corp .box {
    height: 160px !important;
  }
  
  //////////
  
  body.punk .projectHead,
  body.punk .box p
  {
    font-family: Poppins, "Helvetica Neue", Arial, sans-serif !important;
  }
  
  body.punk .box {
    height: 173px !important;
  }
  
  //////////




  .projectHead {
    font-size: .9em;
    text-align: center;
    text-transform: uppercase;
    margin-right: 3.5em;

    a {
      cursor: pointer;
    }
  }

  .carouselArrow {
    font-size: 0.8em;
    display: block;
    float: left;
    clear: left;
    border: 1px solid lightgrey;
    border-radius: .25em;
    background: transparentize(white, .5);
    cursor: pointer;
    padding: 0.1em .5em 0.1em .25em;
    margin: 0.1em 0em 0;

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
        box-shadow: 1px 1px 0 -1px rgba(0,0,0,0.50);
        margin: .25em .25em;
        height: 173px;
        box-shadow: 0px 2px 2px -3px black;
        background: lighten(lightgrey, 15);

        @media (max-width: $breakThou) {
          height: 10vh;
        }

        &:hover {
          background: lighten(grey, 25);
          transition-duration: .5s;
          box-shadow: 0px 2px 2px -1px grey;
        }

        p {
          width: 100%;
          font-size: .85em;
          text-transform: uppercase;
          color: $grey;
          text-align: center;
          letter-spacing: 0.05em;

          &:hover {
            color: $ivory;
          }
        }
      }
    }

  }
</style>

