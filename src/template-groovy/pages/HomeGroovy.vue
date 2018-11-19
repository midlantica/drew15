<template>

  <div class="mainGrid">
    <header>
      <NavvyHead/>
    </header>

    <div class="cols">
      <HeadAndCopy/>
    </div>

    <div class="cols">
      <CarouselShow/>
      <About/>
    </div>

    <Skills/>

    <footer>
      <!-- <Navvy/> -->
    </footer>

  </div>

</template>

<script>
  import NavvyHead from '../components/NavvyHead'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../components/Skills'
  import About from '@/components/About'
  import Quotes from '../components/Quotes/QuoteBasic'
  import CarouselShow from '@/components/Carousel/CarouselShow'

  export default {
    layout: 'default',
    components: {
      NavvyHead,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes
    },
    name: 'HomeGroovy',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'groovy'
      },
      style: [
        { cssText: 'body.groovy .VueCarousel.druCarousel { box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25); min-height: 21vh; }', type: 'text/css' },
        { cssText: '.about { font-size: 1.1em !important; box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25); }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $break860: 860px;
  //
  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  .mainGrid {
    display: grid;
    grid-template-columns: 7fr 6fr;
    grid-template-rows: auto auto auto auto;
    //                  1-2  2-3  3-4  4-5
    grid-auto-flow: column;
    background: $groovy-yellow-pale;

  }

  header {
    grid-column: 1 / 4;
    grid-row: 1;
    color: $ivory;
    background: $groovy-red;
    height: 175px;
  }

  footer {
    grid-column: 1 / 4;
    grid-row: -1;
    // grid-row: 4;
    height: 160px;
    color: $ivory;
    background: linear-gradient(
      // 0 - 25%
      $groovy-aqua 0%,
      $groovy-aqua 25%,
      // 25% - 50%
      $groovy-yellow 25%,
      $groovy-yellow 50%,
      // 50% - 75%
      $groovy-orange 50%,
      $groovy-orange 75%,
      // 75% - 100%
      $groovy-red 75%,
      $groovy-red 100%
    );

    @media (max-width: $breakThou) {
      // grid-column: span 1;
      grid-row: 5;
    }

    @media (max-width: $break860) {
      // grid-column: span 1;
      grid-row: 6;
    }

  }

  .cols:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-row: 2;


    @media (max-width: $breakThou) {
      grid-column: 1 / 2;
      grid-row: 2;
    }

    @media (max-width: $break860) {
      grid-column: 1 / 4;
      grid-row: 2;
    }

  }

  .cols:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    z-index: 10;
    padding: 1em 1em 0;

    @media (max-width: $breakThou) {
      grid-column: 2 / 3;
      grid-row: 2;
    }

    @media (max-width: $break860) {
      grid-column: 1 / 4;
      grid-row: 3;
    }


  }

  .skillsGrid {
    grid-column: 1 / 4;
    grid-row: 3;

    @media (max-width: $breakThou) {
      grid-row: 4;
    }

    @media (max-width: $break860) {
      grid-row: 5;
    }
  }

  body.groovy .VueCarousel.druCarousel { 
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25); 
    min-height: 21vh;
  }

  body.groovy .about {
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25); 
    
    p {
      font-size: 0.85em !important;
      font-family: "AmericanTypewriterStd-Med", Helvetica, Times, serif !important;
      // color: red !important;

      @media (max-width: $breakThou) {
        font-size: 1.34vw !important;
      }

      @media (max-width: $breakOne) {
        font-size: 2.05vw !important;
      }

      @media (max-width: $breakTwo) {
        font-size: 2.35vw !important;
      }

      @media (max-width: $breakThree) {
        font-size: 2.85vw !important;
      }
    }
  }

</style>
