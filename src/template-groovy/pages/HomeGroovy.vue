<template>

  <div>
    
    <header>
      <NavvyHead/>
    </header>

    <main class="mainGrid">

      <div class="copyArea">
        <HeadAndCopy />
      </div>

      <div class="slides">
        <CarouselShow />
      </div>

      <About/>

      <Skills/>

    </main>

    <footer>
      <Footer />
    </footer>

  </div>

</template>

<script>
  import NavvyHead from '../components/NavvyHead'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../components/Skills'
  import About from '@/components/About'
  import Quotes from '../components/Quotes/QuoteBasic'
  import Footer from '../components/Footer'
  import CarouselShow from '@/components/Carousel/CarouselShow'

  export default {
    layout: 'default',
    components: {
      NavvyHead,
      HeadAndCopy,
      About,
      Skills,
      Quotes,
      Footer,
      CarouselShow
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
        // { cssText: '.wrapper { background: #fffae4; }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $break860: 860px;
  //
  // $breakThou: 1024px;
  // $breakOne: 840px;
  // $breakTwo: 630px;
  // $breakThree: 530px;

  .mainGrid {
    // width: 100%;
    display: grid;
    grid-template-columns: 7fr 6fr;
    // grid-gap: 1em;
    grid-row-gap: 1em;
    // grid-template-rows: auto auto auto auto;
    // grid-auto-flow: column;
    // margin: 0em 0em 0.5em;
    // width: 96.5%;
    // position: relative;
    /* top: 0em; */
    // left: 1em;
    // margin-top: 1em;
    margin: 0em 1em 0.5em;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      grid-gap: 0em;
      grid-row-gap: 1em;
      // margin-top: 2.5em;
      margin: 0em 1em 1em;
      // background: red;
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

    @media (max-width: $breakFour) {
      //
    }

  }

  header {
    // grid-column: 1 / 4;
    // grid-row: 1;
    color: $ivory;
    background: $groovy-red;
    // height: 175px;
    @include clearfix;
  }

  footer {
    // grid-column: 1 / 4;
    // grid-row: -1;
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
      // grid-row: 5;
    }

    @media (max-width: $break860) {
      // grid-column: span 1;
      // grid-row: 6;
    }

  }

  .about {
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.25);
    background: $groovy-yellow;
    border-radius: .75em;
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }
  
  .slides {
    grid-column: 2 / 3;
    grid-row: 1;
    z-index: 10;
    margin-top: -9.3em;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }
  }

  .skillsGrid {
    grid-column: 1 / -1;
    grid-row: 3;
    // align-items: center;
    // margin: 0 auto 1em;

    @media (max-width: $breakThou) {
      grid-row: 2;
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
    }
  }

  .about {
    grid-column: 2 / 3;
    grid-row: 2;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 4;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 4;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 4;
    }
  }

  .quoteBlock {
    grid-column: 2 / 3;
    grid-row: 3;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 5;
    }
  }

</style>
