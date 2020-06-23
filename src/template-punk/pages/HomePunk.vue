<template>
  <div>
    <header>
      <Navvy />
    </header>

    <main class="mainGrid">
      <div class="copyArea">
        <HeadAndCopy />
      </div>

      <div class="slides">
        <CarouselShow />
      </div>

      <About />

      <Skills />
    </main>

    <!-- <footer> -->
    <!-- <Quotes/> -->
    <!-- </footer> -->
  </div>
</template>

<script>
  // import '@/assets/fonts/Roboto/Roboto.css'
  // import '@/assets/fonts/AmericanTypewriter/AmericanTypewriter.css'

  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '@/components/Skills'
  import About from '@/components/About'
  // import Quotes from '../components/Quotes/QuoteBasic'
  import CarouselShow from '@/components/Carousel/CarouselShow'

  export default {
    layout: 'default',
    components: {
      Navvy,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills
      // Quotes
    },
    name: 'HomePunk',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'punk'
      },
      style: [
        { cssText: 'body.punk .VueCarousel.druCarousel { box-shadow: 0px 0px 0px 4px #333; }', type: 'text/css' },
        { cssText: '.about p { font-family: Poppins, "Helvetica Neue", Arial, sans-serif !important; font-size: .9em !important; }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i');
  @import '@/assets/css/main.scss';
  @import '@/template-punk/assets/css/punk-main.scss';

  header,
  footer {
    color: $ivory;
    background: initial !important;
    box-shadow: none;
  }

  .mainGrid {
    display: grid; // <-- CONTENT GRID
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5em;
    background: transparent;
    padding: 0em 1em;
    box-shadow: none;
    //
    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      grid-gap: 0em;
      grid-row-gap: 0.5em;
      // grid-column: 1 / 3;
      // grid-row: 1;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }
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
    // z-index: 10;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 3;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 3;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 3;
    }
  }

  .about {
    grid-column: 2 / 3;
    grid-row: 2;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 5;
      margin-bottom: 1em;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      margin-top: 0.25em;
      margin-bottom: 0.5em;
      grid-row-gap: 0em;
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

  .skillsGrid {
    grid-column: 1 / 3;
    grid-row: 3;

    @media (max-width: $breakThou) {
      grid-row: 4;
    }

    @media (max-width: $breakOne) {
      grid-row: 4;
    }

    @media (max-width: $breakTwo) {
      grid-row: 4;
    }
  }
</style>
