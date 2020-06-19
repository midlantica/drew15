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

    <footer>
      <Quotes />
    </footer>
  </div>
</template>

<script>
  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../components/Skills'
  import About from '@/components/About'
  import Quotes from '../components/Quote'
  import CarouselShow from '@/components/Carousel/CarouselShow'

  export default {
    layout: 'default',
    components: {
      Navvy,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes
    },
    name: 'HomeCorp',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'corp'
      },
      style: [
        { cssText: 'body.corp .VueCarousel.druCarousel { box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.29);  }', type: 'text/css' },
        { cssText: '.about p { font-family: "cormorantGaramond-Regular", "Times New Roman", Times, serif; !important; font-size: 1em; }', type: 'text/css' },
        { cssText: '.skillsgrid { margin: 0 !important; }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Questrial');
  @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  .about {
    background: white;
    font-size: 0.95em;
    // margin-bottom: 0.5em;

    @media (max-width: $breakThou) {
      margin-bottom: 0.5em;
    }
  }

  header,
  footer {
    color: $ivory;
    box-shadow: none !important;
    background: url(/img/bg/white_paper_patt-01.jpg) repeat !important;
  }

  .mainGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    // grid-row-gap: 1em;
    margin: 1em 1em;
    // background: none !important;
    // box-shadow: none !important;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      // grid-gap: 0em;
      grid-row-gap: 1em;
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
      margin-bottom: -1em;
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
    grid-column: 1 / 2;
    grid-row: 2;
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


